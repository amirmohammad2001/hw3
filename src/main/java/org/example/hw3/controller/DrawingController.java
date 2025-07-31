package org.example.hw3.controller;

import org.example.hw3.dto.DrawingDto;
import org.example.hw3.service.DrawingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/drawings")
@CrossOrigin(origins = "http://localhost:3000")
public class DrawingController {

    private final DrawingService service;

    public DrawingController(DrawingService service) {
        this.service = service;
    }

    @PostMapping("/{username}")
    public ResponseEntity<Void> save(
            @PathVariable String username,
            @RequestBody DrawingDto dto) {
        service.saveDrawing(username, dto);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{username}")
    public ResponseEntity<DrawingDto> restore(
            @PathVariable String username) {
        try {
            DrawingDto dto = service.getDrawing(username);
            return ResponseEntity.ok(dto);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
