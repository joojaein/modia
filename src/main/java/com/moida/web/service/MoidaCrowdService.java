package com.moida.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.moida.web.dao.CrowdDao;
import com.moida.web.dao.MemberDao;
import com.moida.web.entity.AdminMngCrowdView;
import com.moida.web.entity.Board;
import com.moida.web.entity.Crowd;
import com.moida.web.entity.CrowdBoard;
import com.moida.web.entity.CrowdMemberRole;
import com.moida.web.entity.CrowdNotice;
import com.moida.web.entity.CrowdSimpleDataView;
import com.moida.web.entity.CrowdView;
import com.moida.web.entity.LeaderMngChartView;
import com.moida.web.entity.RprtCrowd;
import com.moida.web.entity.Schedule;

@Service
public class MoidaCrowdService implements CrowdService {

	@Autowired
	private CrowdDao crowdDao;
	@Autowired
	private MemberDao memberDao;

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
	public int requestCrowdJoin(int crowdId, String memberId) {
		return memberDao.insertCrowdMember(crowdId, memberId);
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
	public List<CrowdSimpleDataView> getSimpleCategoryList(Integer categoryId, String word) {
		// TODO Auto-generated method stub
		System.out.println("getSimpleCategoryList");
		return crowdDao.getSimpleCategoryList(categoryId, word);
	}

	@Override
	public List<CrowdSimpleDataView> getSimpleCategoryTagList(Integer tagId, String word) {
		// TODO Auto-generated method stub
		return crowdDao.getSimpleCategoryTagList(tagId, word);
	}
	
	@Transactional 
	@Override
	public int createCrowd(Crowd newcrowd, String tagId) {

		
		crowdDao.insertCrowd(newcrowd);
		
		Crowd crowd = crowdDao.getLastCrowd();
		 System.out.println(crowd.getLeaderId()+","+crowd.getId()); 
		crowdDao.insertMemberCrowd(crowd.getLeaderId(), crowd.getId());
		//board insert    
		
		 System.out.println(tagId); 
		 String[] tags = tagId.split(","); 
		 for (String tagpar : tags) 
		 {
			 System.out.println(tagpar);
			 crowdDao.insertCrowdTag(crowd.getId(), tagpar); 
			 }
		 crowdDao.insertBoard("공지사항",0,crowd.getId());
		 crowdDao.insertBoard("자유게시판",1,crowd.getId());
		 crowdDao.insertBoard("사진첩",2,crowd.getId());
		 crowdDao.updateImg(crowd.getId());
		
		return crowd.getId();
	}

	@Override
	public List<CrowdSimpleDataView> getSearchResultList(String word) {
		System.out.println("서비스 :"+word);
		return crowdDao.getSearchResultList(word);
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

	public CrowdView getCrowdViews(Integer crowdId) {
		// TODO Auto-generated method stub
		return crowdDao.getCrowdViews(crowdId);
	}

	public CrowdView getCrowdTotalViews(Integer crowdId) {
		// TODO Auto-generated method stub
		return crowdDao.getCrowdTotalViews(crowdId);
	}

	@Override
	public List<LeaderMngChartView> getChartList(int crowdId) {
	      return crowdDao.getChartList(crowdId); 
	}

	@Override
	public int getCrowdGroupRole(int crowdId, String memberId) {
	      return crowdDao.getCrowdGroupRole(crowdId, memberId); 

	}

	@Override
	public int insertCrowdHit(int crowdId, String memberId) {
		if(crowdDao.getIsVisited(crowdId, memberId)==0) {
			return crowdDao.insertCrowdHit(crowdId, memberId); 
		}
		return 1;
	}

	
	@Override
	public int insertRprtCrowd(RprtCrowd rprtCrowd) {
		return crowdDao.insertRprtCrowd(rprtCrowd); 
	}
	

	@Override
	public int deleteRprtCrowd(RprtCrowd rprtCrowd) {
		return crowdDao.deleteRprtCrowd(rprtCrowd); 
	}
	
	@Override
	public int getRprtCrowdCnt(RprtCrowd rprtCrowd) {
		return crowdDao.getIsRprtedCrowd(rprtCrowd);
	}

}
