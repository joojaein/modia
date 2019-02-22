package com.moida.web.service;

import java.util.List;

import com.moida.web.entity.Cmt;
import com.moida.web.entity.CmtListView;
import com.moida.web.entity.Cmtcnt;

public interface CmtService {

	Cmt insertCmt(Cmt cmt);
	List<CmtListView> getCmtList(Integer postsId);
	Cmtcnt getCmthit(Integer postsId);
	int deleteCmt(Integer id);
	int updateCmt(Integer id, String content);
}
