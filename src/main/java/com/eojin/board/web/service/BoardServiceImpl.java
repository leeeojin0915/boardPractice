package com.eojin.board.web.service;

import com.eojin.board.web.dto.BoardDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardServiceImpl implements BoardService{
    @Override
    public List<BoardDto> boardList(BoardDto boardDto) {

        return null;
    }

    @Override
    public void createBoard(BoardDto boardDto) {
        BoardDto board = new BoardDto();
        board.setId(board.getId());
        board.setAuthor(board.getAuthor());
        board.setTitle(board.getTitle());
        board.setContent(board.getContent());

    }
}
