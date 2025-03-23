package com.services.UserService.Controller;
import com.services.UserService.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestParam String username, @RequestParam String password) {
        if (userService.getUserByUsername(username) != null) {
            return ResponseEntity.badRequest().body("Username already exists!");
        }
        userService.registerUser(username, password);
        return ResponseEntity.ok("User registered successfully");
    }
}