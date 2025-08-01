package com.eojin.board.web.mapper.board;


import com.eojin.board.web.dto.BoardDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
    List<BoardDto> selectBoardList();
    BoardDto selectBoardOne(String boardId);
    void insertBoard(BoardDto boardDto);
    void updateBoard(BoardDto boardDto);

}
