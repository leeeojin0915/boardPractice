package com.eojin.board.web.service;

import com.eojin.board.web.dto.BoardDto;
import com.eojin.board.web.mapper.board.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BoardServiceImpl implements BoardService{

    @Autowired
    BoardMapper boardMapper;

    @Override
    public List<BoardDto> boardList(BoardDto boardDto) {
        HashMap<String,Object> map = new HashMap<>();
//        map.put("board_id",boardDto.getBoard_id());
//        map.put("board_type",boardDto.getBoard_type());
//        map.put("title", boardDto.getTitle());
//        map.put("content", boardDto.getContent());
//        map.put("user_id",boardDto.getUser_id());

        return boardMapper.selectBoardList(map);
    }

    @Override
    public BoardDto createBoard(BoardDto boardDto) {
        return boardDto;
    }

    @Override
    public BoardDto getBoardDetail(String id) {
        BoardDto boardDto = new BoardDto();
        return boardDto;
    }
}
