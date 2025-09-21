package com.skillance.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class GigResponse {
    private boolean exists;
    private String fallbackMessage;
}
