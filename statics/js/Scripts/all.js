/*cookie操作*/
jQuery.cookie = function(c, d, b) {
    if ("undefined" != typeof d) {
        b = b || {};
        null === d && (d = "", b.expires = -1);
        var g = "";
        if (b.expires && ("number" == typeof b.expires || b.expires.toUTCString))"number" == typeof b.expires ? (g = new Date, g.setTime(g.getTime() + 864E5 * b.expires)) : g = b.expires,
        g = "; expires=" + g.toUTCString();
        var e = b.path ? "; path=" + b.path: "",
        k = b.domain ? "; domain=" + b.domain: "",
        b = b.secure ? "; secure": "";
        document.cookie = [c, "=", encodeURIComponent(d), g, e, k, b].join("")
    } else {
        d = null;
        if (document.cookie && "" != document.cookie) {
            b = document.cookie.split(";");
            for (g = 0; g < b.length; g++) if (e = jQuery.trim(b[g]), e.substring(0, c.length + 1) == c + "=") {
                d = decodeURIComponent(e.substring(c.length + 1));
                break
            }
        }
        return d
    }
};

/*图片缓加载*/
(function(c) {
    c.fn.lazyload = function(d) {
        var b = {
            threshold: 0,
            failurelimit: 0,
            event: "scroll",
            effect: "show",
            container: window
        };
        d && c.extend(b, d);
        var g = this;
        "scroll" == b.event && c(b.container).bind("scroll",
        function() {
            var e = 0;
            g.each(function() {
                if (!c.abovethetop(this, b) && !c.leftofbegin(this, b)) if (!c.belowthefold(this, b) && !c.rightoffold(this, b)) c(this).trigger("appear");
                else if (e++>b.failurelimit) return ! 1
            });
            var d = c.grep(g,
            function(b) {
                return ! b.loaded
            });
            g = c(d)
        });
        this.each(function() {
            var e = this;
            void 0 == c(e).attr("original") && c(e).attr("original", c(e).attr("src"));
            "scroll" != b.event || void 0 == c(e).attr("src") || b.placeholder == c(e).attr("src") || c.abovethetop(e, b) || c.leftofbegin(e, b) || c.belowthefold(e, b) || c.rightoffold(e, b) ? (b.placeholder ? c(e).attr("src", b.placeholder) : c(e).removeAttr("src"), e.loaded = !1) : e.loaded = !0;
            c(e).one("appear",
            function() {
                this.loaded || c("<img />").bind("load",
                function() {
                    c(e).hide().attr("src", c(e).attr("original"))[b.effect](b.effectspeed);
                    e.loaded = !0
                }).attr("src", c(e).attr("original"))
            });
            "scroll" != b.event && c(e).bind(b.event,
            function() {
                e.loaded || c(e).trigger("appear")
            })
        });
        c(b.container).trigger(b.event);
        return this
    };
    c.belowthefold = function(d, b) {
        return (void 0 === b.container || b.container === window ? c(window).height() + c(window).scrollTop() : c(b.container).offset().top + c(b.container).height()) <= c(d).offset().top - b.threshold
    };
    c.rightoffold = function(d, b) {
        return (void 0 === b.container || b.container === window ? c(window).width() + c(window).scrollLeft() : c(b.container).offset().left + c(b.container).width()) <= c(d).offset().left - b.threshold
    };
    c.abovethetop = function(d, b) {
        return (void 0 === b.container || b.container === window ? c(window).scrollTop() : c(b.container).offset().top) >= c(d).offset().top + b.threshold + c(d).height()
    };
    c.leftofbegin = function(d, b) {
        return (void 0 === b.container || b.container === window ? c(window).scrollLeft() : c(b.container).offset().left) >= c(d).offset().left + b.threshold + c(d).width()
    };
    c.extend(c.expr[":"], {
        "below-the-fold": "$.belowthefold(a, {threshold : 0, container: window})",
        "above-the-fold": "!$.belowthefold(a, {threshold : 0, container: window})",
        "right-of-fold": "$.rightoffold(a, {threshold : 0, container: window})",
        "left-of-fold": "!$.rightoffold(a, {threshold : 0, container: window})"
    })
})(jQuery);

