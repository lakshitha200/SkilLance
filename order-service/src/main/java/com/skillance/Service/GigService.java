package com.skillance.Service;

import com.skillance.Clients.GigClient;
import com.skillance.Dto.GigResponse;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class GigService {

    private final GigClient gigClient;

    @CircuitBreaker(name = "GIG-SERVICE", fallbackMethod = "fallbackGig")
    @Retry(name="GIG-SERVICE", fallbackMethod="fallbackGig")
    public GigResponse existsByGigId(Long itemID){
        boolean exists = gigClient.existsById(itemID);
        System.out.println(exists);
        return  GigResponse.builder().exists(exists).fallbackMessage(null).build();

    }

    public GigResponse fallbackGig(Long itemID, Throwable t) {
        return new GigResponse(false, "Order creation failed. Gig service unavailable, try later");
    }
}

