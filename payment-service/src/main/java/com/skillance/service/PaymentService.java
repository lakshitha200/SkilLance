package com.skillance.service;

import com.skillance.dto.PaymentRequest;
import com.skillance.dto.PaymentResponse;
import com.skillance.model.Payment;
import com.skillance.repository.PaymentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class PaymentService {

    private final PaymentRepository paymentRepository;

    public PaymentResponse processPayment(PaymentRequest request) {
        Payment payment = Payment.builder()
                .orderId(request.getOrderId())
                .amount(request.getAmount())
                .status("SUCCESS")
                .paymentDate(LocalDateTime.now())
                .build();

        paymentRepository.save(payment);
        return new PaymentResponse(payment.getId(), payment.getStatus());
    }
}
