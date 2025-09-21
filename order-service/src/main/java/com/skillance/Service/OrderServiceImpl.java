package com.skillance.Service;

import com.skillance.Clients.GigClient;
import com.skillance.Clients.PaymentClient;
import com.skillance.Dto.*;
import com.skillance.Model.Order;
import com.skillance.Repository.OrderRepository;
import com.skillance.Util.OrderMapper;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final GigService gigService;
    private final PaymentService paymentService;

    @Override
    public OrderResponse createOrder(OrderRequest request) {

        request.getItems().stream()
                .forEach((item)->{
                    GigResponse result = gigService.existsByGigId(item.getProductId());
                    if (result.getFallbackMessage()!=null) {
                        throw new ResponseStatusException(HttpStatus.SERVICE_UNAVAILABLE, result.getFallbackMessage());
                    }
                    if (!result.isExists()) {
                        throw new RuntimeException("Gig not found");
                    }
                });

        Order order = OrderMapper.toEntity(request);
        Order saved = orderRepository.save(order);

        PaymentResponse payment = paymentService.createPayment(saved);
        if(payment.getFallbackMessage()!=null) throw new ResponseStatusException(HttpStatus.SERVICE_UNAVAILABLE, payment.getFallbackMessage());

        if(payment.getStatus().equals("SUCCESS")) updateStatus(order.getId(),payment.getStatus());

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
