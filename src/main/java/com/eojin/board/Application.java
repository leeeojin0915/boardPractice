package com.eojin.board;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
    public static void main(String[] args){
        SpringApplication.run(Application.class,args);
        //SpringApplication.run로 인해 내장was를 실행한다.
        //내장was는 외부was를 두지않고 어플리케이션을 실행할 수 있어, 따로 톰켓 실행을 하지 않아도 된다.

    }
}
//@SpringBootApplication -> springboot 설정, bean 읽기와 생성을 모두 자동으로 설정한다
//해당 클래스는 앞으로 생성할 클래스들의 메인클래스이므로 프로젝트의 최상단에 위치해야 된다.
//


