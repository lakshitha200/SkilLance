package com.skillance.Util;


import com.skillance.Dto.OrderItemResponse;
import com.skillance.Dto.OrderRequest;
import com.skillance.Dto.OrderResponse;
import com.skillance.Model.Order;
import com.skillance.Model.OrderItem;

import java.math.BigDecimal;
import java.util.stream.Collectors;

public class OrderMapper {

    public static Order toEntity(OrderRequest dto) {
        Order order = Order.builder()
                .userId(dto.getUserId())
                .status("PENDING")
                .totalPrice(dto.getItems().stream()
                        .map(i -> i.getPrice().multiply(BigDecimal.valueOf(i.getQuantity())))
                        .reduce(BigDecimal.ZERO, BigDecimal::add))
                .build();

        order.setItems(dto.getItems().stream().map(i -> OrderItem.builder()
                .productId(i.getProductId())
                .quantity(i.getQuantity())
                .price(i.getPrice())
                .order(order)
                .build()).collect(Collectors.toList()));

        return order;
    }

    public static OrderResponse toDto(Order order) {
        return OrderResponse.builder()
                .id(order.getId())
                .userId(order.getUserId())
                .status(order.getStatus())
                .totalPrice(order.getTotalPrice())
                .createdAt(order.getCreatedAt())
                .items(order.getItems().stream().map(i -> OrderItemResponse.builder()
                        .id(i.getId())
                        .productId(i.getProductId())
                        .quantity(i.getQuantity())
                        .price(i.getPrice())
                        .build()).collect(Collectors.toList()))
                .build();
    }
}
