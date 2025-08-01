package com.eojin.board.web.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class BoardDto {
    private String boardId;
    private String boardType;
    private String title;
    private String content;
    private String author;
    private String deleteYn;
    private Date createDate;
    private Date updateDate;
}
