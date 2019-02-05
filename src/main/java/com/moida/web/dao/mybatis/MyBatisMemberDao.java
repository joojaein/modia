package com.moida.web.dao.mybatis;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.CrowdDao;
import com.moida.web.dao.MemberDao;
import com.moida.web.entity.AdminMngCrowdView;
import com.moida.web.entity.AdminMngMemberView;
import com.moida.web.entity.Member;
import com.moida.web.entity.MemberRole;

@Repository
public class MyBatisMemberDao implements MemberDao{
	
	@Autowired
	private SqlSessionTemplate session;
	
	@Override
	public int insert(Member member) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		return memberDao.insert(member);
	}

	@Override
	public int insertRole(MemberRole memberRole) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		return memberDao.insertRole(memberRole);
	}

	@Override
	public Member getMember(String id) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		return memberDao.getMember(id);
	}

	@Override
	public int update(Member member) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		return memberDao.update(member);
	}

	@Override
	public List<String> getMemberIdList(String email) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		return memberDao.getMemberIdList(email);
	}

	@Override
	public int getMemberCount() {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		return memberDao.getMemberCount();
	}
	
	@Override
	public List<AdminMngMemberView> getAdminMngMemberList(String query, String updown, Integer min, Integer max) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		return memberDao.getAdminMngMemberList(query, updown, min, max);
	}

	@Override
	public int deleteMember(String id) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		return memberDao.deleteMember(id);
	}
	
}
