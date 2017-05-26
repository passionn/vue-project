import List from '../../api/livemelist'
import shop from '../../api/shop'
import * as types from '../mutation-types'

const state={
    liveList:[]
}

const getters = {
  livelists: state => state.liveList
}

const mutations={
    [types.RECEIVE_LIVELIST](state,{ data }){
        console.log('mutations',data)
        state.liveList = data
    }/*,
    [types.SAVE_LOCAL](state,{item}){
        console.log('item',item);
    }*/
}

const actions={
    getLivelist({ commit }){
        List.getLivelist(data=>{
            commit(types.RECEIVE_LIVELIST,{ data })
        })
    },
    userList({ commit }){
        List.userList(data=>{
            
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}


