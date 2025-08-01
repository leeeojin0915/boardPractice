package com.eojin.board.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration // spring 설정 파일,bean 자동등록
@EnableWebSecurity // spring security 기능 할성화, securityFilterChain 동작하도록 연결해주는 어노테이션
@EnableMethodSecurity // 메서드 단위 권한 제어(@PreAuthorize, @Secured, @RoleAllowed

public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors().and() // corsConfigurationSource() bean을 찾아 CORS 허용 설정
                .csrf().disable() // REST API 개발에서는 필요 X, 폼 기반 로그인이 아닌 경우, 대부분 비활성화
                .authorizeRequests() // spring security 5.x 방식
                        .antMatchers("/api/**").permitAll()
                        .anyRequest().authenticated();

        return http.build();
    }
    @Bean
    public CorsConfigurationSource corsConfigurationSource(){
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("http://localhost:3000")); // react 개발 서버에서 들어오는 요청
        config.setAllowedMethods(List.of("GET","POST","PUT","DELETE","OPTIONS")); // 브라우저에서 보낼 수 있는 HTTP 메서드 허용
        config.setAllowedHeaders(List.of("*")); // 요청 헤더 제한 X
        config.setAllowCredentials(true); // 인증 정보를 함께 보낼 수 있도록 허용

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**",config);
        return source;
    }
}
