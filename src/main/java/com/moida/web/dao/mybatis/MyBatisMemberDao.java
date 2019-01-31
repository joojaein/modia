package com.moida.web.dao.mybatis;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.MemberDao;
import com.moida.web.entity.Member;
import com.moida.web.entity.MemberRole;

@Repository
public class MyBatisMemberDao implements MemberDao{
	
	@Autowired
	private SqlSessionTemplate session;
	
	@Override
	public int insert(Member member) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		System.out.println("com.moida.web.dao.mybatis.MyBatisMember - insert(Member member) : "+ member.toString() );
		return memberDao.insert(member);
	}

	@Override
	public int insertRole(MemberRole memberRole) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		System.out.println("com.moida.web.dao.mybatis.MyBatisMember - insertRole(MemberRole memberRole)");
		return memberDao.insertRole(memberRole);
	}

	@Override
	public Member getMember(String id) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		return memberDao.getMember(id);
	}


	
}
