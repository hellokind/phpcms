jQuery.cookie = function(h, f, c) {
    if ("undefined" != typeof f) {
        c = c || {};
        null === f && (f = "", c.expires = -1);
        var e = "";
        if (c.expires && ("number" == typeof c.expires || c.expires.toUTCString))"number" == typeof c.expires ? (e = new Date, e.setTime(e.getTime() + 864E5 * c.expires)) : e = c.expires,
        e = "; expires=" + e.toUTCString();
        var a = c.path ? "; path=" + c.path: "",
        m = c.domain ? "; domain=" + c.domain: "",
        c = c.secure ? "; secure": "";
        document.cookie = [h, "=", encodeURIComponent(f), e, a, m, c].join("")
    } else {
        f = null;
        if (document.cookie && "" != document.cookie) {
            c = document.cookie.split(";");
            for (e = 0; e < c.length; e++) if (a = jQuery.trim(c[e]), a.substring(0, h.length + 1) == h + "=") {
                f = decodeURIComponent(a.substring(h.length + 1));
                break
            }
        }
        return f
    }
};
function dDat(h, f, c, e) {
    var a = $("#" + h),
    h = a.parent().find(".lcr"),
    m = a.parent().find(".rcr"),
    g = a.find(".d_cnt").length,
    d = 1,
    j = e - 1;
    a.width(g * c + "px");
    m.click(function() {
        a.is(":animated") || (d >= g - j ? d > g - j && d != g && (d -= j, a.animate({
            left: "-=" + c + "px"
        },
        f), d += 1) : (a.animate({
            left: "-=" + c + "px"
        },
        f), d += 1))
    });
    h.click(function() { ! a.is(":animated") && 1 != d && (d > g - j && (d -= j), a.animate({
            left: "+=" + c + "px"
        },
        f), d -= 1)
    })
}
$(function() {
    function h(b, c) {
        var a = parseInt((c - 1E3 * b) / 1E3);
        if (0 <= a && 60 > a) return a + "\u79d2\u524d";
        if (60 <= a && 3600 > a) return a = parseInt(a / 60),
        a + "\u5206\u949f\u524d";
        if (3600 <= a && 86400 > a) return a = parseInt(a / 3600),
        a + "\u5c0f\u65f6\u524d";
        a = parseInt(a / 86400);
        return a + "\u5929\u524d"
    }
    function f(b) {
        var c = b.attr("class"),
        d = b.parent().find(".qrcode");
        if ("weixin" == c) return weixin(b, d),
        !1;
        b = $("#main h1").text();
        switch (c) {
        case "sina":
            sina(b, a);
            break;
        case "qqwb":
            qqwb(b, a);
            break;
        case "qzone":
            qzone(b, a);
            break;
        case "baidu":
            baidu(b, a);
            break;
        case "wangyi":
            wangyi(b, a);
            break;
        case "kaixin":
            kaixin(b, a);
            break;
        case "renren":
            renren(b, a);
            break;
        case "douban":
            douban(b, a);
            break;
        case "twitter":
            twitter(b, a);
            break;
        case "fsbk":
            fsbk(b, a);
            break;
        default:
            return ! 1
        }
    }
    function c(b) {
        $("#nolog,#cnolog").hide();
        $("#user").html("<a href='http://passport.bjnews.com.cn/profile'>" + b + "</a>");
        $("#cuser").html("<a href='http://passport.bjnews.com.cn/profile' class='usr'>" + b + "</a>");
        $("#clog,#logsc").show()
    }
    0 < $(".up").length && $.getJSON("http://www.bjnews.com.cn/api/get_upnum.php?id=" + $(".up").data("id") + "",
    function(b) {
        0 < b.suc && $(".up").html(b.num)
    });
    var e = (new Date).getTime();
    $("#klist li span").each(function() {
        $(this).html(h($(this).data("time"), e))
    });
    $(window).height();
    var a = window.location.href;
    String.prototype.trim = function() {
        return this.replace(/(^\s*)|(\s*$)/g, "")
    };
    String.prototype.isNull = function() {
        return 0 == this.trim().length
    };
    0 < $("#scrollconts").length && dDat("scrollconts", 1E3, 720, 1, !1);
    $.browser.msie && parseInt($.browser.version);
    var m; (m = $.browser.msie && "7" > parseInt($.browser.version) ? !0 : !1) && ($("#header,#rsig").css({
        position: "absolute"
    }), $("#rsig").css({
        top: $(window).height() - 150 + "px",
        visibility: "visible"
    }));
    var g = $("#searchTab");
    $(".main");
    $("#sld").click(function() {
        g.toggle()
    });
    g.find("li").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
        $("#sld").text($(this).text());
        $("#sct").val(1 + $(this).index());
        g.hide()
    });
    $("#searchBtn").click(function() {
        $("#sct").val(g.find(".selected").text());
        if ($("#bjTxt").val().isNull()) return alert("\u8bf7\u8f93\u5165\u641c\u7d22\u5185\u5bb9!"),
        !1;
        $("#sct").val(g.find(".selected").index() + 1);
        $("#scform").submit()
    });
    var d = $("#klist"),
    j;
    d.hover(function() {
        clearInterval(j)
    },
    function() {
        j = setInterval(function() {
            var b = d.find("li:first"),
            a = b.height();
            b.animate({
                marginTop: -a + "px"
            },
            580,
            function() {
                b.css("marginTop", 0).appendTo(d)
            })
        },
        3E3)
    }).trigger("mouseleave");
    $(".plog .zh").focus(function() {
        $(this).css({
            backgroundPosition: "5px -1830px"
        })
    });
    $(".plog .pwd").focus(function() {
        $(this).css({
            backgroundPosition: "5px -1870px"
        })
    });
    $(".plog .zh").blur(function() { (null == $(this).val().trim() || "" == $(this).val().trim()) && $(this).css({
            backgroundPosition: "-186px -1830px"
        })
    });
    $(".plog .pwd").blur(function() { (null == $(this).val().trim() || "" == $(this).val().trim()) && $(this).css({
            backgroundPosition: "-187px -1870px"
        })
    });
    l = $("#label a").length;
    for (var i = 0; i < l; i++) $("#label a:eq(" + i + ")").attr("class", "a" + i);
    var p = $(".content p,.content span,.content strong"),
    k = !0,
    n = $(".aj"),
    o = $(".ay");
    $(".aj").click(function() {
        k && (p.css({
            fontSize: "16px"
        }), n.css({
            backgroundPosition: "left -2010px"
        }), o.css({
            backgroundPosition: "-42px -1960px"
        }), k = !1)
    });
    $(".ay").click(function() {
        k || (p.css({
            fontSize: "14px"
        }), n.css({
            backgroundPosition: "left -1960px"
        }), o.css({
            backgroundPosition: "-42px -2010px"
        }), k = !0)
    });
    $(".aj").mouseenter(function() {
        k && n.css({
            backgroundPosition: "left -1986px"
        })
    }).mouseleave(function() {
        k ? n.css({
            backgroundPosition: "left -1960px"
        }) : n.css({
            backgroundPosition: "left -2010px"
        })
    });
    $(".ay").mouseenter(function() {
        k || o.css({
            backgroundPosition: "-42px -1986px"
        })
    }).mouseleave(function() {
        k ? o.css({
            backgroundPosition: "-42px -2010px"
        }) : o.css({
            backgroundPosition: "-42px -1960px"
        })
    });
    $share = $(".share");
    $share.find("span").each(function() {
        $(this).live("click",
        function() {
            f($(this))
        })
    });
    $(".up").each(function() {
        $(this).live("click",
        function() {
            var b = $(this),
            a = b.parent();
            oid = b.data("id");
            "0" != b.data("al") && (b.data("al", "0"), $("<strong class='j'>+1</strong>").appendTo(a).animate({
                top: "-40px",
                opacity: "0"
            },
            "slow",
            function() {
                $(this).remove()
            }), b = a.find(".up"), a = parseInt(b.text()), b.text(a + 1), b.css({
                backgroundPosition: "-428px -236px",
                color: "#a80000"
            }), $.get("/api/set_upnum.php", {
                id: oid
            }));
            return ! 1
        })
    });
    $("#topday li").each(function(b) {
        $(this).click(function() {
            $(this).addClass("now").siblings().removeClass("now");
            $("#tdnews .tdnews:eq(" + b + ")").show().siblings(".tdnews").hide()
        })
    });
    0 < $("#rsig").length && $("#rsig").css({
        left: parseInt($("#main").offset().left) + parseInt($(".nleft").width()) + 10 + "px"
    });
    /*
    $("#tanw,.qrcode").html("<img src='https://chart.googleapis.com/chart?cht=qr&chs=200x200&choe=UTF-8&chld=L|0&chl=" + a + "' width='90' height='90' />");
    var ua = navigator.userAgent.toLowerCase();
    var IEVer = /msie/.test(ua)?parseFloat(ua.match(/msie ([\d.]+)/)[1]):false;
    var qrcode_render;
    if (IEVer == false) {
        qrcode_render = "canvas";
    } else {
        if (IEVer <= 8) {
            qrcode_render = "table";
        }
    }
    $("#tanw,.qrcode").qrcode({
        render: qrcode_render, //or canvas
        //ecLevel: "Q",
        correctLevel: 1,
        width: 90, //宽度
        height: 90, //高度
        text: a
    });
    */
    $(".gotop").click(function() {
        $("html,body").animate({
            scrollTop: "0px"
        },
        100);
        return ! 1
    });
    $("#s").click(function() {
        f($(this))
    });
    $("#w").click(function() {
        $("#tanw").show();
        return ! 1
    });
    $("#w").mouseleave(function() {
        $("#tanw").hide()
    });
    var q = $("#tanck");
    $("#tanckcls").click(function() {
        q.hide("slow")
    });
    $("#ask").click(function() {
        q.show("slow")
    });
    $(window).scroll(function() {
        if (m) {
            var b = $(document).scrollTop();
            0 < $("#rsig").length && $("#rsig").animate({
                top: $(window).height() + b - 150 + "px"
            },
            70);
            $("#header").animate({
                top: b + "px"
            },
            70);
            $("#rsig").css("visibility", "visible")
        } else 0 < $("#rsig").length && ($("#w").offset().top > $("#footer").offset().top - 70 ? $("#rsig").css("visibility", "hidden") : $("#rsig").css("visibility", "visible"))
    });
    /*try {
        0 > location.href.indexOf("bjnews.com.cn") && (location.href = "http://www.bjnews.com.cn/")
    } catch(r) {}*/
    $("#logout,#clogout").live("click",
    function() {
        $.getJSON("http://www.bjnews.com.cn/logout_callback.php?callback_logout=?",
        function(b) {
            "1" == b && ($("#user,#cuser").html("").hide(), $("#logsc,#clog").hide(), $("#nolog,#cnolog").show(), $.cookie("PASSPORT", null))
        })
    });
    i = $.cookie("PASSPORT");
    "" != i && null != i && (i = Math.random(), $.getJSON("http://www.bjnews.com.cn/app_chklogin.php?t=" + i + "&callback_chklogin=?",
    function(b) {
        "1" == b[0] && c(b[1])
    }));
    $("#cpwd").keydown(function(b) {
        13 == b.keyCode && $("#d").trigger("click")
    });
    $("#d").click(function() {
        var b = $("#form2 #cus").val(),
        a = $("#form2 #cpwd").val();
        if (null == b.trim() || null == a.trim() || "" == b.trim() || "" == a.trim()) return alert("\u8bf7\u8f93\u5165\u7528\u6237\u540d\u5bc6\u7801"),
        !1;
        $.getJSON("http://www.bjnews.com.cn/login.php?username=" + b + "&passwd=" + a + "&keeplogin=y&callback_login=?",
        function(a) {
            "1" == a[0] ? c(a[1]) : alert("\u767b\u5f55\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\uff01")
        });
        return ! 1
    });
    $(".tij").click(function() {
        if ("nol" == $(this).attr("name")) return alert("\u8bf7\u5148\u767b\u5f55"),
        !1;
        if (null == $("#tare").val() || "" == $("#tare").val()) return alert("\u8bf7\u8f93\u5165\u5185\u5bb9"),
        !1;
        $("#form2").submit();
        return ! 1
    });
    $("#tjlist .t").each(function() {
        $(this).mouseenter(function() {
            $(this).find(".txt").slideDown()
        }).mouseleave(function() {
            $(this).find(".txt").slideUp()
        })
    });
    $(".tag dd a").each(function() {
        $(this).attr("href", "http://www.bjnews.com.cn/search.php?type=1&sk=" + $(this).text())
    })
});
/*try {
    0 > location.href.indexOf("bjnews.com.cn") && (location.href = "http://www.bjnews.com.cn/")
} catch(e$$3) {};*/
/*
;eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('2y.W=2(h,f,c){x("3s"!=1P f){c=c||{};K===f&&(f="",c.Q=-1);u e="";x(c.Q&&("2L"==1P c.Q||c.Q.2E))"2L"==1P c.Q?(e=30 2h,e.3r(e.2j()+3q*c.Q)):e=c.Q,e="; Q="+e.2E();u a=c.1B?"; 1B="+c.1B:"",m=c.1D?"; 1D="+c.1D:"",c=c.2D?"; 2D":"";19.W=[h,"=",3t(f),e,a,m,c].3u("")}2v{f=K;x(19.W&&""!=19.W){c=19.W.3w(";");2R(e=0;e<c.F;e++)x(a=2y.D(c[e]),a.2r(0,h.F+1)==h+"="){f=3v(a.2r(h.F+1));E}}9 f}};2 29(h,f,c,e){u a=$("#"+h),h=a.1h().B(".3p"),m=a.1h().B(".3o"),g=a.B(".3j").F,d=1,j=e-1;a.1G(g*c+"O");m.6(2(){a.2o(":2s")||(d>=g-j?d>g-j&&d!=g&&(d-=j,a.R({I:"-="+c+"O"},f),d+=1):(a.R({I:"-="+c+"O"},f),d+=1))});h.6(2(){!a.2o(":2s")&&1!=d&&(d>g-j&&(d-=j),a.R({I:"+="+c+"O"},f),d-=1)})}$(2(){2 h(b,c){u a=N((c-1w*b)/1w);x(0<=a&&1O>a)9 a+"\\3i\\1l";x(1O<=a&&1M>a)9 a=N(a/1O),a+"\\3h\\3k\\1l";x(1M<=a&&2x>a)9 a=N(a/1M),a+"\\3l\\3n\\1l";a=N(a/2x);9 a+"\\3m\\1l"}2 f(b){u c=b.1q("1g"),d=b.1h().B(".1T");x("2w"==c)9 2w(b,d),!1;b=$("#1K 3x").T();3y(c){J"2M":2M(b,a);E;J"2u":2u(b,a);E;J"33":33(b,a);E;J"31":31(b,a);E;J"35":35(b,a);E;J"38":38(b,a);E;J"36":36(b,a);E;J"2Z":2Z(b,a);E;J"2Y":2Y(b,a);E;J"2P":2P(b,a);E;3K:9!1}}2 c(b){$("#2S,#2O").S();$("#2W").U("<a P=\'M://2V.C.A.G/2U\'>"+b+"</a>");$("#2X").U("<a P=\'M://2V.C.A.G/2U\' 1g=\'3g\'>"+b+"</a>");$("#2T,#2m").1c()}0<$(".14").F&&$.1k("M://V.C.A.G/1S/3J.Z?1r="+$(".14").18("1r")+"",2(b){0<b.3I&&$(".14").U(b.3L)});u e=(30 2h).2j();$("#2e 1n 1J").X(2(){$(4).U(h($(4).18("3M"),e))});$(11).1a();u a=11.16.P;2b.2l.D=2(){9 4.3O(/(^\\s*)|(\\s*$)/g,"")};2b.2l.22=2(){9 0==4.D().F};0<$("#27").F&&29("27",1w,3N,1,!1);$.1j.24&&N($.1j.20);u m;(m=$.1j.24&&"7">N($.1j.20)?!0:!1)&&($("#21,#H").5({3H:"3G"}),$("#H").5({Y:$(11).1a()-1U+"O",1f:"1E"}));u g=$("#3B");$(".1K");$("#25").6(2(){g.3A()});g.B("1n").6(2(){$(4).1W("1p").1u().2g("1p");$("#25").T($(4).T());$("#1N").z(1+$(4).23());g.S()});$("#3z").6(2(){$("#1N").z(g.B(".1p").T());x($("#3C").z().22())9 12("\\17\\1o\\1m\\3D\\3F\\2J\\2K!"),!1;$("#1N").z(g.B(".1p").23()+1);$("#3E").2G()});u d=$("#2e"),j;d.3P(2(){3f(j)},2(){j=3b(2(){u b=d.B("1n:3e"),a=b.1a();b.R({1Y:-a+"O"},3d,2(){b.5("1Y",0).2a(d)})},3c)}).34("1b");$(".1i .1R").2c(2(){$(4).5({v:"1V -2t"})});$(".1i .2p").2c(2(){$(4).5({v:"1V -2A"})});$(".1i .1R").2F(2(){(K==$(4).z().D()||""==$(4).z().D())&&$(4).5({v:"-39 -2t"})});$(".1i .2p").2F(2(){(K==$(4).z().D()||""==$(4).z().D())&&$(4).5({v:"-3a -2A"})});l=$("#2d a").F;2R(u i=0;i<l;i++)$("#2d a:2k("+i+")").1q("1g","a"+i);u p=$(".1H p,.1H 1J,.1H 1s"),k=!0,n=$(".1L"),o=$(".1v");$(".1L").6(2(){k&&(p.5({2B:"4X"}),n.5({v:"I -1d"}),o.5({v:"-15 -1e"}),k=!1)});$(".1v").6(2(){k||(p.5({2B:"4W"}),n.5({v:"I -1e"}),o.5({v:"-15 -1d"}),k=!0)});$(".1L").1z(2(){k&&n.5({v:"I -2n"})}).1b(2(){k?n.5({v:"I -1e"}):n.5({v:"I -1d"})});$(".1v").1z(2(){k||o.5({v:"-15 -2n"})}).1b(2(){k?o.5({v:"-15 -1d"}):o.5({v:"-15 -1e"})});$1Q=$(".1Q");$1Q.B("1J").X(2(){$(4).1F("6",2(){f($(4))})});$(".14").X(2(){$(4).1F("6",2(){u b=$(4),a=b.1h();1X=b.18("1r");"0"!=b.18("37")&&(b.18("37","0"),$("<1s 1g=\'j\'>+1</1s>").2a(a).R({Y:"-4S",4E:"0"},"1t",2(){$(4).4I()}),b=a.B(".14"),a=N(b.T()),b.T(a+1),b.5({v:"-4P -4Q",4N:"#4M"}),$.4T("/1S/4L.Z",{1r:1X}));9!1})});$("#4K 1n").X(2(b){$(4).6(2(){$(4).1W("2f").1u().2g("2f");$("#1y .1y:2k("+b+")").1c().1u(".1y").S()})});0<$("#H").F&&$("#H").5({I:N($("#1K").1C().I)+N($(".4J").1G())+10+"O"});$("#1I,.1T").U("<3Q 4O=\'4B://1Z.4A.A/1Z?4z=4C&4D=4G&4F=4R-8&50=L|0&51="+a+"\' 1G=\'2i\' 1a=\'2i\' />");$(".4Y").6(2(){$("U,4U").R({26:"4Z"},4V);9!1});$("#s").6(2(){f($(4))});$("#w").6(2(){$("#1I").1c();9!1});$("#w").1b(2(){$("#1I").S()});u q=$("#4H");$("#4x").6(2(){q.S("1t")});$("#45").6(2(){q.1c("1t")});$(11).44(2(){x(m){u b=$(19).26();0<$("#H").F&&$("#H").R({Y:$(11).1a()+b-1U+"O"},1A);$("#21").R({Y:b+"O"},1A);$("#H").5("1f","1E")}2v 0<$("#H").F&&($("#w").1C().Y>$("#43").1C().Y-1A?$("#H").5("1f","4y"):$("#H").5("1f","1E"))});2q{0>16.P.32("C.A.G")&&(16.P="M://V.C.A.G/")}28(r){}$("#42,#46").1F("6",2(){$.1k("M://V.C.A.G/47.Z?4a=?",2(b){"1"==b&&($("#2W,#2X").U("").S(),$("#2m,#2T").S(),$("#2S,#2O").1c(),$.W("2N",K))})});i=$.W("2N");""!=i&&K!=i&&(i=49.48(),$.1k("M://V.C.A.G/41.Z?t="+i+"&40=?",2(b){"1"==b[0]&&c(b[1])}));$("#2Q").3U(2(b){13==b.3T&&$("#d").34("6")});$("#d").6(2(){u b=$("#1x #3S").z(),a=$("#1x #2Q").z();x(K==b.D()||K==a.D()||""==b.D()||""==a.D())9 12("\\17\\1o\\1m\\3R\\3V\\3W\\3Z\\3Y"),!1;$.1k("M://V.C.A.G/3X.Z?4b="+b+"&4c="+a+"&4r=y&4q=?",2(a){"1"==a[0]?c(a[1]):12("\\2z\\2H\\4p\\4o\\4s\\17\\4t\\4w\\1o\\1m\\4v")});9!1});$(".4u").6(2(){x("4n"==$(4).1q("4m"))9 12("\\17\\4g\\2z\\2H"),!1;x(K==$("#2I").z()||""==$("#2I").z())9 12("\\17\\1o\\1m\\2J\\2K"),!1;$("#1x").2G();9!1});$("#4f .t").X(2(){$(4).1z(2(){$(4).B(".2C").4e()}).1b(2(){$(4).B(".2C").4d()})});$(".4h 4i a").X(2(){$(4).1q("P","M://V.C.A.G/4l.Z?4k=1&4j="+$(4).T())})});2q{0>16.P.32("C.A.G")&&(16.P="M://V.C.A.G/")}28(e$$3){};',62,312,'||function||this|css|click|||return|||||||||||||||||||||var|backgroundPosition||if||val|com|find|bjnews|trim|break|length|cn|rsig|left|case|null||http|parseInt|px|href|expires|animate|hide|text|html|www|cookie|each|top|php||window|alert||up|42px|location|u8bf7|data|document|height|mouseleave|show|2010px|1960px|visibility|class|parent|plog|browser|getJSON|u524d|u5165|li|u8f93|selected|attr|id|strong|slow|siblings|ay|1E3|form2|tdnews|mouseenter|70|path|offset|domain|visible|live|width|content|tanw|span|main|aj|3600|sct|60|typeof|share|zh|api|qrcode|150|5px|addClass|oid|marginTop|chart|version|header|isNull|index|msie|sld|scrollTop|scrollconts|catch|dDat|appendTo|String|focus|label|klist|now|removeClass|Date|90|getTime|eq|prototype|logsc|1986px|is|pwd|try|substring|animated|1830px|qqwb|else|weixin|86400|jQuery|u767b|1870px|fontSize|txt|secure|toUTCString|blur|submit|u5f55|tare|u5185|u5bb9|number|sina|PASSPORT|cnolog|fsbk|cpwd|for|nolog|clog|profile|passport|user|cuser|twitter|douban|new|baidu|indexOf|qzone|trigger|wangyi|renren|al|kaixin|186px|187px|setInterval|3E3|580|first|clearInterval|usr|u5206|u79d2|d_cnt|u949f|u5c0f|u5929|u65f6|rcr|lcr|864E5|setTime|undefined|encodeURIComponent|join|decodeURIComponent|split|h1|switch|searchBtn|toggle|searchTab|bjTxt|u641c|scform|u7d22|absolute|position|suc|get_upnum|default|num|time|720|replace|hover|img|u7528|cus|keyCode|keydown|u6237|u540d|login|u7801|u5bc6|callback_chklogin|app_chklogin|logout|footer|scroll|ask|clogout|logout_callback|random|Math|callback_logout|username|passwd|slideUp|slideDown|tjlist|u5148|tag|dd|sk|type|search|name|nol|u8d25|u5931|callback_login|keeplogin|uff0c|u91cd|tij|uff01|u65b0|tanckcls|hidden|cht|googleapis|https|qr|chs|opacity|choe|200x200|tanck|remove|nleft|topday|set_upnum|a80000|color|src|428px|236px|UTF|40px|get|body|100|14px|16px|gotop|0px|chld|chl'.split('|'),0,{}))
*/