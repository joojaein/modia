package com.moida.web.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.moida.web.entity.FriendDataView;
import com.moida.web.entity.AdminMngMemberView;
import com.moida.web.entity.Member;
import com.moida.web.entity.MemberRole;

public interface MemberDao {

	Member getMember(String id);
	List<String> getMemberIdList(String email);
	
	int insert(Member member);	
	int insertRole(MemberRole memberRole);	
	
	
	// friend를 위해
	List<FriendDataView> getFriendData(@Param("id") String friendId);
	
	
	int update(Member member);	
	public int getMemberCount();
	public List<AdminMngMemberView> getAdminMngMemberList(String query, String updown, Integer min, Integer max);
	public int deleteMember(String id);

   }
