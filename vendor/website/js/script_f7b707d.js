function lisclick(t){var e=$(t).text(),i=$(t).attr("data-value");isshow=!0,$(".measure input").val(e),$('input[name="housearea"]').val(i),$(".measurelist").hide()}function citylisclick(t){"phone"==t&&(t=$(".phonecitys").find("option:selected"));var e=$(t).text(),i=$(t).attr("data-value");isshow=!0,$(".measure2 input").val(e),$('input[name="city"]').val(i),$(".measurelist2").hide()}$(function(){function t(t){var e=t.className.split(" ");for(var i in e)if("hiring"==e[i])return!0;return!1}function e(){return"placeholder"in document.createElement("input")}var i=$(".menu"),a=$(".nav"),n=$(".infor,.hiring"),o=$(".closebtn"),s=["http://detail.ayibang.com/AYB_RCBJ.html?ayb_from=website","http://detail.ayibang.com/AYB_JTCQBJ.html?ayb_from=website","http://detail.ayibang.com/AYB_CBL.html?ayb_from=website","http://detail.ayibang.com/AYB_SDBJ.html?ayb_from=website","http://detail.ayibang.com/AYB_XJKH.html?ayb_from=website","http://detail.ayibang.com/AYB_CFBY.html?ayb_from=website","http://detail.ayibang.com/AYB_WSJBY.html?ayb_from=website","http://detail.ayibang.com/AYB_SDCM.html?ayb_from=website","http://detail.ayibang.com/AYB_DBDL.html?ayb_from=website","http://detail.ayibang.com/AYB_PZSFBY.html?ayb_from=website","http://detail.ayibang.com/AYB_CJQ.html?ayb_from=website","http://detail.ayibang.com/AYB_JQJC.html?ayb_from=website","http://detail.ayibang.com/AYB_CMA.html?ayb_from=website","http://detail.ayibang.com/AYB_YYJQX.html?ayb_from=website","http://detail.ayibang.com/AYB_XYJQX.html?ayb_from=website","http://detail.ayibang.com/AYB_BXQX.html?ayb_from=website","http://detail.ayibang.com/AYB_KTQX.html?ayb_from=website","http://detail.ayibang.com/AYB_ZTQX.html?ayb_from=website","http://detail.ayibang.com/AYB_DKXQX.html?ayb_from=website","http://detail.ayibang.com/AYB_WBLQX.html?ayb_from=website","http://detail.ayibang.com/AYB_XDGQX.html?ayb_from=website","http://detail.ayibang.com/AYB_YSJQX.html?ayb_from=website","http://detail.ayibang.com/AYB_YS.html?ayb_from=website","http://detail.ayibang.com/AYB_YES.html?ayb_from=website","http://detail.ayibang.com/AYB_BM.html?ayb_from=website","http://detail.ayibang.com/AYB_LRPH.html?ayb_from=website","http://detail.ayibang.com/AYB_ZDGBM.html?ayb_from=website","http://detail.ayibang.com/AYB_JTCQZF.html?ayb_from=website","http://detail.ayibang.com/AYB_BJ.html?ayb_from=website","http://detail.ayibang.com/AYB_JTBJ.html?ayb_from=website","http://detail.ayibang.com/AYB_GSBJ.html?ayb_from=website","http://detail.ayibang.com/AYB_JJHX.html?ayb_from=website","http://detail.ayibang.com/AYB_JJHX.html?ayb_from=website","http://detail.ayibang.com/AYB_JJHX.html?ayb_from=website","http://detail.ayibang.com/AYB_GDST.html?ayb_from=website","http://detail.ayibang.com/AYB_KTJF.html?ayb_from=website","http://detail.ayibang.com/AYB_KTWX.html?ayb_from=website","http://detail.ayibang.com/AYB_HSC.html?ayb_from=website","http://detail.ayibang.com/AYB_HMS.html?ayb_from=website","http://detail.ayibang.com/AYB_XXFW.html?ayb_from=website","http://detail.ayibang.com/AYB_XDT.html?ayb_from=website","http://detail.ayibang.com/AYB_XCP.html?ayb_from=website","http://detail.ayibang.com/AYB_XCL.html?ayb_from=website","http://detail.ayibang.com/AYB_ETFZTHX.html?ayb_from=website","http://detail.ayibang.com/AYB_SLTGH.html?ayb_from=website","http://detail.ayibang.com/AYB_DJAZ.html?ayb_from=website","http://detail.ayibang.com/AYB_MTWX.html?ayb_from=website","http://activity.ayibang.com/2016/zhaopin/"],l=!0,r=$(".feedback"),c=!0,m=$("#activityon"),h=$(".hiring");navigator.userAgent.indexOf("UCBrowser")>-1&&$(".uc").focus(function(){$(".enterbottom").removeClass("on"),$(".phoneline").removeClass("last")}),i.on("tap",function(){a.show(),i.toggleClass("close"),a.toggleClass("on"),"menu close"==$(this).attr("class")?(l=!0,document.addEventListener("touchmove",function(t){l&&(t.preventDefault(),t.stopPropagation())})):l=!1});var b=$(window).height();$(window).scroll(function(){var t=$(window).scrollTop();t>b?($(".tops").show(),$(".tops").click(function(){$(window).scrollTop(0)})):$(".tops").hide()}),n.click(function(){t(this)&&($(this).addClass("on"),m.removeClass("on")),l=!0;var e=$(this).attr("data-val");39==e&&window.screen.width<=750&&$("#phoneHtml").hide();$(window).width();$(".serviceurl").attr("src",s[e-1]),$(".cengbox").show(),document.addEventListener("touchmove",function(t){l&&(t.preventDefault(),t.stopPropagation())})}),o.click(function(){$("#phoneHtml").show(),$(".cengbox").hide(),$(".serviceurl").attr("src",""),l=!1,$("html,body").removeClass("ovfHiden"),h.removeClass("on"),m.addClass("on")});var d=function(){$.ajax({type:"GET",url:"https://api-nanny.ayibang.com/v1/eConfig",success:function(t){var e=t.acreage,i="";e.forEach(function(t){i+='<li onclick = "lisclick(this);" data-value="'+t.name+'" >'+t.name+"</li>"}),$(".measurelist").html(i)},dataType:"json"})},p=function(){$.ajax({type:"GET",url:"https://api-nanny.ayibang.com/v1/eConfig",success:function(t){var e=t.acreage,i="";e.forEach(function(t){i+='<option onclick = "lisclick(this);" value="'+t.name+'" >'+t.name+"</option>"}),$(".phonemesure").append(i)},dataType:"json"})},y=function(){$.ajax({type:"GET",url:"https://api-open-gate.ayibang.com/v1/order/intention/getCitysByScode?scode=AYB_QYCQBJ",success:function(t){$.each(t,function(t,e){var i='<li onclick = "citylisclick(this);  "data-value="'+e.value+'" >'+e.name+"</li>";$(".citylist").append(i)})},dataType:"json"})},u=function(){$.ajax({type:"GET",url:"https://api-open-gate.ayibang.com/v1/order/intention/getCitysByScode?scode=AYB_QYCQBJ",success:function(t){var e;$.each(t,function(t,i){e+='<option  onchange  = "citylisclick(this); "data-value="'+i.value+'" >'+i.name+"</option>"}),$(".phonecitys").append(e)},dataType:"json"})};y(),d(),p(),u(),$(".recive").on("click",function(){var t=$(".qiyename").val(),e=$("#city").val(),i=$(".phonemesure").val(),a=$(".qiyephone").val(),n=$(".qybeizhu").val(),o=/^1[3|4|5|7|8][0-9]\d{4,8}$/;if(""==t||""==e||""==i||""==a)return alert("请将信息填写完整！"),!1;if(!o.test(a))return alert("请输入正确的联系人电话！"),!1;var s={};s.order={},s.order.scode="AYB_QYCQBJ",s.order.city=e,s.order.custPhone=a,s.intention={},s.intention.content={},s.intention.scode="AYB_QYCQBJ",s.intention.content.companyName=t,s.intention.content.city=e,s.intention.content.phone=a,s.intention.content.housearea=i,s.intention.content.service=n,$.ajax({type:"POST",url:"https://api-open-gate.ayibang.com/v1/order/intention/reserve",data:{intention:s},success:function(){alert("预约成功!"),$(".qiyename").val(""),$(".phonecitys").val(""),$(".phonemesure").val(""),$(".qiyephone").val(""),$(".qybeizhu").val("")},dataType:"json"})});{var f=$(".measure2"),v=($(".measure2 input").val(),$(".citylist"));$(".citylist li")}f.click(function(){c?(v.show(),c=!1):(c=!0,v.hide()),$(this).addClass("on")});{var g=$(".measure"),w=($(".measure input").val(),$(".measurelist"));$(".measurelist li"),$(".enterform>div")}g.click(function(){c?(w.show(),c=!1):(w.hide(),c=!0)}),$(document).click(function(t){t=window.event||t,obj=t.srcElement?t.srcElement:t.target;var e=obj.id;return"demoSelect2"!=e&&"demoSelect"!=e?(v.hide(),w.hide(),void(c=!0)):void 0}),$(".submitBtn2").click(function(){var t=$("#entername").val(),e=$("#city").val(),i=$("#phoneNumber").val(),a=$(".housearea").val(),n=$("#enteropinion").val(),o=/^1[3|4|5|7|8][0-9]\d{4,8}$/,s=$(".enterform"),l=$(".success");if(""==t||""==e||""==i||""==a)return alert("请将信息填写完整！"),!1;if(!o.test(i.replace("联系电话：","")))return alert("请输入正确的联系人电话！"),!1;var r={};r.order={},r.order.scode="AYB_QYCQBJ",r.order.city=e,r.order.custPhone=i,r.intention={},r.intention.content={},r.intention.scode="AYB_QYCQBJ",r.intention.content.companyName=t,r.intention.content.city=e,r.intention.content.phone=i,r.intention.content.housearea=a,r.intention.content.service=n,$.ajax({type:"POST",url:"https://api-open-gate.ayibang.com/v1/order/intention/reserve",data:{intention:r},success:function(){s.hide(),l.show()},dataType:"json"})}),$(".say").click(function(){r.show(),e()||$("[placeholder]").focus(function(){var t=$(this);t.val()==t.attr("placeholder")&&(t.val(""),t.removeClass("placeholder"))}).blur(function(){var t=$(this);(""==t.val()||t.val()==t.attr("placeholder"))&&(t.addClass("placeholder"),t.val(t.attr("placeholder")))}).blur()}),$(".leftlist p").click(function(){var t=$(this).index();$(this).addClass("on").siblings().removeClass("on"),$(".righttext div").eq(t).show().siblings().hide()}),$(".aboutnav li").click(function(){var t=$(this).index();$(this).addClass("on").siblings("ul li").removeClass("on"),$(".tabbox>div").eq(t).show().siblings().hide(),0!=t&&$(window).width()<=750?($(".phonebanner").hide(),$(".tabbox>div").css("margin-top","2.3rem")):0==t&&$(window).width()>=750&&($(".phonebanner").show(),$(".tabbox>div").css("margin-top","0rem"))}),$(".phonemedia li").click(function(){var t=$(this).index();$(this).addClass("on").siblings().removeClass("on"),$(".mediabox>div").eq(t).show().siblings().hide()}),$(".postlist li").click(function(){var t=$(this).index();$(this).addClass("on").siblings().removeClass("on"),$(".postinfor").show(),$(".postinfor .infors").eq(t).show().siblings(".infors").hide(),$(".postinfor .infors").eq(t).is(":visible")&&(l=!0,document.addEventListener("touchmove",function(t){l&&(t.preventDefault(),t.stopPropagation())}))}),$(".abclose").click(function(){$(this).parents(".infors").hide(),$(".postinfor").hide(),l=!1}),$(window).resize(function(){$(window).width()>=750?($(".phonebanner").show(),$(".postinfor").css("display","block"),$(".phonebanner").css("margin-top","0rem"),$(".tabbox>div").css("margin-top","0rem")):$(window).width()<=750&&($(".phonebanner").hide(),$(".phonebanner").css("margin-top","1.8rem"),$(".postinfor").css("display","none"),$(".tabbox>div").css("margin-top","2.3rem"))}),$(window).width()>=750?($(".phonebanner").show(),$(".postinfor").css("display","block"),$(".phonebanner").css("margin-top","0rem"),$(".tabbox>div").css("margin-top","0rem")):$(window).width()<=750&&($(".phonebanner").hide(),$(".phonebanner").css("margin-top","1.8rem"),$(".postinfor").css("display","none"),$(".tabbox>div").css("margin-top","2.3rem"));var _=location.hash,B=$(".tabbox>div"),Y=$(".aboutnav li");"#history"==_&&(B.eq(1).show().siblings().hide(),Y.eq(1).addClass("on").siblings().removeClass("on")),"#media"==_&&(B.eq(2).show().siblings().hide(),Y.eq(2).addClass("on").siblings().removeClass("on")),"#addour"==_&&(B.eq(4).show().siblings().hide(),Y.eq(4).addClass("on").siblings().removeClass("on"))});