/*
配置说明:  
途虎养车签到脚本：
2条重写，app内手签一次获取cookie，下方日常任务领取获得cookie 。获取Cookie后注释重写
Quantumult X:
[rewrite_local]  
https:\/\/api\.tuhu\.cn\/User\/UserCheckInVersion1 url script-request-header https://raw.githubusercontent.com/tutuh/Script/master/tuhu/tuhu.js
https:\/\/cl-gateway\.tuhu\.cn\/cl-common-api\/api\/member\/addTask url script-request-header https://raw.githubusercontent.com/tutuh/Script/master/tuhu/tuhu.js
[task_local]  
#途虎养车  
0 8 * * * https://raw.githubusercontent.com/tutuh/Script/master/tuhu/tuhu.js, tag=途虎养车, enabled=true  
 
[MITM]  
hostname= api.tuhu.cn, cl-gateway.tuhu.cn
*/

var tt = "[途虎养车]";
const $tutuh = tutuh();
const thurlname = "thurlname";
const thhdname = "thhdname";
const thurl = $tutuh.read(thurlname);
const thhd = $tutuh.read(thhdname);
const thrcckhdname = "thrcckhdname";
const thrcckhd = $tutuh.read(thrcckhdname);


!(async () => {
  if ($tutuh.isRequest) {
    Getcookie()
  } else {
await tuhu_sign();
await ID20();
await ID20a();
//await ID8();//轮胎超值秒杀1折起
//await ID8a();
await ID12();//保养包年188元
await ID12a();
await ID23();//逛途虎会员日会场
await ID23a();
await ID42();
await ID42a();
await ID26();//免费洗车0元抽
await ID26a();
await ID25();//汽车用品爆款抄底
await ID25a();
await showmsg();
   }
})().finally(() =>  {
$tutuh.done();
})

function Getcookie() {
var rcurlval = $request.url;
var rcck_hd = $request.headers
var tuhuurlval = $request.url;
var th_hd = $request.headers
if (tuhuurlval.indexOf("User/UserCheckInVersion1") >= 0) {
var surl = $tutuh.write(tuhuurlval, thurlname)
var shd = $tutuh.write(JSON.stringify(th_hd), thhdname);
if (surl == true && shd == true)
$tutuh.notify(tt, "签到Cookie:获取成功🎉", "");
} else if (rcurlval.indexOf("/member/addTask") >= 0) {
var rcrw = $tutuh.write(JSON.stringify(rcck_hd), thrcckhdname);
if (rcrw == true)
$tutuh.notify(tt, "日常任务Cookie:获取成功🎉", "");
}}

//签到
async function tuhu_sign() {
	return new Promise(resolve => {
	setTimeout(() => {
	const URL = {url: thurl,
		headers: JSON.parse(thhd),}
$tutuh.get(URL, function(error, response, data) {
	var obj = JSON.parse(data);
	console.log("tuhu" + data)
	if (obj.Code == "0") {
	subt = obj.Message
	detail = ""	
	} else {
	subt = "签到成功🎉"
	detail = "已签到" + obj.NeedDays + "天,获得:" + obj.AddIntegral + "积分"
	}
	//tutu(tt,subt,detail)
	console.log(detail)
	resolve()
	})
}, 800)
});
}

function ID20() {
	return new Promise(resolve => {
	const URL = {url: "https://cl-gateway.tuhu.cn/cl-common-api/api/member/addTask",
	headers: JSON.parse(thrcckhd),
	body: JSON.stringify({"taskId": 20}),
		}
$tutuh.post(URL, function(error, response, data) {
	var obj = JSON.parse(data);
	//console.log("ID28领取任务"+data)
	if (obj.success == true) {
	detail1 = "任务领取①:" + obj.message
	} else {
	detail1 = "任务①:" + obj.message
	}
	console.log(detail1)
        resolve()
	})
});
}

function ID20a() {
	return new Promise(resolve => {
	const URL = {url: "https://cl-gateway.tuhu.cn/cl-common-api/api/member/receiveAward",
	headers: JSON.parse(thrcckhd),
	body:JSON.stringify({"taskId": 20}),
	}
        $tutuh.post(URL, function(error, response, data) {
	var obj = JSON.parse(data);
	//console.log("ID28完成任务"+data)
	if (obj.success == true) {
	detail2 = "任务完成①:" + obj.message
	} else {
	detail2 = "任务①:" + obj.message
	}
	console.log(detail2)
        resolve()
})
});
}