/*焦点图*/
function j(c) {
    var d = c.find("ul:first"),
    b = c.find(".btns"),
    g = d.find("li").length,
    e = c.nmyTime,
    k = 1,
    u = !1;
    if (1 == g) return c.css({
        height: "300px"
    }),
    !1;
    u = $.browser.msie && "6.0" == $.browser.version ? !0 : !1;
    for (i = 1; i <= g; i++) $("<span>" + i + "</span>").appendTo(b);
    b.find("span:first").addClass("now");
    b.find("span").each(function(b) {
        $(this).live("click",
        function() {
            d.find("li:eq(" + b + ")").fadeIn().siblings().fadeOut();
            $(this).addClass("now").siblings().removeClass("now");
            u ? d.find("li:eq(" + b + ")").find(".str,.stex").stop(!0, !0).show().end().siblings().find(".str,.stex").hide() : d.find("li:eq(" + b + ")").find(".str,.stex").stop(!0, !0).fadeTo(1E3, 1).end().siblings().find(".str,.stex").hide();
            k = b + 1
        })
    });
    b.find("span:first").click();
    c.hover(function() {
        clearInterval(e)
    },
    function() {
        e = setInterval(function() {
            k == g && (k = 0);
            b.find("span:eq(" + k + ")").trigger("click")
        },
        5E3)
    }).trigger("mouseleave")
}

/*
var ua = navigator.userAgent.toLowerCase();
var IEVer = /msie/.test(ua)?parseFloat(ua.match(/msie ([\d.]+)/)[1]):false;
var qrcode_render;
var qrcode_list;
if (IEVer == false) {
    qrcode_render = "canvas";
} else {
    if (IEVer <= 8) {
        qrcode_render = "table";
    }
}
*/

