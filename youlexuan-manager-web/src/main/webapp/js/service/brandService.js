app.service('brandService',function ($http) {
    //定义方法获取列表数据
    this.findAll=function () {
        return $http.get('../brand/findAll.do');
    }
    //获取分页数据
    this.findPage=function(page,rows){
        return  $http.get('../brand/findPage.do?page='+page+'&rows='+rows);
    }
    //添加
    this.add = function (entity) {
        return $http.post("../brand/add.do",entity);
    }
    //修改
    this.update = function (entity) {
        return $http.post("../brand/update.do",entity);
    }
    //删除
    this.des = function (ids) {
        return $http.get("../brand/deleteById.do?ids="+ids);
    }
    //获取id,回显
    this.findOne=function (id) {
        return $http.get('../brand/findOne.do?id='+id);
    }
    //分页查询
    this.search= function (page,rows,searchEntity) {
        return $http.post('../brand/search.do?page='+page+'&rows='+rows,searchEntity);
    }
    this.selectOptionList=function () {

        return $http.get('../brand/selectOptionList.do');
    }



});