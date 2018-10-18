export function setCookie(name,psd,token,time) {
	var exdate=new Date();//获取时间
	exdate.setTime(exdate.getTime() + 24*60*60*1000*time);//保存的天数
	//字符串拼接cookie
	window.document.cookie="userName"+ "=" +name+";path=/;expires="+exdate.toGMTString();
	window.document.cookie="userPwd"+"="+psd+";path=/;expires="+exdate.toGMTString();
	window.document.cookie="token"+"="+token+";path=/;expires="+exdate.toGMTString();
}

export function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg))
		return (arr[2]);
	else
		return null;
}

export function setCookie(name,psd,token,time) {
	var exdate=new Date();//获取时间
	exdate.setTime(exdate.getTime() + 24*60*60*1000*time);//保存的天数
	//字符串拼接cookie
	window.document.cookie="userName"+ "=" +name+";path=/;expires="+exdate.toGMTString();
	window.document.cookie="userPwd"+"="+psd+";path=/;expires="+exdate.toGMTString();
	window.document.cookie="token"+"="+token+";path=/;expires="+exdate.toGMTString();
}