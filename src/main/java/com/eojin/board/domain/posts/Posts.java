package com.eojin.board.domain.posts;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

//롬복 어노테이션(필수x)
@Getter
@NoArgsConstructor //기본 생성자 자동추가
@Entity //JPA의 어노테이션, 테이블과 연결될 클래스
@SequenceGenerator(
        name = "POSTS_SEQ_GENERATOR", //식별자 생성
        sequenceName = "POSTS_SEQ", //데이터 베이스에 등록되어 있는 시퀀스 이
        initialValue = 1, //DDL생성시 사용
        allocationSize = 1) //시퀀스 한 번 호출에 증가하는 수
public class Posts {

    @Id //PK
    //@GeneratedValue(strategy = GenerationType.IDENTITY) Mysql경우 사용 //스프링 2.0이상부터 사용
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "POSTS_SEQ_GENERATOR")
    private Long id;

    private String author;
    private String title;
    private String content;

    //해당 클래스에는 setter가 존재하지 않는다. -> Entity클래스 DB와 관련
    //setter가 존재하지 않을 때 값을 db에 저장하려면?
    //@Builder

    @Builder
    public Posts(Long id, String author, String title, String content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
}


