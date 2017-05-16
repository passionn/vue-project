<template>
  <ul class="list">
    <li v-for="item in livelist" @click="saveLocale(item)">
        <a href="javascript:;"  >
            <img src="item.videocapture" alt="">
            <div class="liveinfo">
                <span class="status">LIVE</span>
                <span class="addr">{{ item.addr }}</span>
            </div>
            <div class="info_bg">
                <div class="info_wrap">
                    <p class="watchNum">{{ item.watchnumber }}</p>
                    <p>{{ item.uname }}</p>
                </div>
            </div>
        </a>
    </li>
  </ul>
</template>
<script>
    import { mapGetters,mapActions } from 'vuex'
    export default {
        computed:mapGetters({
            livelist:'livelist'
        }),
        method:mapActions([
            'saveLocale'
        ]),
        created:()=>{
            this.$store.dispatch("");
        }
    }
</script>
