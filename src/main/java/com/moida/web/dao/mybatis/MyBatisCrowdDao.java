package com.moida.web.dao.mybatis;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.CrowdDao;
import com.moida.web.entity.AdminMngCrowdView;
import com.moida.web.entity.Crowd;
import com.moida.web.entity.CrowdBoard;
import com.moida.web.entity.CrowdMemberRole;
import com.moida.web.entity.CrowdNotice;
import com.moida.web.entity.CrowdSimpleDataView;
import com.moida.web.entity.LeaderMngChartView;

@Repository
public class MyBatisCrowdDao implements CrowdDao{

	@Autowired 
	private SqlSessionTemplate session;
	
	
	@Override
	public List<CrowdMemberRole> getCrowdMemberRole() 
	{
		CrowdDao memberDao = session.getMapper(CrowdDao.class);
		return memberDao.getCrowdMemberRole();
	}

	@Override
	public List<CrowdNotice> getNoticeList() {
		CrowdDao memberDao = session.getMapper(CrowdDao.class);
		return memberDao.getNoticeList();
	}

	@Override
	public List<CrowdBoard> getBoradList() {
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.getBoradList();
	}
	
	@Override
	public CrowdSimpleDataView getCrowdSimpleDataView() {
		CrowdDao memberDao = session.getMapper(CrowdDao.class);
		return memberDao.getCrowdSimpleDataView();
	}


	@Override
	public List<CrowdSimpleDataView> getSimpleList() {
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.getSimpleList();
	}
	
	@Override
	public List<CrowdSimpleDataView> getRealSimpleList(String id) {
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.getRealSimpleList(id);
	}


	@Override
	public List<CrowdSimpleDataView> getRequestSimpleList(String id) {
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.getRequestSimpleList(id);
	}

	@Override
	public int getCrowdCount() {
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.getCrowdCount();
	}

	@Override
	public Crowd getCrowd(int id) {
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.getCrowd(id);
	}
	
	@Override
	public List<AdminMngCrowdView> getAdminMngCrowdList(String query, String updown, Integer min, Integer max) {
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.getAdminMngCrowdList(query, updown, min, max);
	}

	@Override
	public List<Integer> getCrowdTagIdList(int crowdId) {
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.getCrowdTagIdList(crowdId);
	}
	
	@Override
	public int deleteCrowd(int id) {
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.deleteCrowd(id);
	}

	@Override
	public int updateCrowd(Crowd crowd) {
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.updateCrowd(crowd);
	}

	@Override
	public List<LeaderMngChartView> getChartList(int crowdId) {
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.getChartList(crowdId);
	}




}
