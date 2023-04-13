package com.eojin.board.web;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello(){
        return "helloooooo";
    }

//    @GetMapping("/helloDto")
//    public void helloDto(@RequestParam String name, @RequestParam int amount){
//
//    }
}
