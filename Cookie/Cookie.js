/*
 * name:保存的名称
 * value:保存的内容
 * expires：失效时间
 * 
 */
function setCookie(name, value, expires) {

	//拼接成cookie类型的字符串
	var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
	//拼接失效时间
	//instanceof 判断是否为日期
	if(expires instanceof Date) {

		cookieText += ';expires=' + expires;

	}

	//添加cookie
	document.cookie = cookieText;

	return decodeURIComponent(document.cookie);
}

//通过name获取内容
function getCookie(name) {

	var cookieText = decodeURIComponent(document.cookie);
	console.log(cookieText);
	//'; '
	var arr = cookieText.split('; ');
	for(var i = 0; i < arr.length; i++) {

		//'='分割
		var newArr = arr[i].split('=');

		if(newArr[0] == name) {

			//newArr = [name,value]
			var content = newArr[1];

			//保证value值不为空
			if(content) {

				return decodeURIComponent(content);

			}
		}
	}
	
	//未找到
	return ;

}

function removeCookie(name){
	
	document.cookie = encodeURIComponent(name) + '=;expires=' + new Date();
}
