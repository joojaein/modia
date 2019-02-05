package com.moida.web.dao;

import java.util.List;

import com.moida.web.entity.Banner;
import com.moida.web.entity.Member;

public interface BannerDao {
	public List<Banner> getBannerList();
	public int insert(Banner banner);	
	public int delete();
}
