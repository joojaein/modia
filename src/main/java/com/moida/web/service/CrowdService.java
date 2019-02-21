package com.moida.web.service;

import java.util.List;

import com.moida.web.entity.AdminMngCrowdView;
import com.moida.web.entity.Board;
import com.moida.web.entity.Crowd;
import com.moida.web.entity.CrowdBoard;
import com.moida.web.entity.CrowdMemberRole;
import com.moida.web.entity.CrowdNotice;
import com.moida.web.entity.CrowdSimpleDataView;
import com.moida.web.entity.CrowdView;
import com.moida.web.entity.LeaderMngChartView;
import com.moida.web.entity.MemberInfoListView;
import com.moida.web.entity.RprtCrowd;
import com.moida.web.entity.Schedule;

public interface CrowdService {

	List<CrowdNotice> getNoticeList(Integer crowdId);
	List<CrowdMemberRole> getCrowdMemberRole(int id);
	List<CrowdBoard> getBoardList(Integer crowdId);
	Board getCrowdBoard(Integer type, Integer crowdId);
	CrowdBoard getBoardList(int id);
	CrowdSimpleDataView getCrowdSimpleDataView(int id);
	List<CrowdSimpleDataView> getSimpleList();
	List<CrowdSimpleDataView> getRealSimpleList(String id);
	List<CrowdSimpleDataView> getRequestSimpleList(String id);
	List<CrowdSimpleDataView> getRankSimpleList();
	
	int requestCrowdJoin(int crowdId, String memberId);

	int getCrowdCount(); 
	Crowd getCrowd(int id);
	List<AdminMngCrowdView> getAdminMngCrowdList(String query, String updown, Integer min, Integer max);

	List<Integer> getCrowdTagIdList(int crowdId);
	
	int deleteCrowd(int id);
	int updateCrowd(Crowd crowd);

	List<CrowdSimpleDataView> getSimpleCategoryList(Integer categoryId, String word);
	List<CrowdSimpleDataView> getSimpleCategoryTagList(Integer tagId, String word);
	
	int createCrowd(Crowd newcrowd, String tagId);
	
	List<CrowdSimpleDataView> getSearchResultList(String word);
	int insertBoardReg(CrowdBoard board);
	List<LeaderMngChartView> getChartList(int crowdId);
	int insertSchedule(Schedule schedule);
	int deleteCalendarList(int id);
	
	int getCrowdGroupRole(int crowdId, String memberId);
	int insertCrowdHit(int crowdId, String memberId);
	int insertRprtCrowd(RprtCrowd rprtCrowd);
	int deleteRprtCrowd(RprtCrowd rprtCrowd);
	int getRprtCrowdCnt(RprtCrowd rprtCrowd);
	CrowdNotice getNotice(Integer crowdId);
	List<Schedule> getScheduleList(Integer crowdId);
	int updateCalendarList(Schedule schedule);
	CrowdView getCrowdViews(Integer crowdId);
	CrowdView getCrowdTotalViews(Integer crowdId);
	List<MemberInfoListView> getMemberInfoListView(Integer crowdId);
}
