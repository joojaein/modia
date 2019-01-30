package com.moida.web.dao.mybatis;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.CrowdDao;
import com.moida.web.entity.Crowd;
import com.moida.web.entity.CrowdMemberRole;
import com.moida.web.entity.CrowdNotice;
import com.moida.web.service.CrowdSimpleDataView;

@Repository
public class MyBatisCrowdDao implements CrowdDao{

	@Autowired 
	private SqlSessionTemplate session;
	
	
	@Override
	public List<CrowdMemberRole> getCrowdMerberRole() 
	{
		// TODO Auto-generated method stub
		CrowdDao memberDao = session.getMapper(CrowdDao.class);
		
		return memberDao.getCrowdMerberRole();
	}


	@Override
	public List<CrowdNotice> getNoticeList() {
		// TODO Auto-generated method stub
		CrowdDao memberDao = session.getMapper(CrowdDao.class);
		
		return memberDao.getNoticeList();
	}


	@Override
	public CrowdSimpleDataView getCrowdSimpleDateView() {
		// TODO Auto-generated method stub
		CrowdDao memberDao = session.getMapper(CrowdDao.class);
		return memberDao.getCrowdSimpleDateView();
	}


	



}
