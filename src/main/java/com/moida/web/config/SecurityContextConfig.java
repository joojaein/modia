package com.moida.web.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

//@Configuration
@EnableWebSecurity
public class SecurityContextConfig extends WebSecurityConfigurerAdapter{
	
	@Autowired
	private DataSource dataSource;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
 		http.authorizeRequests()
 			.antMatchers("/admin/**")
 			.hasAnyRole("ADMIN") 
 			.and()
 			.csrf()
			.disable();
		/*
	 		http.authorizeRequests()
		 
			.antMatchers("/admin/**")
				.hasAnyRole("ADMIN") 
			.antMatchers("/teacher/**") 
				.hasAnyRole("TEACHER")
			.and()
		.formLogin()
			.loginPage("/member/login")
			.loginProcessingUrl("/member/login")
			.defaultSuccessUrl("/index")
			.and()
		.logout()
			.logoutUrl("/member/logout")
			.logoutSuccessUrl("/index")
			.invalidateHttpSession(true)
			.and()
		.csrf()
			.disable();
		 */
	}
	

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		/*
		auth
			.jdbcAuthentication()
				.passwordEncoder(new BCryptPasswordEncoder())
				.dataSource(dataSource)
				.usersByUsernameQuery("SELECT ID, PWD AS PASSWORD, 1 ENABLED FROM MEMBER WHERE ID =?")
				.authoritiesByUsernameQuery("SELECT MEMBER_ID AS ID, ROLE_ID AS ROLEID FROM MEMBER_ROLE WHERE MEMBER_ID=?");
		*/
	}
}
