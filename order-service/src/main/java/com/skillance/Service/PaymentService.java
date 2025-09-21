package com.skillance.Service;

import com.skillance.Clients.GigClient;
import com.skillance.Clients.PaymentClient;
import com.skillance.Dto.GigResponse;
import com.skillance.Dto.PaymentRequest;
import com.skillance.Dto.PaymentResponse;
import com.skillance.Model.Order;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PaymentService {
    private final PaymentClient paymentClient;

    @Retry(name="PAYMENT-SERVICE")
    @CircuitBreaker(name = "PAYMENT-SERVICE", fallbackMethod = "fallbackPayment")
    public PaymentResponse createPayment(Order order){
        System.out.println("Works");
        if(true) throw new RuntimeException("Retry test found");

        return paymentClient.createPayment(
                new PaymentRequest(order.getId(), order.getTotalPrice().doubleValue())
        );

    }
    public PaymentResponse fallbackPayment(Order order, Throwable t) {
        return new PaymentResponse(null, null, "Order creation failed. Payment service unavailable, try later");
    }
}
