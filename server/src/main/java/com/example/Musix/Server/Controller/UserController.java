package com.example.Musix.Server.Controller;

//import com.example.Musix.Server.Models.LoginForm;
import com.example.Musix.Server.Models.LoginDto;
import com.example.Musix.Server.Models.RegisterDto;
import com.example.Musix.Server.Models.User;
import com.example.Musix.Server.Repository.UserRepository;
import com.example.Musix.Server.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class UserController {

    private UserService userService;
    private PasswordEncoder passwordEncoder;
    @PostMapping("user/register")
    void RegisterNewUser(@RequestBody RegisterDto newUserRegister)
    {
         userService.registerUser(newUserRegister);
    }
//    @GetMapping
//    private List<User> getAllUsers()
//    {
//        return userRepository.findAll();
//    }

    @PostMapping("user/login")
    public ResponseEntity<String> login(@RequestBody LoginDto loginDto) {
        // authentication handled by spring security here
        return new ResponseEntity<>("Login successful", HttpStatus.OK);
    }

}
