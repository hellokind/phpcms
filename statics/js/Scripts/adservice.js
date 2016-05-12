/**
 * AdService
 * @author: WeiJie
 */

function adshow(id)
{
    var adposdiv = document.getElementById("adpos_" + id);
    //adposdiv.innerHTML = '<iframe name="adframe_' + id + '" id="adframe_' + id + '" width="' + adposdiv.style.width + '" height="' + adposdiv.style.height + '" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no" allowTransparency="true" src="http://ad.bjnews.com.cn/service/adshow?pid=' + id + '"></iframe>';
    adposdiv.innerHTML = '<iframe name="adframe_' + id + '" id="adframe_' + id + '" width="' + adposdiv.style.width + '" height="' + adposdiv.style.height + '" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no" allowTransparency="true" src="http://ad.bjnews.com.cn/html/ad_' + id + '.html"></iframe>';
    /*
    if (typeof jQuery == 'undefined') {
        getScript('http://static.bjnews.com.cn/www/js/jquery.js', function() {
            alert('jquery loaded for adshow, id is '+id);
            (function (id) {
                $.getJSON("http://ad.bjnews.com.cn/service/getad?pid=" + id + "&callback_adservice=?", function(data) {
                    $("#adpos_"+id).append("<a src='" + data.link + "' target='_blank'><img src='" + data.img_addr + "' width='" + data.width + "' height='" + data.height + "' /></a>");
                });
            })(id);
        });
    }
    */
}


