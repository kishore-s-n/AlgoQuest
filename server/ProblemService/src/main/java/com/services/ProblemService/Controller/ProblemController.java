package com.services.ProblemService.Controller;
import com.services.ProblemService.Model.Problem;
import com.services.ProblemService.Service.ProblemService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/problems")
public class ProblemController {
    private final ProblemService problemService;

    public ProblemController(ProblemService problemService) {
        this.problemService = problemService;
    }

    @GetMapping("/{difficulty}")
    public List<Problem> getProblems(@PathVariable String difficulty) {
        return problemService.getProblemsByDifficulty(difficulty);
    }

    @PostMapping
    public Problem addProblem(@RequestBody Problem problem) {
        return problemService.addProblem(problem);
    }
}