//<![CDATA[
// How to Use - Visit www.bloggerbyte.net  
/*! bloggerbyte_Player */
function getVideoPlaylist(i){if("undefined"!=typeof $){if(void 0!==i.playerList){var e,s,d=[],t=[],n=[],a=[],l="",o=0,f=0,r=7,c=4,v=50,p=$(i.playerContainer),h=p.width(),g=i.playerRatio.split(":");g=g[1]/g[0];for(var u=0;u<i.playerList.length;u++)d.push(i.playerList[u].file),t.push(i.playerList[u].title),n.push(i.playerList[u].description),a.push(i.playerList[u].image);for(l+='<div class="bloggerbyte_player">',l+='<div class="bloggerbyte_video"><span class="bloggerbyte_loading"><div class="bloggerbyte_loading"><div class="circlex"></div><div class="circley"></div></div></span>',l+='<iframe id="video_player" src="" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>',l+='<div class="bloggerbyte_server"></div>',l+="</div>",l+='<div class="bloggerbyte_videos">',l+='<ul class="bloggerbyte_list"></ul>',l+='<div class="bloggerbyte_control">',l+='<span class="sd_prevPage bloggerbyte_button"><i class="fas fa-chevron-left"></i><i class="fas fa-chevron-left"></i></span>',l+='<span class="sd_prev bloggerbyte_button"><i class="fas fa-chevron-left"></i></span>',l+='<span class="sd_next bloggerbyte_button"><i class="fas fa-chevron-right"></i></span>',l+='<span class="sd_nextPage bloggerbyte_button"><i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i></span>',l+="</div>",l+="</div>",l+="</div>",p.html(l),l="",u=0;u<t.length;u++)l+="<li>",l+='<img src="',m(d[u])?l+="http://i3.ytimg.com/vi/"+m(d[u])+"/hqdefault.jpg":d[u].indexOf("vimeo")>-1||d[u].indexOf("vid")>-1||d[u].indexOf("google")>-1?l+=playerLogo:l+=a[u],l+='" />',l+="<div>",l+="<h2>",l+='<i class="',m(d[u])?l+="fab fa-youtube":d[u].indexOf("vimeo")>-1?l+="fab fa-vimeo":d[u].indexOf("google")>-1?l+="fab fa-google-drive":d[u].indexOf("ok.ru")>-1?l+="fab fa-odnoklassniki":d[u].indexOf("facebook")>-1?l+="fab fa-facebook-square":l+="fas fa-video",l+="",l+='"></i> ',l+=t[u]+"</h2>",l+="</div>",l+="</li>";for(p.find(".bloggerbyte_list").html(l),u=0;u<t.length;u++)d[u].indexOf("vimeo")>-1&&$.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+d[u].substring(d[u].lastIndexOf("/")+1)+".json",jsonp:"callback",dataType:"jsonp",indexValue:u,success:function(i){var e=i[0].thumbnail_large;p.find(".bloggerbyte_list").find("li").eq(this.indexValue).find("img").attr("src",e)}});$.getScript("http://f.vimeocdn.com/js/froogaloop2.min.js"),$.getScript("https://www.youtube.com/iframe_api");var _=!1;window.onYouTubeIframeAPIReady=function(){y()},p.find(".bloggerbyte_list").click(function(){s=!0}),p.find(".bloggerbyte_list").find("li").outerHeight(v),p.find(".bloggerbyte_list").find("li").each(function(i){$(this).click(function(){var e,t;o=i,p.find(".bloggerbyte_list").find("li").eq(i).hasClass("selected")||(p.find(".bloggerbyte_list").find("li").removeClass("selected").eq(i).addClass("selected"),t=e=d[i],p.find(".bloggerbyte_server").find("video").remove(),p.find(".bloggerbyte_server").hide(),p.find("iframe").attr("src","").hide(),p.find(".bloggerbyte_loading").show(),m(e)?(t="https://www.youtube.com/embed/"+m(e)+"?autoplay=1&loop=1&showinfo=0&rel=0&enablejsapi=1",s&&(t="https://www.youtube.com/embed/"+m(e)+"?autoplay=1&loop=1&showinfo=0&rel=0&enablejsapi=1"),p.find("iframe").attr("src",t).show(),_&&y()):e.indexOf("vimeo")>-1?(t="https://player.vimeo.com/video/"+e.substring(e.lastIndexOf("/")+1),s?p.find("iframe").attr("src",t+"?api=1&amp;player_id=video_player&amp;autoplay=1").show():p.find("iframe").attr("src",t+"?api=1&amp;player_id=video_player").show(),void 0!==p.find("iframe")[0].addEvent&&p.find("iframe")[0].addEvent("ready",function(i){p.find("iframe")[0].addEvent("finish",function(){s=!0,k()})})):e.indexOf("google")>-1?p.find("iframe").attr("src",t).show():e.indexOf("vid")>-1?p.find("iframe").attr("src",t).show():(l="",l+=s?'<video width="100%" height="100%" controls autoplay>':'<video width="100%" height="100%" controls>',l+='<source src="'+t.replace(".ogg",".mp4")+'" type="video/mp4">',l+='<source src="'+t.replace(".mp4",".ogg")+'" type="video/ogg">',l+="</video>",p.find(".bloggerbyte_server").show().html(l),p.find("video").bind("ended",function(){s=!0,k()})),p.find("iframe").load(function(){p.find(".bloggerbyte_loading").hide()}),w())})}),w(),$(window).resize(function(){b()}),b(),p.find(".bloggerbyte_list").scroll(function(){x($(this))}),x(p.find(".bloggerbyte_list")),p.find(".sd_prevPage").click(function(){$(this).hasClass("active")&&(f=p.find(".bloggerbyte_list").scrollTop()-e*p.find(".bloggerbyte_list").find("li").outerHeight(),f=Math.ceil(f/v),p.find(".bloggerbyte_list").animate({scrollTop:f*v},500))}),p.find(".sd_prev").click(function(){o>0&&(o--,w(),O("prev"),p.find(".bloggerbyte_list").find("li").eq(o).trigger("click"))}),p.find(".sd_next").click(function(){o<d.length-1&&(o++,w(),O("next"),p.find(".bloggerbyte_list").find("li").eq(o).trigger("click"))}),p.find(".sd_nextPage").click(function(){$(this).hasClass("active")&&(f=p.find(".bloggerbyte_list").scrollTop()+e*v,f=Math.ceil(f/v),p.find(".bloggerbyte_list").animate({scrollTop:f*v},500))}),p.find(".bloggerbyte_list").animate({scrollTop:0},10),p.find(".bloggerbyte_list").find("li").eq(0).trigger("click"),$(document).ready(function(){$("").remove()})}}else alert("Please insert jQuery library!");function m(i){return i.indexOf("watch?v")>-1?i.substring(i.indexOf("?v=")+3):(i.indexOf("youtube")>-1||i.indexOf("youtu.be")>-1)&&i.substring(i.lastIndexOf("/")+1)}function y(){_=!0,new YT.Player("video_player",{events:{onStateChange:function(i){switch(i.data){case YT.PlayerState.ENDED:s=!0,k()}}}})}function w(){o>0?p.find(".sd_prev").addClass("active"):p.find(".sd_prev").removeClass("active"),o<d.length-1?p.find(".sd_next").addClass("active"):p.find(".sd_next").removeClass("active")}function b(){$(window).width()<i.playerMobile||!i.playerResponsive?(e=c,i.playerResponsive&&p.width($(window).width()),p.removeClass("bloggerbyte_desktop"),p.find(".bloggerbyte_list").height(e*v),p.find(".bloggerbyte_video").height(p.find(".bloggerbyte_video").width()*g),p.find(".bloggerbyte_video").width("100%"),p.find(".bloggerbyte_videos").width("100%")):(e=r,p.addClass("bloggerbyte_desktop"),p.width(h),p.find(".bloggerbyte_list").height(e*(v-.8)),p.find(".bloggerbyte_video").height(p.find(".bloggerbyte_videos").outerHeight()),p.find(".bloggerbyte_video").css("width",i.playerDesktop),p.find(".bloggerbyte_videos").css("width",100-parseInt(i.playerDesktop)+"%"))}function x(i){i.scrollTop()>0?p.find(".sd_prevPage").addClass("active"):p.find(".sd_prevPage").removeClass("active"),i[0].scrollHeight>=i.outerHeight()+i.scrollTop()+5?p.find(".sd_nextPage").addClass("active"):p.find(".sd_nextPage").removeClass("active")}function O(i){var s=p.find(".bloggerbyte_list").scrollTop(),d=s+p.find(".bloggerbyte_list").outerHeight(),t=p.find(".bloggerbyte_list").find("li").eq(o).offset().top-p.find(".bloggerbyte_list").find("li").eq(o).parent().offset().top+p.find(".bloggerbyte_list").find("li").eq(o).outerHeight();return(t+s+10>=d+p.find(".bloggerbyte_list").find("li").eq(o).outerHeight()||t<1)&&(f=o*v,"prev"==i&&(f=(o-e+1)*v),p.find(".bloggerbyte_list").animate({scrollTop:f},500)),!0}function k(){o<d.length-1&&(o++,w(),O("next"),p.find(".bloggerbyte_list").find("li").eq(o).trigger("click"))}}var timer=setInterval(function(){"undefined"!=typeof getPlayerOptions&&(new getVideoPlaylist(getPlayerOptions),clearInterval(timer))},50);
//]]>
