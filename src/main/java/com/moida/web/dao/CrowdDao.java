package com.moida.web.dao;

import java.util.List;

import com.moida.web.entity.CrowdBoard;
import com.moida.web.entity.CrowdMemberRole;
import com.moida.web.entity.CrowdNotice;
import com.moida.web.entity.CrowdSimpleDataView;

public interface CrowdDao {
	
	public List<CrowdMemberRole> getCrowdMemberRole();
	public List<CrowdSimpleDataView> getSimpleList();
	public CrowdSimpleDataView getCrowdSimpleDataView();
	public List<CrowdNotice> getNoticeList();
	public List<CrowdBoard> getBoradList();
		
}
