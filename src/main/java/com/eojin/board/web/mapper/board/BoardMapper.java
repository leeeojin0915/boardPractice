package com.eojin.board.web.mapper.board;


import com.eojin.board.web.dto.BoardDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface BoardMapper {
    List<BoardDto> selectBoardList(Map<String, Object> map);

}
