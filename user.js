package com.alura.forum.model;

import jakarta.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String password;

    @ElementCollection(fetch = FetchType.EAGER)
    private Set<Role> roles;

    // Getters, Setters, equals, hashCode, toString
}

public enum Role {
    ROLE_USER, ROLE_ADMIN
}
