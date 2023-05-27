package com.ftf.volunteeringproject.login;

import com.ftf.volunteeringproject.security.jwt.JwtService;
import com.ftf.volunteeringproject.volunteer.Volunteer;
import com.ftf.volunteeringproject.volunteer.VolunteerRepository;
import com.ftf.volunteeringproject.volunteer.VolunteerService;
import com.ftf.volunteeringproject.volunteer.VolunteerUserDetails;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Optional;

@Service
@AllArgsConstructor
public class LoginService {
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public String login(LoginDto loginDto) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDto.email(), loginDto.password()));

        UserDetails userDetails = new VolunteerUserDetails(loginDto.email(), loginDto.password());
        return jwtService.generateJwt(new HashMap<>(), userDetails);
    }

}
