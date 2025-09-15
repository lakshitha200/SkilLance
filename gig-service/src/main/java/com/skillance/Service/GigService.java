package com.skillance.Service;


import com.skillance.Dto.GigDto;
import com.skillance.Dto.GigPackageDto;
import com.skillance.Dto.GigResponseDto;
import com.skillance.Dto.GigReviewDto;
import com.skillance.Model.Gig;
import com.skillance.Model.GigReview;

import java.util.List;

public interface GigService {
    Gig createGig(GigDto gigDto);
    List<GigResponseDto> getAllGigs();
    GigResponseDto getGigById(Long id);
    void deleteGig(Long id);

    String addPackage(Long gigId, GigPackageDto dto);
    GigReview addReview(Long gigId, GigReviewDto dto);

    boolean existsById(Long id);
}
