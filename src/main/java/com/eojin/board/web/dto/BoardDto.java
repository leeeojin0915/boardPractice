package com.eojin.board.web.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class BoardDto {
    private String board_id;
    private String board_type;
    private String title;
    private String content;
    private String user_id;
    private String delete_yn;
    private String create_date;
    private Date update_date;
}
