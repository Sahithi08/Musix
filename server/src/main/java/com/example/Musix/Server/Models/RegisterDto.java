package com.example.Musix.Server.Models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor

public class RegisterDto {
    private String username;
    private String email;
    private String password;
    private String phoneNumber;

}
