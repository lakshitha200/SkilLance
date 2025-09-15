package com.skillance.Clients;

import com.skillance.Dto.PaymentRequest;
import com.skillance.Dto.PaymentResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "payment-service", path = "/api/payments")
public interface PaymentClient {

    @PostMapping
    PaymentResponse createPayment(@RequestBody PaymentRequest paymentRequest);
}

