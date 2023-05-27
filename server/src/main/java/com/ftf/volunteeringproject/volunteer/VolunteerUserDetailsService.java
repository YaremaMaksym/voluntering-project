package com.ftf.volunteeringproject.volunteer;

import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class VolunteerUserDetailsService implements UserDetailsService {
    private final VolunteerService volunteerService;

    @Override
    public UserDetails loadUserByUsername(String username) {
        Volunteer volunteer = volunteerService.getVolunteerByEmail(username);
        return new VolunteerUserDetails(volunteer.getEmail(), volunteer.getPassword());
    }
}
