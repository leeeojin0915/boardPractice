package com.eojin.board.web.service;

import com.eojin.board.web.controller.BoardController;
import com.eojin.board.web.dto.BoardDto;
import com.eojin.board.web.mapper.board.BoardMapper;
import jdk.dynalink.StandardOperation;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.time.YearMonth;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class FileUploadServiceImpl implements FileUploadService{

    private final BoardMapper boardMapper;
    private final Logger LOG = LoggerFactory.getLogger(FileUploadServiceImpl.class);

    @Override
    public void getFileList(String ymd) {
        String pathName = "/Users/eojin/Desktop/csv/";
        String fileName = "test_"+ymd+".csv";

        List<Map<String,Object>> dataList = this.uploadFile(ymd);
        LOG.debug("dataList:{}",dataList);
        StringBuilder stringBuilder = new StringBuilder();

        for (Map<String, Object> map : dataList) {
            stringBuilder.append(map);
        }
        LOG.debug("map:{}", stringBuilder);

        Path path = Paths.get(pathName+fileName);
        try {
            Files.writeString(path, stringBuilder.toString(), StandardCharsets.UTF_8);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public List<Map<String,Object>> uploadFile(String ymd){
        Map<String,Object> map = new HashMap<>();
        BoardDto boardDto = new BoardDto();
        boardDto.setCreate_date(ymd);
        map.put("create_date", boardDto.getCreate_date());
        LOG.debug("board:{}",map);

        List<BoardDto> boardList = boardMapper.selectBoardList(map); // 가져온 데이터
        LOG.debug("boardList:{}",boardList);
        List<Map<String,Object>> mapList = new ArrayList<>(); // 담을 데이터

        // 보낼 데이터 만들기
        Map<String, Object> sendMap = new HashMap<>();
        for (BoardDto dto : boardList) {
            sendMap.put("board_id", dto.getBoard_id());
            sendMap.put("board_type", dto.getBoard_type());
            sendMap.put("title",dto.getTitle());
            sendMap.put("content",dto.getContent());
            sendMap.put("user_id",dto.getUser_id());
            sendMap.put("create_date",dto.getCreate_date());
            sendMap.put("update_date",dto.getUpdate_date());
        }
        mapList.add(sendMap);

        return mapList;
    }
}
