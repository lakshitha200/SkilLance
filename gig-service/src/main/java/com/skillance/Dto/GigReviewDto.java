package com.skillance.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GigReviewDto {
    private Long id;
    private Long userId;
    private Integer rating;
    private String comment;
    private LocalDateTime createdAt;
}


