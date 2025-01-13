/*
package com.eojin.board.config;

import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.io.IOException;

@Configuration // applicarion.properties 설정 대신 상세 설정을 위함
@MapperScan(basePackages = "com.eojin.board.web.mapper")
@RequiredArgsConstructor
public class MybatisConfig {

    private final Logger LOG = LoggerFactory.getLogger(MybatisConfig.class);

    @Value("${spring.datasource.mapper-locations}")
    String mapperPath;

    private final ApplicationContext applicationContext;

    public DataSource dataSource() {
        LOG.debug(DataSourceBuilder.create().build().toString());
        return DataSourceBuilder.create().build();
    }

    //    @Bean(name = "SqlSessionFactory")
//    public SqlSessionFactory sqlSessionFactory(@Qualifier("dataSource") DataSource dataSource,
//                                               ApplicationContext applicationContext) throws Exception {
//        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
//        sqlSessionFactoryBean.setDataSource(dataSource);
//        LOG.debug(applicationContext.toString());
//
//        sqlSessionFactoryBean.setMapperLocations(applicationContext.getResources(mapperPath));
//        return sqlSessionFactoryBean.getObject();
//    }
    @Bean
    public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {
        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
        sqlSessionFactoryBean.setDataSource(dataSource);

        sqlSessionFactoryBean.setMapperLocations(
                applicationContext.getResources(mapperPath) // 실제 쿼리가 들어가는 경로
        );

        sqlSessionFactoryBean.setTypeAliasesPackage("com.eojin.board.web.mapper"); // Value Object를 선언해놓은 package경로
                                            // Mapper의 resultType, parameterType의 패키지 경로를 이름만으로 쓸 수 있도록
        return sqlSessionFactoryBean.getObject();
    }


    @Bean
    public SqlSessionTemplate sqlSessionTemplate(SqlSessionFactory sqlSessionFactory) {
        SqlSessionTemplate sqlSessionTemplate = new SqlSessionTemplate(sqlSessionFactory);
        sqlSessionTemplate.getConfiguration().setMapUnderscoreToCamelCase(true);
        return sqlSessionTemplate;
    }
}
*/
