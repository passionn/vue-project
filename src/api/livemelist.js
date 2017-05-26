import Vue from 'vue'

export default {
    getLivelist(cb){
        Vue.http.get('http://live.ksmobile.net/live/newmaininfo').then(function(data){
            console.log(data)
            cb(data.body.data.video_info)
        },function(response){
            console.log(response);
        })
    },
    userList(cb){
        Vue.http.get('http://localhost:8080/user/userlist').then(function(data){
            console.log('mock 拦截',data)
            cb(data.body)
        },function(response){
            console.log(response);
        })
    }
}