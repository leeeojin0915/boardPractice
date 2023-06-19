package com.eojin.board.web.controller;

import com.eojin.board.web.dto.BoardDto;
import com.eojin.board.web.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoardController {
    @Autowired
    BoardService boardService;


    //게시판리스트
    @GetMapping("/list")
    public void boardList(){

    }
    @PostMapping("/write")
    public void createBoard(@RequestBody BoardDto boardDto){
        boardService.createBoard(boardDto);
    }

    @GetMapping("/detail/{seq}")
    public void getBoardDetail(){

    }

}
