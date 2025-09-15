package com.skillance.Dto;

import lombok.*;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter @Setter
public class OrderItemRequest {
    private Long productId;
    private Integer quantity;
    private BigDecimal price;
}