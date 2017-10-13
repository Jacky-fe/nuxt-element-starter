<template>
  <section class="container">
    <el-table
      stripe
      :data="tableData"
      align="left"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <el-button :plain="true" @click="open2">成功</el-button>
    <el-button :plain="true" @click="open3">警告</el-button>
    <el-button :plain="true" @click="open">消息</el-button>
    <el-button :plain="true" @click="open4">错误</el-button>
  </section>
</template>

<style scoped>
.title
{
  margin: 50px 0;
}
</style>
<script>
  import { Table, TableColumn, Button, Message } from 'element-ui'
  console.log(Table.name, TableColumn.name)
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    components: {
      elTable: Table,
      elTableColumn: TableColumn,
      elButton: Button
    },methods: {
      open() {
        Message('这是一条消息提示');
      },
      open2() {
        Message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },
      open3() {
        Message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },
      open4() {
        Message.error('错了哦，这是一条错误消息');
      }
    }
  }
</script>
