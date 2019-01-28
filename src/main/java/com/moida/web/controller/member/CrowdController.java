package com.moida.web.controller.member;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

@Controller("memberCrowd")
@RequestMapping("/crowd/")
public class CrowdController {
	
	ArrayList postList = new ArrayList<ArrayList<String>>();
	
	@RequestMapping("notice")
	public String notice() {		

		return "crowd.notice";
	}
	
	@RequestMapping("board")
	public String board() {		
		
		return "crowd.board";
	}
	
	@RequestMapping("boardreg")
	public String boardreg() {		
		
		return "crowd.boardreg";
	}
	
	@RequestMapping("calendar")
	public String calendar() {		
		
		return "crowd.calendar";
	}

	@RequestMapping("album")
	public String album() {		
		
		return "crowd.album";
	}
	
	@RequestMapping("createCategory")
	public String createCategory(Model model) {		
		model.addAttribute("href","/index");  
		//모임검색페이지에 모임개설 버튼이 있기 때문에 추후에 /index 대신 검색페이지의 주소를 기록해야함
		model.addAttribute("title","카테고리 선택");
		return "crowd.createCategory";
	}
	
	@RequestMapping("create")
	public String create(
			@RequestParam(name="t") String title,
			Model model) throws FileNotFoundException {		
		model.addAttribute("href","createCategory");
		model.addAttribute("title",title);
		return "crowd.create";
	}
		
	@RequestMapping("get-sido")
	@ResponseBody
	public String getSido() throws FileNotFoundException {				
		String nowPath = CrowdController.class.getResource("").getPath();
		int baseIndex = nowPath.indexOf("WEB-INF");
		String basePath = nowPath.substring(0, baseIndex);
		String resultPath = basePath+"resources/data.xlsx";
		if(postList.size()==0) {
			try {
				FileInputStream file = new FileInputStream(resultPath);
				XSSFWorkbook workbook = new XSSFWorkbook(file); // 해당 엑셀 파일의 시트 가져오기	
				XSSFSheet sheet = workbook.getSheet("post"); // 시트 이름으로 읽기
					
				int rowIndex=0;
				boolean rowNotNull= true;
				while(rowNotNull) {
					XSSFRow row = sheet.getRow(rowIndex);
					XSSFCell cell0 = row.getCell(0);			
					if((cell0+"").equals("null")) break;
					
					ArrayList<String> tempList = new ArrayList<String>();							
					if(rowNotNull) {
						int colIndex=0;
						boolean colNotNull= true;					
						while(colNotNull) {
							XSSFCell cell = row.getCell(colIndex);
							if((cell+"").equals("null")) {
								postList.add(tempList);
								break;
							}
							String value="";
							switch (cell.getCellType()){
								case XSSFCell.CELL_TYPE_STRING:
									value=cell.getStringCellValue()+"";
									break;
								case XSSFCell.CELL_TYPE_BLANK:
									value=cell.getBooleanCellValue()+"";
									colNotNull=false;
									break;
							}					
							if(colNotNull) {
								tempList.add(value);
								colIndex++;
							}else {
								postList.add(tempList);
								break;
							}
						}
						rowIndex++;
					}else {
						break;
					}				
				}
			} catch (IOException e) {}			
		}			
		
		Gson gson = new Gson();
		String json = gson.toJson(postList);
		return json;
	}
}