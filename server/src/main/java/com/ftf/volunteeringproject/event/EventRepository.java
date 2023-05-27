package com.ftf.volunteeringproject.event;

import com.ftf.volunteeringproject.volunteer.Volunteer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {

    @Transactional
    @Modifying
    @Query("Applicants e SET e.applicants = :volunteer_id WHERE e.id = :eventId")
    void addApplicantToEvent(@Param("eventId") Long eventId, @Param("volunteer_id") Long volunteerId);
}

