package com.moida.web.dao.mybatis;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

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

@Repository
public class MyBatisCrowdDao implements CrowdDao{

	@Autowired 
	private SqlSessionTemplate session;
	
	
	@Override
	public List<CrowdMemberRole> getCrowdMemberRole(int id) 
	{
		CrowdDao memberDao = session.getMapper(CrowdDao.class);
		return memberDao.getCrowdMemberRole(id);
	}

	@Override
	public List<CrowdNotice> getNoticeList(Integer crowdId) {
		CrowdDao memberDao = session.getMapper(CrowdDao.class);
		return memberDao.getNoticeList(crowdId);
	}

	@Override
	public List<CrowdBoard> getBoardList(Integer crowdId) {
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.getBoardList(crowdId);
	}
	
	@Override
	public CrowdSimpleDataView getCrowdSimpleDataView(int id) {
		CrowdDao memberDao = session.getMapper(CrowdDao.class);
		return memberDao.getCrowdSimpleDataView(id);
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
	public List<CrowdSimpleDataView> getRankSimpleList() {
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.getRankSimpleList();
	}
		
	@Override
	public int getCrowdCount() {
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.getCrowdCount();
	}

	@Override
	public int insertBoardReg(CrowdBoard board) {
		// TODO Auto-generated method stub
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.insertBoardReg(board);
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


	@Override
	public List<CrowdSimpleDataView> getSimpleCategoryList(Integer categoryId, String word) {
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		System.out.println("심플 카테고리1!!!!");
		return crowdDao.getSimpleCategoryList(categoryId, word);
	}


	@Override
	public List<CrowdSimpleDataView> getSimpleCategoryTagList(Integer tagId, String word) {
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.getSimpleCategoryTagList(tagId, word);
	}

	@Override
	public int insertCrowd(Crowd newcrowd) {
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.insertCrowd(newcrowd);
	}

	@Override
	public int insertMemberCrowd(String leaderId, Integer crowdId) {
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.insertMemberCrowd(leaderId, crowdId);
	}
	

	@Override
	public Crowd getLastCrowd() {
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.getLastCrowd();
	}

	@Override
	public int insertCrowdTag(Integer crowdId, String tagId) {
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.insertCrowdTag(crowdId, tagId);
	}

	@Override
	public int insertBoard(String name, Integer type, Integer crowdId) {
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.insertBoard(name, type, crowdId);
	}

	@Override
	public List<CrowdSimpleDataView> getSearchResultList(String word) {
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		System.out.println("메퍼당");
		List<CrowdSimpleDataView> temp = crowdDao.getSearchResultList(word);
		System.out.println("메퍼 템프"+temp);
		return crowdDao.getSearchResultList(word);
	}

	public CrowdBoard getBoardList(int id) {
		// TODO Auto-generated method stub
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.getBoardList(id);
	}

	@Override
	public Board getCrowdBoard(Integer type, Integer crowdId) {
		// TODO Auto-generated method stub
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.getCrowdBoard(type, crowdId);
	}

	@Override
	public CrowdNotice getNotice(Integer crowdId) {
		// TODO Auto-generated method stub
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.getNotice(crowdId);
	}

	@Override
	public CrowdBoard getBoards(Integer crowdId) {
		// TODO Auto-generated method stub
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.getBoards(crowdId);
	}

	@Override
	public List<Schedule> getScheduleList(Integer crowdId) {
		// TODO Auto-generated method stub
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.getScheduleList(crowdId);
	}

	@Override
	public int insertSchedule(Schedule schedule) {
		// TODO Auto-generated method stub
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.insertSchedule(schedule);
	}

	@Override
	public int deleteCalendarList(int id) {
		// TODO Auto-generated method stub
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.deleteCalendarList(id);
	}

	@Override
	public int updateCalendarList(Schedule schedule) {
		// TODO Auto-generated method stub
		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		return crowdDao.updateCalendarList(schedule);
	}

}
