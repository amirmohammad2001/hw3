package org.example.hw3.service;

import org.example.hw3.dto.DrawingDto;
import org.example.hw3.dto.ShapeDto;
import org.example.hw3.model.Drawing;
import org.example.hw3.model.Shape;
import org.example.hw3.repository.DrawingRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.stream.Collectors;

@Service
public class DrawingService {

    private final DrawingRepository repo;

    public DrawingService(DrawingRepository repo) {
        this.repo = repo;
    }

    @Transactional
    public void saveDrawing(String username, DrawingDto dto) {
        Drawing drawing = repo.findByUsername(username)
                .orElseGet(() -> {
                    Drawing d = new Drawing();
                    d.setUsername(username);
                    return d;
                });

        drawing.setName(dto.getName());

        var shapeEntities = dto.getShapes().stream().map(sd -> {
            Shape s = new Shape();
            s.setType(sd.getType());
            s.setX(sd.getX());
            s.setY(sd.getY());
            s.setDrawing(drawing);
            return s;
        }).collect(Collectors.toList());

        drawing.setShapes(shapeEntities);

        repo.save(drawing);
    }

    @Transactional(readOnly = true)
    public DrawingDto getDrawing(String username) {
        Drawing drawing = repo.findByUsername(username)
                .orElseThrow();
        DrawingDto dto = new DrawingDto();
        dto.setName(drawing.getName());
        var shapes = drawing.getShapes().stream().map(s -> {
            ShapeDto sd = new ShapeDto();
            sd.setId(s.getId());
            sd.setType(s.getType());
            sd.setX(s.getX());
            sd.setY(s.getY());
            return sd;
        }).collect(Collectors.toList());
        dto.setShapes(shapes);
        return dto;
    }
}
