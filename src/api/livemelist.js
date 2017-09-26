import Vue from 'vue'
import domain from './domain'

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
        Vue.http.get('/posts/1').then(function(data){
            console.log('mock 拦截',data)
            cb(data.body)
        },function(response){
            console.log(response);
        })
    }
}