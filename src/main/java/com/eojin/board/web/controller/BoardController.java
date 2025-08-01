package com.eojin.board.web.controller;

import com.eojin.board.web.dto.BoardDto;
import com.eojin.board.web.service.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api/board")
public class BoardController {

    private final Logger LOG = LoggerFactory.getLogger(BoardController.class);
    private final BoardService boardService;

/*    @GetMapping("/")
    public void index(){
        LOG.debug("start");
    }*/

    //게시판리스트
    @GetMapping("/list")
    public List<BoardDto> boardList(){
        LOG.debug("boardList::::::::::::::");
        return boardService.boardList();
    }

    @PostMapping("/write")
    public void createBoard(@RequestBody BoardDto boardDto){
        LOG.debug("boardDto : {}",boardDto);
        boardService.createBoard(boardDto);
    }

    @GetMapping("/detail/{boardId}")
    public BoardDto getBoardDetail(@PathVariable String boardId){
        return boardService.getBoardDetail(boardId);
    }

    @PutMapping("/update")
    public void updateBoard(@RequestBody BoardDto boardDto){
        boardService.updateBoard(boardDto);
    }

}
