package com.ftf.volunteeringproject.login;

import com.ftf.volunteeringproject.security.jwt.JwtService;
import com.ftf.volunteeringproject.volunteer.Volunteer;
import com.ftf.volunteeringproject.volunteer.VolunteerRepository;
import com.ftf.volunteeringproject.volunteer.VolunteerService;
import com.ftf.volunteeringproject.volunteer.VolunteerUserDetails;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Optional;

@Service
@AllArgsConstructor
public class LoginService {
    private final JwtService jwtService;
    private final VolunteerRepository volunteerRepository;

    public String login(LoginDto loginDto) {
        Optional<Volunteer> volunteer = volunteerRepository.findByEmail(loginDto.email());

        if (volunteer.isEmpty()) {
            throw new RuntimeException("User not found");
        }

        UserDetails userDetails = new VolunteerUserDetails(loginDto.email(), loginDto.password());
        return jwtService.generateJwt(new HashMap<>(), userDetails);
    }

}
