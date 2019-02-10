package com.moida.web.dao;


import com.moida.web.entity.Schedule;

public interface ScheduleDao {
	public Schedule getRecentlySchedule(int crowdId);
}
