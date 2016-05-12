/*
list.js
@author gongwb
收藏夹用法
javascript:(function(){var t=new Date().getTime(),w=window,d=w.document,b=d.body,s=d.createElement("script");s.src="http://static.bjnews.com.cn/m/js/list.js";b.appendChild(s);var ss=d.createElement("link");ss.rel="stylesheet";ss.href="http://static.bjnews.com.cn/m/css/m.css";b.appendChild(ss);var sss=d.createElement("link");sss.rel="stylesheet";sss.href="http://static.bjnews.com.cn/m/css/list.css";b.appendChild(sss);})();
/*去除右侧图片的内联css，以用外部css进行控制。*/
(function(){
    var images=document.getElementById("tjlist").getElementsByTagName("img");
    for(var i=0;i<images.length;i++){
        images[i].setAttribute("style","");
        images[i].setAttribute("width","");
        images[i].setAttribute("height","");
    }
})();
/*去除右侧 鼠标悬浮的效果*/
(function(){
    var ts=document.getElementById("tjlist").getElementsByClassName("t");
    for(var i=0;i<ts.length;i++){
        //ts[i].removeEventListener;
    }
})();
/*
栏目名称加到顶部
更改为栏目名称在前，注释掉的是原版的栏目名称在后。
栏目名称由dom获取而得。
*/
(function(){
    document.getElementById("mobile-logo").innerHTML=document.getElementById("logo").getElementsByTagName("h3")[0].innerHTML+"-"+document.getElementById("mobile-logo").innerHTML;
    //document.getElementById("mobile-logo").innerHTML+="-"+document.getElementById("logo").getElementsByTagName("h3")[0].innerHTML;
})();
/*
手机端列表，点击标题和摘要都要能打开链接。
PC端只点击标题进行链接。
手机端不改变PC点的click事件，用手机端的touch事件进行计算。
对手机端的点击进行优化算法
用触动的时间差来确定是划动了还是没有划动。
划动时，手依然触在屏上，所以相当于又触了屏。单纯的判断触动结束和触动开始的时间差会有误差。
划动时给一个负数，增加这个时间差。
触动结束时，如果没有时间差，就打开链接。
*/
(function(){
    var news=document.getElementsByClassName("news");
    for(var i=0;i<news.length;i++){
        news[i].setAttribute("data-url",news[i].getElementsByTagName("a")[0].href);
        news[i].addEventListener('touchstart', function(e){ 
            this.setAttribute("data-time",Date.parse(new Date()));
            //e.preventDefault();
        }, false);
        news[i].addEventListener('touchmove', function(e){ 
            this.setAttribute("data-time",-1000);
        }, false);
        news[i].addEventListener('touchend', function(e){ 
            if(Date.parse(new Date())-this.getAttribute("data-time")<100){
                window.open(this.getAttribute("data-url"));
            }
            e.preventDefault();
        }, false);
    }
})();
/*mobile events*/
(function(){
    //菜单被按下时的事件
    document.getElementById("mobile-show-menu-button").addEventListener("click",function(){
        if(document.getElementById("mobile-show-menu-button").getAttribute("class")=="mobile-show-menu-button"){
            document.getElementById("mobile-show-menu-button").setAttribute("class","mobile-hide-menu-button");
            document.getElementsByClassName("menu")[0].style.display="block";   
        }else{
            document.getElementById("mobile-show-menu-button").setAttribute("class","mobile-show-menu-button");
            document.getElementsByClassName("menu")[0].style.display="none";
            document.getElementById("mobile-show-menu-button").setAttribute("open","null");
        }
        document.getElementById("main").style.paddingTop=document.getElementById("header").scrollHeight+"px"; 
    },false);
    //搜索被按下的事件
    document.getElementById("mobile-search-button").addEventListener("click",function(){
        if(document.getElementById("mobile-search-button").getAttribute("open")==null||document.getElementById("mobile-search-button").getAttribute("open")=="null"){
            document.getElementById("mobile-search").style.display="block";
            document.getElementById("mobile-search-button").setAttribute("open","ok");
        }else{
            document.getElementById("mobile-search").style.display="none";
            document.getElementById("mobile-search-button").setAttribute("open","null");
        }
        document.getElementById("main").style.paddingTop=document.getElementById("header").scrollHeight+"px";
    },false);
})();
//添加搜索事件
(function(){
    var forms=document.getElementsByTagName("form");
        for (var i = forms.length - 1; i >= 0; i--) {
            forms[i].addEventListener("submit",function(){
                    var keyword=document.getElementById(this.getAttribute("data-input")).value;
                    //alert(document.getElementById(this.getAttribute("data-input"));
                    var url="http://www.bjnews.com.cn/search.php?type=1&sk="+keyword;
                    window.open(url);
                    return false;
            },false);
        };
})();
/* 设置搜索关键字 */
    (function(){
        document.getElementById("mobile-search-input1").setAttribute("placeholder","关键字");
        document.getElementById("mobile-search-input2").setAttribute("placeholder","关键字");
    })();
/*增加mobile端的图片旁边的文字*/
(function(){
    var ts=document.getElementById("tjlist").getElementsByClassName("t");
    for(var i=0;i<ts.length;i++){
        var newA=document.createElement("a");
        newA.innerHTML=ts[i].getElementsByTagName("a")[1].innerHTML;
        newA.setAttribute("class","mob");
        newA.setAttribute("href",ts[i].getElementsByTagName("a")[1].getAttribute("href"));
        ts[i].appendChild(newA);
    }
})();
/*取消屏幕旋转事件*/
window.addEventListener("orientationchange",function(){
    //window.onresize();
    e.preventDefault();
},false);
/*切换到PC模式*/
document.getElementById("changeToPcModeButton").addEventListener("touchstart",function(){
    document.getElementById("viewport").setAttribute("content","");
    document.getElementById("flex").setAttribute("href","http://static.bjnews.com.cn/www/css_v3/css.css");
    document.getElementById("flexlist").setAttribute("href","http://static.bjnews.com.cn/www/css_v3/css.css");
    document.getElementById("mobile-menu").style.display="none";
    var tags=document.getElementsByClassName("mob");
    for (var i = tags.length - 1; i >= 0; i--) {
        tags[i].style.display="none";
    };   
},false);
window.onresize=function(){
    if(document.body.clientWidth>=660){
        document.getElementsByClassName("menu")[0].style.display="block";
        document.getElementById("mobile-show-menu-button").setAttribute("class","mobile-show-menu-button");
    }else{
        document.getElementsByClassName("menu")[0].style.display="none";
        document.getElementById("mobile-show-menu-button").getAttribute("class","mobile-hide-menu-button");
    }
    document.getElementById("main").style.paddingTop=document.getElementById("header").scrollHeight+"px";
}