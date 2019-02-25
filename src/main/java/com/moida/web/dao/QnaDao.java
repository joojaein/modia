package com.moida.web.dao;

import java.util.List;


import com.moida.web.entity.Qna;

public interface QnaDao 
{
	
	// 모든 질문들을 불러오는 다오
		List<Qna> getQnaList();
		
		// 방금 insert 한 질문 한개를 가져오는 다오
		Qna getQnaLimit();
		
		// 추가버튼 클릭시 사용할 insert 다오
		int insertQnaList(String title,
						  String content);
		
		// X 버튼 클릭 시 사용할 delete 다오
		int deleteQnaList(int id);
		
		// Setting 버튼 클릭 시 사용 할 update 다오
		int updateQnaList(int id,
						  String title,
						  String content);
		
		//타이틀 검색을 위한 select 다오
		List<Qna> searchQnaList(String searchWord);
}
