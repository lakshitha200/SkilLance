package com.skillance.Util;

import com.skillance.Dto.GigPackageDto;
import com.skillance.Dto.GigResponseDto;
import com.skillance.Dto.GigReviewDto;
import com.skillance.Model.Gig;
import com.skillance.Model.GigPackage;
import com.skillance.Model.GigReview;

public class DtoMapper {

    public static GigResponseDto gigResponseDtoMapper(Gig gig){
        return GigResponseDto.builder()
                .id(gig.getId())
                .title(gig.getTitle())
                .description(gig.getDescription())
                .category(gig.getCategory())
                .subCategory(gig.getSubCategory())
                .userId(gig.getUserId())
                .createdAt(gig.getCreatedAt())
                .updatedAt(gig.getUpdatedAt())
                .packageDto(gig.getPackages().stream().map(pack ->gigPackageDtoMapper(pack)).toList())
                .reviewDto(gig.getReviews().stream().map(rew ->gigReviewDtoMapper(rew)).toList())
                .build();
    }

    public static GigReviewDto gigReviewDtoMapper(GigReview review){
        return GigReviewDto.builder()
                .id(review.getId())
                .userId(review.getUserId())
                .rating(review.getRating())
                .comment(review.getComment())
                .createdAt(review.getCreatedAt())
                .build();
    }


    public static GigPackageDto gigPackageDtoMapper(GigPackage gigPackage){
        return GigPackageDto.builder()
                .id(gigPackage.getId())
                .name(gigPackage.getName())
                .description(gigPackage.getDescription())
                .price(gigPackage.getPrice())
                .deliveryDays(gigPackage.getDeliveryDays())
                .build();
    }
}
