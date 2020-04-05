<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20">
                    <div class="user-info">
                        <img src="../../assets/img/img.jpg" class="user-avator" alt />
                        <div class="user-info-cont">
                            <div class="user-info-name">{{userInfo.userName}}</div>
                            <div>{{userInfo.userId}}</div>
                        </div>
                    </div>
                    <div class="user-info-list">
                      <span class="title-name">真实姓名：</span>
                      <span>{{userInfo.realName}}</span>
                    </div>
                    <div class="user-info-list">
                      <span class="title-name">性别：</span>
                      <span>{{userInfo.sex}}</span>
                    </div>
                    <div class="user-info-list">
                      <span class="title-name">出生日期：</span>
                      <span>{{userInfo.birth}}</span>
                    </div>
                    <div class="user-info-list">
                      <span class="title-name">地址：</span>
                      <span>{{userInfo.address}}</span>
                    </div>
                    <div class="user-info-list">
                      <span class="title-name">邮箱地址：</span>
                      <span>{{userInfo.email}}</span>
                    </div>
                    <div class="user-info-list">
                      <span class="title-name">身份证号：</span>
                      <span>{{userInfo.idCard}}</span>
                    </div>
                    <div class="user-info-list">
                      <span class="title-name">电话号码：</span>
                      <span>{{userInfo.phone}}</span>
                    </div>
                    <div class="user-info-list">
                      <span class="title-name">所属班级：</span>
                      <span>{{userInfo.className}}</span>
                    </div>
                    <div class="user-info-list">
                      <span class="title-name">所属部门：</span>
                      <span>{{userInfo.departmentName}}</span>
                    </div>
                    <div class="user-info-list">
                      <span class="title-name">创建时间：</span>
                      <span>{{userInfo.createTime | currentTime}}</span>
                    </div>
                    <div class="user-info-list">
                      <span class="title-name">修改时间：</span>
                      <span>{{userInfo.updateTime | currentTime}}</span>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  name:'personview',
  data(){
    return {
      userInfo:JSON.parse(localStorage.getItem('userInfo'))
    }
  }
}
</script>
<style scoped>
  .user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-info>img{
  width: 120px;
  height: 120px;
}

.title-name{
  display: inline-block;
  width: 120px;
}

.user-avator {
    width: 80px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}
</style>