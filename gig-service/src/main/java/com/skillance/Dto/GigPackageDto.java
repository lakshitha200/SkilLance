package com.skillance.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GigPackageDto {
    private Long id;
    private String name;
    private String description;
    private Double price;
    private Integer deliveryDays;
}


