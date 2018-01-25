function $(id){
	return document.getElementById(id);
}
// 1)字符串相关：（7分）
// 函数名：toArray，
// 函数功能：把字符串变成数组。（不能使用官方函数split）
// 参数：字符串，分割符。
// 返回值：数组

function toArray(str,fu){
	var arr=[];
	for(var i=0;i<str.length;i++){
		if(str.search(fu)!=-1){
			var t=str.slice(0,str.indexOf(fu));
			arr.push(t);
			str=str.replace(t+fu,"");
		}
	}
	arr.push(str);
	return arr;
}
// 2)数组相关（7分）
// 函数名：removeRepeat
// 函数功能：把数组中重复的元素去除掉。（不能使用set）
// 参数：有重复元素的数组，
// 返回值：无重复元素的数组，
function removeRepeat(arr){
	var newArr=[];
	for(var i=0;i<arr.length;i++){
		if(newArr.indexOf(arr[i])==-1){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}


// 函数名：myconcat
// 功能：把两个数组合并，并去掉重复的元素：（不能使用官方函数concat）
// 参数：两个数组
// 返回值：合并后，没有重复元素的数组；

function myconcat(arr1, arr2){ 
	 for (var i = 0 ; i < arr1.length ; i ++ ){
	   for(var j = 0 ; j < arr2.length ; j ++ ){
	    if (arr1[i] === arr2[j]){
	     arr1.splice(i,1); 
	    }
	   }
	 }
	 
	 for(var i = 0; i <arr2.length; i++){
	  arr1.push(arr2[i]);
	 }
	 return arr1;
}

// 4)字符串相关（14）
// 函数名：numsortTostr
// 功能：传入数字，返回每位数字排序后的用逗号分隔的字符串格式：
// 	如：通过函数调用，可以把 2018变成字符串"8,2,1,0"（逗号隔开）
// 参数：数字（如：2018）





//生产一个n位的数字验证码
//函数的功能：生产一个n位的数字验证码
//函数的参数：随机数的位数n
//函数的返回值: 验证码
function getCheckMa(n){
	var str="";
	for(var i=0;i<n;i++){
		str = str+parseInt(Math.random()*10);
	}
	return str;
}

function sjCheckMa(){
	let res="";
	while(res.length<4){
		let t=parseInt(Math.random()*123);
		if((t>=48&&t<=57)||(t>=97&&t<=122)||(t>=65&&t<=90)){
			res=res+String.fromCharCode(t);
		}
	}
	document.getElementById("yanzheng").innerHTML=res;
}
