package com.ftf.volunteeringproject.login;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/login")
public class LoginController {
    private final LoginService loginService;

    @PostMapping
    public String login(@RequestBody LoginDto loginDto) {
        return loginService.login(loginDto);
    }
}
