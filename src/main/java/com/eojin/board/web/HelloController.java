package com.eojin.board.web;

import com.eojin.board.dto.HelloDto;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello(){
        return "helloooooo";
    }

    @GetMapping("/hello/dto")
    public HelloDto helloDto(@RequestParam(value = "name") String name, @RequestParam(value = "amount") int amount){
        return new HelloDto(name,amount);
    }
}
