package com.example.Musix.Server.Service;

import com.example.Musix.Server.Models.LoginDto;
import com.example.Musix.Server.Models.RegisterDto;
import com.example.Musix.Server.Models.User;
import com.example.Musix.Server.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {

    // existing methods...
    @Autowired
    private UserRepository userRepository;

    private PasswordEncoder passwordEncoder;

    @Override
    public User registerUser(RegisterDto newUserRegister) {
        String EncodedPassword = passwordEncoder.encode(newUserRegister.getPassword());
        User user = new User(newUserRegister.getUsername(),
                EncodedPassword,
                newUserRegister.getPhoneNumber(),
                newUserRegister.getEmail());
        return user;
    }

    @Override
    public User loginUser(LoginDto loginDto) {
        return null;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));

        return new org.springframework.security.core.userdetails.User(
                user.getUsername(),
                user.getPassword(),
                new ArrayList<>()
        );
    }

}

