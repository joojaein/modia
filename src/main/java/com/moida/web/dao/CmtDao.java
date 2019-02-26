package com.moida.web.dao;

import java.util.List;

import com.moida.web.entity.Cmt;
import com.moida.web.entity.CmtListView;
import com.moida.web.entity.Cmtcnt;

public interface CmtDao {

	public List<CmtListView> getCmtList(Integer postsId);

	public int insertCmt(Integer postsId, String content, String writerId);

	public Cmt getCmtLastregDate(int id);

	public Cmtcnt getCmthit(Integer postsId);

	public int deleteCmt(Integer id);

	public int updateCmt(Integer id, String content);

	public Cmt getresetComment(Integer postsId, String writerId);
	
}