$(function() {
    
    /*多少天的新闻*/
    function c(a, b) {
        var c = parseInt((b - 1E3 * a) / 1E3);
        if (0 <= c && 60 > c) return c + "\u79d2\u524d";
        if (60 <= c && 3600 > c) return c = parseInt(c / 60),
        c + "\u5206\u949f\u524d";
        if (3600 <= c && 86400 > c) return c = parseInt(c / 3600),
        c + "\u5c0f\u65f6\u524d";
        c = parseInt(c / 86400);
        return c + "\u5929\u524d"
    }
    
    /*加载更多*/
    function d() {
        k = $(window).height();
        $("#zhez").css({
            height: k + "px"
        });
        $("#more span").data("loding", "load").html("\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a")
    }
    
    /*视频播放*/
    function b(a) {
        var c = $("#video_play");
        a.offset();
        a.offset();
        var b = a.data("rel"),
        a = a.data("png");
        $("#video_src,#video_play").attr("src", b);
        c.attr({
            poster: a
        });
        $(".mejs-poster img").attr("src", a);
        $("#v").css({
            left: "35%",
            top: "30%"
        }).show();
        c.mediaelementplayer({
            alwaysShowControls: !1,
            videoVolume: "horizontal",
            features: ["playpause", "progress", "volume", "fullscreen"]
        });
        $("#zhez").show();
        return ! 1
    }
    
    /*新窗口打开*/
    function g(a) {
        a = a.data("rel");
        window.open(a, "_blank", "width=250,height=203,left=0,top=100");
        return ! 1
    }
    
    /*分享*/
    function e(a) {
        var c = a.attr("class"),
        b = a.parent().find(".qrcode");
        if ("weixin" == c) return weixin(a, b),
        !1;
        b = a.parent().data("share");
        a = "\u3010" + $("#" + b).find("h2").text() + "\u3011" + $("#" + b).find(".disc").text();
        b = $("#" + b).find("h2 a").attr("href");
        switch (c) {
        case "sina":
            sina(a, b);
            break;
        case "qqwb":
            qqwb(a, b);
            break;
        case "qzone":
            qzone(a, b);
            break;
        case "baidu":
            baidu(a, b);
            break;
        case "wangyi":
            wangyi(a, b);
            break;
        case "kaixin":
            kaixin(a, b);
            break;
        case "renren":
            renren(a, b);
            break;
        case "douban":
            douban(a, b);
            break;
        case "twitter":
            twitter(a, b);
            break;
        case "fsbk":
            fsbk(a, b);
            break;
        default:
            return ! 1
        }
    }
    
    /*页面中细节部分方法start*/
    var k = $(window).height();
    String.prototype.trim = function() {
        return this.replace(/(^\s*)|(\s*$)/g, "")
    };
    String.prototype.isNull = function() {
        return 0 == this.trim().length
    };
    var u;
    u = $.browser.msie && "9" > parseInt($.browser.version) ? !0 : !1;
    var o;
    o = $.browser.msie && "7" > parseInt($.browser.version) ? !0 : !1;
    var K = (new Date).getTime();
    $("#klist li span").each(function() {
        $(this).html(c($(this).data("time"), K))
    });
    0 >= $(document).scrollTop() - 70 && $("#rsig").css("visibility", "hidden");
    d();
    o && ($("#header,#rsig").css({
        position: "absolute"
    }), $("#rsig").hide());
    var l = $("#searchTab"),
    n = $("#btn");
    $(".main");
    $("#sld").click(function() {
        l.toggle()
    });
    l.find("li").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
        $("#sld").text($(this).text());
        $("#sct").val(1 + $(this).index());
        l.hide()
    });
    $("#searchBtn").click(function() {
        $("#sct").val(l.find(".selected").text());
        if ($("#bjTxt").val().isNull()) return alert("\u8bf7\u8f93\u5165\u641c\u7d22\u5185\u5bb9!"),
        !1;
        $("#sct").val(l.find(".selected").index() + 1);
        $("#scform").submit()
    });
    n.click(function() {
        $("#tcc").is(":visible") ? ($("#tcc").slideUp(), n.css({
            backgroundPosition: "0px -87px"
        })) : ($("#tcc").slideDown(), n.css({
            backgroundPosition: "-53px -87px"
        }))
    });
    $(".x").click(function() {
        $("#tcc").slideUp();
        n.css({
            backgroundPosition: "0px -87px"
        })
    });
    $("#side li").each(function() {
        $(this).hover(function() {
            $(this).addClass("now").siblings().removeClass("now")
        })
    });
    var y = $("#klist"),
    B;
    y.hover(function() {
        clearInterval(B)
    },
    function() {
        B = setInterval(function() {
            var a = y.find("li:first"),
            b = a.height();
            a.animate({
                marginTop: -b + "px"
            },
            580,
            function() {
                a.css("marginTop", 0).appendTo(y)
            })
        },
        3E3)
    }).trigger("mouseleave");
    $("#topday li").each(function(a) {
        $(this).click(function() {
            $(this).addClass("now").siblings().removeClass("now");
            $("#tdnews .tdnews:eq(" + a + ")").show().siblings(".tdnews").hide()
        })
    });
    /*页面中细节部分方法end*/
    
    /*追加内容start*/
    var E = function(a, c) {
        var d = "share_" + a.id,
        f = a.id,
        m = a.url,
        k = a.title,
        l = a.category_link,
        n = a.category_name,
        w = a.submit_time,
        x = a.description,
        o = a.hot_pic,
        p = a.upnum,
        q = "";
        
        if (a.related.length) for (f = 0; f < a.related.length; f++) q = q + "<li><span class='abt'>" + a.related[f].prefix + "</span><a href='" + a.related[f].link + "' target='_blank' >" + a.related[f].title + "</a></li>";
        var r = "";
        if (a.video.length) for (f = 0; f < a.video.length; f++) r = r + "<li><span class='abt'>\u89c6\u9891</span><span data-rel='" + a.video[f].video_url + "' data-png='" + a.video[f].video_pic + "' class='video v_video_play'>" + a.video[f].video_title + "</span></li>";
        var s = "";
        if (a.audio.length) for (f = 0; f < a.audio.length; f++) s = s + "<li><span class='abt'>\u97f3\u9891</span><span data-rel='" + a.audio[f].audio_url + "' class='video v_mp3_play'>" + a.audio[f].audio_title + "</span></li>";
        var t = "";
        if (a.tags.length) for (f = 0; f < a.tags.length; f++) t = t + "<a href='http://www.bjnews.com.cn/search.php?type=1&sk=" + encodeURIComponent(a.tags[f].tag_name) + "' target='_blank'>" + a.tags[f].tag_name + "</a>";
        var v = "";
        if (a.pic_list.length) for (f = 0; f < a.pic_list.length; f++) v = v + "<li><a href='" + m + "' target='_blank'><img src='" + a.pic_list[f].pic + "' width='720' height='308' alt=''/>" + a.pic_list[f].caption + "</a></li>";
        else v = v + "<li><a href='" + m + "' target='_blank'><img src='" + a.hot_pic + "' width='720' height='308' alt=''/></a></li>";
        //f = "</dd><dt><div class='share' data-share='" + d + "'><span class='sina'></span><span class='qqwb'></span><span class='weixin'></span><span class='baidu'></span><span class='douban'></span><div class='qrcode'><img src='https://chart.googleapis.com/chart?cht=qr&chs=200x200&choe=UTF-8&chld=L|0&chl=" + m + "' width='90' height='90' /></div></div></dt></dl></div>";
        //f = "</dd><dt><div class='share' data-share='" + d + "'><span class='sina'></span><span class='qqwb'></span><span class='weixin'></span><span class='baidu'></span><span class='douban'></span><div id='qrcode_" + a.id + "' class='qrcode'></div></div></dt></dl></div>";
        f = "</dd><dt><div class='share' data-share='" + d + "'><span class='sina'></span><span class='qqwb'></span><span class='baidu'></span><span class='douban'></span></div></dt></dl></div>";
        //...
        p = "";
        p = c ? C: z;
        "1" == a.tpl && p.before("<div class='news' id='" + d + "'><h2><a href='" + m + "' target='_blank'>" + k + "</a></h2><div class='tit'><span>\u5206\u7c7b\uff1a</span><em><a href='" + l + "' target='_blank'>" + n + "</a></em><span class='date'>" + w + "</span></div><p class='disc'>" + x + "</p><ul class='relevant'>" + q + "</ul><ul class='vnew'>" + r + s + "</ul><dl class='tag'><dd>" + t + f);
        "2" == a.tpl && p.before("<div class='news' id='" + d + "'><h2><a href='" + m + "' target='_blank'>" + k + "</a></h2><div class='tit'><span>\u5206\u7c7b\uff1a</span><em><a href='" + l + "' target='_blank'>" + n + "</a></em><span class='date'>" + w + "</span></div><div class='pnews'><div class='lnew'><a href='" + m + "' target='_blank'><img src='" + o + "' width='299' height='189' /></a></div><div class='rnew'><p class='disc'>" + x + "</p><ul class='relevant'>" + q + "</ul><ul class='vnew'>" + r + s + "</ul></div></div><dl class='tag'><dd>" + t + f);
        "3" == a.tpl && (p.before("<div class='focus' id='f_" + d + "'><div class='pics'><ul>" + v + "</ul></div><div class='btns'></div></div>" + ("<div class='news' id='" + d + "'><h2><a href='" + m + "' target='_blank'>" + k + "</a></h2><div class='tit'><span>\u5206\u7c7b\uff1a</span><em><a href='" + l + "' target='_blank'>" + n + "</a></em><span class='date'>" + w + "</span></div><p class='disc'>" + x + "</p><ul class='relevant'>") + q + "</ul><ul class='vnew'>" + r + s + "</ul><dl class='tag'><dd>" + t + f), j($("#f_" + d)));
        "4" == a.tpl && p.before("<div class='news' id='" + d + "'><h2><a href='" + m + "' target='_blank'>" + k + "</a></h2><div class='tit'><span>\u5206\u7c7b\uff1a</span><em><a href='" + l + "' target='_blank'>" + n + "</a></em><span class='date'>" + w + "</span></div><div class='pnews'><div class='limg'><a href='" + m + "' target='_blank'><img src='" + o + "' width='194' height='242' /></a></div><div class='rnew st'><p class='disc'>" + x + "</p><ul class='relevant'>" + q + "</ul><ul class='vnew'>" + r + s + "</ul></div></div><dl class='tag'><dd>" + t + f);
        u || $.browser.opera ? $("#" + d).find(".v_video_play").live("click",
        function() {
            var a = $(window).height(),
            b = $(window).width();
            window.open(m, "_blank", "width=" + b + ",height=" + a + ",toolbar=yes,menubar=yes,location=yes,resizable=yes,scrollbars=yes")
        }) : $("#" + d).find(".v_video_play").live("click",
        function() {
            b($(this))
        });
        $("#" + d).find(".share span").live("click",
        function() {
            e($(this))
        });
        $("#" + d).find(".v_mp3_play").live("click",
        function() {
            g($(this))
        });
        1 > $("#" + d).find(".relevant li").length && $("#" + d).find(".relevant").hide();
        1 > $("#" + d).find(".vnew li").length && $("#" + d).find(".vnew").hide();
        $("#" + d).find("img").lazyload({
            placeholder: "http://img.bjnews.com.cn/site/noneb.jpg",
            effect: "fadeIn"
        });
        D++;
        C.show();
        return ! 1
    },
    F = function(a) {
        $("#more span").data("loding", "eload").html(a);
        return ! 1
    },
    H = function(a) {
        a = a.data("loding");
        if ("onload" == a) return ! 1;
        "load" == a && $("#more span").data("loding", "load").html(/*"<img src='http://img.bjnews.com.cn/site/ajax-loader.gif'>"*/);
        if ("eload" == a) return ! 1;
        a = Math.random();
        $.getJSON("http://www.bjnews.com.cn/api/get_hotlist.php?page=" + A + "&t=" + a,
        function(data) {
            qrcode_list = null; //qrcode list
            var rows = data.list.length;
            if (data.suc && 0 == rows) return F("\u5df2\u7ecf\u52a0\u8f7d\u5230\u6700\u540e\u4e00\u9875\uff0c\u53bb\u770b\u770b\u5176\u4ed6\u9891\u9053\u5427\uff01"),
            !1;
            if (!data.suc) return F("\u6570\u636e\u5f02\u5e38\uff0c\u8bf7\u5728\u7ebf\u7559\u8a00\u901a\u77e5\u6211\u4eec\uff01"),
            !1;
            if (0 < rows) {
                d();
                for (var c = 0; c < rows; c++) {
                    var e = "shre_" + data.list[c].id;
                    //qrcode_list[data.list[c].id]['url'] = data.list[c].url; //qrcode list
                    "y" != G[e] && (G[e] = "y", 2 > D && 1 == A ? E(data.list[c], !0) : E(data.list[c], !1));
                    /*
                    if (qrcode_render == "table") {
                        $("#qrcode_" + data.list[c].id).html("<img src='https://chart.googleapis.com/chart?cht=qr&chs=200x200&choe=UTF-8&chld=L|0&chl=" + data.list[c].url + "' width='90' height='90' />");
                    } else {
                        $("#qrcode_" + data.list[c].id).qrcode({
                           render: qrcode_render, //or canvas
                           //ecLevel: "Q",
                           correctLevel: 1,
                           width: 90, //宽度
                           height: 90, //高度
                           text: data.list[c].url
                        });
                    }
                    */
                }
                A++;
            }
            return ! 1
        })
    },
    A = 1,
    z = $("#more"),
    C = $(".leftad"),
    G = [],
    D = 0;
    z.find("span").click(function() {
        var a = $(this);
        H(a)
    });
    H(z.find("span"));
    var I = $("#video_play");
    $(".v_video_play").each(function() {
        $(this).live("click",
        function() {
            b($(this))
        })
    });
    /*追加内容end*/
    
    /*关闭视频框start*/
    $("#cls_v_play").live("click",
    function() {
        $(".mejs-overlay-play").is(":visible") || I.trigger("click");
        $("#v").animate({
            left: "110%",
            top: "100%"
        },
        500,
        function() {
            $("#zhez").hide();
            $(this).hide()
        });
        $("#zhez").hide();
        I.attr({
            poster: ""
        });
        $("#video_src").attr("src", "")
    });
    $(".v_mp3_play").each(function() {
        $(this).live("click",
        function() {
            g($(this))
        })
    });
    /*关闭视频框end*/
    
    /*点赞start*/
    $(".up").each(function() {
        $(this).live("click",
        function() {
            var a = $(this),
            b = a.parent(),
            c = a.data("id");
            "0" != a.data("al") && (a.data("al", "0"), $("<strong class='j'>+1</strong>").appendTo(b).animate({
                top: "-40px",
                opacity: "0"
            },
            "slow",
            function() {
                $(this).remove()
            }), a = b.find(".up"), b = parseInt(a.text()), a.text(b + 1), a.css({
                backgroundPosition: "-428px -236px",
                color: "#a80000"
            }), $.get("http://www.bjnews.com.cn/api/set_upnum.php", {
                id: c
            }));
            return ! 1
        })
    });
    /*点赞end*/
    
    $(".focus").each(function() {
        j($(this))
    });
    $(".gotop").click(function() {
        $("html,body").animate({
            scrollTop: "0px"
        },
        100)
    });
    $share = $(".share");
    $share.find("span").each(function() {
        $(this).live("click",
        function() {
            e($(this))
        })
    });
    var J = $("#tanck");
    $("#tanckcls").click(function() {
        J.hide("slow");
        $("#ier").html("")
    });
    $("#ask").click(function() {
        J.show("slow")
    });
    $(window).scroll(function() {
        o || ($(".ask").offset().top > $("#footer").offset().top - 70 || $("#rsig").css("visibility", "visible"), 0 >= $(document).scrollTop() - 70 && $("#rsig").css("visibility", "hidden"))
    });
    $(window).resize(function() {
        d()
    });
