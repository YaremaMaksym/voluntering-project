package com.ftf.volunteeringproject.event;

import com.ftf.volunteeringproject.volunteer.Volunteer;
import com.ftf.volunteeringproject.volunteer.VolunteerService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class EventService {
    private EventRepository eventRepository;
    private VolunteerService volunteerService;

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public void addEvent(EventDTO eventDTO) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Volunteer volunteer = volunteerService.getVolunteerByEmail(authentication.getName());

        Event event = Event.builder()
                .name(eventDTO.name())
                .status(eventDTO.status())
                .city(eventDTO.city())
                .description(eventDTO.description())
                .phoneNumber(eventDTO.phoneNumber())
                .build();

        event.setOrganizerId(volunteer.getId());
        eventRepository.save(event);
    }

    public void addApplicantToEvent(Long eventId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Volunteer volunteer = volunteerService.getVolunteerByEmail(authentication.getName());
        eventRepository.addApplicantToEvent(eventId, volunteer.getId());
    }
}
