package com.ftf.volunteeringproject.event;

import com.ftf.volunteeringproject.volunteer.Volunteer;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Event {
    @Id
    @SequenceGenerator(
            name = "expense_id_sequence",
            sequenceName = "event_id_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "event_id_sequence"
    )
    private Long id;
    private String name;
    private String city;
    private String description;

    private EventStatus status = EventStatus.PREPARATION;
    private String phoneNumber;
    private Long organizerId;

    @ManyToMany
    @JoinTable(name = "Applicants",
            joinColumns = @JoinColumn(name = "event_id"),
            inverseJoinColumns = @JoinColumn(name = "volunteer_id"))
    private Set<Volunteer> applicants;

}
