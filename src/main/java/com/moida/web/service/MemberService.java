package com.moida.web.service;


import java.util.List;

import com.moida.web.entity.AdminMngMemberView;
import com.moida.web.entity.LeaderMngMemberView;
import com.moida.web.entity.LeaderMngRequestMemberView;
import com.moida.web.entity.Member;

public interface MemberService {
	
	Member getMember(String id);
	List<String> getMemberIdList(String email);

	int joinMember(Member member);
	int update(Member member);

	int getMemberCount();
	List<AdminMngMemberView> getAdminMngMemberList(String query, String updown, Integer min, Integer max);
	
	int deleteMember(String id);
	
	int getLeaderMngRealMemberCnt(int crowdId);
	int getLeaderMngRequestMemberCnt(int crowdId);
	List<LeaderMngMemberView> getRealLeaderMngMemberList(String query, String updown, Integer min, Integer max, int crowdId);
	List<LeaderMngMemberView> getRequestLeaderMngMemberList(String query, String updown, Integer min, Integer max, int crowdId);
	List<LeaderMngRequestMemberView> getLeaderMngRequestMemberList(String query, String updown, Integer min, Integer max, int crowdId);

	int updateRequestCrowdMember(int crowdId, String memberId);	
	int updateRealCrowdMember(int crowdId, String memberId, int groupRole);	
	int deleteCrowdMember(int crowdId, String memberId);	

}
