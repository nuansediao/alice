var vm = new Vue({
    el:".demo",
    data:{
        number:23333
    },
    methods:{
        isShow:function(){
            $('img').show();
        }
    }
});
