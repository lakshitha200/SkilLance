package com.skillance.Service;

import com.skillance.Clients.GigClient;
import com.skillance.Clients.PaymentClient;
import com.skillance.Dto.OrderRequest;
import com.skillance.Dto.OrderResponse;
import com.skillance.Dto.PaymentRequest;
import com.skillance.Dto.PaymentResponse;
import com.skillance.Model.Order;
import com.skillance.Repository.OrderRepository;
import com.skillance.Util.OrderMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final GigClient gigClient;
    private final PaymentClient paymentClient;

    @Override
    public OrderResponse createOrder(OrderRequest request) {

        request.getItems().stream()
                .forEach((item)->{
                    if (!gigClient.existsById(item.getProductId())) {
                        throw new RuntimeException("Gig not found");
                    }
                });

        Order order = OrderMapper.toEntity(request);
        Order saved = orderRepository.save(order);

        PaymentResponse payment = paymentClient.createPayment(
                new PaymentRequest(order.getId(), order.getTotalPrice().doubleValue())
        );

        if(payment.getStatus().equals("SUCCESS")){
            updateStatus(order.getId(),payment.getStatus());
        }

        return OrderMapper.toDto(saved);
    }

    @Override
    public OrderResponse getOrder(Long id) {
        return orderRepository.findById(id)
                .map(OrderMapper::toDto)
                .orElseThrow(() -> new RuntimeException("Order not found"));
    }

    @Override
    public List<OrderResponse> getAllOrders() {
        return orderRepository.findAll().stream()
                .map(OrderMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public OrderResponse updateStatus(Long id, String status) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found"));
        order.setStatus(status);
        return OrderMapper.toDto(orderRepository.save(order));
    }

    @Override
    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }
}
