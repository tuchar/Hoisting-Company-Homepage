<?php
$z[0]=Array("global","",236,264);
$z[0][4]['name']="cfg_soft_lang";
$z[1]=Array("field","",277,296);
$z[1][4]['name']="title";
$z[2]=Array("global","",297,323);
$z[2][4]['name']="cfg_webname";
$z[3]=Array("field","",364,393);
$z[3][4]['name']="keywords";
$z[4]=Array("field","",433,491);
$z[4][4]['name']="description";
$z[4][4]['function']="html2text(@me)";
$z[5]=Array("global","",509,541);
$z[5][4]['name']="cfg_templets_skin";
$z[6]=Array("include","",656,691);
$z[6][4]['filename']="head.htm";
$z[7]=Array("field","",827,856);
$z[7][4]['name']="position";
$z[8]=Array("list","\r\n				<li>\r\n      				[field:array runphp='yes']@me = (empty(@me['litpic']) ? \"\" : \"<a href='{@me['arcurl']}' class='preview'><img src='{@me['litpic']}'/></a>\"); [/field:array]\r\n					<a href=\"[field:arcurl/]\" class=\"title\">[field:title/]</a>\r\n					<span class=\"info\">\r\n						<small>日期：</small>[field:pubdate function=\"GetDateTimeMK(@me)\"/]\r\n						<small>价格：</small>[field:trueprice/]\r\n						<small>品牌：</small>[field:brand/]\r\n						<small>人气：</small>[field:click/]\r\n					</span>\r\n					<p class=\"intro\">\r\n						[field:description/]...\r\n					</p>\r\n				</li>\r\n	",929,1547);
$z[8][4]['pagesize']="10";
$z[9]=Array("pagelist","",1644,1715);
$z[9][4]['listitem']="info,index,end,pre,next,pageno";
$z[9][4]['listsize']="5";
$z[10]=Array("channel","\r\n		<li><a href='[field:typeurl/]'>[field:typename/]</a></li>",1967,2146);
$z[10][4]['type']="son";
$z[10][4]['currentstyle']="<li><a href='~typelink~' class='thisclass'>~typename~</a></li>";
$z[11]=Array("arclist","\r\n						<li>\r\n							<a href=\"[field:arcurl/]\">[field:title/]</a>\r\n							<span><small>好评:</small>[field:scores/]</span>\r\n							<span><small>人气:</small>[field:click/]</span>\r\n						</li>\r\n                    ",2355,2628);
$z[11][4]['flag']="c";
$z[11][4]['titlelen']="42";
$z[11][4]['row']="8";
$z[12]=Array("arclist","\r\n						<li>\r\n							<a href=\"[field:arcurl/]\" class=\"preview\"><img src=\"[field:litpic/]\" alt=\"[field:title function='html2text(@me)'/]\"/></a>\r\n							<a href=\"[field:arcurl/]\" class=\"title\">[field:title/]</a>\r\n							<span class=\"intro\">人气:<span class=\"fc-f90\">[field:click/]</span></span>\r\n						</li>\r\n                    ",2833,3226);
$z[12][4]['row']="10";
$z[12][4]['orderby']="click";
$z[12][4]['type']="image.";
$z[13]=Array("include","",3318,3355);
$z[13][4]['filename']="footer.htm";

?>