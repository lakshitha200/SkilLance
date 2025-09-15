package com.skillance.Repository;

import com.skillance.Model.Gig;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GigRepository extends JpaRepository<Gig, Long> {
    List<Gig> findByCategory(String category);
}

