package com.moida.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moida.web.dao.GroupChattingDao;
import com.moida.web.entity.GroupChattingListDataView;
import com.moida.web.entity.GroupImgsDataView;

@Service
public class MoidaGroupChattingService implements GroupChattingService
{

	@Autowired
	private GroupChattingDao groupChattingDao;
	
	@Override
	public int insertGroupChatting(String myId, int groupId, String content) {
		// TODO Auto-generated method stub
		
		
		return groupChattingDao.insert(myId, groupId, content);
	}

	@Override
	public List<GroupChattingListDataView> groupChattingList(int groupId) {
		// TODO Auto-generated method stub
		return groupChattingDao.getGroupChattingList(groupId);
	}

	@Override
	public List<GroupImgsDataView> getGroupImgsData(int groupId) 
	{
		// TODO Auto-generated method stub
		return groupChattingDao.getGroupImgsData(groupId);
	}

}
