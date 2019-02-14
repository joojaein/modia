package com.moida.web.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.moida.web.controller.member.CrowdController;
import com.moida.web.entity.Banner;
import com.moida.web.entity.Category;
import com.moida.web.entity.CrowdSimpleDataView;
import com.moida.web.service.MoidaBannerService;
import com.moida.web.service.MoidaCategoryService;
import com.moida.web.service.MoidaCrowdService;

@Controller
public class HomeController {
   
   ArrayList postList = new ArrayList<ArrayList<String>>();

   @Autowired
   private MoidaCategoryService categoryService;
   @Autowired
   private MoidaCrowdService crowdService;
   @Autowired
   private MoidaBannerService bannerService;

   
   @RequestMapping("/index")
   public String index() {
      return "home.index";
   }   
   
   // 채팅을 위해서 로그인시 로그인 되었음을 확인시켜주는 POST  
   @PostMapping("/chk-login")
   @ResponseBody
   public String chkLogin()throws Exception
   {   
      SecurityContext context = SecurityContextHolder.getContext(); 
      Authentication authentication = context.getAuthentication(); 
      if(authentication.getPrincipal().equals("anonymousUser")) {
         return "anonymousUser";
      }else {         
         return "loggined";
      }
   }   
   
   @PostMapping("/get-categorylist")
   @ResponseBody
   public String getCategoryList() throws Exception{   
      List<Category> memberList = categoryService.getCategoryList();
      Gson gson = new Gson();
      String json = gson.toJson(memberList);
      return json;
   }   
   
   @PostMapping("/get-simplecrowdlist")
   @ResponseBody
   public String getSimpleCrowdList(HttpServletRequest request,
         @RequestParam(name="type", defaultValue="0") Integer type,
         @RequestParam(name="id", defaultValue="") String id) throws Exception{
      List<CrowdSimpleDataView> crowdList = new ArrayList<CrowdSimpleDataView>();
      switch(type) {
      case 0:
         crowdList = crowdService.getSimpleList();
         break;
      case 1:
         crowdList = crowdService.getRealSimpleList(id);
         break;
      case 2: 
         crowdList = crowdService.getRequestSimpleList(id);
         break;   
      case 3:
         String values = "";
         Cookie[] cookies = request.getCookies();
         for (Cookie c : cookies) {
            if(c.getName().equals(id)) {
               values = c.getValue();
               break;
            }
         }
         String[] valArr = values.split("/");
         for (int i = 0; i < valArr.length; i++) {
            int index = Integer.parseInt(valArr[i]);
            crowdList.add(crowdService.getCrowdSimpleDataView(index));
         }
         break;
      case 4 :
         crowdList = crowdService.getRankSimpleList();
      }
      
      Gson gson = new Gson();
      String json = gson.toJson(crowdList);
      return json;
   }
   
   @PostMapping("/get-mainbannerlist")
   @ResponseBody
   public String getMainBannerList() throws Exception{
      List<Banner> bannerList = bannerService.getBannerList();
      Gson gson = new Gson();
      String json = gson.toJson(bannerList);
      return json;
   }
   
   
   @PostMapping("/get-sido")
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

            for (int i = 0; i < sheet.getPhysicalNumberOfRows(); i++) {
               XSSFRow row = sheet.getRow(i);
               ArrayList<String> tempList = new ArrayList<String>();                     
               for (int j = 0; j < row.getPhysicalNumberOfCells(); j++) {
                  XSSFCell cell = row.getCell(j);   
                  tempList.add(cell.getStringCellValue()+"");
               }
               postList.add(tempList);
            }
         } catch (IOException e) {
         }          
      }            
      Gson gson = new Gson();
      String json = gson.toJson(postList);
      return json;
   }
   
   
   @PostMapping("/file-upload")
   @ResponseBody
   public String upload(MultipartFile file, String id, String root,
         HttpServletRequest req, HttpServletResponse resp) throws Exception{
      String originFilename = file.getOriginalFilename();
      String extName = originFilename.substring(originFilename.lastIndexOf("."), originFilename.length());
      byte[] data = file.getBytes();
      
      //로컬 디스크에 백업
      File backupDir = new File("d://moida/img-backup/"+root);
      if(!backupDir.exists()) {
         backupDir.mkdirs(); 
      }
      FileOutputStream backupFos = new FileOutputStream(backupDir + "/"+id+extName);
      backupFos.write(data);
      backupFos.close();
      
      //실제 서버에 업로드
      String path = req.getServletContext().getRealPath("/"+root);
      File serverDir = new File(path);
      if(!serverDir.exists()) {
         serverDir.mkdirs(); 
      }   
      FileOutputStream serverFos = new FileOutputStream(serverDir + "/"+id+extName);
      serverFos.write(data);
      serverFos.close();
      return null;
   }   
   
   @PostMapping("/delete-file")
   @ResponseBody
   public String deleteFile(String fileName, String root,
         HttpServletRequest req, HttpServletResponse resp) throws Exception{
      String path = req.getServletContext().getRealPath("/"+root+"/"+fileName);
      File file = new File(path);      
      if(file.exists()){ 
         file.delete(); 
      }
      return null;
   }   
   
   
   @RequestMapping("/get-img")
    public String getImg(HttpServletRequest req, HttpServletResponse resp, 
          String folder, String file) throws Exception { 
      
      ServletOutputStream bout = resp.getOutputStream();
      String realPath = req.getServletContext().getRealPath("/"+folder+"/"+file);
      InputStream fis=null;
      if(!new File(realPath).exists()) {
         realPath = "http://localhost/resources/images/img404.png";   
         URL url = new URL("http://localhost/resources/images/img404.png");
           HttpURLConnection urlConnection = (HttpURLConnection)url.openConnection();;
           fis = urlConnection.getInputStream();      
      }else {
         fis = new FileInputStream(realPath);  
      }
      int length; 
      byte[] buffer = new byte[1024];
      while ( (length = (fis.read( buffer ))) != -1 ) {
         bout.write( buffer, 0, length );  
      }
      fis.close();
      return null;
    }
   
}


