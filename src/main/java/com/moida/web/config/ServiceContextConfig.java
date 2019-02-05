package com.moida.web.config;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Properties;

import org.apache.commons.dbcp.BasicDataSource;
import org.apache.ibatis.io.Resources;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

@Configuration
@ComponentScan(basePackages= {"com.moida.web.dao","com.moida.web.service"}) 
public class ServiceContextConfig {
	
	@Autowired 
	ApplicationContext applicationContext;
	
	@Bean
	public BasicDataSource dataSource() {
<<<<<<< HEAD
		BasicDataSource dataSource = new BasicDataSource();
		dataSource.setDriverClassName("com.mysql.jdbc.Driver");

		// 외부용
=======
		BasicDataSource dataSource = new BasicDataSource();
		dataSource.setDriverClassName("com.mysql.jdbc.Driver");
		dataSource.setDriverClassName("com.mysql.jdbc.Driver");
>>>>>>> refs/remotes/origin/master
		dataSource.setUrl("jdbc:mysql://180.70.100.166:46603/moida?useUnicode=true&characterEncoding=utf8");
		
		//집용
		//dataSource.setUrl("jdbc:mysql://192.168.0.2:3306/moida?useUnicode=true&characterEncoding=utf8");
		
		dataSource.setUsername("moida");
		dataSource.setPassword("moida1234");	

		return dataSource;
	} 

	@Bean
	public SqlSessionFactoryBean sqlSessionFactoryBean() throws IOException {
		SqlSessionFactoryBean sqlSessionFactory= new SqlSessionFactoryBean();

		
		sqlSessionFactory.setDataSource(dataSource());
		sqlSessionFactory.setMapperLocations(applicationContext.getResources("classpath:com/moida/web/dao/mybatis/mapper/*.xml"));

		return sqlSessionFactory;
	}
	
	@Bean
	public SqlSessionTemplate sqlSession() throws IOException, Exception{
		SqlSessionTemplate sqlSession = new SqlSessionTemplate(sqlSessionFactoryBean().getObject());
		return sqlSession;
	}
	
	/*email 전송을 위한 SMTP 설정*/
	@Bean
	public JavaMailSender javaMailSender() {
		
		JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
		javaMailSender.setDefaultEncoding("UTF-8");
		javaMailSender.setHost("smtp.naver.com");
		javaMailSender.setPort(587);
		
		ArrayList<String> email = new ArrayList<String>();
		 try{
	            //파일 객체 생성
	            File file = new File("D:\\moida\\email.txt");
	            //입력 스트림 생성
	            FileReader filereader = new FileReader(file);
	            //입력 버퍼 생성
	            BufferedReader bufReader = new BufferedReader(filereader);
	            String line = "";
	            while((line = bufReader.readLine()) != null){
	            	email.add(line);
	            }     
	            bufReader.close();
	        }catch (FileNotFoundException e) {
	        }catch(IOException e){
	        }

		javaMailSender.setUsername(email.get(0));
		javaMailSender.setPassword(email.get(1));

		Properties javaMailProperties = new Properties();
		javaMailProperties.put("mail.transport.protocol", "smtp");
		javaMailProperties.put("mail.smtp.auth", true);
		javaMailProperties.put("mail.smtp.tarttls.enable", true);
		javaMailProperties.put("mail.debug", true);
		
		javaMailSender.setJavaMailProperties(javaMailProperties);
		return javaMailSender;
	}
	
}
