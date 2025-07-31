package org.example.hw3.dto;

import java.util.List;

public class DrawingDto {
    private String name;
    private List<ShapeDto> shapes;

    // getters & setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public List<ShapeDto> getShapes() { return shapes; }
    public void setShapes(List<ShapeDto> shapes) { this.shapes = shapes; }
}
