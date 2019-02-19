package com.moida.web.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.moida.web.entity.GroupChattingListDataView;
import com.moida.web.entity.GroupImgsDataView;

public interface GroupChattingDao 
{
	// 채팅 리스트를 가져오는 
	List<GroupChattingListDataView> getGroupChattingList(@Param("groupId") int groupId);
	
	
	// 그룹에 포함된 멤버의 이미지를 가져오는
	List<GroupImgsDataView> getGroupImgsData(@Param("groupId") int groupId);
	
	int insert(@Param("myId") String myId,
			@Param("groupId") int groupId,
			@Param("content") String content);
	
}
