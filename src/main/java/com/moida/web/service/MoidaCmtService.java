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
	public int insertCmt(Integer postsId, String content, String writerId) {
		// TODO Auto-generated method stub
		
		System.out.println("서비슨데 들어오나");
		
		return cmtDao.insertCmt(postsId, content, writerId);
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
	
	@Override
	public Cmt getresetComment(Integer postsId, String writerId) {
		// TODO Auto-generated method stub
		return cmtDao.getresetComment(postsId, writerId);
	}


}
