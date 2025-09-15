package com.skillance.Repository;

import com.skillance.Model.GigPackage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface GigPackageRepository extends JpaRepository<GigPackage, Long> {
    List<GigPackage> findByGigId(Long gigId);
}
