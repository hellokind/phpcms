<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><!--Top start-->
<div class="rtit top">
<div class="topday" id="topday">
    <ul>
        <li class="now">一天</li>
        <li>一周</li>
        <li>一月</li>
    </ul>
</div>
</div>
<div id="tdnews">
<!--新闻排行榜 start-->
<div class="tdnews">
<ul>
<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=f9f9b0f8aa9a259118f98494431b932d&action=hits&catid=6&where=%60catid%60+in+%286%2C9%2C13%2C14%2C15%2C16%2C17%2C19%2C20%2C21%29&order=dayviews+DESC&num=10\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'hits')) {$data = $content_tag->hits(array('catid'=>'6','where'=>'`catid` in (6,9,13,14,15,16,17,19,20,21)','order'=>'dayviews DESC','limit'=>'10',));}?>
<?php $i=1?>
<?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
<li><span <?php if($i>3) { ?> class="b"<?php } ?>><?php echo $i;?></span><h3><a href="<?php echo $r['url'];?>"><?php echo $r['title'];?></a></h3></li>
<?php $i++?>
<?php $n++;}unset($n); ?>
<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
</ul>
</div>
<div class="tdnews" style="display:none;">
<ul>
<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=4079b94c83593b29a5323fafd2b15297&action=hits&catid=6&where=%60catid%60+in+%286%2C9%2C13%2C14%2C15%2C16%2C17%2C19%2C20%2C21%29&order=weekviews+DESC&num=10\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'hits')) {$data = $content_tag->hits(array('catid'=>'6','where'=>'`catid` in (6,9,13,14,15,16,17,19,20,21)','order'=>'weekviews DESC','limit'=>'10',));}?>
<?php $i=1?>
<?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
<li><span <?php if($i>3) { ?> class="b"<?php } ?>><?php echo $i;?></span><h3><a href="<?php echo $r['url'];?>"><?php echo $r['title'];?></a></h3></li>
<?php $i++?>
<?php $n++;}unset($n); ?>
<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
</ul>
</div>
<div class="tdnews" style="display:none;">
<ul>
<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=d40b5405e61feff9cd0199b8d1632d52&action=hits&catid=6&where=%60catid%60+in+%286%2C9%2C13%2C14%2C15%2C16%2C17%2C19%2C20%2C21%29&order=monthviews+DESC&num=10\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'hits')) {$data = $content_tag->hits(array('catid'=>'6','where'=>'`catid` in (6,9,13,14,15,16,17,19,20,21)','order'=>'monthviews DESC','limit'=>'10',));}?>
<?php $i=1?>
<?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
<li><span <?php if($i>3) { ?> class="b"<?php } ?>><?php echo $i;?></span><h3><a href="<?php echo $r['url'];?>"><?php echo $r['title'];?></a></h3></li>
<?php $i++?>
<?php $n++;}unset($n); ?>
<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
</ul>
</div>
</div>
<!--新闻排行榜 end-->
<!--Top end-->