/*    try {
        0 > location.href.indexOf("bjnews.com.cn") && (location.href = "http://www.bjnews.com.cn/")
    } catch(L) {}*/
    $("#btn_liuyan").click(function() {
        if ("" == $("input:[name='contact']").val() || null == $("input:[name='contact']").val()) return $("#ier").html("\u8bf7\u586b\u5199\u8054\u7cfb\u65b9\u5f0f\uff01"),
        $("#contact").focus(),
        !1;
        if ("" == $("#opinion").val() || null == $("#opinion").val()) return $("#ier").html("\u8bf7\u586b\u5199\u62a5\u6599\u5185\u5bb9\uff01"),
        $("#content").focus(),
        !1;
        $(this).attr("disabled", "disabled");
        $.ajax({
            url: "http://www.bjnews.com.cn/app_liuyan.php",
            type: "POST",
            data: $("#form_liuyan").serialize(),
            error: function() {
                alert("\u7531\u4e8e\u7cfb\u7edf\u539f\u56e0\u4fe1\u606f\u63d0\u4ea4\u5931\u8d25\uff01");
                $("#ier").html("\u8bf7\u586b\u5199\u62a5\u6599\u5185\u5bb9\uff01");
                return ! 1
            },
            success: function(a) {
                a = $.parseJSON(a);
                $("#btn_liuyan").attr("disabled", !1);
                1 == a[0] && ($("#form_liuyan input[type=text]").attr("value", ""), $("#form_liuyan textarea").attr("value", ""));
                $("#ier").html(a[1])
            }
        })
    });
    $("#logout").live("click",
    function() {
        $.getJSON("http://www.bjnews.com.cn/logout_callback.php?callback_logout=?",
        function(a) {
            "1" == a && ($("#user").html("").hide(), $("#logsc").hide(), $("#nolog").show(), $.cookie("PASSPORT", null))
        })
    });
    h = $.cookie("PASSPORT");
    "" != h && null != h && (h = Math.random(), $.getJSON("http://www.bjnews.com.cn/app_chklogin.php?t=" + h + "&callback_chklogin=?",
    function(a) {
        "1" == a[0] && (a = a[1], $("#nolog").hide(), $("#user").html("<a href='http://passport.bjnews.com.cn/profile'>" + a + "</a>"), $("#logsc").show())
    }))
});
