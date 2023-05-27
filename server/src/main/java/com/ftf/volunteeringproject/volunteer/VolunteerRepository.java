package com.ftf.volunteeringproject.volunteer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VolunteerRepository extends JpaRepository<Volunteer, Long> {
    boolean existsByEmail(String email);
    Optional<Volunteer> findByEmail(String email);

}
