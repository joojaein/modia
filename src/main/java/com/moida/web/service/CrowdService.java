package com.moida.web.service;

import java.util.List;

import com.moida.web.entity.CrowdMemberRole;
import com.moida.web.entity.CrowdNotice;
import com.moida.web.entity.CrowdSimpleDataView;

public interface CrowdService {
	
	List<CrowdMemberRole> getCrowdMerberRole();
	CrowdSimpleDataView getCrowdSimpleDataView();
	List<CrowdNotice> getNoticeList();
	
	List<CrowdSimpleDataView> getSimpleList();
	
	
}
