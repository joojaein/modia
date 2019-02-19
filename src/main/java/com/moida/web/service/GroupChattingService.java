package com.moida.web.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.moida.web.entity.GroupChattingListDataView;
import com.moida.web.entity.GroupImgsDataView;

public interface GroupChattingService 
{

	List<GroupChattingListDataView> groupChattingList(int groupId);
	
	// 그룹에 포함된 멤버의 이미지를 가져오는
	List<GroupImgsDataView> getGroupImgsData(@Param("groupId") int groupId);
	
	int insertGroupChatting(String myId,int groupId,String content);
	
}
