package com.moida.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moida.web.dao.CrowdDao;
import com.moida.web.entity.AdminMngCrowdView;
import com.moida.web.entity.Board;
import com.moida.web.entity.Crowd;
import com.moida.web.entity.CrowdBoard;
import com.moida.web.entity.CrowdMemberRole;
import com.moida.web.entity.CrowdNotice;
import com.moida.web.entity.CrowdSimpleDataView;
import com.moida.web.entity.LeaderMngChartView;
import com.moida.web.entity.Schedule;



@Service
public class MoidaCrowdService implements CrowdService {

	@Autowired
	private CrowdDao crowdDao;

	@Override
	public List<CrowdMemberRole> getCrowdMemberRole(int id) {
		return crowdDao.getCrowdMemberRole(id);
	}

	@Override
	public List<CrowdNotice> getNoticeList(Integer crowdId) {
		return crowdDao.getNoticeList(crowdId);
	}

	@Override
	public List<CrowdBoard> getBoardList(Integer crowdId) {
		// TODO Auto-generated method stub
		return crowdDao.getBoardList(crowdId);
	}

	@Override
	public int insertBoardReg(CrowdBoard board) {
		// TODO Auto-generated method stub
		return crowdDao.insertBoardReg(board);
	}

	@Override
	public CrowdSimpleDataView getCrowdSimpleDataView(int id) {
		return crowdDao.getCrowdSimpleDataView(id);
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
	public List<CrowdSimpleDataView> getRankSimpleList() {
		return crowdDao.getRankSimpleList();
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



	@Override
	public CrowdBoard getBoardList(int id) {
		// TODO Auto-generated method stub
		return crowdDao.getBoardList(id);
	}

	@Override
	public Board getCrowdBoard(Integer type, Integer crowdId) {
		// TODO Auto-generated method stub
		return crowdDao.getCrowdBoard(type, crowdId);
	}

	public CrowdNotice getNotice(Integer crowdId) {
		// TODO Auto-generated method stub
		return crowdDao.getNotice(crowdId);
	}

	public CrowdBoard getBoards(Integer crowdId) {
		// TODO Auto-generated method stub
		return crowdDao.getBoards(crowdId);
	}

	public List<Schedule> getScheduleList(Integer crowdId) {
		// TODO Auto-generated method stub
		return crowdDao.getScheduleList(crowdId);
	}

	public int insertSchedule(Schedule schedule) {
		// TODO Auto-generated method stub
		return crowdDao.insertSchedule(schedule);
	}

	public int deleteCalendarList(int id) {
		// TODO Auto-generated method stub
		return crowdDao.deleteCalendarList(id);
	}


	public int updateCalendarList(Schedule schedule) {
		// TODO Auto-generated method stub
		return crowdDao.updateCalendarList(schedule);
	}

}
