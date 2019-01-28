package com.moida.web.controller;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.moida.web.controller.member.CrowdController;

@Controller
public class HomeController {
	
	ArrayList postList = new ArrayList<ArrayList<String>>();

	@RequestMapping("/index")
	public String index() {
		return "home.index";
	}	
	
	
	@RequestMapping("/get-sido")
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
