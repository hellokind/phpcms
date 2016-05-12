<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?>﻿<?php include template("content","header_show"); ?>
<link rel="stylesheet" type="text/css" href="<?php echo CSS_PATH;?>Css/css.css" />
<div id="main">
    <div class="nleft">
        <h1><?php echo $title;?></h1>
        <dl class="ntit">
            <dd>
                <span>分类：</span><em><a href="<?php echo $CATEGORYS[$catid]['url'];?>" target="_blank"><?php echo $CATEGORYS[$catid]['catname'];?></a></em>
                <span class="date" id="pubtime_baidu"><?php echo date('Y-m-d H:i:s',time($inputtime));?></span>
                <span class="source" id="source_baidu">
                来源：<a href="<?php echo $CATEGORYS[$catid]['url'];?>" target="_blank"><?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=e549ff061be6850d4732380473fc54d9&action=lists&catid=%24catid&order=id+DESC&moreinfo=1&num=1\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$data = $content_tag->lists(array('catid'=>$catid,'order'=>'id DESC','moreinfo'=>'1','limit'=>'1',));}?>
                <?php $n=1;if(is_array($data)) foreach($data AS $r) { ?> 
                <?php list($copyfrom) = explode('|0', $r['copyfrom'])?>  
                   <?php echo $copyfrom;?>
                <?php $n++;}unset($n); ?>
                <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?></a></span>
                <span class="author" id="author_baidu"></span>
            </dd>
            <dt><span class="aj"></span><span class="ay"></span></dt>
        </dl>
        <div class="desc">
            <p class="ctdesc" id="daoy"><?php echo $r['description'];?></p>
        </div>
        <div class="content">
            <p style="text-align: center"><br /> <?php echo $content;?> </p>
            <p style="text-align:right;"><span id="editor_baidu"> <!-- 编辑： <?php $n=1;if(is_array($data)) foreach($data AS $r) { ?> <?php echo $author;?> <?php $n++;}unset($n); ?> --> </span></p>
        </div>
        <dl class="tag clearfix">
            <dd>
                <?php $keywords=explode(' ',$r[keywords]);?>
                <?php $n=1;if(is_array($keywords)) foreach($keywords AS $keyword) { ?>
                <a href="<?php echo APP_PATH;?>index.php?m=content&c=tag&a=lists&tag=<?php echo urlencode($keyword);?>"><?php echo $keyword;?></a>
              <?php $n++;}unset($n); ?>
            </dd>
            <dt>
                <div class="share" data-share="share_1230"><span class="sina"></span><span class="qqwb"></span><span class="weixin"></span><span class="baidu"></span><span class="douban"></span>
                    <div class="qrcode"></div>
                </div>
                <p class="attitude"><span class="up" data-id="401906"></span></p>
            </dt>
        </dl>
        <!-- related start -->
        <!-- related end -->
        <!-- comment start -->
        <div id="pinl" idth="720" height="147">
            <img src="<?php echo IMG_PATH;?>Picture/comment.jpg" width="720" height="137" border="0">
        </div>
        <!-- comment end -->
    </div>
    <div class="nright">
        <div class="rad">
            <!-- AdService_Position_2 begin -->
			<div id="adpos_2" style="width:240px;height:160px;">
            <div id="adpos_2" style="width:240px;height:160px;">
                <img src="<?php echo IMG_PATH;?>Picture/bqgg.png" width="240" height="160" alt="" border="0">
            </div>         
            </div>
			<!-- AdService_Position_2 end -->
        </div>
        <?php include template("content","left_top"); ?>
        <?php include template("content","left_tuwen"); ?>
    </div>
</div>

<script language="JavaScript" src="<?php echo APP_PATH;?>api.php?op=count&id=<?php echo $id;?>&modelid=<?php echo $modelid;?>"></script>
<?php include template("content","footer_min"); ?>