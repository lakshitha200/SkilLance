package com.skillance;

import com.skillance.Model.ResponseDto;
import com.skillance.Model.User;
import com.skillance.Model.UserDto;
import com.skillance.Repository.UserRepository;
import com.skillance.Security.JwtUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/signup")
    public ResponseEntity<String> register(@RequestBody User user) {
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            return ResponseEntity.badRequest().body("Username already exists!");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully!");
    }

    @PostMapping("/signin")
    public ResponseEntity<ResponseDto> login(@RequestBody User user) {

        User existingUser = userRepository.findByEmail(user.getEmail())
                .filter(u -> passwordEncoder.matches(user.getPassword(), u.getPassword()))
                .orElseThrow(() -> new RuntimeException("User not found!"));

        String token = jwtUtil.generateToken(existingUser.getUsername(), existingUser.getRole().name());
        System.out.println(token);
        return new ResponseEntity<>(ResponseDto.builder()
                .userDto(UserDto.builder()
                        .id(existingUser.getId())
                        .username(existingUser.getUsername())
                        .email(existingUser.getEmail())
                        .role(existingUser.getRole())
                        .build())
                .token(token)
                .build(), HttpStatus.OK);
    }
}

