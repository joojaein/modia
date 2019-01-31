package com.moida.web.dao.mybatis;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.CrowdDao;
import com.moida.web.entity.CrowdBoard;
import com.moida.web.entity.CrowdMemberRole;
import com.moida.web.entity.CrowdNotice;
import com.moida.web.entity.CrowdSimpleDataView;

@Repository
public class MyBatisCrowdDao implements CrowdDao{

	@Autowired 
	private SqlSessionTemplate session;
	
	
	@Override
	public List<CrowdMemberRole> getCrowdMemberRole() 
	{
		// TODO Auto-generated method stub
		CrowdDao memberDao = session.getMapper(CrowdDao.class);
		
		return memberDao.getCrowdMemberRole();
	}


	@Override
	public List<CrowdNotice> getNoticeList() {
		// TODO Auto-generated method stub
		CrowdDao memberDao = session.getMapper(CrowdDao.class);
		
		return memberDao.getNoticeList();
	}


	@Override
	public CrowdSimpleDataView getCrowdSimpleDataView() {
		// TODO Auto-generated method stub
		CrowdDao memberDao = session.getMapper(CrowdDao.class);
		return memberDao.getCrowdSimpleDataView();
	}


	@Override
	public List<CrowdSimpleDataView> getSimpleList() {
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		System.out.println("com.moida.web.dao.mybatis.MyBatisCrowd - List<CrowdSimpleDataView> getSimpleList()");
		return crowdDao.getSimpleList();
	}


	@Override
	public List<CrowdBoard> getBoradList() {
		// TODO Auto-generated method stub
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.getBoradList();
	}


	



}
