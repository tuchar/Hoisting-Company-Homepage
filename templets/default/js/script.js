//去左空格; 
function ltrim(s){ return s.replace(/^\s*/, ""); } 
//去右空格; 
function rtrim(s){ return s.replace(/\s*$/, ""); } 
//去左右空格; 
function trim(s) { return rtrim(ltrim(s)); }

function isBlank(ele)	//不能为空
{
	if(trim(ele.value)=="")
	{
		alert(ele.getAttribute("estr"));
		ele.focus();
		return false;	
	}
}

function isNum(ele)		//必须是数字
{
	if(trim(ele.value)=="" || true==isNaN(ele.value))
	{
		alert(ele.getAttribute("estr"));
		ele.focus();
		return false;				
	}
}

function chePwd(ele,pwd)		//必须是数字
{
	if(trim(ele.value)!=pwd)
	{
		alert(ele.getAttribute("estr"));
		ele.focus();
		return false;				
	}
}

function isEmail(ele)		//邮箱
{
	
	var filter=/^\s*([A-Za-z0-9_-]+(\.\w+)*@(\w+\.)+\w{2,3})\s*$/;
	 if (!filter.test(ele.value)) 
	{
		alert(ele.getAttribute("estr"));
		ele.focus();
		return false;				
	}
	
}

function isTime(ele)  //时间
{
	 var filter=/^(d+)-(d{1,2})-(d{1,2}) (d{1,2}):(d{1,2}):(d{1,2})$/;
	 if (!filter.test(ele.value)) 
	{ 
		alert(ele.getAttribute("estr"));
		ele.focus();
		return false; 
	} 
}

//检测Form提交
function cheFor(object)
{
	var i,pwd;
	a=object.elements;
	for (i=0;i<a.length;i++)
	{
		if(a[i].id=="pwd")
			pwd=a[i].value;
			
		switch (a[i].getAttribute("chtyp"))
		{
			case "bla" :		//不能为空
				if(isBlank(a[i])==false)	return false;
				break;

			case "num" :		//数字
				if(isNum(a[i])==false)		return false;
				break;

			case "ema" :		//邮件形式
				if(isEmail(a[i])==false)	return false;
				break;

			case "tim" :		//邮件形式
				if(isTime(a[i])==false)		return false;
				break;
				
			case "chepwd" :		//两次输入密码比较
				if(chePwd(a[i],pwd)==false)	return false;
				break;

			default :
				continue;
		}
	}
	return true;
}

//=======================================================================================
//选取所有的选项
function CheckAll(v,cheName)
{
	var i;
	a=document.getElementsByTagName("input");
	for (i=0;i<a.length;i++)
	{
		if(a[i].name==cheName)
			a[i].checked=v;
	}
}

//=======================================================================================
function this_onchange(changeName)
{
	if(document.getElementById(changeName).value=="")  return false;
	MyForm.submit();
}

//=======================================================================================
//对单项记录进行操作时的确认
function cheAct(url,act)
{
	var actStr;
	if(act=="del" || act=="Del")
		actStr="删除";
	else if(act=="lj" || act=="LJ")
		actStr="回收";
	else if(act=="hf" || act=="Hf")
		actStr="恢复";
	Msg = window.confirm("确定要"+actStr+"选中的信息吗？单击“确定”"+actStr+"，否则“取消”！");
	if (Msg)
	{
		urlStr=url+"&Action="+act;
		
		MyForm.action=urlStr;
		MyForm.submit();
	}
}


//=======================================================================================
//对多项记录进行操作时的确认
function cheListFor(url,act,cheName)
{
	var Msg,blnDel,actStr,urlStr
	blnDel = true	
	for (var i=0;i<document.getElementsByTagName("input").length;i++)
    {
       var e = document.getElementsByTagName("input")[i];
       if (e.name == cheName && e.checked == true)
       {
		  	blnDel = false;
          	break;
		}
    }
	if (blnDel)
	{
		alert("请选择要处理的项后再进行操作！");
	}
	else
	{
		if("Del"==act || "del"==act)
			actStr="删除";
		else if("lj"==act || "Lj"==act)
			actStr="回收";
		else if("hf"==act || "hf"==act)
			actStr="恢复";
		Msg = window.confirm("确定要"+actStr+"选中的信息吗？单击“确定”"+actStr+"，否则“取消”！");
		if (Msg)
		{			
			urlStr=url+"&Action="+act;
			
			MyForm.action=urlStr;
			MyForm.submit();
		}
	}
}

