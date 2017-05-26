<template>
    <div id="wrapper">
        <div id="scroller">
            <ul class="list">
                <li v-for="item in livelist" @click="saveLocal(item)">
                    <a href="javascript:;" >
                        <img :src="item.videocapture" alt="">
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
        </div>       
    </div>
</template>
<script>
    import { mapGetters,mapActions } from 'vuex'
    export default {
        computed:mapGetters({
            livelist:'livelists'
        }),
        methods:mapActions([
            'saveLocal'
        ]),
        created () {
            this.$store.dispatch("getLivelist"),
            this.$store.dispatch("userList")
        }
    }
</script>
