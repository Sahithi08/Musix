package com.example.Musix.Server.Repository;

import com.example.Musix.Server.Models.MusicFile;
import com.example.Musix.Server.Models.User;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


//@Repository
public interface MP3Repository extends JpaRepository<MusicFile,Long> {

}