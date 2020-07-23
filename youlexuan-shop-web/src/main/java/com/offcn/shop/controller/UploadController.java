package com.offcn.shop.controller;

import com.offcn.entity.Result;
import com.offcn.util.FastDFSClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class UploadController {

    @Value("${FILE_SERVER_URL}")
    private String FILE_SERVEL_URL;//文件服务器地址

    @RequestMapping("upload")
    public Result upLoad(MultipartFile file) {
        String originalFilename = file.getOriginalFilename();
        String exName = originalFilename.substring(originalFilename.indexOf(".")+1);

        try {
            FastDFSClient fastDFSClient = new FastDFSClient("classpath:config/fdfs_client.conf");
            String path = fastDFSClient.uploadFile(file.getBytes(), exName);
            String url = FILE_SERVEL_URL+path;
            return new Result(url,true);
        } catch (Exception e) {
            e.printStackTrace();
            return new Result(false, "上传失败");
        }
    }

}
