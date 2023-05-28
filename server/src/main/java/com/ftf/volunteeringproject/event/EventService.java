package com.ftf.volunteeringproject.event;

import com.ftf.volunteeringproject.exception.ResourceNotFoundException;
import com.ftf.volunteeringproject.volunteer.Volunteer;
import com.ftf.volunteeringproject.volunteer.VolunteerRepository;
import com.ftf.volunteeringproject.volunteer.VolunteerService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@AllArgsConstructor
@Service
public class EventService {
    private EventRepository eventRepository;
    private VolunteerService volunteerService;
    private VolunteerRepository volunteerRepository;

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Event getEventById(Long id) {
        return eventRepository.findById(id).orElseThrow(() -> new IllegalStateException("Event with id " + id + " does not exist"));
    }

    public List<Event> searchEvents(String searchedText) {
        return eventRepository.searchEvents(searchedText);
    }

    public List<Event> getEventsByLocation(String location) {
        return eventRepository.getEventsByLocation(location);
    }

    @Transactional
    public void addEvent(EventDTO eventDTO) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Volunteer volunteer = volunteerService.getVolunteerByEmail(authentication.getName());

        Event event = Event.builder()
                .name(eventDTO.name())
                .city(eventDTO.city())
                .description(eventDTO.description())
                .phoneNumber(eventDTO.phoneNumber())
                .build();

        event.setStatus(EventStatus.PREPARATION);
        event.setOrganizerId(volunteer.getId());
        eventRepository.save(event);
    }

    @Transactional
    public void updateEvent(EventDTO eventDTO, Long id){
        Event updatedEvent = getEventById(id);

        updatedEvent.setName(eventDTO.name());
        updatedEvent.setCity(eventDTO.city());
        updatedEvent.setDescription(eventDTO.description());
        updatedEvent.setPhoneNumber(eventDTO.phoneNumber());
        eventRepository.save(updatedEvent);
    }

    @Transactional
    public void deleteEventById(Long id) {
        eventRepository.deleteById(id);
    }

    @Transactional
    public void deleteAllEvents() {
        eventRepository.deleteAll();
    }

    @Transactional
    public void addApplicantToEvent(Long eventId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Volunteer volunteer = volunteerService.getVolunteerByEmail(authentication.getName());
        volunteer.setMark(volunteer.getMark() + 1);
        volunteerRepository.save(volunteer);

        eventRepository.addApplicantToEvent(eventId, volunteer.getId());
    }

    public String changeStatusOfEvent(Long eventId, String statusParam) {
        EventStatus status = EventStatus.valueOf(statusParam.toUpperCase());

        Event event = getEventById(eventId);
        event.setStatus(status);
        eventRepository.save(event);

        return "Received status: " + status;
    }
}
