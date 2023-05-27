package com.ftf.volunteeringproject.wish;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/wish")
public class WishController {
    private final WishService wishService;

    @GetMapping
    public List<Wish> getAllWishesOfVolunteer() {
        return wishService.getAllWishesOfVolunteer();
    }

    @PostMapping
    public void addWish(@RequestBody WishDto wish) {
        wishService.addWish(wish);
    }

    @PutMapping("/{id}")
    public void updateWish(@PathVariable Long id, @RequestBody WishDto wish) {
        wishService.updateWish(id, wish);
    }

    @DeleteMapping("/{id}")
    public void deleteWish(@PathVariable Long id) {
        wishService.deleteWish(id);
    }
}
