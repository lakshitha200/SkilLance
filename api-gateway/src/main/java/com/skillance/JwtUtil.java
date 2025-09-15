package com.skillance;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;


        @Component
        public class JwtUtil {

            private final String SECRET = "bee6d52436f57a83e06852219baffee6b4d48c6f46bce1b87143e3ebec337fb7";
            private final Key key = Keys.hmacShaKeyFor(SECRET.getBytes());


            public void validateToken(final String token) {
                Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            }

            public String extractUsername(String token) {
                return Jwts.parserBuilder().setSigningKey(key).build()
                        .parseClaimsJws(token).getBody().getSubject();
            }
        }