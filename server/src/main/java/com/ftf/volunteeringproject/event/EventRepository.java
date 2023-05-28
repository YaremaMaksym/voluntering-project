package com.ftf.volunteeringproject.event;

import com.ftf.volunteeringproject.volunteer.Volunteer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO Applicants (event_id, volunteer_id) VALUES (:eventId, :volunteerId)", nativeQuery = true)
    void addApplicantToEvent(Long eventId, Long volunteerId);

    @Query(value = "SELECT * FROM Event WHERE name LIKE %:searchedText% OR city LIKE %:searchedText%\" OR description LIKE %:searchedText%", nativeQuery = true)
    List<Event> searchEvents(@Param("searchedText") String searchedText);
}

