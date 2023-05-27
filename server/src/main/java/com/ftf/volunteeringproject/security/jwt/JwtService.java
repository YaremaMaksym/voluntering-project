package com.ftf.volunteeringproject.security.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.Map;

@Service
public class JwtService {
    private static final String SIGN_SECRET = "7A24432646294A404E635266546A576E5A7234753778214125442A472D4B6150";

    public String extractUsername(String jwt) {
        return extractAllClaims(jwt).getSubject();
    }

    private Claims extractAllClaims(String jwt) {
        try {
            return Jwts.parserBuilder().setSigningKey(getSignInKey()).build().parseClaimsJws(jwt).getBody();
        } catch (Exception e) {
            throw new JwtException("Problems with JWT :" + jwt);
        }
    }

    public boolean isJwtValid(String jwt, UserDetails userDetails) {
        return extractUsername(jwt).equals(userDetails.getUsername());
    }

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SIGN_SECRET);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public String generateJwt(Map<String, Object> extraClaims, UserDetails userDetails) {
        return Jwts.builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(
                        System.currentTimeMillis())).signWith(getSignInKey(),
                        SignatureAlgorithm.HS256).compact();
    }
}
