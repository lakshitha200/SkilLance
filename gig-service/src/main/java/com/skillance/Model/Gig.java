package com.skillance.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "gigs")
public class Gig {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String category;
    private String subCategory;

    private Long userId; // from AuthService

    @CreationTimestamp
    private LocalDateTime createdAt = LocalDateTime.now();
    @UpdateTimestamp
    private LocalDateTime updatedAt = LocalDateTime.now();

    @OneToMany(mappedBy = "gig", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<GigPackage> packages;

    @OneToMany(mappedBy = "gig", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<GigReview> reviews;
}


