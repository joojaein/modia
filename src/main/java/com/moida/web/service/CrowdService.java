package com.moida.web.service;

import java.util.List;

import com.moida.web.entity.Crowd;
import com.moida.web.entity.CrowdMemberRole;
import com.moida.web.entity.CrowdNotice;

public interface CrowdService {
	
	List<CrowdMemberRole> getCrowdMerberRole();

	CrowdSimpleDataView getCrowdSimpleDataView();
	

	List<CrowdNotice> getNoticeList();
	
}
