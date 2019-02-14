package com.moida.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moida.web.dao.ScheduleDao;
import com.moida.web.entity.Schedule;

@Service
public class MoidaScheduleService implements ScheduleService {

	@Autowired
	private ScheduleDao scheduleDao;

	@Override
	public Schedule getRecentlySchedule(int crowdId) {
		return scheduleDao.getRecentlySchedule(crowdId);
	}

}
