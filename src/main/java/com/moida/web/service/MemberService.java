package com.moida.web.service;

import java.util.List;

import com.moida.web.entity.Member;

public interface MemberService {
	
	int joinMember(Member member);
	List<Member> getMemberList(String id);

}
