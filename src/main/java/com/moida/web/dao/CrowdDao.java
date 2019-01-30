package com.moida.web.dao;

import java.util.List;

import com.moida.web.entity.CrowdMemberRole;
import com.moida.web.entity.CrowdNotice;
import com.moida.web.entity.CrowdSimpleDataView;

public interface CrowdDao {
	
		public List<CrowdMemberRole> getCrowdMerberRole();
		public CrowdSimpleDataView getCrowdSimpleDateView();
		public List<CrowdNotice> getNoticeList();
		List<CrowdSimpleDataView> getSimpleList();
		
		
}
