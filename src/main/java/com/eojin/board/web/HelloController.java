package com.eojin.board.web;

import com.eojin.board.web.dto.HelloDto;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public List<String> hello(){
        return Arrays.asList("안녕","하세요");
    }

    @GetMapping("/hello/dto")
    public HelloDto helloDto(@RequestParam(value = "name") String name, @RequestParam(value = "amount") int amount){
        return new HelloDto(name,amount);
    }
}
