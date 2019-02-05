package com.moida.web.service;

import java.util.List;

import com.moida.web.entity.AdminMngCrowdView;
import com.moida.web.entity.Crowd;
import com.moida.web.entity.CrowdBoard;
import com.moida.web.entity.CrowdMemberRole;
import com.moida.web.entity.CrowdNotice;
import com.moida.web.entity.CrowdSimpleDataView;

public interface CrowdService {
	


	List<CrowdNotice> getNoticeList();
	List<CrowdMemberRole> getCrowdMemberRole();
	List<CrowdBoard> getBoardList();
	
	CrowdSimpleDataView getCrowdSimpleDataView();
	List<CrowdSimpleDataView> getSimpleList();
	List<CrowdSimpleDataView> getRealSimpleList(String id);
	List<CrowdSimpleDataView> getRequestSimpleList(String id);

	int getCrowdCount();
	Crowd getCrowd(int id);
	List<AdminMngCrowdView> getAdminMngCrowdList(String query, String updown, Integer min, Integer max);

	List<Integer> getCrowdTagIdList(int crowdId);

	int deleteCrowd(int id);
	int updateCrowd(Crowd crowd);


}
