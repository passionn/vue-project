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
                    <tr v-for="item in data">
                        <td>{{ item.title }}</td>
                        <td> <a :href="item.document" target="_blank">文档</a></td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.fe }}</td>
                        <td>{{ item.serfer }}</td>
                        <td> {{ item.state==1?"完成":"进行中" }}</td>
                    </tr>
                </tbody>
            </table>
         </div>
    </div>
  
</template>
<script>
export default {
    name: 'hello',
    data(){
        return {data:""}
    },
    created:function(){
        this.$http.get('/static/data.json').then(function(data){
            console.log(data)
            this.data=data.body.data
        },function(response){
            console.log(response);
        })
    }

}
</script>

<style>

</style>


