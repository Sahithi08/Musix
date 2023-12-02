package com.example.Musix.Server.Models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.crypto.password.PasswordEncoder;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
private String username;
private String password;
private String phoneNumber;
private String email;

    public User(String username, String EncodedPassword, String phoneNumber, String email) {
        this.username = username;
//        CharSequence cs = password;
        this.password = EncodedPassword;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}
