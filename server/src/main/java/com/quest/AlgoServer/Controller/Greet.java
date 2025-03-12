package com.quest.AlgoServer.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Greet {
    @GetMapping("/")
    public String greet() {
        return "Hello World!";
    }
}
