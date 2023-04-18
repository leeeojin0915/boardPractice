package com.eojin.board.test.domain.posts;

import com.eojin.board.domain.posts.Posts;
import com.eojin.board.domain.posts.PostsRepository;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.AssertionsForInterfaceTypes.assertThat;


@RunWith(SpringRunner.class)
@SpringBootTest
public class PostsRepositoryTest {

    @Autowired
    PostsRepository postsRepository;

    @After
    public void clean(){
        postsRepository.deleteAll();
    }

    @Test
    public void content_save(){
        String title = "제목안녕";
        String content = "본문내용";

        postsRepository.save(Posts.builder()
                .title(title)
                .content(content)
                .author("eojin")
                .build());

        List<Posts> postsList = postsRepository.findAll();

        Posts posts = postsList.get(0);

        assertThat(posts.getTitle()).isEqualTo(title);
        assertThat(posts.getContent()).isEqualTo(content);

    }

}
