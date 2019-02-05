package com.moida.web.service;

import java.util.List;

import com.moida.web.entity.Banner;
import com.moida.web.entity.Member;

public interface BannerService {
	
	List<Banner> getBannerList();
	int insert(Banner banner);
	int delete();
	
}
