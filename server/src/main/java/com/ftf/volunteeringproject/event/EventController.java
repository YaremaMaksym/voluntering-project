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

    @PostMapping
    public void addEvent(@RequestBody EventDTO eventDTO) {
        eventService.addEvent(eventDTO);
    }

//    @PostMapping("/{eventId}/applicants")
//    public void addApplicantToEvent(@PathVariable Long eventId){
//        eventService.addApplicantToEvent(eventId);
//    }
}
