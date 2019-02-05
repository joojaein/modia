package com.moida.web.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.moida.web.entity.FriendDataView;
import com.moida.web.entity.Member;
import com.moida.web.entity.MemberRole;

public interface MemberDao {

	List<Member> getMemberList(String id);
	int insert(Member member);	
	int insertRole(MemberRole memberRole);	
	
	
	// friend를 위해
	List<FriendDataView> getFriendData(@Param("id") String friendId);
	
	
   }
