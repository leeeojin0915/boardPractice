package com.eojin.board.test;


import com.eojin.board.web.dto.HelloDto;
import org.junit.Test;

import static org.assertj.core.api.AssertionsForInterfaceTypes.assertThat;


public class HelloDtoTest {
    String name = "hello";
    int amount = 1000;

    @Test
    public void helloDto(){
        HelloDto helloDto= new HelloDto(name,amount);

        assertThat(helloDto.getName()).isEqualTo(name);
        assertThat(helloDto.getAmount()).isEqualTo(amount);
    }
}
