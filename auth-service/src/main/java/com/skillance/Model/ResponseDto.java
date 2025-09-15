package com.skillance.Model;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResponseDto {
    private UserDto userDto;
    private String token;
}
