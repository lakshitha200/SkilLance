package com.skillance.Clients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "gig-service", path = "/api/gigs")
public interface GigClient {

    @GetMapping("/exists/{id}")
    boolean existsById(@PathVariable("id") Long id);
}

