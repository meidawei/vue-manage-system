<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 编辑信息
                </el-breadcrumb-item>
                <el-breadcrumb-item>基本表单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="真实姓名">
                        <el-input v-model="form.realName"></el-input>
                    </el-form-item>
                    <el-form-item label="用户名">
                        <el-input v-model="form.userName"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-radio-group v-model="form.sex">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="出生日期">
                        <el-col :span="11">
                            <el-date-picker
                                type="date"
                                placeholder="出生日期"
                                value-format="yyyy-MM-dd"
                                v-model="form.birth"
                            ></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="身份证号">
                        <el-input v-model="form.idCard"></el-input>
                    </el-form-item>
                    <el-form-item label="电话号码">
                        <el-input v-model="form.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱地址">
                        <el-input v-model="form.email"></el-input>
                    </el-form-item>
                    <el-form-item label="所属班级">
                        <el-select @change="classChange" v-model="form.classId" placeholder="请选择">
                            <el-option
                                v-for="item in classList"
                                :key="item.classId"
                                :label="item.className"
                                :value="item.classId"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="所属部门">
                        <el-select
                            @change="departmentChange"
                            v-model="form.departmentId"
                            placeholder="请选择"
                        >
                            <el-option
                                v-for="item in departmentList"
                                :key="item.departmentId"
                                :label="item.departmentName"
                                :value="item.departmentId"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="地址">
                        <el-cascader @change="selectPlace" :options="options"></el-cascader>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">确认修改</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'baseform',
    data() {
        return {
            classList: [
                {
                    classId: '1',
                    className: '一班'
                },
                {
                    classId: '2',
                    className: '二班'
                },
                {
                    classId: '3',
                    className: '三班'
                },
                {
                    classId: '4',
                    className: '四班'
                }
            ], //班级信息
            options: [
                {
                    value: '广东省',
                    label: '广东省',
                    children: [
                        {
                            value: '广州市',
                            label: '广州市',
                            children: [
                                {
                                    value: '天河区',
                                    label: '天河区'
                                },
                                {
                                    value: '海珠区',
                                    label: '海珠区'
                                }
                            ]
                        },
                        {
                            value: '东莞市',
                            label: '东莞市',
                            children: [
                                {
                                    value: '长安镇',
                                    label: '长安镇'
                                },
                                {
                                    value: '虎门镇',
                                    label: '虎门镇'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: '湖南省',
                    label: '湖南省',
                    children: [
                        {
                            value: '长沙市',
                            label: '长沙市',
                            children: [
                                {
                                    value: '岳麓区',
                                    label: '岳麓区'
                                }
                            ]
                        }
                    ]
                }
            ],
            departmentList: [
                {
                    departmentId: '1',
                    departmentName: '组织部'
                },
                {
                    departmentId: '2',
                    departmentName: '志愿服务站'
                },
                {
                    departmentId: '3',
                    departmentName: '师友电脑维修部'
                },
                {
                    departmentId: '4',
                    departmentName: '办公室'
                },
                {
                    departmentId: '5',
                    departmentName: '学习部'
                },
                {
                    departmentId: '6',
                    departmentName: '文体部'
                },
                {
                    departmentId: '7',
                    departmentName: '宣传部'
                },
                {
                    departmentId: '8',
                    departmentName: '网络技术部'
                },
                {
                    departmentId: '9',
                    departmentName: '外联部'
                },
                {
                    departmentId: '10',
                    departmentName: '辩论队'
                }
            ],
            form: {
                realName: '', //真实姓名
                userName: '', //用户名
                sex: '男', //性别
                birth: '', //出生日期
                address: '', //地址
                email: '', //邮箱地址
                idCard: '', //身份证
                phone: '', //电话号码
                classId: '', //所属班级
                className: '', //所属班级名称
                departmentId: '', //所属部门
                departmentName: '' //所属部门名称
            }
        };
    },
    methods: {
        // 获取初始化数据
        initData() {
            const userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
            console.log(userInfo);
            this.form.realName = userInfo.realName;
            this.form.userName = userInfo.userName;
            this.form.sex = userInfo.sex;
            this.form.birth = userInfo.birth.substr(0, 4) + '-' + userInfo.birth.substr(4, 2) + '-' + userInfo.birth.substr(6, 2);
            this.form.address = userInfo.address;
            this.form.email = userInfo.email;
            this.form.idCard = userInfo.idCard;
            this.form.phone = userInfo.phone;
            this.form.classId = userInfo.classId;
            this.form.className = userInfo.className;
            this.form.departmentId = userInfo.departmentId;
            this.form.departmentName = userInfo.departmentName;
        },
        selectPlace(value) {
            this.form.address = value[0] + value[1] + value[2];
        },
        classChange(value) {
            this.classList.map(item => {
                if (value == item.classId) {
                    this.form.className = item.className;
                }
            });
        },
        departmentChange(value) {
            this.departmentList.map(item => {
                if (value == item.departmentId) {
                    this.form.departmentName = item.departmentName;
                }
            });
        },
        onSubmit() {
            this.$message.success('修改成功！');
        }
    },
    created() {
        this.initData();
    },
    watch: {
        $route() {
            this.initData();
        }
    }
};
</script>
<style >
.el-input {
    width: 220px;
}
</style>