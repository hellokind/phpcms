<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><!--推荐 start-->
<p class="rtit tuij"></p>
<div class="tjlist" id="tjlist">
<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=598f60b68575dfe8c974fdc84b2e5463&action=position&posid=18&order=listorder+ASC%2Cid+DESC&num=5\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'position')) {$data = $content_tag->position(array('posid'=>'18','order'=>'listorder ASC,id DESC','limit'=>'5',));}?>
<?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
<div class="t">
<p class="img"><a href="<?php echo $r['url'];?>" target="_blank"><img src="<?php echo thumb($r[thumb],299,189);?>" width="209" height="148" /><?php echo $title;?></a></p>
<p class="txt"><a href="<?php echo $r['url'];?>" target="_blank"><?php echo $r['title'];?></a></p>
</div>
<?php $n++;}unset($n); ?>
<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
</div>
<!--推荐 end-->