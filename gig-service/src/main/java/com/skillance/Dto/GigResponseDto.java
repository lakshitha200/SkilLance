package com.skillance.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GigResponseDto {
    private Long id;
    private String title;
    private String description;
    private String category;
    private String subCategory;
    private Long userId; // from JWT later
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private List<GigPackageDto> packageDto;
    private List<GigReviewDto> reviewDto;
}



