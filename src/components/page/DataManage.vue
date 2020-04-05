<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 查看资料
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <span class="title">资料明细</span>
                <el-button type="success" @click="addEdit">新增</el-button>
                <el-button
                    type="primary"
                    icon="el-icon-bottom"
                    class="handle-del mr10"
                    @click="delAllSelection"
                >批量下载</el-button>
                <el-input v-model="query.name" placeholder="用户名" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
            </div>
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="theme" label="主题" align="center"></el-table-column>
                <el-table-column prop="content" label="内容" align="center"></el-table-column>
                <el-table-column prop="fileName" label="文件名" align="center"></el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button>
                        <el-button
                            type="text"
                            icon="el-icon-bottom"
                            @click="download(scope.$index, scope.row)"
                        >下载</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="container to-top">
            <div class="handle-box">
                <span class="title">模板列表</span>
                <el-button type="success" @click="addEditTop">新增</el-button>
                <el-button
                    type="primary"
                    icon="el-icon-bottom"
                    class="handle-del mr10"
                    @click="delAllSelection"
                >批量下载</el-button>
                <el-input v-model="query.name" placeholder="用户名" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
            </div>
            <el-table
                :data="materData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="theme" label="主题" align="center"></el-table-column>
                <el-table-column prop="content" label="内容" align="center"></el-table-column>
                <el-table-column prop="fileName" label="文件名" align="center"></el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button>
                        <el-button
                            type="text"
                            icon="el-icon-bottom"
                            @click="download(scope.$index, scope.row)"
                        >下载</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="上传" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="主题">
                    <el-input v-model="form.theme"></el-input>
                </el-form-item>
                <el-form-item label="内容">
                    <el-input v-model="form.content"></el-input>
                </el-form-item>
                <el-form-item label="上传文件">
                    <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-change="handleChange"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :file-list="fileList"
                    >
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delEdit">取消</el-button>
                <el-button type="primary" @click="saveEdit">提交</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { fetchData } from '../../api/index';
export default {
    name: 'basetable',
    data() {
        return {
            query: {
                name: '',
                pageIndex: 1,
                pageSize: 10
            },
            tableData: [
                {
                    theme: '主题1',
                    content: '内容1',
                    fileName: '班级资料2.doc'
                },
                {
                    theme: '主题2',
                    content: '内容2',
                    fileName: '班级资料2.doc'
                },
                {
                    theme: '主题3',
                    content: '内容3',
                    fileName: '班级资料2.doc'
                },
                {
                    theme: '主题4',
                    content: '内容4',
                    fileName: '班级资料2.doc'
                }
            ],
            materData: [
                {
                    theme: '主题5',
                    content: '内容5',
                    fileName: '班级资料2.doc'
                },
                {
                    theme: '主题6',
                    content: '内容6',
                    fileName: '班级资料2.doc'
                },
                {
                    theme: '主题7',
                    content: '内容7',
                    fileName: '班级资料2.doc'
                },
                {
                    theme: '主题8',
                    content: '内容8',
                    fileName: '班级资料2.doc'
                }
            ],
            multipleSelection: [],
            delList: [],
            editVisible: false,
            pageTotal: 0,
            status: 1, //0 模板列表 1 资料明细
            type: 0, //0 编辑 1 新增
            form: {
                theme: '',
                content: '',
                fileName: ''
            },
            idx: -1,
            id: -1,
            fileList: []
        };
    },
    created() {},
    methods: {
        delEdit() {
            this.editVisible = false;
            this.form = {};
        },
        // 触发搜索按钮
        handleSearch() {
            this.$set(this.query, 'pageIndex', 1);
        },
        // 下载操作
        download(index, row) {
            this.$message.success('下载成功');
        },
        // 多选操作
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleChange(file, fileList) {
            console.log(file);
            console.log(fileList);
            this.form.fileName = file.name;
        },
        delAllSelection() {
            const length = this.multipleSelection.length;
            let str = '';
            this.delList = this.delList.concat(this.multipleSelection);
            for (let i = 0; i < length; i++) {
                str += this.multipleSelection[i].name + ' ';
            }
            this.$message.error(`删除了${str}`);
            this.multipleSelection = [];
        },
        // 编辑操作
        handleEdit(index, row) {
            this.idx = index;
            this.form = row;
            this.type = 0; //0 编辑 1 新增
            this.editVisible = true;
        },
        // 新增操作
        addEdit() {
            this.editVisible = true;
            this.status = 0;
            this.type = 1; //0 编辑 1 新增
        },
        // 资料明细
        addEditTop() {
            this.editVisible = true;
            this.status = 1;
        },
        // 保存编辑
        saveEdit() {
            this.editVisible = false;
            this.$message.success(`上传文件成功`);
            if (this.type == 1) {
                //1 新增
                if (this.status == 0) {
                    this.tableData.push(this.form);
                    this.form = {};
                } else {
                    this.materData.push(this.form);
                    this.form = {};
                }
            }
        },
        // 分页导航
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(
                `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`
            );
        },
        // 删除文件
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${file.name}？`);
        }
    }
};
</script>

<style>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
.el-upload {
    border: none;
    width: auto;
    height: auto;
}
.title {
    margin-right: 10px;
}
.el-input {
    width: 220px;
}
.to-top {
    margin-top: 20px;
}
</style>
