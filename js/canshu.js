var company;

$(function() {

	from_link = window.location.href;
	fxid = getUrlParam("fxid");
	console.log(fxid);

	$.ajax({
		url: 'http://zg99.offcn.com/index/chaxun/getfzinfo?actid=14882&callback=?',
		type: 'GET',
		dataType: 'jsonp',
		data: {
			fxparameter: fxid,
			limit: '200'
		},
		success: function(data) {
			if (data.status == "1") {
				
				// console.log(fxid);
				// console.log(data.lists[0].province);
				// console.log(data.lists[0].cities);
				// console.log(data.lists[0].learningCenter);
				// console.log(data.lists[0].channel);
				
				company = data.lists[0].province+'-'+data.lists[0].cities+'-'+data.lists[0].learningCenter+'-'+data.lists[0].channel;
				
				console.log(company);
				
			} else {
				alert(data.msg);
			}
		}
	});
})

function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
};