/*
function ID8() {
	return new Promise(resolve => {
	setTimeout(() => {
	const URL = {url: "https://cl-gateway.tuhu.cn/cl-common-api/api/member/addTask",
	headers: JSON.parse(thrcckhd),
	body:JSON.stringify({"taskId": 8}),
		}
        $tutuh.post(URL, function(error, response, data) {
	var obj = JSON.parse(data);
	//console.log("ID8领取任务"+data)
	if (obj.success == true) {
	detail3 = "任务领取②:" + obj.message
	} else {
	detail3 = "任务②:" + obj.message
	}
	console.log(detail3)
        resolve()
	})
}, 300)
});
}

function ID8a() {	
        return new Promise(resolve => {
	setTimeout(() => {
	const URL = {url: "https://cl-gateway.tuhu.cn/cl-common-api/api/member/receiveAward",
	headers: JSON.parse(thrcckhd),
	body: JSON.stringify({"taskId": 8}),
	}
        $tutuh.post(URL, function(error, response, data) {
	var obj = JSON.parse(data);
	//console.log("ID8完成任务"+data)
	if (obj.success == true) {
	detail4 = "任务完成②:" + obj.message
	} else {
	detail4 = "任务②:" + obj.message
	}
	console.log(detail4)
        resolve()
	})
}, 1200)
});
}
*/
function ID12() {
	return new Promise(resolve => {
	setTimeout(() => {
	const URL = {url: "https://cl-gateway.tuhu.cn/cl-common-api/api/member/addTask",
	headers: JSON.parse(thrcckhd),
	body: JSON.stringify({"taskId": 12}),
	}
        $tutuh.post(URL, function(error, response, data) {
	var obj = JSON.parse(data);
	//console.log("ID12领取任务"+data)
	if (obj.success == true) {
	detail5 = "任务领取③:" + obj.message
	} else {
	detail5 = "任务③:" + obj.message
	}
	console.log(detail5)
        resolve()
	})
}, 300)
});
}

function ID12a() {
	return new Promise(resolve => {
	setTimeout(() => {
	const URL = {url: "https://cl-gateway.tuhu.cn/cl-common-api/api/member/receiveAward",
	headers: JSON.parse(thrcckhd),
	body: JSON.stringify({"taskId": 12}),
	}
        $tutuh.post(URL, function(error, response, data) {
        var obj = JSON.parse(data);
	     //console.log("ID12完成任务"+data)
         if (obj.success == true) {
         detail6 = "任务完成③:" + obj.message
	   } else {
	 detail6 = "任务③:" + obj.message
	   }
	 console.log(detail6)
         resolve()
	       })
}, 1200)
});
}

function ID23() {
	return new Promise(resolve => {
	setTimeout(() => {
	const URL = {url: "https://cl-gateway.tuhu.cn/cl-common-api/api/member/addTask",
	headers: JSON.parse(thrcckhd),
	body: JSON.stringify({"taskId": 23}),
	}
        $tutuh.post(URL, function(error, response, data) {
	var obj = JSON.parse(data);
	//console.log("ID23领取任务"+data)
	if (obj.success == true) {
	detail7 = "任务领取④:" + obj.message
	} else {
	detail7 = "任务④:" + obj.message
	}
	console.log(detail7)
        resolve()
	})
}, 300)
});
}

function ID23a() {
	return new Promise(resolve => {
	setTimeout(() => {
	const URL = {url: "https://cl-gateway.tuhu.cn/cl-common-api/api/member/receiveAward",
	headers: JSON.parse(thrcckhd),
	body: JSON.stringify({"taskId": 23}),
	}
        $tutuh.post(URL, function(error, response, data) {
	var obj = JSON.parse(data);
	//console.log("ID23完成任务"+data)
	if (obj.success == true) {
	detail8 = "任务完成④:" + obj.message
	} else {
	detail8 = "任务④:" + obj.message
	}
	console.log(detail8)
        resolve()
	})
}, 1200)
});
}

function ID42() {
	return new Promise(resolve => {
	 setTimeout(() => {
	const URL = {url: "https://cl-gateway.tuhu.cn/cl-common-api/api/member/addTask",
	headers: JSON.parse(thrcckhd),
	body: JSON.stringify({"taskId": 42}),
	}
        $tutuh.post(URL, function(error, response, data) {
	var obj = JSON.parse(data);
	//console.log("ID42领取任务"+data)
	if (obj.success == true) {
	detail9 = "任务领取⑤:" + obj.message
	} else {
	detail9 = "任务⑤:" + obj.message
	}
	console.log(detail9)
        resolve()
	})
}, 300)
});
}

function ID42a() {
	return new Promise(resolve => {
	setTimeout(() => {
	const URL = {url: "https://cl-gateway.tuhu.cn/cl-common-api/api/member/receiveAward",
	headers: JSON.parse(thrcckhd),
	body: JSON.stringify({"taskId": 42}),
	}
        $tutuh.post(URL, function(error, response, data) {
	var obj = JSON.parse(data);
	//console.log("ID42完成任务"+data)
	if (obj.success == true) {
	detail10 = "任务完成⑤:" + obj.message
	} else {
	detail10 = "任务⑤:" + obj.message
	}
	console.log(detail10)
        resolve()
	})
}, 1200)
});
}

