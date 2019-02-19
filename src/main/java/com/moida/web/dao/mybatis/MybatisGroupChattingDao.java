package com.moida.web.dao.mybatis;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.GroupChattingDao;
import com.moida.web.entity.GroupChattingListDataView;
import com.moida.web.entity.GroupImgsDataView;

@Repository
public class MybatisGroupChattingDao implements GroupChattingDao 
{

	@Autowired
	private SqlSessionTemplate session;
	
	@Override
	public int insert(String myId, int groupId, String content) 
	{
		// TODO Auto-generated method stub
		GroupChattingDao groupChattingDao = session.getMapper(GroupChattingDao.class);
		
		
		return groupChattingDao.insert(myId, groupId, content);
	}

	@Override
	public List<GroupChattingListDataView> getGroupChattingList(int gourpId) 
	{
		// TODO Auto-generated method stub
		GroupChattingDao groupChattingDao = session.getMapper(GroupChattingDao.class);
		
		
		return groupChattingDao.getGroupChattingList(gourpId);
	}

	@Override
	public List<GroupImgsDataView> getGroupImgsData(int groupId) 
	{
		// TODO Auto-generated method stub
		
		GroupChattingDao groupChattingDao = session.getMapper(GroupChattingDao.class);
		
		return groupChattingDao.getGroupImgsData(groupId);
	}

}
