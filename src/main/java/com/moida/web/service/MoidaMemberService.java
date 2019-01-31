package com.moida.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moida.web.dao.MemberDao;
import com.moida.web.entity.Member;
import com.moida.web.entity.MemberRole;


@Service
public class MoidaMemberService implements MemberService{
	
	@Autowired
	private MemberDao memberDao;

	@Override
	public int joinMember(Member member) {
		System.out.println("com.moida.web.service.MoidaMemberService - insertMember(Member member)");
		memberDao.insert(member);
		MemberRole memberRole = new MemberRole();
		memberRole.setMemberId(member.getId());
		memberRole.setRoleId("ROLE_MEMBER");
		memberDao.insertRole(memberRole);

		return 1;
	}

	@Override
	public Member getMember(String id) {
		// TODO Auto-generated method stub
		return memberDao.getMember(id);
	}


	
	
}
