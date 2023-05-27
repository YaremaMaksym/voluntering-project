package com.ftf.volunteeringproject.volunteer;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/volunteer")
public class VolunteerController {
    private final VolunteerService volunteerService;

    @GetMapping("/all")
    public List<Volunteer> getAllVolunteers() {
        return volunteerService.getAllVolunteers();
    }

    @GetMapping("/current")
    public Volunteer getCurrentVolunteer() {
        return volunteerService.getCurrentVolunteer();
    }

    @PutMapping("/{id}")
    public void updateVolunteer(@RequestBody VolunteerDto volunteerDto, @PathVariable Long id) {
        volunteerService.updateVolunteer(volunteerDto, id);
    }
}