function ID26() {
	return new Promise(resolve => {
	setTimeout(() => {
	const URL = {url: "https://cl-gateway.tuhu.cn/cl-common-api/api/member/addTask",
	headers: JSON.parse(thrcckhd),
	body: JSON.stringify({"taskId": 26}),
	}
        $tutuh.post(URL, function(error, response, data) {
	var obj = JSON.parse(data);
	//console.log("ID26领取任务"+data)
	if (obj.success == true) {
	detail11 = "任务领取⑥:" + obj.message
	} else {
	detail11 = "任务⑥:" + obj.message
	}
	console.log(detail11)
        resolve()
	})
}, 300)
});
}

function ID26a() {
	return new Promise(resolve => {
	setTimeout(() => {
	const URL = {url: "https://cl-gateway.tuhu.cn/cl-common-api/api/member/receiveAward",
	headers: JSON.parse(thrcckhd),
	body: JSON.stringify({"taskId": 26}),
	}
        $tutuh.post(URL, function(error, response, data) {
	var obj = JSON.parse(data);
	//console.log("ID26完成任务"+data)
	if (obj.success == true) {
	detail12 = "任务完成⑥:" + obj.message
	} else {
	detail12 = "任务⑥:" + obj.message
	}
	console.log(detail12)
        resolve()
	})
}, 1200)
});
}

//汽车用品爆款抄底
function ID25() {
	return new Promise(resolve => {
	setTimeout(() => {
	const URL = {url: "https://cl-gateway.tuhu.cn/cl-common-api/api/member/addTask",
	headers: JSON.parse(thrcckhd),
	body: JSON.stringify({"taskId": 25}),
	}
        $tutuh.post(URL, function(error, response, data) {
	var obj = JSON.parse(data);
	//console.log("ID25领取任务"+data)
	if (obj.success == true) {
	detail13 = "任务领取⑦:" + obj.message
	} else {
	detail13 = "任务⑦:" + obj.message
	}
	console.log(detail13)
        resolve()
	})
}, 300)
});
}

function ID25a() {
	return new Promise(resolve => {
	setTimeout(() => {
	const URL = {url: "https://cl-gateway.tuhu.cn/cl-common-api/api/member/receiveAward",
	headers: JSON.parse(thrcckhd),
	body: JSON.stringify({"taskId": 25}),
	}
        $tutuh.post(URL, function(error, response, data) {
	var obj = JSON.parse(data);
	//console.log("ID25完成任务"+data)
	if (obj.success == true) {
	detail14 = "任务完成⑦:" + obj.message
	} else {
	detail14 = "任务⑦:" + obj.message
	}
	console.log(detail14)
        resolve()
	})
}, 1200)
});
}

function showmsg() {
subt = subt;
desc = detail + "\n" + detail1 + "\n" + detail2 + "\n" + detail5 + "\n" + detail6 + "\n" + detail7 + "\n" + detail8 + "\n" + detail9 + "\n" + detail10 + "\n" + detail11 + "\n" + detail12 + "\n" + detail13 + "\n" + detail14 + "\n";
$tutuh.notify(tt, subt, desc)
}


function tutuh() {
	const isRequest = typeof $request != "undefined"
	const isSurge = typeof $httpClient != "undefined"
	const isQuanX = typeof $task != "undefined"
	const isLoon = typeof $loon != "undefined"
	const log = (message) => console.log(message)
	const notify = (title, subtitle, message) => {
		if (isQuanX) $notify(title, subtitle, message)
		if (isSurge) $notification.post(title, subtitle, message)
	}
	const write = (value, key) => {
		if (isQuanX) return $prefs.setValueForKey(value, key)
		if (isSurge) return $persistentStore.write(value, key)
	}
	const read = (key) => {
		if (isQuanX) return $prefs.valueForKey(key)
		if (isSurge) return $persistentStore.read(key)
	}
	const get = (options, callback) => {
		if (isQuanX) {
			if (typeof options == "string") options = {
				url: options
			}
			options["method"] = "GET"
			$task.fetch(options)
				.then(response => {
					response["status"] = response.statusCode
					callback(null, response, response.body)
				}, reason => callback(reason.error, null, null))
		}
		if (isSurge) $httpClient.get(options, (error, response, body) => {
			callback(error, adapterStatus(response), body)
		})
	}
	const post = (options, callback) => {
		if (isQuanX) {
			if (typeof options == "string") options = {
				url: options
			}
			options["method"] = "POST"
			$task.fetch(options)
				.then(response => {
					response["status"] = response.statusCode
					callback(null, response, response.body)
				}, reason => callback(reason.error, null, null))
		}
		if (isSurge) {
			$httpClient.post(options, (error, response, body) => {
				callback(error, adapterStatus(response), body)
			})
		}
	}
	const done = (value = {}) => {
		if (isQuanX) return $done(value)
		if (isSurge) isRequest ? $done(value) : $done()
	}
	return {
		isRequest,
		isQuanX,
		isSurge,
		notify,
		write,
		read,
		get,
		log,
		post,
		done
	}
};
