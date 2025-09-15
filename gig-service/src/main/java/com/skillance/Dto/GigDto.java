package com.skillance.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GigDto {
    private Long id;
    private String title;
    private String description;
    private String category;
    private String subCategory;
    private Long userId; // from JWT later
}


