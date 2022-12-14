//========================================判斷瀏覽器類型和版本號========================================
var Browser_Type_STR="";
var Browser_Type="";
var Browser_Ver="";

function Get_Browser_Type()
{
	var i,j,k,m,n;
	var ele00,ele01,ele02,ele03,ele04;
	var str00,str01,str02,str03,str04;

	//alert(navigator.userAgent);
	if ( !(window.ActiveXObject) && !("ActiveXObject" in window) )
	{
		//alert("Browser not support ActiveXObject , maybe not use IE .");
		if ( navigator.userAgent.indexOf("Chrome")>=0 )
		{
			try
			{
				//if ( !!window.chrome && ( window.chrome.webstore || window.chrome.runtime ) )
				if ( window.chrome )
				{
					//console.log(window.chrome + "\n" + window.chrome.webstore + "\n" + window.chrome.runtime);
					//Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11
					Browser_Ver=navigator.userAgent.replace(/^.*Chrome\//g,"").replace(/ .*/g,"");
					Browser_Type_STR="Chrome/" + Browser_Ver;
					Browser_Type="Chrome";
				}
				else if ( (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(" OPR/")>=0 )
				{
					//Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36 OPR/36.0.2130.65
					Browser_Ver=navigator.userAgent.replace(/^.*OPR\//g,"").replace(/ .*/g,"");
					Browser_Type_STR="OPR/" + Browser_Ver;
					Browser_Type="OPR";
				}
				else
				{
				}
			}
			catch (err)
			{
				alert(err.message);
			}
		}
		else if ( navigator.userAgent.indexOf("Chrome")<0 && navigator.userAgent.indexOf("Safari")>=0 )
		{
			//Mozilla/5.0 (Windows NT 5.1) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2
			Browser_Ver=navigator.userAgent.replace(/^.*Safari\//g,"").replace(/ .*/g,"");
			Browser_Type_STR="Safari/" + Browser_Ver;
			Browser_Type="Safari";
		}
		else if ( navigator.userAgent.indexOf("Firefox")>=0 )
		{
			try
			{
				if ( InstallTrigger!=undefined )
				{
					//alert(InstallTrigger);
					if ( navigator.userAgent.indexOf("SeaMonkey")>=0 )
					{
						//Mozilla/5.0 (Windows NT 5.1; rv:43.0) Gecko/20100101 Firefox/43.0 SeaMonkey/2.40
						Browser_Ver=navigator.userAgent.replace(/^.*SeaMonkey\//g,"").replace(/ .*/g,"");
						Browser_Type_STR="SeaMonkey/" + Browser_Ver;
						Browser_Type="SeaMonkey";
					}
					else if ( navigator.userAgent.indexOf("Waterfox")>=0 )
					{
						//Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:43.0) Gecko/20100101 Firefox/43.0.4 Waterfox/43.0.4
						Browser_Ver=navigator.userAgent.replace(/^.*Waterfox\//g,"").replace(/ .*/g,"");
						Browser_Type_STR="Waterfox/" + Browser_Ver;
						Browser_Type="Waterfox";
					}
					else
					{
						//Mozilla/5.0 (Windows NT 5.1; rv:34.0) Gecko/20100101 Firefox/34.0
						Browser_Ver=navigator.userAgent.replace(/^.*Firefox\//g,"").replace(/ .*/g,"");
						Browser_Type_STR="Firefox/" + Browser_Ver;
						Browser_Type="Firefox";
					}
				}
			}
			catch (err)
			{
				alert(err.message);
			}
		}
		else
		{
		}
	}
	else
	{
		//alert("Browser support ActiveXObject , use IE .");
		//Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; MathPlayer 3.00; Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1) ; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET4.0C; .NET4.0E; CIBA; aff-kingsoft-ciba; MathPlayer 3.00; rctw; WWTClient2)
		if ( navigator.userAgent.indexOf("MSIE")>=0 )
		{
			str00=navigator.userAgent.substring(navigator.userAgent.indexOf("MSIE"));
			Browser_Ver=str00.replace(/;.*$/g,"").replace(/^.*MSIE /g,"");
			Browser_Type_STR="MSIE " + Browser_Ver;
			Browser_Type="MSIE";
		}
		else
		{
			try
			{
				if ( navigator.userAgent.indexOf("MSIE")==-1 && Node && Node.prototype )
				{
					Browser_Type_STR="MSIE 11.0";
					Browser_Type="MSIE";
					Browser_Ver="11.0";
				}
			}
			catch (err)
			{
				alert(err.message);
			}
		}
	}
	//alert("Browser_Type_STR : " + Browser_Type_STR + "\n" + "Browser_Type : " + Browser_Type + "\n" + "Browser_Ver : " + Browser_Ver + "\n");
}
Get_Browser_Type();
//========================================判斷瀏覽器類型和版本號========================================
//========================================獲取本地計算機信息========================================
var Local_Folder_Path;
var Current_Account_UserName;

function Get_Local_Computer_Info()
{
	Local_Folder_Path=decodeURIComponent(location.href.replace(/\/[^\/]*$/g,"").replace(/file\:\/\/\//g,"")).replace(/\//g,"\\");

	if ( Browser_Type=="MSIE" )
	{
		try
		{
			var WinNetwork=new ActiveXObject("WScript.Network");
			Current_Account_UserName=WinNetwork.UserName;
		}
		catch (err)
		{
			//alert(err.message);
		}
	}
	else
	{
		Current_Account_UserName="";
	}
	//alert("Current_Account_UserName : " + Current_Account_UserName + "\n");
}
Get_Local_Computer_Info();
//========================================獲取本地計算機信息========================================
//========================================ActiveX========================================
if ( Browser_Type=="MSIE" )
{
	function CreateMultiFolder(path)
	{
		var S_FSO=new ActiveXObject("Scripting.FileSystemObject");
		if ( S_FSO.FolderExists(path) )									{return;}
		if ( !S_FSO.FolderExists(S_FSO.GetParentFolderName(path)) )		{CreateMultiFolder(S_FSO.GetParentFolderName(path));}
		S_FSO.CreateFolder(path);
	}
}
else
{
}
//========================================ActiveX========================================
function toggleView(button,element)
{
	var imgs = button.getElementsByTagName('img');
	var e = document.getElementById(element);
	if(e.style.display == 'block')
	{
		hideDesc(imgs[0],e);
	}
	else
	{
		showDesc(imgs[0],e);
	}
}
function showDesc(img,e)
{
	if(typeof(e) != 'undefined')
	{
		e.style.display = 'block';
	}
	img.src = 'PIC/minus.gif';
}
function hideDesc(img,e)
{
	if(typeof(e) != 'undefined')
	{
		e.style.display = 'none';
	}
	img.src = 'PIC/plus.gif';
}
/*
function createArray(length)
{
	var arr = new Array(length || 0),
		i = length;
	if (arguments.length > 1)
	{
		var args = Array.prototype.slice.call(arguments, 1);
		while(i--) arr[length-1 - i] = createArray.apply(this, args);
	}
	return arr;
}
一樣的只是這是原來的別人的格式。
*/
function createArray(length)
{
	var arr=new Array(length||0),i=length;
	if ( arguments.length>1 )
	{
		var args=Array.prototype.slice.call(arguments,1);
		while(i--)
		{
			arr[length-1-i]=createArray.apply(this,args);
		}
	}
	return arr;
}

function strLen(str)//這是計算JS字符串保存到ANSI文件之後，ANSI文件的大小(還要是沒有保存到特殊字符成為"?"問號)。
{
	var len = 0;
	for (var i=0; i<str.length; i++)
	{
		var c = str.charCodeAt(i);
//單字節加1
		if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f))
		{
			len++;
		}
		else
		{
			len+=2;
		}
	}
	return len;
}
/*
function lengthInUtf8Bytes(str)
//這是計算JS字符串保存到UTF-8文件之後，UTF-8文件的大小，從網上的高手抄襲的。
//但是，當遇到撒花符號的時候就看出不準確了。
{
	// Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
	var m = encodeURIComponent(str).match(/%[89ABab]/g);
	alert(m.length);
	return str.length + (m ? m.length : 0);
}
*/
/*不准確。
function str_unicode_Len(str)
{
	var len = 0;
	for (var i=0; i<str.length; i++)
	{
		var c = str.charCodeAt(i);
//單字節加1
		if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f))
		{
			len+=2;
		}
		else
		{
			len+=4;
		}
	}
	return len;
}
*/
function supStr(str01,str02,len)//在str01後邊補充len次str02的字符。
{
	for (var i=0;i<len;i++)
	{
		str01+=str02;
	}
	return str01;
}

//====================舊版函數要放棄使用====================
function insertOption(sel_id,opt_val,opt_text)
{
	var opt=document.createElement('option')
	opt.text=opt_text;
	opt.value=opt_val;
	try
	{
		document.getElementById(sel_id).add(opt,null); // standards compliant
	}
	catch(ex)
	{
		document.getElementById(sel_id).add(opt); // IE only
	}
}
//====================舊版函數要放棄使用====================

function Element_Flicker(ele_flicker,Flicker_BGColor_ORI,Flicker_BGColor_00,Flicker_BGColor_01,Flicker_Cycle,Flicker_Time)
{
	if ( Flicker_BGColor_ORI==null || Flicker_BGColor_ORI==undefined )	{Flicker_BGColor_ORI=ele_flicker.style.backgroundColor;}
	if ( Flicker_BGColor_00==null || Flicker_BGColor_00==undefined )	{Flicker_BGColor_00="yellow";}
	if ( Flicker_BGColor_01==null || Flicker_BGColor_01==undefined )	{Flicker_BGColor_01="#1EB0E9";}

	if ( Flicker_Cycle!=0 )
	{
		setTimeout(function ()
		{
			ele_flicker.style.backgroundColor=Flicker_BGColor_00;
			setTimeout(function ()
			{
				ele_flicker.style.backgroundColor=Flicker_BGColor_01;
				setTimeout(function ()
				{
					Element_Flicker(ele_flicker,Flicker_BGColor_ORI,Flicker_BGColor_00,Flicker_BGColor_01,Flicker_Cycle-1,Flicker_Time);
				},Flicker_Time);
			},Flicker_Time);
		},0);
	}
	else
	{
		ele_flicker.style.backgroundColor=Flicker_BGColor_ORI;
	}

	/*
	for (var i=0;i<Flicker_Cycle*2;i+=2)
	{
		setTimeout(function ()
		{
			ele_flicker.style.backgroundColor=Flicker_BGColor_00;
		},Flicker_Time*i);
		setTimeout(function ()
		{
			ele_flicker.style.backgroundColor=Flicker_BGColor_01;
		},Flicker_Time*(i+1));
	}

	setTimeout(function ()
	{
		ele_flicker.style.backgroundColor=Flicker_BGColor_ORI;
	},Flicker_Time*i);
	*/
	//兩種方法都可以，但如果考慮長時間大量的閃爍的話(大量佔用CPU的for循環)，第一種方式能夠保證每一次閃爍的時間間隔是一樣的。
}

function addOption(ele_select,opt_val,opt_text)
{
	var opt=document.createElement('option')
	opt.text=opt_text;
	opt.value=opt_val;
	try
	{
		ele_select.add(opt,null); // standards compliant
	}
	catch(ex)
	{
		ele_select.add(opt); // IE only
	}
}

function convert_Special_String(str01,quote)
{
	/*
	//Special String test :
	alert("`~1!2@3#4$5%6^7&8*9(0)-_=+\|[{]};:,<.>/?/*-+[白痴]");
	var str="\\\n'djfjdjjfdj\'dfdfdf'`~1!2@3#4$5%6^7&8*9(0)-_=+\|[{]};:,<.>/?/*-+[白痴]";
	alert(str);
	var str='\\\n"djfjdjjfdj\\dsf"`~1!2@3#4$5%6^7&8*9(0)-_=+\|[{]};:,<.>/?/*-+[白痴]';
	alert(str);
	//		\"'
	var str="\\\n'djfjdjjfdj\'dfdfdf'`~1!2@3#4$5%6^7&8*9(0)-_=+\|[{]};:,<.>/?/*-+[白痴]\n\"dkfjldjlfjdsljflsdjljflsdjkljd\"";
	str=str.replace(/\\/g, "\\\\").replace(/\"/g, "\\\"").replace(/\'/g, "\\\'");
	alert(str);
	*/
	str01=str01.replace(/\\/g, "\\\\");
	if ( quote=="\"" )
	{
		str01=str01.replace(/\"/g, "\\\"");
	}
	else if ( quote=="\'" )
	{
		str01=str01.replace(/\'/g, "\\\'");
	}
	return str01;
}

function randomChar(l)
{
	var x="0123456789abcdefghijklmnopqrstuvwxyz";
	var tmp="";
	for(var i=0;i<l;i++)
	{
		tmp +=x.charAt(Math.ceil(Math.random()*100000000)%x.length);
	}
	return tmp;
}

function getOffset( el )
{
	var _x = 0;
	var _y = 0;
	while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) )
	{
		//alert(el.id + "\n" + el.scrollLeft + " " + el.scrollTop + "\n" + el.offsetLeft + " " + el.offsetTop);
		_x += el.offsetLeft;// - el.scrollLeft;
		_y += el.offsetTop;// - el.scrollTop;
		el = el.offsetParent;
	}
	return { top: _y, left: _x };
}

function getOffset_01( el )
{
	var _x = 0;
	var _y = 0;
	while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) )
	{
		//alert(el.id + "\n" + el.scrollLeft + " " + el.scrollTop + "\n" + el.offsetLeft + " " + el.offsetTop);
		_x += el.offsetLeft - el.scrollLeft;
		_y += el.offsetTop - el.scrollTop;
		el = el.offsetParent;
	}
	return { top: _y, left: _x };
}

function getOffset_relative( el , el_p )//此函數暫時不使用，有待完善。
{
	var _x = 0;
	var _y = 0;
	/*
	//此內的計算方法錯誤。
	//while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) )
	while( el && el!=el_p && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) )
	{
		//alert(el.id + "\n" + el.scrollLeft + " " + el.scrollTop + "\n" + el.offsetLeft + " " + el.offsetTop);
		_x += el.offsetLeft;// - el.scrollLeft;
		_y += el.offsetTop;// - el.scrollTop;
		el = el.offsetParent;
		//alert(el.tagName + "\n" + _y);
	}
	*/
	//alert("OK");
	//此下兩行計算方法正確。
	_y=getOffset( el ).top - getOffset( el_p ).top;
	_x=getOffset( el ).left - getOffset( el_p ).left;
	return { top: _y, left: _x };
}
//========================================JS_TIME_Function========================================
//==============================DIVISION==============================
function JS_Timestamp_INI(JS_Timestamp)
{
	var JS_Timestamp;
	if ( JS_Timestamp==undefined || JS_Timestamp==null )
	{
		//"(new Date()).getTime()"=="Date.now()";
		//JS_Timestamp=(new Date()).getTime();
		JS_Timestamp=Date.now();
		//console.log("(new Date()).getTime() : \t" + (new Date()).getTime() + ";\n" + 
		//				"Date.now() : \t\t\t\t" + Date.now() + ";");
	}

	return JS_Timestamp;
}

function JS_Timestamp_CLASS_INI(JS_Time_Data_Type,JS_Timestamp)
{
	var JS_Timestamp_CLASS;
	if ( JS_Time_Data_Type=="JS_Time_____STR" || JS_Time_Data_Type=="JS_Time_STR____" )
	{
		JS_Timestamp_CLASS={};
		return JS_Timestamp_CLASS;
	}

	if ( JS_Timestamp==undefined || JS_Timestamp==null )
	{
		//"(new Date()).getTime()"=="Date.now()";
		//JS_Timestamp=(new Date()).getTime();
		JS_Timestamp=Date.now();
		//console.log("(new Date()).getTime() : \t" + (new Date()).getTime() + ";\n" + 
		//				"Date.now() : \t\t\t\t" + Date.now() + ";");
	}
	if ( JS_Time_Data_Type=="JS_Time_MAC_STR" || JS_Time_Data_Type=="JS_Time_STR_MAC" )
	{JS_Timestamp_CLASS={lastModified:JS_Timestamp,lastCreated:JS_Timestamp,lastAccessed:JS_Timestamp};}
	else if ( JS_Time_Data_Type=="JS_Time_M___STR" || JS_Time_Data_Type=="JS_Time_STR_M__" )
	{JS_Timestamp_CLASS={lastModified:JS_Timestamp};}
	else if ( JS_Time_Data_Type=="JS_Time_T_STR" || JS_Time_Data_Type=="JS_Time_STR_T" )
	{JS_Timestamp_CLASS={Time:JS_Timestamp};}
	else if ( JS_Time_Data_Type=="JS_Time_____STR" || JS_Time_Data_Type=="JS_Time_STR____" )
	{JS_Timestamp_CLASS={};}
	else
	{JS_Timestamp_CLASS={};}

	return JS_Timestamp_CLASS;
}

//var JS_Timestamp;
//var JS_Timestamp_CLASS;
////JS_Timestamp=null;//"Date.now()";
////JS_Timestamp=0;
//JS_Timestamp_CLASS=JS_Timestamp_CLASS_INI(JS_Time_Data_Type,JS_Timestamp);
//==============================DIVISION==============================
function JS_Time_Type_CLASS_INI(JS_Timestamp)
{
	if ( JS_Timestamp==undefined || JS_Timestamp==null )
	{
		//"(new Date()).getTime()"=="Date.now()";
		//JS_Timestamp=(new Date()).getTime();
		JS_Timestamp=Date.now();
		//console.log("(new Date()).getTime() : \t" + (new Date()).getTime() + ";\n" + 
		//				"Date.now() : \t\t\t\t" + Date.now() + ";");
	}

	var JS_Date,JS_Date_STR;
	JS_Date=new Date(JS_Timestamp);
	//	getDate()				//以数值返回天（1-31）
	//	getDay()				//以数值获取周名（0-6）
	//	getFullYear()			//获取四位的年（yyyy）
	//	getHours()				//获取小时（0-23）
	//	getMilliseconds()		//获取毫秒（0-999）
	//	getMinutes()			//获取分（0-59）
	//	getMonth()				//获取月（0-11）
	//	getSeconds()			//获取秒（0-59）
	//	getTime()				//获取时间（从 1970 年 1 月 1 日至今）

	//VBS_Work\Folders_Files_Time_Backup_1.2.2_0000_WPA
	//02021-06-5-25_23:22:00.077
	JS_Date_STR=("00000"	 + JS_Date.getFullYear()).slice(-5)			+ "-" + //获取四位的年（yyyy）
				//==============================Month==============================
				//	01			02			03			04			05			06
				//	一月		二月		三月		四月		五月		六月
				//	January		February	March		April		May			June
				//	07			08			09			10			11			12
				//	七月		八月		九月		十月		十一月		十二月
				//	July		August		September	October		November	December
				("00"		 + (JS_Date.getMonth() + 1)).slice(-2)		+ "-" + //获取月（0-11）
				//==============================Month==============================
				//==============================Week_Day==============================
				//	0			1			2			3			4			5			6
				//	星期天
				//	星期日		星期一		星期二		星期三		星期四		星期五		星期六
				//	Sunday		Monday		Tuesday		Wednesday	Thursday	Friday		Saturday
				//	日曜日		月曜日		火曜日		水曜日		木曜日		金曜日		土曜日
				("0"		 + JS_Date.getDay()).slice(-1)				+ "-" + //以数值获取周名（0-6）
				//==============================Week_Day==============================
				("00"		 + JS_Date.getDate()).slice(-2)				+ "_" + //以数值返回天（1-31）
				("00"		 + JS_Date.getHours()).slice(-2)			+ ":" + //获取小时（0-23）
				("00"		 + JS_Date.getMinutes()).slice(-2)			+ ":" + //获取分（0-59）
				("00"		 + JS_Date.getSeconds()).slice(-2)			+ "." + //获取秒（0-59）
				("000"		 + JS_Date.getMilliseconds()).slice(-3)		+ "" + //获取毫秒（0-999）
				"";
	//JS_Timestamp=JS_Date.getTime()									+ "" + //获取时间（从 1970 年 1 月 1 日至今）
	//			"";

	//"(new Date()).getTime()"=="Date.now()";
	//console.log("(new Date()).getTime() : \t" + (new Date()).getTime() + ";\n" + 
	//				"Date.now() : \t\t\t\t" + Date.now() + ";");

	var JS_Time_Type_CLASS		=
	{
		Timestamp				:	JS_Timestamp,
		Date_STR				:	JS_Date_STR,
		Date_For_Reading		:	JS_Date.toString(),
		_NULL					:	null
	};

	return JS_Time_Type_CLASS;
};

function JS_Timestamp_2_Date_STR(JS_Time_Data_Type,JS_Timestamp_CLASS)
{
	var JS_Timestamp;
	if ( JS_Timestamp_CLASS==undefined || JS_Timestamp_CLASS==null )
	{
		JS_Timestamp_CLASS=JS_Timestamp_CLASS_INI(JS_Time_Data_Type,JS_Timestamp);
	}

	var JS_Time;
	var JS_Time_MAC_STR		,	JS_Time_STR_MAC		;
	var JS_Time_M___STR		,	JS_Time_STR_M__		;
	var JS_Time_T_STR		,	JS_Time_STR_T		;
	var JS_Time_____STR		,	JS_Time_STR____		;
	if ( JS_Time_Data_Type=="JS_Time_MAC_STR" || JS_Time_Data_Type=="JS_Time_STR_MAC" )
	{
		JS_Time						=	{};
		JS_Time_MAC_STR				=
		{
			lastModified			:	JS_Time_Type_CLASS_INI(JS_Timestamp_CLASS.lastModified),
			lastAccessed			:	JS_Time_Type_CLASS_INI(JS_Timestamp_CLASS.lastAccessed),
			lastCreated				:	JS_Time_Type_CLASS_INI(JS_Timestamp_CLASS.lastCreated)
		};
		JS_Time.MAC_STR				=	JS_Time_MAC_STR;
		if ( JS_Time_Data_Type=="JS_Time_MAC_STR" )
		{
			JS_Time.Get_STR				=	function()
			{
				var JS_Time_Get_STR=("" + 
					"JS_Time.MAC_STR.lastModified.Timestamp	 : "			 + this.MAC_STR.lastModified.Timestamp			 + ";\n" + // + ";\t" + 
					"JS_Time.MAC_STR.lastModified.Date_STR	 : "			 + this.MAC_STR.lastModified.Date_STR			 + ";\n" + // + ";\t" + 
					"JS_Time.MAC_STR.lastModified.Date_For_Reading	 : "	 + this.MAC_STR.lastModified.Date_For_Reading	 + ";\n" + // + ";\n" + 
					"JS_Time.MAC_STR.lastAccessed.Timestamp	 : "			 + this.MAC_STR.lastAccessed.Timestamp			 + ";\n" + // + ";\t" + 
					"JS_Time.MAC_STR.lastAccessed.Date_STR	 : "			 + this.MAC_STR.lastAccessed.Date_STR			 + ";\n" + // + ";\t" + 
					"JS_Time.MAC_STR.lastAccessed.Date_For_Reading	 : "	 + this.MAC_STR.lastAccessed.Date_For_Reading	 + ";\n" + // + ";\n" + 
					"JS_Time.MAC_STR.lastCreated.Timestamp	 : "			 + this.MAC_STR.lastCreated.Timestamp			 + ";\n" + // + ";\t" + 
					"JS_Time.MAC_STR.lastCreated.Date_STR	 : "			 + this.MAC_STR.lastCreated.Date_STR			 + ";\n" + // + ";\t" + 
					"JS_Time.MAC_STR.lastCreated.Date_For_Reading	 : "	 + this.MAC_STR.lastCreated.Date_For_Reading	 + ";\n" + // + ";\n" + 
				"");
				return JS_Time_Get_STR;
			};
		}
		else if ( JS_Time_Data_Type=="JS_Time_STR_MAC" )
		{
			JS_Time_STR_MAC				=
			{
				Timestamp				:
				{
					lastModified		:	JS_Time.MAC_STR.lastModified.Timestamp,
					lastAccessed		:	JS_Time.MAC_STR.lastAccessed.Timestamp,
					lastCreated			:	JS_Time.MAC_STR.lastCreated.Timestamp
				},
				Date_STR				:
				{
					lastModified		:	JS_Time.MAC_STR.lastModified.Date_STR,
					lastAccessed		:	JS_Time.MAC_STR.lastAccessed.Date_STR,
					lastCreated			:	JS_Time.MAC_STR.lastCreated.Date_STR
				},
				Date_For_Reading		:
				{
					lastModified		:	JS_Time.MAC_STR.lastModified.Date_For_Reading,
					lastAccessed		:	JS_Time.MAC_STR.lastAccessed.Date_For_Reading,
					lastCreated			:	JS_Time.MAC_STR.lastCreated.Date_For_Reading
				}
			};
			JS_Time						=	{};
			JS_Time.STR_MAC				=	JS_Time_STR_MAC;
			JS_Time.Get_STR				=	function()
			{
				var JS_Time_Get_STR=("" + 
					"JS_Time.STR_MAC.Timestamp.lastModified	 : "			 + this.STR_MAC.Timestamp.lastModified			 + ";\t" + 
					"JS_Time.STR_MAC.Date_STR.lastModified	 : "			 + this.STR_MAC.Date_STR.lastModified			 + ";\t" + 
					"JS_Time.STR_MAC.Date_For_Reading.lastModified	 : "	 + this.STR_MAC.Date_For_Reading.lastModified	 + ";\r\n" + 
					"JS_Time.STR_MAC.Timestamp.lastAccessed	 : "			 + this.STR_MAC.Timestamp.lastAccessed			 + ";\t" + 
					"JS_Time.STR_MAC.Date_STR.lastAccessed	 : "			 + this.STR_MAC.Date_STR.lastAccessed			 + ";\t" + 
					"JS_Time.STR_MAC.Date_For_Reading.lastAccessed	 : "	 + this.STR_MAC.Date_For_Reading.lastAccessed	 + ";\r\n" + 
					"JS_Time.STR_MAC.Timestamp.lastCreated	 : "			 + this.STR_MAC.Timestamp.lastCreated			 + ";\t" + 
					"JS_Time.STR_MAC.Date_STR.lastCreated	 : "			 + this.STR_MAC.Date_STR.lastCreated			 + ";\t" + 
					"JS_Time.STR_MAC.Date_For_Reading.lastCreated	 : "	 + this.STR_MAC.Date_For_Reading.lastCreated	 + ";\r\n" + 
				"");
				return JS_Time_Get_STR;
			};
		}
		else		{}
	}
	else if ( JS_Time_Data_Type=="JS_Time_M___STR" || JS_Time_Data_Type=="JS_Time_STR_M__" )
	{
		JS_Time						=	{};
		JS_Time_M___STR				=	{lastModified:JS_Time_Type_CLASS_INI(JS_Timestamp_CLASS.lastModified)};
		JS_Time.M___STR				=	JS_Time_M___STR;
		if ( JS_Time_Data_Type=="JS_Time_M___STR" )
		{
			JS_Time.Get_STR				=	function()
			{
				var JS_Time_Get_STR=("" + 
					"JS_Time.M___STR.lastModified.Timestamp	 : "			 + this.M___STR.lastModified.Timestamp			 + ";\n" + // + ";\t" + 
					"JS_Time.M___STR.lastModified.Date_STR	 : "			 + this.M___STR.lastModified.Date_STR			 + ";\n" + // + ";\t" + 
					"JS_Time.M___STR.lastModified.Date_For_Reading	 : "	 + this.M___STR.lastModified.Date_For_Reading	 + ";\n" + // + ";\n" + 
				"");
				return JS_Time_Get_STR;
			};
		}
		else if ( JS_Time_Data_Type=="JS_Time_STR_M__" )
		{
			JS_Time_STR_M__				=
			{
				Timestamp				:	{lastModified:JS_Time.M___STR.lastModified.Timestamp},
				Date_STR				:	{lastModified:JS_Time.M___STR.lastModified.Date_STR},
				Date_For_Reading		:	{lastModified:JS_Time.M___STR.lastModified.Date_For_Reading}
			};
			JS_Time						=	{};
			JS_Time.STR_M__				=	JS_Time_STR_M__;
			JS_Time.Get_STR				=	function()
			{
				var JS_Time_Get_STR=("" + 
					"JS_Time.STR_M__.Timestamp.lastModified	 : "			 + this.STR_M__.Timestamp.lastModified			 + ";\t" + 
					"JS_Time.STR_M__.Date_STR.lastModified	 : "			 + this.STR_M__.Date_STR.lastModified			 + ";\t" + 
					"JS_Time.STR_M__.Date_For_Reading.lastModified	 : "	 + this.STR_M__.Date_For_Reading.lastModified	 + ";\r\n" + 
				"");
				return JS_Time_Get_STR;
			};
		}
		else		{}
	}
	else if ( JS_Time_Data_Type=="JS_Time_T_STR" || JS_Time_Data_Type=="JS_Time_STR_T" )
	{
		JS_Time						=	{};
		JS_Time_T_STR				=	{Time:JS_Time_Type_CLASS_INI(JS_Timestamp_CLASS.Time)};
		JS_Time.T_STR				=	JS_Time_T_STR;
		if ( JS_Time_Data_Type=="JS_Time_T_STR" )
		{
			JS_Time.Get_STR				=	function()
			{
				var JS_Time_Get_STR=("" + 
					"JS_Time.T_STR.Time.Timestamp	 : "			 + this.T_STR.Time.Timestamp			 + ";\n" + // + ";\t" + 
					"JS_Time.T_STR.Time.Date_STR	 : "			 + this.T_STR.Time.Date_STR				 + ";\n" + // + ";\t" + 
					"JS_Time.T_STR.Time.Date_For_Reading	 : "	 + this.T_STR.Time.Date_For_Reading		 + ";\n" + // + ";\n" + 
				"");
				return JS_Time_Get_STR;
			};
		}
		else if ( JS_Time_Data_Type=="JS_Time_STR_T" )
		{
			JS_Time_STR_T				=
			{
				Timestamp				:	{Time:JS_Time.T_STR.Time.Timestamp},
				Date_STR				:	{Time:JS_Time.T_STR.Time.Date_STR},
				Date_For_Reading		:	{Time:JS_Time.T_STR.Time.Date_For_Reading}
			};
			JS_Time						=	{};
			JS_Time.STR_T				=	JS_Time_STR_T;
			JS_Time.Get_STR				=	function()
			{
				var JS_Time_Get_STR=("" + 
					"JS_Time.STR_T.Timestamp.Time	 : "			 + this.STR_T.Timestamp.Time			 + ";\t" + 
					"JS_Time.STR_T.Date_STR.Time	 : "			 + this.STR_T.Date_STR.Time				 + ";\t" + 
					"JS_Time.STR_T.Date_For_Reading.Time	 : "	 + this.STR_T.Date_For_Reading.Time		 + ";\r\n" + 
				"");
				return JS_Time_Get_STR;
			};
		}
		else		{}
	}
	else if ( JS_Time_Data_Type=="JS_Time_____STR" || JS_Time_Data_Type=="JS_Time_STR____" )
	{
		JS_Time						=	{};
		if ( JS_Time_Data_Type=="JS_Time_____STR" )		{JS_Time.____STR={Time:JS_Time_Type_CLASS_INI(JS_Timestamp_CLASS.Time)};}
		else if ( JS_Time_Data_Type=="JS_Time_STR____" )	{JS_Time.STR____={Time:JS_Time_Type_CLASS_INI(JS_Timestamp_CLASS.Time)};}
		else		{}
		JS_Time.Get_STR				=	"";
	}
	else
	{
		JS_Time						=	{};
		JS_Time.Get_STR				=	"";
	}
	JS_Time.Data_Type=JS_Time_Data_Type;

	//console.log("" + 
	//			"JS_Time.MAC_STR.lastModified.Timestamp	 : "			 + JS_Time.MAC_STR.lastModified.Timestamp			 + ";\t" + 
	//			"JS_Time.MAC_STR.lastModified.Date_STR	 : "			 + JS_Time.MAC_STR.lastModified.Date_STR			 + ";\t" + 
	//			"JS_Time.MAC_STR.lastModified.Date_For_Reading	 : "	 + JS_Time.MAC_STR.lastModified.Date_For_Reading	 + ";\r\n" + 
	//			"JS_Time.MAC_STR.lastAccessed.Timestamp	 : "			 + JS_Time.MAC_STR.lastAccessed.Timestamp			 + ";\t" + 
	//			"JS_Time.MAC_STR.lastAccessed.Date_STR	 : "			 + JS_Time.MAC_STR.lastAccessed.Date_STR			 + ";\t" + 
	//			"JS_Time.MAC_STR.lastAccessed.Date_For_Reading	 : "	 + JS_Time.MAC_STR.lastAccessed.Date_For_Reading	 + ";\r\n" + 
	//			"JS_Time.MAC_STR.lastCreated.Timestamp	 : "			 + JS_Time.MAC_STR.lastCreated.Timestamp			 + ";\t" + 
	//			"JS_Time.MAC_STR.lastCreated.Date_STR	 : "			 + JS_Time.MAC_STR.lastCreated.Date_STR				 + ";\t" + 
	//			"JS_Time.MAC_STR.lastCreated.Date_For_Reading	 : "	 + JS_Time.MAC_STR.lastCreated.Date_For_Reading		 + ";\r\n" + 
	//			"");

	//console.log("" + 
	//			"JS_Time.STR_MAC.Timestamp.lastModified	 : "			 + JS_Time.STR_MAC.Timestamp.lastModified			 + ";\t" + 
	//			"JS_Time.STR_MAC.Date_STR.lastModified	 : "			 + JS_Time.STR_MAC.Date_STR.lastModified			 + ";\t" + 
	//			"JS_Time.STR_MAC.Date_For_Reading.lastModified	 : "	 + JS_Time.STR_MAC.Date_For_Reading.lastModified	 + ";\r\n" + 
	//			"JS_Time.STR_MAC.Timestamp.lastAccessed	 : "			 + JS_Time.STR_MAC.Timestamp.lastAccessed			 + ";\t" + 
	//			"JS_Time.STR_MAC.Date_STR.lastAccessed	 : "			 + JS_Time.STR_MAC.Date_STR.lastAccessed			 + ";\t" + 
	//			"JS_Time.STR_MAC.Date_For_Reading.lastAccessed	 : "	 + JS_Time.STR_MAC.Date_For_Reading.lastAccessed	 + ";\r\n" + 
	//			"JS_Time.STR_MAC.Timestamp.lastCreated	 : "			 + JS_Time.STR_MAC.Timestamp.lastCreated			 + ";\t" + 
	//			"JS_Time.STR_MAC.Date_STR.lastCreated	 : "			 + JS_Time.STR_MAC.Date_STR.lastCreated				 + ";\t" + 
	//			"JS_Time.STR_MAC.Date_For_Reading.lastCreated	 : "	 + JS_Time.STR_MAC.Date_For_Reading.lastCreated		 + ";\r\n" + 
	//			"");

	//console.log("" + 
	//			"JS_Time.M___STR.lastModified.Timestamp	 : "			 + JS_Time.M___STR.lastModified.Timestamp			 + ";\t" + 
	//			"JS_Time.M___STR.lastModified.Date_STR	 : "			 + JS_Time.M___STR.lastModified.Date_STR			 + ";\t" + 
	//			"JS_Time.M___STR.lastModified.Date_For_Reading	 : "	 + JS_Time.M___STR.lastModified.Date_For_Reading	 + ";\r\n" + 
	//			"");

	//console.log("" + 
	//			"JS_Time.STR_M__.Timestamp.lastModified	 : "			 + JS_Time.STR_M__.Timestamp.lastModified			 + ";\t" + 
	//			"JS_Time.STR_M__.Date_STR.lastModified	 : "			 + JS_Time.STR_M__.Date_STR.lastModified			 + ";\t" + 
	//			"JS_Time.STR_M__.Date_For_Reading.lastModified	 : "	 + JS_Time.STR_M__.Date_For_Reading.lastModified	 + ";\r\n" + 
	//			"");

	//console.log("" + 
	//			"JS_Time.T_STR.Time.Timestamp	 : "			 + JS_Time.T_STR.Time.Timestamp			 + ";\t" + 
	//			"JS_Time.T_STR.Time.Date_STR	 : "			 + JS_Time.T_STR.Time.Date_STR			 + ";\t" + 
	//			"JS_Time.T_STR.Time.Date_For_Reading	 : "	 + JS_Time.T_STR.Time.Date_For_Reading	 + ";\r\n" + 
	//			"");

	//console.log("" + 
	//			"JS_Time.STR_T.Timestamp.Time	 : "			 + JS_Time.STR_T.Timestamp.Time			 + ";\t" + 
	//			"JS_Time.STR_T.Date_STR.Time	 : "			 + JS_Time.STR_T.Date_STR.Time			 + ";\t" + 
	//			"JS_Time.STR_T.Date_For_Reading.Time	 : "	 + JS_Time.STR_T.Date_For_Reading.Time	 + ";\r\n" + 
	//			"");

	//console.log("" + 
	//			"JS_Time.Data_Type	 : "			 + JS_Time.Data_Type			 + ";\r\n" + 
	//			"");

	//JS_Timestamp_CLASS.lastModified;
	//JS_Timestamp_CLASS.lastAccessed;
	//JS_Timestamp_CLASS.lastCreated;

	//JS_Timestamp_2_Date_STR("JS_Time_MAC_STR",JS_Timestamp_CLASS).MAC_STR.lastModified;
	//JS_Timestamp_2_Date_STR("JS_Time_MAC_STR",JS_Timestamp_CLASS).MAC_STR.lastAccessed;
	//JS_Timestamp_2_Date_STR("JS_Time_MAC_STR",JS_Timestamp_CLASS).MAC_STR.lastCreated;

	//JS_Timestamp_2_Date_STR("JS_Time_STR_MAC",JS_Timestamp_CLASS).STR_MAC.lastModified.Timestamp;
	//JS_Timestamp_2_Date_STR("JS_Time_STR_MAC",JS_Timestamp_CLASS).STR_MAC.lastModified.Date_STR;
	//JS_Timestamp_2_Date_STR("JS_Time_STR_MAC",JS_Timestamp_CLASS).STR_MAC.lastModified.Date_For_Reading;
	//JS_Timestamp_2_Date_STR("JS_Time_STR_MAC",JS_Timestamp_CLASS).STR_MAC.lastAccessed.Timestamp;
	//JS_Timestamp_2_Date_STR("JS_Time_STR_MAC",JS_Timestamp_CLASS).STR_MAC.lastAccessed.Date_STR;
	//JS_Timestamp_2_Date_STR("JS_Time_STR_MAC",JS_Timestamp_CLASS).STR_MAC.lastAccessed.Date_For_Reading;
	//JS_Timestamp_2_Date_STR("JS_Time_STR_MAC",JS_Timestamp_CLASS).STR_MAC.lastCreated.Timestamp;
	//JS_Timestamp_2_Date_STR("JS_Time_STR_MAC",JS_Timestamp_CLASS).STR_MAC.lastCreated.Date_STR;
	//JS_Timestamp_2_Date_STR("JS_Time_STR_MAC",JS_Timestamp_CLASS).STR_MAC.lastCreated.Date_For_Reading;

	//JS_Time.MAC_STR.lastModified.Timestamp;
	//JS_Time.MAC_STR.lastModified.Date_STR;
	//JS_Time.MAC_STR.lastModified.Date_For_Reading;
	//JS_Time.MAC_STR.lastAccessed.Timestamp;
	//JS_Time.MAC_STR.lastAccessed.Date_STR;
	//JS_Time.MAC_STR.lastAccessed.Date_For_Reading;
	//JS_Time.MAC_STR.lastCreated.Timestamp;
	//JS_Time.MAC_STR.lastCreated.Date_STR;
	//JS_Time.MAC_STR.lastCreated.Date_For_Reading;

	//JS_Time.Data_Type;

	return JS_Time;
}
//JS_Timestamp_2_Date_STR("JS_Time_STR_MAC",{lastModified:null,lastAccessed:null,lastCreated:null});
//JS_Timestamp_2_Date_STR("JS_Time_STR_MAC",{lastModified:0,lastAccessed:1000000,lastCreated:2000000});
//JS_Timestamp_2_Date_STR("JS_Time_STR_MAC",{lastModified:Date.now(),lastAccessed:Date.now(),lastCreated:Date.now()});
//==============================DIVISION==============================
function TIME_NOW(sep)//separator：分隔符號。
{
	var today=new Date();
	time="";
	time+=today.getFullYear() + sep;
	time+=("0"+parseInt(today.getMonth()+1,10)).slice(-2) + sep;
	time+=("0"+today.getDate()).slice(-2) + sep;
	time+=today.getDay() + sep;//day of the week
	time+=("0"+today.getHours()).slice(-2) + ':';
	time+=("0"+today.getMinutes()).slice(-2) + ':';
	time+=("0"+today.getSeconds()).slice(-2) + '.';
	time+=("0"+today.getMilliseconds()).slice(-3);
	return time;
}

function TIME_MS_To_DHMSU(MilliSeconds)
{
	var u=MilliSeconds % 1000;
	var Seconds=(MilliSeconds - u)/1000;

	var s=Seconds % 60;
	var Minutes=(Seconds - s)/60;

	var m=Minutes % 60;
	var Hours=(Minutes - m)/60;

	var h=Hours % 24;
	var Days=(Hours - h)/24;

	var d=Days % 365;
	var Years=(Days - d)/365;

	var str00=Years.toString() + "*365_+_" + d.toString() + 
				"_" + ("00" + h.toString()).slice(-2) + 
				":" + ("00" + m.toString()).slice(-2) + 
				":" + ("00" + s.toString()).slice(-2) + 
				"." + ("00" + u.toString()).slice(-3) + 
				"";
	return str00;
}
//console.log(TIME_MS_To_DHMSU(1000*60*60*24*365*3 + 123456789));
//==============================DIVISION==============================
//==============================傳輸時間間隔==============================
var TTIN=1000;//var transfer_time_interval_normal=1000;
var TTIS=100;//var transfer_time_interval_small=100;
var TTIVS=10;//var transfer_time_interval_very_small=10;
var TTIMS=1;//var transfer_time_interval_mini_small=1;
var TTI_IN_USE=TTIS;//var transfer_time_interval_in_use=100;
//默認100ms，規定範圍100ms-300ms左右，反應時間上應該是可以接受的。
//測試時可用1s的時間。
var TTI_1000=1000;//var transfer_time_interval_normal=1000;
var TTI_100=100;//var transfer_time_interval_small=100;
var TTI_10=10;//var transfer_time_interval_very_small=10;
var TTI_1=1;//var transfer_time_interval_mini_small=1;
//==============================傳輸時間間隔==============================
//==============================DIVISION==============================
//========================================JS_TIME_Function========================================
//========================================JS_CLASS_Function========================================
//	JS		JSON.stringify()	JSON.parse()
//	PHP		json_encode()		json_decode()

//CLS_RF;Class_Refresh;
function CLS_RF(cls00)
{
	var cls01;
	cls01=JSON.parse(JSON.stringify(cls00));
	return cls01;
}
//========================================JS_CLASS_Function========================================
String.prototype.repeat = function( num )
{
    return new Array( num + 1 ).join( this );
}
//==============================For IE6 IE7 IE8==============================
function getElementsByClassName_For_IE_INI(ele)
{
	if(!ele.getElementsByClassName)
	{
		document.getElementsByClassName = function (className)
		{
			return document.querySelectorAll('.' + className);
		}

		/*
		ele.getElementsByClassName = function (className)
		{
			return ele.querySelectorAll('.' + className);
		}
		*/
	}
}
getElementsByClassName_For_IE_INI(document);
//alert(document.getElementsByClassName);
//==============================For IE6 IE7 IE8==============================
//==================================================控件定位函數==================================================
//========================================getElementsByAttributeName========================================
function getElementsByClassName(node,classname)
{
	var a = [];
	var re = new RegExp('(^| )'+classname+'( |$)');
	//alert(node);
	var els = node.getElementsByTagName("*");
	for(var i=0,j=els.length; i<j; i++)
	{
		if ( re.test(els[i].className) )
		{
			a.push(els[i]);
		}
	}
	return a;
}

//tabs = getElementsByClassName(document.body,'tab');

function getElementsByAttributeName(node,attribute,attributename)
{
	var a = [];
	var re = new RegExp('(^| )'+attributename+'( |$)');
	var els = node.getElementsByTagName("*");
	for(var i=0,j=els.length; i<j; i++)
	{
		if ( re.test(els[i].getAttribute(attribute)) )
		{
			a.push(els[i]);
		}
	}
	return a;
}
//========================================getElementsByAttributeName========================================
/*
try
{
	//IE7-8不支持，IE9-11支持：
	alert(Node + "\n" + Node.prototype + "\n" + Array.prototype.slice.call);
}
catch (err)
{
	alert(err.message);
}
*/
if ( Browser_Type!="MSIE" || Browser_Type=="MSIE" && parseInt(Browser_Ver.replace(/\..*/g,""),10)>=9 )
{
	//========================================Node.prototype.getElementsByAttributeName========================================
	/*
	//Ex.:<input class="set_value" style="height:20px;" value="set_value">
	ele00=document.getElementsByAttributeName("class","set_value")[0];
	ele01=document.getElementsByAttributeName("style","height:20px;")[0];
	ele02=document.getElementsByAttributeName("value","set_value")[0];
	*/
	Node.prototype.getElementsByAttributeName = function(attribute,attributename)
	{
		var a = [];
		var re = new RegExp('(^| )'+attributename+'( |$)');
		var els = this.getElementsByTagName("*");
		for(var i=0,j=els.length; i<j; i++)
		{
			if ( re.test(els[i].getAttribute(attribute)) )
			{
				a.push(els[i]);
			}
		}
		return a;
	}
	//========================================Node.prototype.getElementsByAttributeName========================================
	//========================================getElementIndex========================================
	function getElementIndex(ele,ele_list)
	{
		var nodeList = Array.prototype.slice.call(ele_list);
		return nodeList.indexOf(ele);
	}
	//========================================getElementIndex========================================
	//========================================Node.prototype.getElementIndex========================================
	Node.prototype.getElementIndex = function(ele_list)
	{
		var nodeList = Array.prototype.slice.call(ele_list);
		return nodeList.indexOf(this);
	}
	//========================================Node.prototype.getElementIndex========================================

	/*為了避免混亂此內不定義。
	//========================================getChildNodeIndex========================================
	function getChildNodeIndex(ele_list,ele)
	{
		var nodeList = Array.prototype.slice.call(ele_list);
		return nodeList.indexOf(ele);
	}
	//========================================getChildNodeIndex========================================
	//========================================NodeList.prototype.getChildNodeIndex========================================
	NodeList.prototype.getChildNodeIndex = function(ele)
	{
		var nodeList = Array.prototype.slice.call(this);
		return nodeList.indexOf(ele);
	}
	//========================================NodeList.prototype.getChildNodeIndex========================================
	*/

	//alert("prototype defined over !");
}
//==================================================控件定位函數==================================================
//==================================================Object_Class_Array_String_Number_Function_Clone==================================================
Function.prototype.clone = function()
{
	var that = this;
	var temp = function temporary() { return that.apply(this, arguments); };
	for ( var key in this )
	{
		if ( this.hasOwnProperty(key) )
		{
			temp[key] = this[key];
		}
	}
	return temp;
};

function Object_Clone_SD(Object_Sample)
{
	var Object_Cloned;
	var type=typeof(Object_Sample)
	if ( type=="number" )
	{
		Object_Cloned=Object_Sample;
	}
	else if ( type=="string" )
	{
		Object_Cloned=Object_Sample;
	}
	else if ( type=="object" )
	{
		if ( Array.isArray(Object_Sample)==true && (Object_Sample instanceof Array)==true && 
				JSON.stringify(Object_Sample).substring(0,1)=="[" && 
				1 )
		{
			Object_Cloned=Object.assign([],Object_Sample);
		}
		else if ( Array.isArray(Object_Sample)==false && (Object_Sample instanceof Array)==false && 
				JSON.stringify(Object_Sample).substring(0,1)=="{" && 
				1 )
		{
			Object_Cloned=Object.assign({},Object_Sample);
		}
		else
		{
			Object_Cloned=Object_Sample;
		}
	}
	else if ( type=="function" )
	{
		//Object_Cloned=Object_Sample;
		Object_Cloned=Object_Sample.clone();
	}
	else
	{
	}

	return Object_Cloned;
}
//==================================================Object_Class_Array_String_Number_Function_Clone==================================================
