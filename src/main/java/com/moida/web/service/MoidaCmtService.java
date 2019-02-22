package com.moida.web.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.google.gson.JsonElement;
import com.moida.web.dao.CmtDao;
import com.moida.web.entity.Cmt;
import com.moida.web.entity.CmtListView;
import com.moida.web.entity.Cmtcnt;

@Service
public class MoidaCmtService implements CmtService {
	
	@Autowired
	private CmtDao cmtDao;
	
	@Override
	public List<CmtListView> getCmtList(Integer postsId) {
		// TODO Auto-generated method stub
		return cmtDao.getCmtList(postsId);
	}
	
	@Override
	@Transactional
	public Cmt insertCmt(Cmt cmt) {
		// TODO Auto-generated method stub
		cmtDao.insertCmt(cmt);
		
		return cmtDao.getCmtLastregDate(cmt.getPostsId());
	}
	
	@Override
	public Cmtcnt getCmthit(Integer postsId) {
		// TODO Auto-generated method stub
		return cmtDao.getCmthit(postsId);
	}
	
	@Override
	public int deleteCmt(Integer id) {
		// TODO Auto-generated method stub
		return cmtDao.deleteCmt(id);
	}
	
	@Override
	public int updateCmt(Integer id, String content) {
		// TODO Auto-generated method stub
		return cmtDao.updateCmt(id, content);
	}


}
