package com.eojin.board.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor //final 필드만 생성자 생성가능
public class HelloDto {
    private final String name;
    private final int amount;
}
