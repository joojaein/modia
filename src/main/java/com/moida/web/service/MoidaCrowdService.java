package com.moida.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moida.web.dao.CrowdDao;
import com.moida.web.entity.AdminMngCrowdView;
import com.moida.web.entity.Crowd;
import com.moida.web.entity.CrowdBoard;
import com.moida.web.entity.CrowdMemberRole;
import com.moida.web.entity.CrowdNotice;
import com.moida.web.entity.CrowdSimpleDataView;
import com.moida.web.entity.LeaderMngChartView;

@Service
public class MoidaCrowdService implements CrowdService {

	@Autowired
	private CrowdDao crowdDao;

	@Override
	public List<CrowdMemberRole> getCrowdMemberRole() {
		return crowdDao.getCrowdMemberRole();
	}

	@Override
	public List<CrowdNotice> getNoticeList() {
		return crowdDao.getNoticeList();
	}

	@Override
	public List<CrowdBoard> getBoardList() {
		// TODO Auto-generated method stub
		return crowdDao.getBoardList();
	}

	@Override
	public int insertBoardReg(CrowdBoard board) {
		// TODO Auto-generated method stub
		return crowdDao.insertBoardReg(board);
	}

	@Override
	public CrowdSimpleDataView getCrowdSimpleDataView() {
		return crowdDao.getCrowdSimpleDataView();
	}
	
	@Override
	public List<CrowdSimpleDataView> getSimpleList() {
		return crowdDao.getSimpleList();
	}
	
	@Override
	public List<CrowdSimpleDataView> getRealSimpleList(String id) {
		return crowdDao.getRealSimpleList(id);
	}

	@Override
	public List<CrowdSimpleDataView> getRequestSimpleList(String id) {
		return crowdDao.getRequestSimpleList(id);
	}
	
	@Override
	public int getCrowdCount() {
		return crowdDao.getCrowdCount();
	}
	
	@Override
	public Crowd getCrowd(int id) {
		return crowdDao.getCrowd(id);
	}
	
	@Override
	public List<AdminMngCrowdView> getAdminMngCrowdList(String query, String updown, Integer min, Integer max) {
		return crowdDao.getAdminMngCrowdList(query, updown, min, max);
	}
	
	@Override
	public List<Integer> getCrowdTagIdList(int crowdId) {
		// TODO Auto-generated method stub
		return crowdDao.getCrowdTagIdList(crowdId);
	}

	@Override
	public int deleteCrowd(int id) {
		return crowdDao.deleteCrowd(id);
	}

	@Override
	public int updateCrowd(Crowd crowd) {
		return crowdDao.updateCrowd(crowd);
	}

	@Override
	public List<LeaderMngChartView> getChartList(int crowdId) {
		return crowdDao.getChartList(crowdId);
	}

	@Override
	public List<CrowdSimpleDataView> getSimpleCategoryList(Integer categoryId) {
		// TODO Auto-generated method stub
		System.out.println(crowdDao.getSimpleCategoryList(categoryId));
		return crowdDao.getSimpleCategoryList(categoryId);
	}

	@Override
	public List<CrowdSimpleDataView> getSimpleCategoryTagList(Integer tagId) {
		// TODO Auto-generated method stub
		return crowdDao.getSimpleCategoryTagList(tagId);
	}

	
	
}
