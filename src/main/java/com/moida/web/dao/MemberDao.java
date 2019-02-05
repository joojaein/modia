package com.moida.web.dao;


import java.util.List;

import com.moida.web.entity.AdminMngMemberView;
import com.moida.web.entity.Member;
import com.moida.web.entity.MemberRole;

public interface MemberDao {

	Member getMember(String id);
	List<String> getMemberIdList(String email);
	
	int insert(Member member);	
	int insertRole(MemberRole memberRole);	
	
	int update(Member member);	
	public int getMemberCount();
	public List<AdminMngMemberView> getAdminMngMemberList(String query, String updown, Integer min, Integer max);
	public int deleteMember(String id);

   }
