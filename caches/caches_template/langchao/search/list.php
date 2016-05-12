<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?>﻿<?php include template('search', 'header_list'); ?>
<link rel="stylesheet" type="text/css" href="<?php echo CSS_PATH;?>Css/list.css" id="flexlist">
<link rel="stylesheet" type="text/css" href="<?php echo CSS_PATH;?>Css/css.css" />
<div id="main">
    <div class="lleft">
<!--新闻列表 start-->
<?php $n=1; if(is_array($data)) foreach($data AS $i => $r) { ?>
<div class="news">
    <dl>
        <dd><a href="<?php echo $r['url'];?>" target="_blank"><?php echo $r['title'];?></a></dd>
        <dt><?php echo date('Y-m-d H:i:s',$r[inputtime]);?></dt>
    </dl>
    <p class="txt"><?php echo $r['description'];?></p>
</div>
<?php $n++;}unset($n); ?>
<?php if(empty($data)) { ?>未找到结果<?php } ?>
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
        <?php include template("search","left_top"); ?>
        <?php include template("search","left_tuwen"); ?>
    </div>
</div>
</div>
<?php include template('search', 'footer_list'); ?>
