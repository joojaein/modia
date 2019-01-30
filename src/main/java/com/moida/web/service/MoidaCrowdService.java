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
	public List<CrowdMemberRole> getCrowdMemberRole() {
		// TODO Auto-generated method stub
		return crowdDao.getCrowdMemberRole();
	}

	@Override
	public CrowdSimpleDataView getCrowdSimpleDataView() {
		// TODO Auto-generated method stub
		return crowdDao.getCrowdSimpleDataView();
	}

	@Override
	public List<CrowdNotice> getNoticeList() {
		// TODO Auto-generated method stub
		return crowdDao.getNoticeList();
	}


}
