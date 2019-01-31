package com.moida.web.service;


import com.moida.web.entity.Member;

public interface MemberService {
	
	int joinMember(Member member);
	Member getMember(String id);
}
