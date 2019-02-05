package com.moida.web.config;

import java.nio.charset.Charset;
import java.util.List;

import javax.servlet.MultipartConfigElement;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.UrlBasedViewResolver;
import org.springframework.web.servlet.view.tiles3.SimpleSpringPreparerFactory;
import org.springframework.web.servlet.view.tiles3.TilesConfigurer;
import org.springframework.web.servlet.view.tiles3.TilesView;

@Configuration
@ComponentScan(basePackages="com.moida.web.controller") 
@EnableWebMvc
public class ServletContextConfig implements WebMvcConfigurer{
	
	
	@Bean 
	public TilesConfigurer tilesConfigurer() {
		
		TilesConfigurer configurer = new TilesConfigurer();
		configurer.setDefinitions("/WEB-INF/tiles.xml");
		configurer.setPreparerFactoryClass(SimpleSpringPreparerFactory.class);
		return configurer;
	}
	
	
	@Bean 
	public UrlBasedViewResolver urlBasedViewResolver() {
		
		UrlBasedViewResolver resolver = new UrlBasedViewResolver();
		resolver.setViewClass(TilesView.class);
		resolver.setOrder(1);
		
		return resolver;
	}
	
	
	@Bean 
	public InternalResourceViewResolver internalResourceViewResolver() {
		
		InternalResourceViewResolver resolver = new InternalResourceViewResolver();
		resolver.setPrefix("/WEB-INF/views/");
		resolver.setSuffix(".jsp");
		resolver.setOrder(2);
		
		return resolver;
	}

	/*
	@Bean 
	public CommonsMultipartResolver commonsMultipartResolver() {
		
		CommonsMultipartResolver resolver = new CommonsMultipartResolver();
		resolver.setMaxUploadSize(1000*1024*1024);
		resolver.setMaxUploadSizePerFile(100*1024*1024);
		resolver.setDefaultEncoding("UTF-8");
		
		return resolver;
	}  */

	//test/////////////////////////////////////////
	@Bean
	public MultipartResolver multipartResolver() {
	    return new StandardServletMultipartResolver();
	}
	//////////////////////////////////////////////

	
	@Override
	public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
		
		StringHttpMessageConverter converter 
			= new StringHttpMessageConverter(Charset.forName("UTF-8"));
		
		converter.setWriteAcceptCharset(false);
		converters.add(converter);
		WebMvcConfigurer.super.configureMessageConverters(converters);
	}
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
	}
	
	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("redirect:/index");
		WebMvcConfigurer.super.addViewControllers(registry);
	}
	
	
	
	
}
