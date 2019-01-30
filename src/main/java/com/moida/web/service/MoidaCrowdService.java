package com.moida.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moida.web.dao.CrowdDao;
import com.moida.web.entity.CrowdMemberRole;
import com.moida.web.entity.CrowdNotice;
import com.moida.web.entity.CrowdSimpleDataView;

@Service
public class MoidaCrowdService implements CrowdService {

	@Autowired
	private CrowdDao crowdDao;

	@Override
	public List<CrowdSimpleDataView> getSimpleList() {
		System.out.println("web.service.MoidaCrowdService - List<CrowdSimpleDataView> getSimpleList()");
		return crowdDao.getSimpleList();
	}
	
	@Override
	public List<CrowdMemberRole> getCrowdMerberRole(){
		return crowdDao.getCrowdMerberRole();
	}
	
	@Override
	public CrowdSimpleDataView getCrowdSimpleDataView() {
	
		return crowdDao.getCrowdSimpleDateView();
	}
	

	@Override
	public List<CrowdNotice> getNoticeList() {
		return crowdDao.getNoticeList();
	}
}
