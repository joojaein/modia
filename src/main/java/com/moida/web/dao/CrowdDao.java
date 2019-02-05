package com.moida.web.dao;

import java.util.List;

import com.moida.web.entity.AdminMngCrowdView;
import com.moida.web.entity.Crowd;
import com.moida.web.entity.CrowdBoard;
import com.moida.web.entity.CrowdMemberRole;
import com.moida.web.entity.CrowdNotice;
import com.moida.web.entity.CrowdSimpleDataView;

public interface CrowdDao {
	
	public List<CrowdMemberRole> getCrowdMemberRole();
	public List<CrowdSimpleDataView> getSimpleList();
	public List<CrowdSimpleDataView> getRealSimpleList(String id);
	public List<CrowdSimpleDataView> getRequestSimpleList(String id);
	public CrowdSimpleDataView getCrowdSimpleDataView();
	public List<CrowdNotice> getNoticeList();
	public List<CrowdBoard> getBoradList();
		
	public int getCrowdCount();
	public Crowd getCrowd(int id);
	
	public List<AdminMngCrowdView> getAdminMngCrowdList(String query, String updown, Integer min, Integer max);
	
	public List<Integer> getCrowdTagIdList(int crowdId);
	public int deleteCrowd(int id);
	public int updateCrowd(Crowd crowd);
}
