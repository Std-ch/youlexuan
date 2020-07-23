app.controller('baseController' ,function($scope){

    //啥事儿也不干，只让要分页的方法调用控件的参数
    $scope.reloadList=function(){
        $scope.search($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage)

    }
    $scope.paginationConf = {
        //起始页
        currentPage: 1,
        //
        totalItems: 10,
        //每页的条数
        itemsPerPage: 10,
        //分页的形式
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function(){
            $scope.reloadList();//重新加载
        }
    };

    //删除操作//复选框
    $scope.selectIds= [];
    //根据复选框把id存到数组
    $scope.deleteSelection=function($event,id){
        //如选中就把id存入数组
        if($event.target.checked){
            $scope.selectIds.push(id);
        }else {
            //选中后取消    先获取到取消id的索引
            var index = $scope.selectIds.indexOf(id)
            //根据索引去删除
            $scope.selectIds.splice(index,1);
        }
    }

    $scope.jsonToString=function(jsonString,key){//传过来一个字符数组，和要取得key值
        var json=JSON.parse(jsonString);//将json字符串转换为json对象
        var value="";
        for(var i=0;i<json.length;i++){
            if(i>0){//第一个不加逗号
                value+=","
            }
            value+=json[i][key];
        }
        return value;
    }


    //从集合中按照key查询对象
    $scope.searchObjectByKey=function (list,key,value) {
        for (var i=0; i < list.length; i++) {
            if (list[i][key]==value) {
                return list[i];
            }
        }
        return null;
    }

});