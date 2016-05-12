<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><div id="footer">
    <div class="partner">
        <div class="tit">
            <ul>
        <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=5ec580a0c9708ed2e925680d65cd0eb5&action=category&catid=1&num=3&siteid=%24siteid&order=listorder+ASC\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'category')) {$data = $content_tag->category(array('catid'=>'1','siteid'=>$siteid,'order'=>'listorder ASC','limit'=>'3',));}?>
                <?php $n=1;?>
                  <?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
                    <?php if($r[catid]==$catid) { ?><?php } ?> <li class="l<?php echo $n;?>"><a href="" >· <?php echo $r['catname'];?></a></li>
                  <?php $n++;}unset($n); ?>
                 <?php $n++;?>
        <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
                <li class="l4">· 服务</li>
                <li class="l5">· 合作</li>
                <li class="l6">· 联系我们</li>

            </ul>
        </div>
        <div class="ptext">
            <div class="lft p1">
                <ul>
                    <li><a target="_blank" href="https://itunes.apple.com/app/id693986775?mt=8">数字版</a></li>
                    <li><a target="_blank" href="http://app.bjnews.com.cn/#bjnewsiPho">浪潮报新闻</a></li>
                    <li><a target="_blank" href="http://app.bjnews.com.cn/#bjnewsiPad">浪潮报新闻HD</a></li>
                    <li><a target="_blank" href="http://app.bjnews.com.cn/#thinker">thinker</a></li>
                    <li><a target="_blank" href="http://app.bjnews.com.cn/#jl">驾临</a></li>
                    <li><a target="_blank" href="http://caipiao.bjnews.com.cn/">浪潮彩</a></li>
                </ul>
            </div>
            <div class="lft p2">
                <ul>
                    <li><a target="_blank" href="http://epaper.bjnews.com.cn">电子报</a></li>
                    <li><a target="_blank" href="http://www.paizhe.com/">拍者网</a></li>
                    <li><a target="_blank" href="http://famous.bjnews.com.cn/">杂志《名汇FAMOUS》</a></li>
                    <li><a target="_blank" href="http://realestate.bjnews.com.cn">杂志《房地产世界》</a></li>
                    <li><a target="_blank" href="http://weibo.com/xjb">浪潮报官方微博</a></li>
                    <li><a target="_blank" href="http://www.bjnews.com.cn/wx/">浪潮报官方微信</a></li>
                </ul>
            </div>
            <div class="lft p3">
                 <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"link\" data=\"op=link&tag_md5=3244aa3eeaa54b0456df16d44fbd5356&action=type_list&siteid=%24siteid&order=listorder+DESC&num=10&return=dat\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$link_tag = pc_base::load_app_class("link_tag", "link");if (method_exists($link_tag, 'type_list')) {$dat = $link_tag->type_list(array('siteid'=>$siteid,'order'=>'listorder DESC','limit'=>'10',));}?>
                  <?php $n=1;?>  
                    <?php $n=1;if(is_array($dat)) foreach($dat AS $v) { ?>
                        <?php if($n % 5 == 0) { ?><?php } ?><ul>
                    <li><a href="<?php echo $v['url'];?>" rel="nofollow" target="_blank"><?php echo $v['name'];?></a></li>
                        <?php if($n%5==0) { ?><?php } ?></ul>
                    <?php $n++;}unset($n); ?>
                  <?php $n++;?>
                    <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
            </div>
            <div class="lft p4">
                <ul>
                    <li><a target="_blank" href="http://www.bjnews.com.cn/baoliao/">在线报料</a></li>
                    <li><a target="_blank" href="http://www.bjnews.com.cn/tougao/">在线投稿</a></li>
                    <li><a target="_blank" href="http://www.bjnews.com.cn/takepaper/">在线订报</a></li>
                    <li><a target="_blank" href="http://i.bjnews.com.cn/sitemap.html">网站地图</a></li>
                </ul>
            </div>
            
            <div class="lft p5">
                <ul>
                    <li><a target="_blank" href="http://i.bjnews.com.cn/zxdt.html">最新动态</a></li>
                    <li><a target="_blank" href="http://i.bjnews.com.cn/ggfw.html">广告服务</a></li>
                    <li><a target="_blank" href="http://i.bjnews.com.cn/fxzd.html">发行站点</a></li>
                    <li><a target="_blank" href="http://i.bjnews.com.cn/gybq.html">关于版权</a></li>
                    <li><a target="_blank" href="http://i.bjnews.com.cn/gywm.html">关于我们</a></li>
                    <li><a target="_blank" href="http://i.bjnews.com.cn/gzjh.html">工作机会</a></li>
                </ul>
            </div>
            <div class="lft p6">
                <ul>
                    <li>24小时新闻热线</li>
                    <li><strong>010-67106710</strong></li>
                    <li>商务合作</li>
                    <li><strong>010-67106394</strong></li>
                    <li>版权合作电话</li>
                    <li><strong>010-67106089</strong></li>
                </ul>
            </div>
        </div>
    </div>
    <div id="dbnews">
        <div class="dbnews">经营许可证编号：京ICP证090533号&nbsp;
            国新办网备字[2006]7号&nbsp;
            广播电视节目制作经营许可证:(京)字第02592号&nbsp;京公网安备11010102001756号<script>var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "//hm.baidu.com/hm.js?ba0e7859a57505c5640c98a3fa61b61d";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();</script><br>
            Copy Right ©    2004-2018 www.bjnews.com.cn All Rights Reserved&nbsp;&nbsp;&nbsp;
            浪潮报社版权所有 未经许可不得转载 版权法律顾问律师 刘家辉 电话：62112060
            <script charset="utf-8" language="javascript" src="<?php echo JS_PATH;?>Scripts/tj.js"></script>
            <script type="text/javascript">var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fba0e7859a57505c5640c98a3fa61b61d' type='text/javascript'%3E%3C/script%3E"));</script>
            <script>var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "//hm.baidu.com/hm.js?ba0e7859a57505c5640c98a3fa61b61d";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();</script>
        </div>
        <div class="dbimg">
          <a href="http://www.12377.cn/" target="_blank"><img src="<?php echo IMG_PATH;?>Picture/bt01.jpg" /></a><a><img src="<?php echo IMG_PATH;?>Picture/bt02.png" /></a><a><img src="<?php echo IMG_PATH;?>Picture/bt03.png" /></a>
        </div>
    </div>
</div>
<div id="rsig">
    <div class="r"> <span class="gotop"></span> <span class="ask" id="ask"></span>
        <div class="tanck" id="tanck">
            <form action="" id="form_liuyan" method="post" target="_blank">
                <p class="txt">联系方式</p>
                <p class="lx">
                    <input type="text" name="contact" class="inp" value="" />
                </p>
                <p class="txt">您的意见</p>
                <p class="ap">
                    <textarea class="opinion" id="opinion" name="content"></textarea>
                </p>
                <p class="tij">
                    <input type="button" name="tijiao" id="btn_liuyan" value="提 交" class="btn"/>
                    <span id="ier"></span>
                    <span class="cls" id="tanckcls">关闭</span> </p>
            </form>
        </div>
    </div>
</div>
<script type="text/javascript" src="<?php echo JS_PATH;?>Scripts/player.js"></script>
<script type="text/javascript" src="<?php echo JS_PATH;?>Scripts/shar.js"></script>
<script type="text/javascript" src="<?php echo JS_PATH;?>Scripts/jquery.qrcode.min.js"></script>
<script type="text/javascript" src="<?php echo JS_PATH;?>Scripts/all.js"></script>
</body>
</html>