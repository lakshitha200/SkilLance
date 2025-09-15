package com.skillance.Events;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderCreatedEvent {
    private String eventType = "ORDER_CREATED";
    private Long orderId;
    private Long userId;
    private Long gigId;
    private Double amount;
    private String correlationId;
}
