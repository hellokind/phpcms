<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?>﻿<?php include template("content","header_list"); ?>
<link rel="stylesheet" type="text/css" href="<?php echo CSS_PATH;?>Css/list.css" id="flexlist">
<link rel="stylesheet" type="text/css" href="<?php echo CSS_PATH;?>Css/css.css" />
<div id="main">
    <div class="lleft">
<!--新闻列表 start-->
<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=4aea6f55ddb7f39114c6e5fa87f84a0b&action=lists&catid=%24catid&num=20&order=listorder+ASC%2C+id+DESC&page=%24page\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$pagesize = 20;$page = intval($page) ? intval($page) : 1;if($page<=0){$page=1;}$offset = ($page - 1) * $pagesize;$content_total = $content_tag->count(array('catid'=>$catid,'order'=>'listorder ASC, id DESC','limit'=>$offset.",".$pagesize,'action'=>'lists',));$pages = pages($content_total, $page, $pagesize, $urlrule);$data = $content_tag->lists(array('catid'=>$catid,'order'=>'listorder ASC, id DESC','limit'=>$offset.",".$pagesize,'action'=>'lists',));}?>
<?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
<div class="news">
    <dl>
        <dd><a href="<?php echo $r['url'];?>" target="_blank"><?php echo $r['title'];?></a></dd>
        <dt><?php echo date('Y-m-d H:i:s',$r[inputtime]);?></dt>
    </dl>
    <p class="txt"><?php echo $r['description'];?></p>
</div>
<?php $n++;}unset($n); ?>
<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
<!--新闻列表end-->
        <div id="page">
         <div id="pages"><?php echo $pages;?></div>
        </div>
    </div>
    <div class="nright">
       	        <div class="rad">
         <!-- AdService_Position_10 begin -->
		<div id="adpos_10" style="width:240px;height:160px;">
            <img src="<?php echo IMG_PATH;?>Picture/bqgg.png" width="240" height="160" alt="" border="0">      
        </div>
	
		<!-- AdService_Position_10 end -->
        </div>
        <?php include template("content","left_top"); ?>
        <?php include template("content","left_tuwen"); ?>
        </div>
    </div>

<?php include template("content","footer_list"); ?>