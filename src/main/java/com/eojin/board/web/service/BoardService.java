package com.eojin.board.web.service;

import com.eojin.board.web.dto.BoardDto;

import java.util.List;

public interface BoardService {
    List<BoardDto> boardList();
    void createBoard(BoardDto boardDto);
    BoardDto getBoardDetail(String id);
    void updateBoard(BoardDto boardDto);

}
