package com.skillance.Listener;

import com.skillance.Config.KafkaTopics;
import com.skillance.Events.OrderCreatedEvent;
import com.skillance.Events.PaymentStatusEvent;
import com.skillance.Service.NotificationService;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.DltHandler;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.annotation.RetryableTopic;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.retry.annotation.Backoff;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class NotificationListeners {

    private final NotificationService notificationService;

    @RetryableTopic(
            attempts = "3",                        // Number of retry attempts (n-1 = 3-1=2)
            backoff = @Backoff(
                    delay = 2000,                      // Initial delay between retries (ms)
                    maxDelay = 10000,                  // Max delay between retries (ms)
                    multiplier = 2.0                   // Exponential backoff factor
            ),
            autoCreateTopics = "true",             // Auto-create retry & DLT topics (default true)
            dltTopicSuffix = "-dlt",               // Custom suffix for dead letter topic
            retryTopicSuffix = "-retry",           // Custom suffix for retry topics
            exclude = { IllegalArgumentException.class }, // Exceptions to NOT retry
            //include = { RuntimeException.class },  // Exceptions to retry (if specified, overrides default)
            traversingCauses = "true"              // Whether to check nested exceptions
    )
    @KafkaListener(topics = KafkaTopics.ORDER_EVENTS, groupId = "notification-service")
    public void onOrderCreated(OrderCreatedEvent event) {
        log.info("Consumed ORDER event: {}", event);
        if(event.getUserId()==110){
            throw new RuntimeException("Unauthorized User Activity");
        }
        notificationService.notifyInApp(event.getUserId(), "Order created: #" + event.getOrderId());
    }

    @DltHandler //used to process messages that finally fail after retries. It works after the message reaches the DLT.
    public void handleFailed(OrderCreatedEvent event) {
        log.info("Failed message: {}", event);
    }

    @KafkaListener(topics = KafkaTopics.PAYMENT_EVENTS, groupId = "notification-service")
    public void onPaymentStatus(@Payload PaymentStatusEvent event) {
//        log.info("Consumed PAYMENT event: {}", event);
        System.out.println("Consumed PAYMENT event: "+ event);
        String subject = "Payment " + event.getStatus();
        String body = "Payment #" + event.getPaymentId() + " for order #" + event.getOrderId()
                + " is " + event.getStatus() + ". Amount: " + event.getAmount()
                + " via " + event.getProvider() + ".";
//        notificationService.notifyUserEmail(event.getUserId(), subject, body);
        notificationService.notifyInApp(event.getUserId(), "Payment " + event.getStatus() + " for order #" + event.getOrderId());
    }
}

