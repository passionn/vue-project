import Mock from 'mockjs'


// 模拟接口

Mock.mock(/\/user\/userlist/,'get',{
    name:'passion',
    age:18
});

