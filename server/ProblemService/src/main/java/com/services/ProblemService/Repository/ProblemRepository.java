package com.services.ProblemService.Repository;

import com.services.ProblemService.Model.Problem;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProblemRepository extends JpaRepository<Problem, Long> {
    List<Problem> findByDifficulty(String difficulty);
}