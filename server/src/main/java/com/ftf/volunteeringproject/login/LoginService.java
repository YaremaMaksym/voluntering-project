package com.ftf.volunteeringproject.login;

import com.ftf.volunteeringproject.security.jwt.JwtService;
import com.ftf.volunteeringproject.volunteer.VolunteerUserDetails;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
@AllArgsConstructor
public class LoginService {
    private final JwtService jwtService;

    public String login(LoginDto loginDto) {
        UserDetails userDetails = new VolunteerUserDetails(loginDto.email(), loginDto.password());
        return jwtService.generateJwt(new HashMap<>(), userDetails);
    }

}
