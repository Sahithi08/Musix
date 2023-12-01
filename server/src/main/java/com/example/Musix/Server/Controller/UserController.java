package com.example.Musix.Server.Controller;

import com.example.Musix.Server.Models.LoginForm;
import com.example.Musix.Server.Models.User;
import com.example.Musix.Server.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    private void registerUser(@RequestBody User newUser)
    {
        userRepository.save(newUser);
    }
    @GetMapping
    private List<User> getAllUsers()
    {
        return userRepository.findAll();
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginForm loginForm) {
        try {
            // Your authentication logic here

            // For example, if using Spring Security, authentication will happen automatically

            // If authentication fails, an AuthenticationException will be thrown
            // You can catch specific exceptions and customize the response accordingly

            // For example:
            // throw new BadCredentialsException("Invalid username or password");

            // If authentication is successful, you can return a success response
            return ResponseEntity.ok("Login successful");
        } catch (BadCredentialsException | UsernameNotFoundException e) {
            // Handle invalid login credentials
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        } catch (AuthenticationException e) {
            // Handle other authentication-related exceptions
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
        } catch (Exception e) {
            // Handle other exceptions
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");
        }
    }


}
