package com.services.ProblemService.Service;

import com.services.ProblemService.Model.Problem;
import com.services.ProblemService.Repository.ProblemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProblemService {
    private final ProblemRepository problemRepository;

    public ProblemService(ProblemRepository problemRepository) {
        this.problemRepository = problemRepository;
    }

    public List<Problem> getProblemsByDifficulty(String difficulty) {
        return problemRepository.findByDifficulty(difficulty);
    }

    public Problem addProblem(Problem problem) {
        return problemRepository.save(problem);
    }
}