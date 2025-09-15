package com.skillance.Service;



import com.skillance.Dto.OrderRequest;
import com.skillance.Dto.OrderResponse;

import java.util.List;

public interface OrderService {
    OrderResponse createOrder(OrderRequest request);
    OrderResponse getOrder(Long id);
    List<OrderResponse> getAllOrders();
    OrderResponse updateStatus(Long id, String status);
    void deleteOrder(Long id);
}
