<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 发布公告
                </el-breadcrumb-item>
                <el-breadcrumb-item>基本表单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="标题">
                        <el-input v-model="form.title"></el-input>
                    </el-form-item>
                    <el-form-item label="内容">
                        <el-input type="textarea" rows="5" v-model="form.content"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit('form')">确认发布</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import { quillEditor } from 'vue-quill-editor';
export default {
    name: 'newtabs',
    data() {
        return {
            editorOption: {
                placeholder: 'Hello World'
            },
            form: {
                title: '',
                content: '' //富文本
            }
        };
    },
    // 组件内注册
    components: {
        quillEditor
    },
    methods: {
        onSubmit(form) {
            const { model } = this.$refs[form];
            console.log(model);
            const { title, content } = model;
            this.$http({
                url: 'http://47.104.226.136:8080/notice/addNotice.do',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                emulateJSON: true,
                body: {
                    title: title,
                    content: content
                }
            }).then(res => {
                console.log(res);
                if (res.data.status == 0) {
                    this.$message.success('发布成功！');
                    setTimeout(() => {
                        // 跳转发布成功页
                        // this.$router.push('/tabs')
                    }, 1000);
                } else {
                    this.$message.error(res.data.msg || '发布失败');
                }
            });
        }
    },
    created() {}
};
</script>