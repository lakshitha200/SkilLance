package com.skillance.Events;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.math.BigDecimal;

@EqualsAndHashCode(callSuper = true)
@Data
public class PaymentStatusEvent extends BaseEvent {
    private Long paymentId;
    private Long orderId;
    private BigDecimal amount;
    private String status; // SUCCEEDED, FAILED
    private String provider; // STRIPE, PAYPAL, etc.
}

