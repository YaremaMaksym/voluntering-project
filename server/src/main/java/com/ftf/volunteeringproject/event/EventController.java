package com.ftf.volunteeringproject.event;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/event")
@AllArgsConstructor
public class EventController {
    private EventService eventService;

    @GetMapping
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    @GetMapping("/search/{searchedText}")
    public List<Event> searchEvents(@PathVariable String searchedText) {
        return eventService.searchEvents(searchedText);
    }

    @GetMapping("/location/{location}")
    public List<Event> getEventsByLocation(@PathVariable String location) {
        return eventService.getEventsByLocation(location);
    }

    @PostMapping
    public void addEvent(@RequestBody EventDTO eventDTO) {
        eventService.addEvent(eventDTO);
    }

    @PostMapping("/{eventId}/applicants")
    public void addApplicantToEvent(@PathVariable Long eventId){
        eventService.addApplicantToEvent(eventId);
    }

    @PutMapping("/{eventId}")
    public String changeStatusOfEvent(@PathVariable("eventId") Long eventId, @RequestParam("status") String statusParam) {
        return eventService.changeStatusOfEvent(eventId, statusParam);
    }
    @PutMapping("/{id}")
    public void updateEvent(@RequestBody EventDTO eventDTO, @PathVariable Long id){
        eventService.updateEvent(eventDTO, id);
    }

    @DeleteMapping("/{id}")
    public void deleteEvent(@PathVariable Long id){
        eventService.deleteEventById(id);
    }

    @DeleteMapping
    public void deleteAllEvents(){
        eventService.deleteAllEvents();
    }

}
