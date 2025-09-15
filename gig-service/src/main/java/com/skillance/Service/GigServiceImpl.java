package com.skillance.Service;


import com.skillance.Model.GigPackage;
import com.skillance.Repository.GigPackageRepository;
import com.skillance.Repository.GigRepository;
import com.skillance.Repository.GigReviewRepository;
import com.skillance.Util.DtoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.skillance.Dto.GigDto;
import com.skillance.Dto.GigPackageDto;
import com.skillance.Dto.GigResponseDto;
import com.skillance.Dto.GigReviewDto;
import com.skillance.Model.Gig;
import com.skillance.Model.GigReview;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class GigServiceImpl implements GigService {

    private final GigRepository gigRepository;
    private final GigPackageRepository packageRepository;
    private final GigReviewRepository reviewRepository;

    @Override
    public Gig createGig(GigDto gigDto) {
        Gig gig = Gig.builder()
                .title(gigDto.getTitle())
                .description(gigDto.getDescription())
                .category(gigDto.getCategory())
                .subCategory(gigDto.getSubCategory())
                .userId(gigDto.getUserId())
                .build();
        return gigRepository.save(gig);
    }

    @Override
    public List<GigResponseDto> getAllGigs() {
        return gigRepository.findAll().stream()
                .map(gig -> DtoMapper.gigResponseDtoMapper(gig))
                .toList();
    }

    @Override
    public GigResponseDto getGigById(Long id) {
        Gig gig = gigRepository.findById(id).orElseThrow(()->new RuntimeException("Gig Not Found"));
        return DtoMapper.gigResponseDtoMapper(gig);
    }

    @Override
    public void deleteGig(Long id) {
        gigRepository.deleteById(id);
    }

    @Override
    public String addPackage(Long gigId, GigPackageDto dto) {
        Gig gig = gigRepository.findById(gigId)
                .orElseThrow(() -> new RuntimeException("Gig not found"));
        GigPackage pkg = GigPackage.builder()
                .name(dto.getName())
                .description(dto.getDescription())
                .price(dto.getPrice())
                .deliveryDays(dto.getDeliveryDays())
                .gig(gig)
                .build();
        packageRepository.save(pkg);
        return "";
    }

    @Override
    public GigReview addReview(Long gigId, GigReviewDto dto) {
        Gig gig = gigRepository.findById(gigId)
                .orElseThrow(() -> new RuntimeException("Gig not found"));
        GigReview review = GigReview.builder()
                .userId(dto.getUserId())
                .rating(dto.getRating())
                .comment(dto.getComment())
                .gig(gig)
                .build();
        return reviewRepository.save(review);
    }

    @Override
    public boolean existsById(Long id) {
        Optional<Gig> gig = gigRepository.findById(id);
        if(gig.isPresent()){
            return true;
        }else {
            return false;
        }

    }
}

