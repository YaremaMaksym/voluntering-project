package com.ftf.volunteeringproject.event;

public record EventDTO(String name,
                String city,
                String description,
                EventStatus status,
                       String phoneNumber) {
}
