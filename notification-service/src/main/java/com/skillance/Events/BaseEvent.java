package com.skillance.Events;

import lombok.Data;

@Data
public class BaseEvent {
    private String eventType; // e.g., ORDER_CREATED, PAYMENT_SUCCEEDED
    private Long userId;
    private String correlationId; // trace/id
}

