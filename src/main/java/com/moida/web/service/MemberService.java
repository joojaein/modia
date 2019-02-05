package com.moida.web.service;


import java.util.List;

import com.moida.web.entity.AdminMngMemberView;
import com.moida.web.entity.Member;

public interface MemberService {
	
	Member getMember(String id);
	List<String> getMemberIdList(String email);

	int joinMember(Member member);
	int update(Member member);

	int getMemberCount();
	List<AdminMngMemberView> getAdminMngMemberList(String query, String updown, Integer min, Integer max);
	
	int deleteMember(String id);

}
