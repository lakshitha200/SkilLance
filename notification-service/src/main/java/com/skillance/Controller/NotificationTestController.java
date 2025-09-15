package com.skillance.Controller;

import com.skillance.Config.KafkaTopics;
import com.skillance.Events.OrderCreatedEvent;
import com.skillance.Events.PaymentStatusEvent;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.UUID;

@RestController
@RequestMapping("/api/notifications/test")
@RequiredArgsConstructor
public class NotificationTestController {

    private final KafkaTemplate<Object, Object> kafkaTemplate;

    @PostMapping("/order")
    public String sendOrder(@RequestBody OrderCreatedEvent orderEvent) {
        orderEvent.setCorrelationId(UUID.randomUUID().toString());
        kafkaTemplate.send(KafkaTopics.ORDER_EVENTS, orderEvent.getOrderId().toString(), orderEvent);
        return "ORDER event published";
    }

    @PostMapping("/payment")
    public String sendPayment(@RequestParam Long userId,
                              @RequestParam Long orderId,
                              @RequestParam Long paymentId,
                              @RequestParam BigDecimal amount,
                              @RequestParam String status,
                              @RequestParam(defaultValue = "STRIPE") String provider) {
        var evt = new PaymentStatusEvent();
        evt.setEventType("PAYMENT_" + status.toUpperCase());
        evt.setUserId(userId);
        evt.setCorrelationId(UUID.randomUUID().toString());
        evt.setOrderId(orderId);
        evt.setPaymentId(paymentId);
        evt.setAmount(amount);
        evt.setStatus(status.toUpperCase());
        evt.setProvider(provider.toUpperCase());

        kafkaTemplate.send(KafkaTopics.PAYMENT_EVENTS, evt.getPaymentId().toString(), evt);
        kafkaTemplate.flush();
        return "PAYMENT event published";
    }
}

