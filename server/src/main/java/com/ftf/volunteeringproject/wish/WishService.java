package com.ftf.volunteeringproject.wish;

import com.ftf.volunteeringproject.volunteer.Volunteer;
import com.ftf.volunteeringproject.volunteer.VolunteerService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class WishService {
    private final WishRepository wishRepository;
    private final VolunteerService volunteerService;

    public List<Wish> getAllWishesOfVolunteer() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Volunteer volunteer = volunteerService.getVolunteerByEmail(authentication.getName());
        return wishRepository.findAllByVolunteerId(volunteer.getId());
    }

    @Transactional
    public void addWish(WishDto wish) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Volunteer volunteer = volunteerService.getVolunteerByEmail(authentication.getName());

        Wish newWish = Wish.builder()
                .wish(wish.wish())
                .volunteerId(volunteer.getId())
                .build();
        wishRepository.save(newWish);
    }

    @Transactional
    public void deleteWish(Long id) {
        wishRepository.deleteById(id);
    }

    @Transactional
    public void updateWish(Long id, WishDto wish) {
        Wish updatedWish = wishRepository.findById(id).orElseThrow(() -> new IllegalStateException("Wish with id " + id + " does not exist"));
        updatedWish.setWish(wish.wish());
        wishRepository.save(updatedWish);
    }
}
