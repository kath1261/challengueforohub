package com.alura.forum.controller;

import com.alura.forum.model.Topic;
import com.alura.forum.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/topics")
public class TopicController {

    @Autowired
    private TopicRepository topicRepository;

    @GetMapping
    public List<Topic> getAllTopics() {
        return topicRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Topic> createTopic(@RequestBody Topic topic, @AuthenticationPrincipal UserDetails userDetails) {
        topic.setAuthor((User) userDetails);
        Topic savedTopic = topicRepository.save(topic);
        return ResponseEntity.status(201).body(savedTopic);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTopic(@PathVariable Long id) {
        topicRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
