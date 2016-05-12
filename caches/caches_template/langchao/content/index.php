<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?>﻿<?php include template("content","header"); ?>
<div id="main">
    <div class="main">
        <div id="rolemain" role="main">
            <div class="left"> 
<!--首页顶部推荐位-->    
<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=5671e894d73caa0e4dcceaf85c0c103d&action=position&posid=2&order=id+DESC&num=4\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'position')) {$data = $content_tag->position(array('posid'=>'2','order'=>'id DESC','limit'=>'4',));}?>
<?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
 <?php if($r[thumb]) { ?>
<div class="news" id="">
<h2><a href="<?php echo $r['url'];?>" target="_blank"><?php echo $r['title'];?></a></h2>
<div class="tit">
    <span>分类：</span>
    <em><a href="<?php echo $CATEGORYS[$r['catid']]['url'];?>" target="_blank"><?php echo $CATEGORYS[$r['catid']]['catname'];?></a></em>
    <span class="date"><?php echo date('Y-m-d H:i:s',$r[inputtime]);?></span>
</div>
<div class="pnews">
    <div class="lnew">
    <a href="<?php echo $r['url'];?>" target="_blank">
    <img src="<?php echo thumb($r[thumb],299,189);?>" width="299" height="189" original="<?php echo thumb($r[thumb],299,189);?>">
    </a>
    </div>
    <div class="rnew">
    <p class="disc"><?php echo $r['description'];?></p>
    </div>
</div>
<dl class="tag">
    <dd> <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=789c396f4f839b330b9faaa0d545873b&action=lists&catid=%24r%5Bcatid%5D&posid=2&num=1&order=id+DESC&page=%24page\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$pagesize = 1;$page = intval($page) ? intval($page) : 1;if($page<=0){$page=1;}$offset = ($page - 1) * $pagesize;$content_total = $content_tag->count(array('catid'=>$r[catid],'posid'=>'2','order'=>'id DESC','limit'=>$offset.",".$pagesize,'action'=>'lists',));$pages = pages($content_total, $page, $pagesize, $urlrule);$data = $content_tag->lists(array('catid'=>$r[catid],'posid'=>'2','order'=>'id DESC','limit'=>$offset.",".$pagesize,'action'=>'lists',));}?> <?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
      <?php $keywords = explode(' ',$r[keywords]);?>
       <?php $n=1;if(is_array($keywords)) foreach($keywords AS $keyword) { ?>
      <a href="<?php echo APP_PATH;?>index.php?m=content&c=tag&a=lists&tag=<?php echo urlencode($keyword);?>"><?php echo $keyword;?></a>
      <?php $n++;}unset($n); ?> <?php $n++;}unset($n); ?> <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?> </dd>
    <dt> <div class="share" data-share="share_401906"><span class="sina"></span><span class="qqwb"></span><span class="baidu"></span><span class="douban"></span></div> </dt>
</dl>
</div> 
<?php } ?>
<?php $n++;}unset($n); ?>
<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
<!--推荐位end-->
<p>this is </p>
<!--新闻satrt-->
<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=826263bd98c917de882790ca60dec0e7&action=lists&catid=6&where=%60catid%60+in+%286%2C9%2C13%2C14%2C15%2C16%2C17%2C19%2C20%2C21%29&num=15&order=listorder+ASC%2C+inputtime+DESC&page=%24page\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$pagesize = 15;$page = intval($page) ? intval($page) : 1;if($page<=0){$page=1;}$offset = ($page - 1) * $pagesize;$content_total = $content_tag->count(array('catid'=>'6','where'=>'`catid` in (6,9,13,14,15,16,17,19,20,21)','order'=>'listorder ASC, inputtime DESC','limit'=>$offset.",".$pagesize,'action'=>'lists',));$pages = pages($content_total, $page, $pagesize, $urlrule);$data = $content_tag->lists(array('catid'=>'6','where'=>'`catid` in (6,9,13,14,15,16,17,19,20,21)','order'=>'listorder ASC, inputtime DESC','limit'=>$offset.",".$pagesize,'action'=>'lists',));}?>
<?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
 <?php if($r[posids]==0) { ?> 
 <?php if($r[thumb]) { ?>
<div class="news" id="n_123">
<h2><a href="<?php echo $r['url'];?>" target="_blank"><?php echo $r['title'];?></a></h2>
<div class="tit">
    <span>分类：</span>
    <em><a href="<?php echo $CATEGORYS[$r['catid']]['url'];?>" target="_blank"><?php echo $CATEGORYS[$r['catid']]['catname'];?></a></em>
    <span class="date"><?php echo date('Y-m-d H:i:s',$r[inputtime]);?></span>
</div>
<div class="pnews">
    <div class="lnew">
    <a href="<?php echo $r['url'];?>" target="_blank">
    <img src="<?php echo thumb($r[thumb],299,189);?>" width="299" height="189" original="<?php echo thumb($r[thumb],299,189);?>">
    </a>
    </div>
    <div class="rnew">
    <p class="disc"><?php echo $r['description'];?></p>
    </div>
</div>
<dl class="tag">
    <dd>
    <?php $keywords = explode(' ',$r[keywords]);?>
    <?php $n=1;if(is_array($keywords)) foreach($keywords AS $keyword) { ?>
      <a href="<?php echo APP_PATH;?>index.php?m=content&c=tag&a=lists&tag=<?php echo urlencode($keyword);?>"><?php echo $keyword;?></a>
    <?php $n++;}unset($n); ?>
    </dd>
    <dt>
    <div class="share" data-share="share_401906"><span class="sina"></span><span class="qqwb"></span><span class="baidu"></span><span class="douban"></span></div>
    </dt>
</dl>
</div> 
<?php } ?>
<?php } ?> 
<?php $n++;}unset($n); ?>
<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
<!--新闻end-->
               <!--  <div id="more"><span data-loding='load'>点击加载更多</span></div> -->
            </div>
