package org.example.hw3.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "drawing", uniqueConstraints = {
        @UniqueConstraint(columnNames = "username")
})
public class Drawing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    private String name;

    @OneToMany(
            mappedBy = "drawing",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Shape> shapes = new ArrayList<>();

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public List<Shape> getShapes() { return shapes; }
    public void setShapes(List<Shape> shapes) {
        this.shapes.clear();
        if (shapes != null) {
            this.shapes.addAll(shapes);
        }
    }
}