// 当上传图片等文件时，往下拉框中填入图片路径，可根据实际需要更改此函数
function doChange(objText, objDrop){
	if (!objDrop) return;
	var str = objText.value;
	var arr = str.split("|");
	var nIndex = objDrop.selectedIndex;
	objDrop.length=1;
	for (var i=0; i<arr.length; i++){
		objDrop.options[objDrop.length] = new Option(arr[i], arr[i]);
	}
	objDrop.selectedIndex = nIndex;
}

//确定操作
function CheckOpe(tstr)
{
	Msg = window.confirm("确定要"+tstr+"吗？单击“确定”"+tstr+"，否则“取消”！");
	if (Msg) return true;
	else return false;
}

function DrawImage(ImgD,w,h){ 
	var image=new Image(); 
	image.src=ImgD.src; 
	if(image.width>0 && image.height>0){ 
		if(image.width/image.height>= w/h){ 
			if(image.width>w){
				ImgD.width=w; 
				ImgD.height=(image.height*w)/image.width; 
			}
			else{ 
				ImgD.width=image.width;
				ImgD.height=image.height; 
			} 
			//ImgD.alt= "点击查看"+image.width+"x"+image.height+"原始图片..."; 
		} 
		else{ 
			if(image.height>h){
				ImgD.height=h; 
				ImgD.width=(image.width*h)/image.height; 
			}
			else{ 
				ImgD.width=image.width;
				ImgD.height=image.height; 
			} 
			//ImgD.alt= "点击查看"+image.width+"x"+image.height+"原始图片..."; 
		} 
	}
}

function insertUpload(msg)
{
	msg=msg[0];
	var tpics=document.getElementById("tpics");
	if(tpics.value!="")
		tpics.value=tpics.value+"|"+msg.url;
	else
		tpics.value=msg.url;
}

function get_radio_value()
{
	var radio_array=document.getElementsByName("Id");
	var i;
	strR="";
	for (i = 0; i < radio_array . length; ++ i)
			if (radio_array[i].checked)
			{
				if(strR=="")
					strR=radio_array[i].value
				else
					strR=strR+","+radio_array[i].value
			}			
	return strR;
}
function movePro(f_pageno,f_ClassId)
{
	blnDel = true	
	cheName="ID";
	for (var i=0;i<document.getElementsByTagName("input").length;i++)
    {
       var e = document.getElementsByTagName("input")[i];
       if (e.name == cheName && e.checked == true)
       {
		  	blnDel = false;
          	break;
		}
    }
	if (blnDel)
	{
		alert("请选择要处理的项后再进行操作！");
	}
	else
	{
		var strId;
strId=get_radio_value();
window.location="?Action=MovePro&pageno="+f_pageno+"&id="+strId+"&ClassId="+f_ClassId+"&toClassId="+document.getElementById("toClassId").value
	}
}

function setHomepage(pageURL) {
    if (document.all) {
        document.body.style.behavior='url(#default#homepage)';
        document.body.setHomePage(pageURL);
    }
    else {
            try { //IE
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            } catch (e) {
    try{ //Firefox
     var prefs = Components.classes['@mozilla.org/preferences-service;1']
.getService(Components. interfaces.nsIPrefBranch);
     prefs.setCharPref('browser.startup.homepage',pageURL);
    } catch(e) {
                alert( "您的浏览器不支持该操作，请使用浏览器菜单手动设置." );
    }
            }
    }
}

function AddFavorite(sURL, sTitle) {
    try { //IE
        window.external.addFavorite(sURL, sTitle);
    } catch (e) {
        try { //Firefox
            window.sidebar.addPanel(sTitle, sURL, "");
        } catch (e) {
   try{//Chrome无法自动收藏，用创建快应用程序的捷方式来替代。
    createShortcut();
   } catch(e){
    alert("您的浏览器不支持自动加入收藏，请使用浏览器菜单手动设置.");  
   }
        }
    }
}



function showhidlab(t1,t2,t3,t4)
{
	for(var i=1;i<t2+1;i++)
	{
		document.getElementById("i_td"+t1+"_"+i).className=t4+"_out";
		document.getElementById("i_tab"+t1+"_"+i).style.display="none";
	}
	document.getElementById("i_td"+t1+"_"+t3).className=t4+"_on";
	document.getElementById("i_tab"+t1+"_"+t3).style.display="block";
}