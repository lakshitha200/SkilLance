package com.skillance.Repository;

import com.skillance.Model.GigReview;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GigReviewRepository extends JpaRepository<GigReview, Long> {
    List<GigReview> findByGigId(Long gigId);
}
