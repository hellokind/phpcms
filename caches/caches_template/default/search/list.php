<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php include template('search', 'header'); ?>
	<div class="clr sr_body sr_list">
    	<div class="sr_main">
        	<div class="sr_head">
            	<div class="l" id="search">
				<?php $j=0?>
				<?php $n=1;if(is_array($search_model)) foreach($search_model AS $k=>$v) { ?>
				<?php $j++;?>
					<a href="javascript:;" onclick="setmodel(<?php echo $v['typeid'];?>, $(this),<?php echo $siteid;?>, '<?php echo $q;?>');" <?php if($v['typeid']==$typeid) { ?> class="on"<?php } ?>><?php echo $v['name'];?></a><?php if($j != count($search_model)) { ?> - <?php } ?>
				<?php $n++;}unset($n); ?>
				</div>
            	<div class="r"><script type="text/javascript">document.write('<iframe src="<?php echo APP_PATH;?>index.php?m=member&c=index&a=mini&forward='+encodeURIComponent(location.href)+'&siteid=<?php echo get_siteid();?>" allowTransparency="true"  width="300" height="24" frameborder="0" scrolling="no"></iframe>')</script></div>
            </div>

            <div class="wrap sr_logo">
            	<a href="index.php?m=search&siteid=<?php echo $siteid;?>" class="l"><img src="<?php echo IMG_PATH;?>search/se_logo.png" width="230" height="158" /></a>
                <div class="l">
                	<div class="sr_frm_box">
						<form name="search" type="get">
                        <div class="sr_frmipt">
						  <input type="hidden" name="m" value="search"/>
						  <input type="hidden" name="c" value="index"/>
						  <input type="hidden" name="a" value="init"/>
						  <input type="hidden" name="typeid" value="<?php echo $typeid;?>" id="typeid"/>
						  <input type="hidden" name="siteid" value="<?php echo $siteid;?>" id="siteid"/>
						<input type="text" name="q" class="ipt" id="q" value="<?php echo $search_q;?>">
						<div class="sp" id="aca">▼</div><input type="submit" class="ss_btn" value="搜 索"></div>
						</form>
						<div id="sr_infos" class="wrap sr_infoul">
						</div>
                    </div>
                    <div class="jg">获得约 <?php echo $totalnums;?> 条结果 （用时<?php echo sprintf("%01.2f", $execute_time);?> 秒）</div>
                </div>
            </div>
            <div class="brd1s"></div>
            <div class="wrap sr_lists">
            	<div class="l">
                	<div>
                    	<span>网页结果</span>
                        <ul>
				<?php $n=1;if(is_array($search_model)) foreach($search_model AS $k=>$v) { ?>
						<li><a href="?m=search&c=index&a=init&typeid=<?php echo $v['typeid'];?>&q=<?php echo urlencode($search_q);?>&siteid=<?php echo $siteid;?>&time=<?php echo $time;?>" <?php if($v['typeid']==$typeid) { ?> class="ac"<?php } ?>><?php echo $v['name'];?></a>
						</li>
				<?php $n++;}unset($n); ?>
                         </ul>
                    </div>
                    <div>
                    	<span>按时间搜索</span>
                        <ul>
                            <li><a href="?m=search&c=index&a=init&typeid=<?php echo $typeid;?>&q=<?php echo urlencode($search_q);?>&siteid=<?php echo $siteid;?>&time=all" <?php if($time=='all' || empty($time)) { ?>class="ac"<?php } ?>>全部时间</a></li>
                            <li><a href="?m=search&c=index&a=init&typeid=<?php echo $typeid;?>&q=<?php echo urlencode($search_q);?>&siteid=<?php echo $siteid;?>&time=day" <?php if($time=='day') { ?>class="ac"<?php } ?>>一天内</a></li>
                            <li><a href="?m=search&c=index&a=init&typeid=<?php echo $typeid;?>&q=<?php echo urlencode($search_q);?>&siteid=<?php echo $siteid;?>&time=week" <?php if($time=='week') { ?>class="ac"<?php } ?>>一周内</a></li>
                            <li><a href="?m=search&c=index&a=init&typeid=<?php echo $typeid;?>&q=<?php echo urlencode($search_q);?>&siteid=<?php echo $siteid;?>&time=month" <?php if($time=='month') { ?>class="ac"<?php } ?>>一月内</a></li>
                            <li><a href="?m=search&c=index&a=init&typeid=<?php echo $typeid;?>&q=<?php echo urlencode($search_q);?>&siteid=<?php echo $siteid;?>&time=year" <?php if($time=='year') { ?>class="ac"<?php } ?>>一年内</a></li>
                        </ul>
                    </div>
                    <div class="bgno">
                    	<span>搜索历史</span>
                        <ul id='history_ul'>
                        </ul>
                    </div>
                </div>
                <div class="c wrap">
                	<ul class="wrap">
						<?php $n=1; if(is_array($data)) foreach($data AS $i => $r) { ?>
						<li class="wrap">
							<div>
								<?php if($r['thumb']) { ?><a href="<?php echo $r['url'];?>"><img src="<?php echo $r['thumb'];?>" width="60" height="60" /></a><?php } ?>
								<h5><a href="<?php echo $r['url'];?>"><?php echo $r['title'];?></a><?php if($r['posids']) { ?><img src="<?php echo IMG_PATH;?>icon/small_elite.gif"><?php } ?></h5>
								<p><?php echo $r['description'];?></p>
							</div>
							<div class="adds">发布时间：<?php echo format::date($r[inputtime], 1);?></div>
						</li>
						<?php $n++;}unset($n); ?>
						<?php if(empty($data)) { ?>未找到结果<?php } ?>
                    </ul>
                    <div id="pages" class="text-c mg_t20"><?php echo $pages;?></div>
					<?php if($setting['relationenble']) { ?>
					<div class="wrap sgch"><strong>相关搜索：</strong>
					<?php $n=1; if(is_array($relation)) foreach($relation AS $k => $v) { ?>
					<a href="?m=search&c=index&a=init&typeid=<?php echo $typeid;?>&siteid=<?php echo $siteid;?>&q=<?php echo $v['keyword'];?>"><?php echo $v['keyword'];?></a> 
					<?php $n++;}unset($n); ?>
					</div>
					<?php } ?>
                </div>
            </div>
      </div>
<script type="text/javascript" src="<?php echo JS_PATH;?>search_history.js"></script>
<?php if($setting['suggestenable']) { ?>
<script type="text/javascript" src="<?php echo JS_PATH;?>jquery.suggest.js"></script>
<script type="text/javascript" src="<?php echo JS_PATH;?>search_suggest.js"></script>
<?php } ?>
<?php include template('search', 'footer'); ?>
