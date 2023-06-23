package com.eojin.board.web.service;

import com.eojin.board.web.dto.BoardDto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BoardServiceImpl implements BoardService{

    @Override
    public List<BoardDto> boardList() {
        List<BoardDto> boardDtoList = new ArrayList<>();
        BoardDto boardDto = new BoardDto();
        BoardDto boardDto1 = new BoardDto();

        boardDto.setId("0");
        boardDto.setTitle("테스트");
        boardDto.setAuthor("테스트작가");
        //boardDto.setContent("내용없ㅇㅁ");

        boardDto1.setId("0");
        boardDto1.setTitle("제목");
        boardDto1.setAuthor("작성자");
        //boardDto1.setContent("안녕");

        boardDtoList.add(boardDto);
        boardDtoList.add(boardDto1);

        return new ArrayList<>();
    }

    @Override
    public BoardDto createBoard(BoardDto boardDto) {
        BoardDto board = new BoardDto();
        board.setId(board.getId());
        board.setAuthor(board.getAuthor());
        board.setTitle(board.getTitle());
        board.setContent(board.getContent());
        return board;
    }

    @Override
    public BoardDto getBoardDetail(String id) {
        BoardDto boardDto = new BoardDto();
        boardDto.setId(id);
        boardDto.setTitle(boardDto.getTitle());
        boardDto.setAuthor(boardDto.getAuthor());
        boardDto.setContent(boardDto.getContent());
        return boardDto;
    }
}
