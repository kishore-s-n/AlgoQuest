package com.services.ProblemService.Model;
import jakarta.persistence.*;
import java.util.List;
import java.util.Map;

@Entity
public class Problem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String difficulty;

    @ElementCollection
    @CollectionTable(name = "problem_example", joinColumns = @JoinColumn(name = "problem_id"))
    private List<String> examples;

    @ElementCollection
    @CollectionTable(name = "problem_base_cases", joinColumns = @JoinColumn(name = "problem_id"))
    @MapKeyColumn(name = "case_name")
    @Column(columnDefinition = "TEXT")
    private Map<String, String> baseCases;

    @ElementCollection
    @CollectionTable(name = "problem_test_cases", joinColumns = @JoinColumn(name = "problem_id"))
    @MapKeyColumn(name = "case_name")
    @Column(columnDefinition = "TEXT")
    private Map<String, String> testCases;
}