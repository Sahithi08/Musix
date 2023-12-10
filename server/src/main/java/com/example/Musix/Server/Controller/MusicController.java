package com.example.Musix.Server.Controller;

import com.example.Musix.Server.Models.MusicFile;
import com.example.Musix.Server.Service.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/songs")
public class MusicController {
    @Autowired
    private MusicService songService;

    @PostMapping("/upload")
    public ResponseEntity<MusicFile> uploadSong(
            @RequestParam("file") MultipartFile file,
            @RequestParam("title") String title,
            @RequestParam("coverPageUrl") String coverPageUrl
    ) {
        MusicFile uploadedSong = songService.uploadSong(file, title, coverPageUrl);
        if (uploadedSong != null) {
            return ResponseEntity.ok(uploadedSong);
        } else {
            // Handle the case where the upload fails
            return ResponseEntity.status(500).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<MusicFile> getSongById(@PathVariable Long id) {
        MusicFile song = songService.getSongById(id);
        if (song != null) {
            return ResponseEntity.ok(song);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Other endpoints as needed
}
