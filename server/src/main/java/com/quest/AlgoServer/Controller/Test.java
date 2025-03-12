package com.quest.AlgoServer.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Test {
  @GetMapping("/test")
  public String test1() {
    return "This is a test";
  }
}
