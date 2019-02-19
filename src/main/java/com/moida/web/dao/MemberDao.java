package com.moida.web.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.moida.web.entity.AdminMngMemberView;
import com.moida.web.entity.LeaderMngMemberView;
import com.moida.web.entity.LeaderMngRequestMemberView;
import com.moida.web.entity.Member;
import com.moida.web.entity.MemberRole;

public interface MemberDao {

	Member getMember(@Param("id") String id);
	List<String> getMemberIdList(String email);
	
	int insert(Member member);	
	int insertRole(MemberRole memberRole);	
	
	int update(Member member);	
	public int getMemberCount();
	public List<AdminMngMemberView> getAdminMngMemberList(String query, String updown, Integer min, Integer max);
	public int deleteMember(String id);
	
	public int getLeaderMngRealMemberCnt(int crowdId);
	public int getLeaderMngRequestMemberCnt(int crowdId);
	
	public List<LeaderMngMemberView> getRealLeaderMngMemberList(String query, String updown, Integer min, Integer max, int crowdId);
	public List<LeaderMngMemberView> getRequestLeaderMngMemberList(String query, String updown, Integer min, Integer max, int crowdId);
	public List<LeaderMngRequestMemberView> getLeaderMngRequestMemberList(String query, String updown, Integer min, Integer max, int crowdId);

	public int insertCrowdMember(int crowdId, String memberId);
	public int updateRequestCrowdMember(int crowdId, String memberId);	
	public int updateRealCrowdMember(int crowdId, String memberId, int groupRole);	
	public int deleteCrowdMember(int crowdId, String memberId);

   }
