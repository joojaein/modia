package com.moida.web.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

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

public interface CrowdDao {

	public List<CrowdMemberRole> getCrowdMemberRole(int id);
	public List<CrowdSimpleDataView> getSimpleList();
	public List<CrowdSimpleDataView> getRealSimpleList(String id);
	public List<CrowdSimpleDataView> getRequestSimpleList(String id);
	public List<CrowdSimpleDataView> getSimpleCategoryList(Integer categoryId,@Param("word") String word);
	public List<CrowdSimpleDataView> getSimpleCategoryTagList(Integer tagId,@Param("word") String word);
	public CrowdSimpleDataView getCrowdSimpleDataView(int id);
	public List<CrowdNotice> getNoticeList(Integer crowdId);
	public List<CrowdBoard> getBoardList(Integer crowdId);
	public CrowdBoard getBoardList(int id);
	public int insertBoardReg(CrowdBoard board);

	public List<CrowdSimpleDataView> getRankSimpleList();
	
	public int getCrowdCount();
	public Crowd getCrowd(int id);

	public List<AdminMngCrowdView> getAdminMngCrowdList(String query, String updown, Integer min, Integer max);

	public List<Integer> getCrowdTagIdList(int crowdId);
	public int deleteCrowd(int id);
	public int updateCrowd(Crowd crowd);
	
	public int insertCrowd(Crowd newcrowd);
	public int insertMemberCrowd(String leaderId, Integer crowdId);
	public int insertCrowdTag(Integer crowdId, String tagId);
	public Crowd getLastCrowd();
	public int insertBoard(String name, Integer type, Integer crowdId);
	public List<CrowdSimpleDataView> getSearchResultList(@Param("word") String word); 
		
	public List<LeaderMngChartView> getChartList(int crowdId);
	public Board getCrowdBoard(Integer type, Integer crowdId);
	public CrowdNotice getNotice(Integer crowdId);
	public List<Schedule> getScheduleList(Integer crowdId);
	public int insertSchedule(Schedule schedule);
	public int deleteCalendarList(int id);
	public int updateCalendarList(Schedule schedule);
	public CrowdView getCrowdViews(Integer crowdId);
	public CrowdView getCrowdTotalViews(Integer crowdId);
	
	public int getCrowdGroupRole(@Param("crowdId") int crowdId, @Param("memberId") String memberId);
	public int getIsVisited(@Param("crowdId") int crowdId, @Param("memberId") String memberId);
	public int insertCrowdHit(@Param("crowdId") int crowdId, @Param("memberId") String memberId);

	public int getIsRprtedCrowd(RprtCrowd rprtCrowd);
	public int insertRprtCrowd(RprtCrowd rprtCrowd);
	public int deleteRprtCrowd(RprtCrowd rprtCrowd);
	
	public int updateImg(Integer id);
	
}
