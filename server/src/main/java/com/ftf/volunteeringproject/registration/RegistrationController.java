package com.ftf.volunteeringproject.registration;

import com.ftf.volunteeringproject.exception.DuplicateResourceException;
import com.ftf.volunteeringproject.security.jwt.JwtService;
import com.ftf.volunteeringproject.volunteer.Volunteer;
import com.ftf.volunteeringproject.volunteer.VolunteerRepository;
import com.ftf.volunteeringproject.volunteer.VolunteerService;
import com.ftf.volunteeringproject.volunteer.VolunteerUserDetails;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/registration")
@AllArgsConstructor
public class RegistrationController {
    private final VolunteerRepository volunteerRepository;
    private final VolunteerService volunteerService;
    private final JwtService jwtService;

    @PostMapping
    public String register(@RequestBody RegistrationDto request) {
        Optional<Volunteer> volunteer = volunteerRepository.findByEmail(request.email());

       if (volunteer.isEmpty()) {
           volunteerService.addVolunteer(request);

           UserDetails userDetails = new VolunteerUserDetails(request.email(), request.password());
           return jwtService.generateJwt(new HashMap<>(), userDetails);
       }

       throw new DuplicateResourceException("Email already exists");
    }
}
