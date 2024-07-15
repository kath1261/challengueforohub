package com.alura.forum.model;

import jakarta.persistence.*;
import java.util.Objects;

@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String category;

    // Getters, Setters, equals, hashCode, toString
}