<div class="right">
    <div style="width:240px;height:73px;margin-bottom:10px"><a href="http://www.12377.cn/node_548446.htm" target="_blank"><img src="<?php echo IMG_PATH;?>Picture/wljb_appxl.jpg" width="240" height="73"/></a>
    </div>
 

<!--评论 start-->
  <div class="p"><img src="<?php echo IMG_PATH;?>Picture/09b153af06e0.jpg" width="240" height="73" /></div>
<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=d8cfec68f14b0f985a5a7c5d1e5b7c1a&action=position&posid=19&order=id+DESC&num=1\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'position')) {$data = $content_tag->position(array('posid'=>'19','order'=>'id DESC','limit'=>'1',));}?>
 <?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
  <div class="guancj">
    <h2><a href="<?php echo $r['url'];?>" target="_blank"><?php echo $r['title'];?></a></h2>
    <p class="txt"><?php echo str_cut($r[description],350,'...');?><a href="<?php echo $r['url'];?>" target="_blank">全文>></a> </p>
  </div>
  <?php $title=$r[title]?>
 <?php $n++;}unset($n); ?>
  <div class="gbtn">
    <ul class="rul">
    <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=032165c3d43c1e89e2e3868ddeb5636d&action=position&posid=19&order=id+DESC&num=3\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'position')) {$data = $content_tag->position(array('posid'=>'19','order'=>'id DESC','limit'=>'3',));}?>
    <?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
      <?php if($r[title]!==$title) { ?>
      <li><a href="<?php echo $r['url'];?>" target="_blank"><?php echo $r['title'];?></a></li>
      <?php } ?>
    <?php $n++;}unset($n); ?>
    <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
    </ul>
  </div>
<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
<!--评论 end-->

<!--google广告 start-->
  <div class="rad">
    <a href="#" target="_blank"><img src="<?php echo IMG_PATH;?>Picture/13f708f327fb.jpg"/></a>
    <div id="adpos_10" style="width:240px;height:160px;">
            <img src="<?php echo IMG_PATH;?>Picture/bqgg.png" width="240" height="160" alt="" border="0">      
        </div>
  </div>
<!-- google广告 end-->

<!--书评 start-->
  <p class="rtit sp"></p>
<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=6b6c21f2959fe999bd1a3e3d09f9fe92&action=position&posid=20&order=id+DESC&num=1\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'position')) {$data = $content_tag->position(array('posid'=>'20','order'=>'id DESC','limit'=>'1',));}?>
 <?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
  <div class="shuping">
    <h3><a href="<?php echo $r['url'];?>" target="_blank"><?php echo $r['title'];?></a></h3>
    <dl class="book">
      <dd><img src="<?php echo thumb($r[thumb],60,76);?>" width="60" height="76" /></dd>
      <dt><?php echo $r['description'];?><a href="<?php echo $r['url'];?>" target="_blank">全文>></a></dt>
    </dl>
    <?php $title=$r[title]?>
    <div class="bklist">
      <ul class="rul">
       <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=feb0e09ee97ebd41f75dcbc52279c25f&action=position&posid=20&order=id+DESC&num=3\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'position')) {$data = $content_tag->position(array('posid'=>'20','order'=>'id DESC','limit'=>'3',));}?>
       <?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
        <?php if($r[title]!==$title) { ?>
        <li><a href="<?php echo $r['url'];?>" target="_blank"><?php echo $r['title'];?></a></li>
       <?php } ?>
      <?php $n++;}unset($n); ?>
       <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
      </ul>
    </div>
  </div>
  <?php $n++;}unset($n); ?>
  <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
<!--书评 end-->
<?php include template("content","left_top"); ?>
            </div>
            <!--<div class="rbl"></div>--> 
        </div>
    </div>
</div>
<?php include template("content","footer"); ?>