package com.moida.web.dao;

import java.util.List;

import com.moida.web.entity.Member;
import com.moida.web.entity.MemberRole;

public interface MemberDao {

	List<Member> getMemberList(String id);
	int insert(Member member);	
	int insertRole(MemberRole memberRole);	
	
   }
