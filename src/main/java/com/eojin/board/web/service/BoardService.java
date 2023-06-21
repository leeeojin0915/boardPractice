package com.eojin.board.web.service;

import com.eojin.board.web.dto.BoardDto;

import java.util.List;

public interface BoardService {
    List<BoardDto> boardList(BoardDto boardDto);
    void createBoard(BoardDto boardDto);
    void getBoardDetail(String id);

}
