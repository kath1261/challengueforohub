package com.alura.forum.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
public class Topic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String message;
    private LocalDateTime creationDate = LocalDateTime.now();

    @ManyToOne
    private User author;

    @ManyToOne
    private Course course;

    // Getters, Setters, equals, hashCode, toString
}
