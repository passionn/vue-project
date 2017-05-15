<template>
    <div>
        <div class="container">
            <table class="table table-bordered table-hover table-striped">
                <thead>
                    <tr>
                        <td>名称</td>
                        <td>文档</td>
                        <td>日期</td>
                        <td>前端</td>
                        <td>后端</td>
                        <td>进度</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>标题</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <th>标题</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <th>标题</th>
                        <td class="tdwidth">文档地址</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <th>标题</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </table>
         </div>
    </div>
  
</template>
<script>
export default {
   name: 'hello',
    data () {
        return {
        msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style>
    .tdwidth{
        max-width: 200px;
    }
</style>


