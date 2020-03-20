<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20">
                    <div class="user-info">
                        <img src="../../assets/img/img.jpg" class="user-avator" alt />
                        <div class="user-info-cont">
                            <div class="user-info-name">{{userName}}</div>
                            <div>{{userId}}</div>
                        </div>
                    </div>
                    <div class="user-info-list">
                      <span class="title-name">真实姓名：</span>
                      <span>{{realName}}</span>
                    </div>
                    <div class="user-info-list">
                      <span class="title-name">性别：</span>
                      <span>{{sex}}</span>
                    </div>
                    <div class="user-info-list">
                      <span class="title-name">密码：</span>
                      <span>{{usePwd}}</span>
                    </div>
                    <div class="user-info-list">
                      <span class="title-name">出生日期：</span>
                      <span>{{birth}}</span>
                    </div>
                    <div class="user-info-list">
                      <span class="title-name">地址：</span>
                      <span>{{address}}</span>
                    </div>
                    <div class="user-info-list">
                      <span class="title-name">邮箱地址：</span>
                      <span>{{email}}</span>
                    </div>
                    <div class="user-info-list">
                      <span class="title-name">身份证号：</span>
                      <span>{{idCard}}</span>
                    </div>
                    <div class="user-info-list">
                      <span class="title-name">电话号码：</span>
                      <span>{{phone}}</span>
                    </div>
                    <div class="user-info-list">
                      <span class="title-name">所属班级：</span>
                      <span>{{className}}</span>
                    </div>
                    <div class="user-info-list">
                      <span class="title-name">所属部门：</span>
                      <span>{{departmentName}}</span>
                    </div>
                    <div class="user-info-list">
                      <span class="title-name">创建时间：</span>
                      <span>{{createTime | currentTime}}</span>
                    </div>
                    <div class="user-info-list">
                      <span class="title-name">修改时间：</span>
                      <span>{{updateTime | currentTime}}</span>
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
      userName: "冬丽传奇",
      role:'系统管理',
      sex: "男",
      userId: '201441404229',
      usePwd: "a2983277940",
      birth: "1999-08-21",
      address: "广东省茂名市高州市",
      email: "2983277940@qq.com",
      idCard: "440900000000000000",
      phone: "13631789756",
      classId: "1",
      className: "一班",
      createTime: "2020-03-19T10:01:39.971Z",
      departmentId: "2",
      departmentName: "文学社",
      realName: "林大厨",
      updateTime: "2020-03-20T10:03:59.971Z",
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