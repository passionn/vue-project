<template>
    <div>
        Value:{{ count }}
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd" >incrementIfOdd</button>
        <button @click="incrementAsync">incrementAsync</button>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        computed:mapGetters([
            'count'
        ]),
        methods:mapActions([
            'increment',
            'decrement',
            'incrementIfOdd',
            'incrementAsync'
        ])
    } 

</script>
