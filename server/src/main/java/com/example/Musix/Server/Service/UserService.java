package com.example.Musix.Server.Service;

import com.example.Musix.Server.Models.LoginDto;
import com.example.Musix.Server.Models.RegisterDto;
import com.example.Musix.Server.Models.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    User registerUser(RegisterDto registerDto);
    User loginUser(LoginDto loginDto);
    UserDetails loadUserByUsername(String username);
}

