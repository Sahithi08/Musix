package com.example.Musix.Server.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "musicFiles")
public class MusicFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String type = "mp3";
    private String coverURL;
    @Lob
//    private byte[] fileData;
    private byte[] songBytecode;


    public MusicFile(String coverURL, byte[] songBytecode,String title,String type )
    {
        this.coverURL = coverURL;
        this.songBytecode = songBytecode;
        this.title = title;
        this.type = type;
    }
    public MusicFile(String coverURL, byte[] songBytecode,String title )
    {
        this.coverURL = coverURL;
        this.songBytecode = songBytecode;
        this.title = title;
        this.type = "mp3";
    }

}
