package com.ftf.volunteeringproject.volunteer;

import com.ftf.volunteeringproject.exception.ResourceNotFoundException;
import com.ftf.volunteeringproject.registration.RegistrationDto;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class VolunteerService {
    private final VolunteerRepository volunteerRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public Volunteer getVolunteerByEmail(String email) {
        return volunteerRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "volunteer with email \"%s\" not found".formatted(email)
                ));
    }

    public void addVolunteer(RegistrationDto registrationDto) {
        Volunteer volunteer = Volunteer.builder()
                .email(registrationDto.email())
                .password(bCryptPasswordEncoder.encode(registrationDto.password()))
                .firstname(registrationDto.firstname())
                .surname(registrationDto.surname())
                .build();
        volunteerRepository.save(volunteer);
    }
}
