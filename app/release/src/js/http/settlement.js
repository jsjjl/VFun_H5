function goods_select(){var s=URLS.SERVER_URL+URLS.details,a=param,o=function(s){console.log(s);var a="";a+="<img src="+s.datas.cover+" >",a+="<span class='ell'>"+s.datas.name+"</span><p><em class='g0'>"+s.datas.score+"积分</em>X 1</p>",$("#ajax_goods_select").empty().append(a),xuni=s.datas.type;var o="";xuni>0?(o+="<div class='set_virtual'>虚拟物品无需收货地址，下单后请注意查收兑换码！</div>",o+="<a href='javascript:;' class='set_bt order_submit' id='xuni_bt'>订单提交</a>"):goods_user_address(),$("#ajax_user_msg").append(o);var e={};e["userInfo.phone"]=user,e["gift.id"]=goodsId,$(".order_submit").click(function(){if(!$(this).hasClass("bt_no")){$(this).addClass("bt_no"),$(this).html("提交中");var s=URLS.SERVER_URL+URLS.orderSubmit,a=e,o="";for(v in e)o=o+v+"="+e[v]+"&";console.log(s+"?"+o.substr(0,o.length-1));var d=function(s){s.code>0?($("html").append("<div class='cover-decision'></div>"),console.log(s),$("#submit_1 span").html(s.datas.cdkey),$("#submit_1 p").html(s.datas.reminder),$("#submit_1").addClass("show")):(alert(s.msg),window.history.back())},i=function(){$(".ajax_noload").show()};ajaxPost(s,a,d,i)}})},e=function(){$(".ajax_noload").show()};ajaxPost(s,a,o,e)}function goods_user_address(){var s=URLS.SERVER_URL+URLS.userAddress,a=address_param,o="";for(v in address_param)o=o+v+"="+address_param[v]+"&";console.log(s+"?"+o.substr(0,o.length-1));var e=function(s){console.log(s);var a="",o=s&&s.datas;o&&""!=o.length?(a="<div class='set_list'><i class='iconfont icon-ditu-copy'></i><p>"+s.datas.contactName+"<em>"+s.datas.contactPhone+"</em><span>"+s.datas.address+s.datas.detailAddress+"<br/></span></p><a href='address_list.html'><i class='iconfont icon-jiantou'></i></a></div><a href='javascript:;' class='set_bt order_submit' >订单提交</a>",shippingAddressId=s.datas.id):a="<a href='add_address.html'class='set_bt'>添加收货地址</a>",$("#ajax_user_msg").append(a);var e={};e["userInfo.phone"]=user,e["gift.id"]=goodsId,e["shippingAddress.id"]=shippingAddressId,$(".order_submit").click(function(){if(!$(this).hasClass("bt_no")){$(this).addClass("bt_no"),$(this).html("提交中");var s=URLS.SERVER_URL+URLS.orderSubmit,a=e,o="";for(v in e)o=o+v+"="+e[v]+"&";console.log(s+"?"+o.substr(0,o.length-1));var d=function(s){s.code>0?($("html").append("<div class='cover-decision'></div>"),console.log(s),$("#submit_2").addClass("show")):(alert(s.msg),window.history.back())},i=function(){$(".ajax_noload").show()};ajaxPost(s,a,d,i)}})},d=function(){$(".ajax_noload").show()};ajaxPost(s,a,e,d)}var param={},goodsId,totalScore,shippingAddressId;GetQueryString("goodsId")&&(goodsId=GetQueryString("goodsId")),param.id=goodsId,param.simple=!0;var xuni,address_param={};address_param.phone=user,address_param.theDefault=!0,$(".submit_close").click(function(){if($(this).is(".submit_copy")){var s=new Clipboard(".submit_copy");s.on("success",function(s){console.log("复制成功"+s),$(".cover-decision").remove(),$(".submit").removeClass("show"),$(".submit").css("display","none"),window.history.back()}),s.on("error",function(s){console.log("复制失败"+s),$(".cover-decision").remove(),$(".submit").removeClass("show"),$(".submit").css("display","none"),window.history.back()})}else $(".cover-decision").remove(),$(".submit").removeClass("show"),$(".submit").css("display","none"),window.history.back()}),goods_select();