package com.eojin.board.web.controller;

import com.eojin.board.web.dto.BoardDto;
import com.eojin.board.web.service.BoardService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class BoardController {

    private final Logger LOG = LoggerFactory.getLogger(BoardController.class);

    @Autowired
    BoardService boardService;


    //게시판리스트
    @GetMapping("/list")
    public void boardList(){
    }
    @PostMapping("/write")
    public void createBoard(@RequestBody BoardDto boardDto){
        LOG.debug("boardDto : {}",boardDto);
        boardService.createBoard(boardDto);
    }

    @GetMapping("/detail/{id}")
    public void getBoardDetail(@PathVariable String id){
        boardService.getBoardDetail(id);
    }

}
