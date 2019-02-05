package com.moida.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moida.web.dao.MemberDao;
import com.moida.web.entity.AdminMngCrowdView;
import com.moida.web.entity.AdminMngMemberView;
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
		return memberDao.getMember(id);
	}

	@Override
	public int update(Member member) {
		return memberDao.update(member);
	}

	@Override
	public List<String> getMemberIdList(String email) {
		return memberDao.getMemberIdList(email);
	}

	@Override
	public int getMemberCount() {
		return memberDao.getMemberCount();
	}

	
	@Override
	public List<AdminMngMemberView> getAdminMngMemberList(String query, String updown, Integer min, Integer max) {
		return memberDao.getAdminMngMemberList(query, updown, min, max);
	}
	
	@Override
	public int deleteMember(String id) {
		return memberDao.deleteMember(id);
	}
}
