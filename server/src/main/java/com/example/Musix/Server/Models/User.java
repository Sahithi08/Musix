package com.example.Musix.Server.Models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

public class User {
    @Id
    @GeneratedValue
    private long id;
private String username;
private String password;
private String phoneNumber;
private String email;
}
