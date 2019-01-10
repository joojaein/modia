package com.moida.web.config;

import java.io.IOException;

import org.apache.commons.dbcp.BasicDataSource;
import org.apache.ibatis.io.Resources;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages= {"com.moida.web.dao","com.moida.web.service"}) 
public class ServiceContextConfig {
	
	/*
	  @Autowired ApplicationContext applicationContext;
	*/
	
	@Bean
	public BasicDataSource dataSource() {
		BasicDataSource dataSource = new BasicDataSource();
		/*
		dataSource.setDriverClassName("oracle.jdbc.driver.OracleDriver");
		dataSource.setUrl("jdbc:oracle:thin:@211.238.142.251:1521:orcl");
		dataSource.setUsername("c##sist");
		dataSource.setPassword("dclass");
		*/
		return dataSource;
	} 

	@Bean
	public SqlSessionFactoryBean sqlSessionFactoryBean() throws IOException {
		SqlSessionFactoryBean sqlSessionFactory= new SqlSessionFactoryBean();
		/*
		sqlSessionFactory.setDataSource(dataSource());
		sqlSessionFactory.setMapperLocations(applicationContext.getResources("classpath:com/newlecture/web/dao/mybatis/mapper/*.xml"));
		*/
		return sqlSessionFactory;
	}
	
	@Bean
	public SqlSessionTemplate sqlSession() throws IOException, Exception{
		SqlSessionTemplate sqlSession = new SqlSessionTemplate(sqlSessionFactoryBean().getObject());
		return sqlSession;
	}
	
}
