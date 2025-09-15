package com.skillance.Controller;


import com.skillance.Dto.OrderRequest;
import com.skillance.Dto.OrderResponse;
import com.skillance.Service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping
    public ResponseEntity<OrderResponse> create(@RequestBody OrderRequest request) {
        return new ResponseEntity<>(orderService.createOrder(request), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderResponse> get(@PathVariable Long id, @RequestHeader("loggedInUser") String user) {
        System.out.println("User: "+user);
        return ResponseEntity.ok(orderService.getOrder(id));
    }

    @GetMapping
    public ResponseEntity<List<OrderResponse>> getAll() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<OrderResponse> updateStatus(@PathVariable Long id, @RequestParam String status) {
        return ResponseEntity.ok(orderService.updateStatus(id, status));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        orderService.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }
}
