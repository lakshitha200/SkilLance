package com.skillance.Controller;


import com.skillance.Dto.GigDto;
import com.skillance.Dto.GigPackageDto;
import com.skillance.Dto.GigResponseDto;
import com.skillance.Dto.GigReviewDto;
import com.skillance.Model.Gig;
import com.skillance.Model.GigReview;
import com.skillance.Service.GigService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/gigs")
@RequiredArgsConstructor
public class GigController {

    private final GigService gigService;

    @PostMapping
    public ResponseEntity<Gig> createGig(@RequestBody GigDto dto) {
        return ResponseEntity.ok(gigService.createGig(dto));
    }

    @GetMapping
    public ResponseEntity<List<GigResponseDto>> getAllGigs() {
        return ResponseEntity.ok(gigService.getAllGigs());
    }

    @GetMapping("/{id}")
    public ResponseEntity<GigResponseDto> getGigById(@PathVariable Long id) {
        return ResponseEntity.ok(gigService.getGigById(id));
    }

    @GetMapping("/exists/{id}")
    public boolean existsById(@PathVariable("id") Long id){
        return gigService.existsById(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGig(@PathVariable Long id) {
        gigService.deleteGig(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{gigId}/packages")
    public ResponseEntity<String> addPackage(@PathVariable Long gigId, @RequestBody GigPackageDto dto) {
        return ResponseEntity.ok(gigService.addPackage(gigId, dto));
    }

    @PostMapping("/{gigId}/reviews")
    public ResponseEntity<GigReview> addReview(@PathVariable Long gigId, @RequestBody GigReviewDto dto) {
        return ResponseEntity.ok(gigService.addReview(gigId, dto));
    }
}
