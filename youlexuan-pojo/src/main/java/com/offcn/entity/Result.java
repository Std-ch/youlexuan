package com.offcn.entity;

import java.io.Serializable;
/**
 * 返回全局的成功失败处理
 * */
public class Result implements Serializable {

    private boolean success;

    private String message;

    private String url;

    public Result(boolean success, String message, String url) {
        this.success = success;
        this.message = message;
        this.url = url;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Result(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public Result(String url, boolean success) {
        this.success = success;
        this.url = url;
    }
}
