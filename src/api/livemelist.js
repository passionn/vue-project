import Vue from 'vue'

export default {
    getLivelist(cb){
        Vue.http.get('http://live.ksmobile.net/live/newmaininfo').then(function(data){
            console.log(data)
            cb(data.body.data.video_info)
        },function(response){
            console.log(response);
        })
    }
}