package com.eojin.board.web.service;

import com.eojin.board.web.dto.BoardDto;
import com.eojin.board.web.mapper.board.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

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
        System.out.println(boardDto.getBoard_id());
        System.out.println(boardDto.getBoard_type());
        System.out.println(boardDto.getTitle());
        //return null;
        return boardMapper.selectBoardList(map);
    }

    @Override
    public void createBoard(BoardDto boardDto) {
    }

    @Override
    public void getBoardDetail(String id) {
        BoardDto boardDto = new BoardDto();
    }
}
