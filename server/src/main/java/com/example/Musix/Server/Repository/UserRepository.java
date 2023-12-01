package com.example.Musix.Server.Repository;

import com.example.Musix.Server.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
