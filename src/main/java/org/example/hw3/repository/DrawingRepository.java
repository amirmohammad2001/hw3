package org.example.hw3.repository;

import org.example.hw3.model.Drawing;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface DrawingRepository extends JpaRepository<Drawing, Long> {
    Optional<Drawing> findByUsername(String username);
}
