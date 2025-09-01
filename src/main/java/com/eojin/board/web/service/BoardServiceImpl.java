package com.eojin.board.web.service;

import com.eojin.board.web.dto.BoardDto;
import com.eojin.board.web.mapper.board.BoardMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardServiceImpl implements BoardService{

    private final Logger LOG = LoggerFactory.getLogger(BoardServiceImpl.class);

    @Autowired
    BoardMapper boardMapper;

    @Override
    public List<BoardDto> boardList() {
        return boardMapper.selectBoardList();
    }
    @Override
    public void createBoard(BoardDto boardDto) {
        LOG.debug("boardDtd:{}",boardDto);
        boardMapper.insertBoard(boardDto);
    }
    @Override
    public BoardDto getBoardDetail(String boardId) {
        return boardMapper.selectBoardOne(boardId);
    }
    @Override
    public void updateBoard(BoardDto boardDto) {
        boardMapper.updateBoard(boardDto);
    }

    @Override
    public void deleteBoard(List<Integer> boardIdList) {
        for (Integer integer : boardIdList) {
            boardMapper.deleteBoard(integer);
        }
    }
}
