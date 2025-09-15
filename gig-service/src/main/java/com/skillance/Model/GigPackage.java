package com.skillance.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "gig_packages")
public class GigPackage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;  // Basic / Standard / Premium
    private String description;
    private Double price;
    private Integer deliveryDays;

    @ManyToOne
    @JoinColumn(name = "gig_id")
    private Gig gig;
}


