var datas = [1,2,3,4,5,43];
var addData = ["a","ew","Ew","wqew","fd"];


//过滤器
Vue.filter('verify',{
	write: function(value){
		if(value.length >= 5){
			return value.substr(0,5);
		}
	}
});
var vm = new Vue({
	el:'.demo',
	data:{
		dataList:datas,
		content:22
	},
	methods:{
		addDataList: function(){
			// vm.dataList.concat(addData);
			vm.dataList = vm.dataList.concat(addData);
			vm.$log('dataList');
		}
	}
});


