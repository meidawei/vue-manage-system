<template>
    <div class>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-copy"></i> 查看公告
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-tabs v-model="message">
                <el-tab-pane :label="`未读消息(${unread.length})`" name="first">
                    <el-table :data="unread" :show-header="false" style="width: 100%">
                        <el-table-column>
                            <template slot-scope="scope">
                                <div class="message-title">{{scope.row.title}}</div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="date" width="180"></el-table-column>
                        <el-table-column width="200">
                            <template slot-scope="scope">
                                <el-button
                                    size="small"
                                    @click="handleEdit(scope.$index, scope.row)"
                                >查看</el-button>
                                <el-button
                                    size="small"
                                    @click="handleRead(scope.$index, scope.row)"
                                >标为已读</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="handle-row">
                        <el-button @click="readAll" type="primary">全部标为已读</el-button>
                    </div>
                </el-tab-pane>
                <el-tab-pane :label="`已读消息(${read.length})`" name="second">
                    <template v-if="message === 'second'">
                        <el-table :data="read" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template slot-scope="scope">
                                    <div class="message-title">{{scope.row.title}}</div>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" width="150"></el-table-column>
                            <el-table-column width="120">
                                <template slot-scope="scope">
                                    <el-button type="danger" @click="handleDel(scope.$index)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="handle-row">
                            <el-button type="danger" @click="delAll">删除全部</el-button>
                        </div>
                    </template>
                </el-tab-pane>
            </el-tabs>
        </div>
        <!-- 公告2弹出框 -->
        <el-dialog :visible.sync="editVisible" width="30%">
            <div class="post-box">
                <div class="post-title">童贯生平</div>
                <div
                    class="post-conntent"
                >初任供奉官，在杭州为徽宗搜括书画奇巧，助蔡京为相，蔡京荐其为西北监军，领枢密院事，掌兵权二十年，权倾内外，时称蔡京为“公相”，称他为“媪相”;宣和四年，攻辽失败，乞金兵代取燕京，以百万贯赎燕京等空城而回，侈言恢复之功;宣和七年，金兵南下，他由太原逃至开封，随徽宗南逃;宋钦宗即位，被处死。</div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'tabs',
    data() {
        return {
            message: 'first',
            showHeader: false,
            editVisible: false,
            unread: [
                {
                    date: '2018-04-19 20:00:00',
                    title: '【公告标题】这是公告内容这是公告内容这是公告内容这是公告内容这是公告内容',
                },
                {
                    date: '2018-04-19 21:00:00',
                    title: '【公告标题】这是公告内容这是公告内容这是公告内容这是公告内容这是公告内容',
                }
            ],
            read: [
                {
                    date: '2018-04-19 20:00:00',
                    title: '【公告标题】这是公告内容这是公告内容这是公告内容这是公告内容这是公告内容',
                }
            ] 
        };
    },
    methods: {
        // 已读
        handleRead(index) {
            const item = this.unread.splice(index, 1);
            this.read = item.concat(this.read);
        },
        // 删除已读
        handleDel(index) {
            const item = this.read.splice(index, 1);
            this.recycle = item.concat(this.recycle);
        },
        // 编辑操作
        handleEdit(index, row) {
            this.idx = index;
            this.form = row;
            this.editVisible = true;
        },
        handleRestore(index) {
            const item = this.recycle.splice(index, 1);
            this.read = item.concat(this.read);
        },
        // 加载数据
        initData() {
            // 获取所有公告内容
            this.$http({
                url: 'http://47.104.226.136:8080/notice/noticeList.do',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                emulateJSON: true,
                body: {
                    pageNum: 1,
                    pageSize: 10
                }
            }).then(res => {
                console.log(res);
            });
        },
        // 删除全部
        delAll() {
            this.read = [];
        },
        // 全部已读
        readAll() {
          this.unread = []
          this.read = [...this.unread,...this.read]
        }
    },
    computed: {
        unreadNum() {
            return this.unread.length;
        }
    },
    created() {},
    // 侦听器
    watch: {
        $route() {
            this.initData();
        }
    }
};
</script>

<style>
.message-title {
    cursor: pointer;
    width: 430px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.handle-row {
    margin-top: 30px;
}
.post-title {
    font-size: 20px;
    text-align: center;
    color: #000;
    line-height: 40px;
}
.post-conntent {
    line-height: 30px;
    font-size: 14px;
}
</style>

