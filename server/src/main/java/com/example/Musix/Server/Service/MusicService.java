package com.example.Musix.Server.Service;

import com.example.Musix.Server.Models.MusicDto;
import com.example.Musix.Server.Models.MusicFile;
import com.example.Musix.Server.Repository.MP3Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class MusicService {
    @Autowired
    private MP3Repository songRepository;

    public MusicFile saveSong(MusicFile song) {
        return songRepository.save(song);
    }
    public MusicFile uploadSong(MultipartFile file, String title, String coverUrl) {
        try {
            MusicFile song = new MusicFile(coverUrl,file.getBytes(),title);
            return saveSong(song);
        } catch (IOException e) {
            // Handle IOException
            e.printStackTrace();
            return null;
        }
    }
    public MusicFile getSongById(Long id) {
        return songRepository.findById(id).orElse(null);
    }



}
