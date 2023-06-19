package com.eojin.board.web.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardDto {
    private String id;
    private String title;
    private String content;
    private String author;
    private String date;
}
