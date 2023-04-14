package com.eojin.board.domain.posts;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class Posts {
    private final String id;
    private final String author;
    private final String content;
    private final String createDate;
}
