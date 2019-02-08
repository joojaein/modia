package com.moida.web.dao.mybatis;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.MemberDao;
import com.moida.web.entity.AdminMngMemberView;
import com.moida.web.entity.LeaderMngMemberView;
import com.moida.web.entity.Member;
import com.moida.web.entity.MemberRole;

@Repository
public class MyBatisMemberDao implements MemberDao{
	
	@Autowired
	private SqlSessionTemplate session;
	
	@Override
	public int insert(Member member) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		return memberDao.insert(member);
	}

	@Override
	public int insertRole(MemberRole memberRole) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		return memberDao.insertRole(memberRole);
	}

	@Override
	public Member getMember(String id) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		return memberDao.getMember(id);
	}

	@Override
	public int update(Member member) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		return memberDao.update(member);
	}

	@Override
	public List<String> getMemberIdList(String email) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		return memberDao.getMemberIdList(email);
	}

	@Override
	public int getMemberCount() {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		return memberDao.getMemberCount();
	}
	
	@Override
	public List<AdminMngMemberView> getAdminMngMemberList(String query, String updown, Integer min, Integer max) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		return memberDao.getAdminMngMemberList(query, updown, min, max);
	}

	@Override
	public int deleteMember(String id) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		return memberDao.deleteMember(id);
	}

	@Override
	public int getLeaderMngRealMemberCnt(int crowdId) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		return memberDao.getLeaderMngRealMemberCnt(crowdId);
	}

	@Override
	public int getLeaderMngRequestMemberCnt(int crowdId) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		return memberDao.getLeaderMngRequestMemberCnt(crowdId);
	}

	@Override
	public List<LeaderMngMemberView> getLeaderMngRealMemberList(String query, String updown, Integer min, Integer max,
			int crowdId) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		return memberDao.getLeaderMngRealMemberList(query, updown, min, max, crowdId);
	}

	@Override
	public List<LeaderMngMemberView> getLeaderMngRequestMemberList(String query, String updown, Integer min,
			Integer max, int crowdId) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		return memberDao.getLeaderMngRequestMemberList(query, updown, min, max, crowdId);
	}

	@Override
	public int updateRequestCrowdMember(int crowdId, String memberId) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		int result = memberDao.updateRequestCrowdMember(crowdId, memberId);
		return result;
	}

	@Override
	public int updateRealCrowdMember(int crowdId, String memberId, int groupRole) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		return memberDao.updateRealCrowdMember(crowdId, memberId, groupRole);
	}

	@Override
	public int deleteCrowdMember(int crowdId, String memberId) {
		MemberDao memberDao = session.getMapper(MemberDao.class);
		return memberDao.deleteCrowdMember(crowdId, memberId);
	}
	
	
}
