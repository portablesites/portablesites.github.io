//================================================Parameter_STR_INI========================================
function Parameter_Base_STR_ijk_05()
{
	var str00;
	str00="";
	str00+="var i,j,k,m,n,p,q,r,s,t;" + "\n";
	str00+="var num00,num01,num02,num03,num04;" + "\n";
	str00+="var ele00,ele01,ele02,ele03,ele04;" + "\n";
	str00+="var elel00,elel01,elel02,elel03,elel04;" + "\n";
	str00+="var str00,str01,str02,str03,str04;" + "\n";
	str00+="var arr00,arr01,arr02,arr03,arr04;" + "\n";
	str00+="var cls00,cls01,cls02,cls03,cls04;" + "\n";
	str00+="var fun00,fun01,fun02,fun03,fun04;" + "\n";
	return str00;
}

function Parameter_Base_STR_ijk_10()
{
	var str00;
	str00="";
	str00+="var i,j,k,m,n,p,q,r,s,t;" + "\n";
	str00+="var num00,num01,num02,num03,num04,num05,num06,num07,num08,num09;" + "\n";
	str00+="var ele00,ele01,ele02,ele03,ele04,ele05,ele06,ele07,ele08,ele09;" + "\n";
	str00+="var elel00,elel01,elel02,elel03,elel04,elel05,elel06,elel07,elel08,elel09;" + "\n";
	str00+="var str00,str01,str02,str03,str04,str05,str06,str07,str08,str09;" + "\n";
	str00+="var arr00,arr01,arr02,arr03,arr04,arr05,arr06,arr07,arr08,arr09;" + "\n";
	str00+="var cls00,cls01,cls02,cls03,cls04,cls05,cls06,cls07,cls08,cls09;" + "\n";
	str00+="var arr00,arr01,arr02,arr03,arr04,arr05,arr06,arr07,arr08,arr09;" + "\n";
	return str00;
}

function Parameter_Base_STR_ijk_20()
{
	var str00;
	str00="";
	str00+="var i,j,k,m,n,p,q,r,s,t;" + "\n";
	str00+="var num00,num01,num02,num03,num04,num05,num06,num07,num08,num09,num10,num11,num12,num13,num14,num15,num16,num17,num18,num19;" + "\n";
	str00+="var ele00,ele01,ele02,ele03,ele04,ele05,ele06,ele07,ele08,ele09,ele10,ele11,ele12,ele13,ele14,ele15,ele16,ele17,ele18,ele19;" + "\n";
	str00+="var elel00,elel01,elel02,elel03,elel04,elel05,elel06,elel07,elel08,elel09," + 
			"elel10,elel11,elel12,elel13,elel14,elel15,elel16,elel17,elel18,elel19;" + "\n";
	str00+="var str00,str01,str02,str03,str04,str05,str06,str07,str08,str09,str10,str11,str12,str13,str14,str15,str16,str17,str18,str19;" + "\n";
	str00+="var arr00,arr01,arr02,arr03,arr04,arr05,arr06,arr07,arr08,arr09,arr10,arr11,arr12,arr13,arr14,arr15,arr16,arr17,arr18,arr19;" + "\n";
	str00+="var cls00,cls01,cls02,cls03,cls04,cls05,cls06,cls07,cls08,cls09,cls10,cls11,cls12,cls13,cls14,cls15,cls16,cls17,cls18,cls19;" + "\n";
	str00+="var fun00,fun01,fun02,fun03,fun04,fun05,fun06,fun07,fun08,fun09,fun10,fun11,fun12,fun13,fun14,fun15,fun16,fun17,fun18,fun19;" + "\n";
	return str00;
}

function Parameter_Base_STR_ijk_XX(p_num)
{
	var i,j,str00,arr00;
	str00="";
	str00+="var i,j,k,m,n,p,q,r,s,t;" + "\n";
	arr00=["num","ele","elel","str","arr","cls","fun","formData","file"];
	//arr00=["num","ele","elel",,"str","arr","torf","flag"];

	for (i=0;i<arr00.length;i++)
	{
		str00+="var ";
		for (j=0;j<p_num;j++)
		{
			str00+=arr00[i] + ("00" + j.toString()).slice(-2);
			if ( j<(p_num - 1) )			{str00+=",";}
			else if ( j==(p_num - 1) )		{str00+=";" + "\n";}
			else							{}
		}
	}

	return str00;
}
//alert(Parameter_Base_STR_ijk_XX(5));
//if ( Parameter_Base_STR_ijk_XX(20)==Parameter_Base_STR_ijk_20() )		{alert("OK!");}

function Parameter_Base_STR_ijk_XX_Ext(str_end,p_num)
{
	var i,j,str00,arr00,id_len;
	str00="";
	arr00=["num","ele","elel","str","arr","cls","fun","formData","file"];
	id_len=Math.ceil(Math.log10(p_num));//( Math.log10(p_num)==Math.log(p_num)/Math.log(10) )
	if ( id_len<2 )		{id_len=2;}

	for (i=0;i<arr00.length;i++)
	{
		str00+="var ";
		for (j=0;j<p_num;j++)
		{
			str00+=arr00[i] + str_end + ("0".repeat(id_len) + j.toString()).slice(-id_len);
			if ( j<(p_num - 1) )			{str00+=",";}
			else if ( j==(p_num - 1) )		{str00+=";" + "\n";}
			else							{}
		}
	}

	return str00;
}

function Parameter_Base_STR_ijk_XX_Ext_01(ini_type,cls_sd)
{
	var i,j,str00,arr00;
	var p_bid,p_eid,id_len,str_sd,str_end,name_arr;
	p_bid		=	cls_sd.p_bid;
	p_eid		=	cls_sd.p_eid;
	id_len		=	cls_sd.id_len;
	str_sd		=	cls_sd.str_sd;
	str_end		=	cls_sd.str_end;

	if ( ini_type==0 || ini_type=="ORI" )
	{
		arr00=["num","ele","elel","str","arr","cls","fun","formData","file"];
	}
	else if ( ini_type==1 || ini_type=="SD" )
	{
		name_arr	=	cls_sd.name_arr;
		arr00=name_arr;
	}
	else
	{
		arr00=[];
	}

	str00="";

	for (i=0;i<arr00.length;i++)
	{
		str00+="var ";
		for (j=p_bid;j<=p_eid;j++)
		{
			str00+=arr00[i] + str_end + ("0".repeat(id_len) + j.toString()).slice(-id_len);
			if ( j<p_eid )			{str00+=",";}
			else if ( j==p_eid )	{str00+=";" + "\n";}
			else					{}
		}
	}

	return str00;
}
//Parameter_Base_STR_ijk_XX_Ext_01(0,{p_bid:100,p_eid:150,id_len:3,str_sd:"",str_end:"",name_arr:["flag"]});
//eval(Parameter_Base_STR_ijk_XX_Ext_01(0,{p_bid:100,p_eid:150,id_len:3,str_sd:"",str_end:"",name_arr:["flag"]}));
//================================================Parameter_STR_INI========================================
//================================================Parameter_STR_Release========================================
function Parameter_Base_STR_ijk_Release_05()
{
	var str00;
	str00="";
	str00+="i=null,j=null,k=null,m=null,n=null,p=null,q=null,r=null,s=null,t=null;" + "\n";
	str00+="num00=null,num01=null,num02=null,num03=null,num04=null;" + "\n";
	str00+="ele00=null,ele01=null,ele02=null,ele03=null,ele04=null;" + "\n";
	str00+="elel00=null,elel01=null,elel02=null,elel03=null,elel04=null;" + "\n";
	str00+="str00=null,str01=null,str02=null,str03=null,str04=null;" + "\n";
	str00+="arr00=null,arr01=null,arr02=null,arr03=null,arr04=null;" + "\n";
	str00+="cls00=null,cls01=null,cls02=null,cls03=null,cls04=null;" + "\n";
	str00+="fun00=null,fun01=null,fun02=null,fun03=null,fun04=null;" + "\n";
	return str00;
}

function Parameter_Base_STR_ijk_Release_10()
{
	var str00;
	str00="";
	str00+="i=null,j=null,k=null,m=null,n=null,p=null,q=null,r=null,s=null,t=null;" + "\n";
	str00+="num00=null,num01=null,num02=null,num03=null,num04=null,num05=null,num06=null,num07=null,num08=null,num09=null;" + "\n";
	str00+="ele00=null,ele01=null,ele02=null,ele03=null,ele04=null,ele05=null,ele06=null,ele07=null,ele08=null,ele09=null;" + "\n";
	str00+="elel00=null,elel01=null,elel02=null,elel03=null,elel04=null,elel05=null,elel06=null,elel07=null,elel08=null,elel09=null;" + "\n";
	str00+="str00=null,str01=null,str02=null,str03=null,str04=null,str05=null,str06=null,str07=null,str08=null,str09=null;" + "\n";
	str00+="arr00=null,arr01=null,arr02=null,arr03=null,arr04=null,arr05=null,arr06=null,arr07=null,arr08=null,arr09=null;" + "\n";
	str00+="cls00=null,cls01=null,cls02=null,cls03=null,cls04=null,cls05=null,cls06=null,cls07=null,cls08=null,cls09=null;" + "\n";
	str00+="fun00=null,fun01=null,fun02=null,fun03=null,fun04=null,fun05=null,fun06=null,fun07=null,fun08=null,fun09=null;" + "\n";
	return str00;
}

function Parameter_Base_STR_ijk_Release_20()
{
	var str00;
	str00="";
	str00+="i=null,j=null,k=null,m=null,n=null,p=null,q=null,r=null,s=null,t=null;" + "\n";
	str00+="num00=null,num01=null,num02=null,num03=null,num04=null,num05=null,num06=null,num07=null,num08=null,num09=null," + 
			"num10=null,num11=null,num12=null,num13=null,num14=null,num15=null,num16=null,num17=null,num18=null,num19=null;" + "\n";
	str00+="ele00=null,ele01=null,ele02=null,ele03=null,ele04=null,ele05=null,ele06=null,ele07=null,ele08=null,ele09=null," + 
			"ele10=null,ele11=null,ele12=null,ele13=null,ele14=null,ele15=null,ele16=null,ele17=null,ele18=null,ele19=null;" + "\n";
	str00+="elel00=null,elel01=null,elel02=null,elel03=null,elel04=null,elel05=null,elel06=null,elel07=null,elel08=null,elel09=null," + 
			"elel10=null,elel11=null,elel12=null,elel13=null,elel14=null,elel15=null,elel16=null,elel17=null,elel18=null,elel19=null;" + "\n";
	str00+="str00=null,str01=null,str02=null,str03=null,str04=null,str05=null,str06=null,str07=null,str08=null,str09=null," + 
			"str10=null,str11=null,str12=null,str13=null,str14=null,str15=null,str16=null,str17=null,str18=null,str19=null;" + "\n";
	str00+="arr00=null,arr01=null,arr02=null,arr03=null,arr04=null,arr05=null,arr06=null,arr07=null,arr08=null,arr09=null," + 
			"arr10=null,arr11=null,arr12=null,arr13=null,arr14=null,arr15=null,arr16=null,arr17=null,arr18=null,arr19=null;" + "\n";
	str00+="cls00=null,cls01=null,cls02=null,cls03=null,cls04=null,cls05=null,cls06=null,cls07=null,cls08=null,cls09=null," + 
			"cls10=null,cls11=null,cls12=null,cls13=null,cls14=null,cls15=null,cls16=null,cls17=null,cls18=null,cls19=null;" + "\n";
	str00+="fun00=null,fun01=null,fun02=null,fun03=null,fun04=null,fun05=null,fun06=null,fun07=null,fun08=null,fun09=null," + 
			"fun10=null,fun11=null,fun12=null,fun13=null,fun14=null,fun15=null,fun16=null,fun17=null,fun18=null,fun19=null;" + "\n";
	return str00;
}

function Parameter_Base_STR_ijk_Release_XX(p_num)
{
	var i,j,str00,arr00;
	str00="";
	str00+="i=null,j=null,k=null,m=null,n=null,p=null,q=null,r=null,s=null,t=null;" + "\n";
	arr00=["num","ele","elel","str","arr","cls","fun","formData","file"];
	//arr00=["num","ele","elel","str","arr","torf","flag"];

	for (i=0;i<arr00.length;i++)
	{
		for (j=0;j<p_num;j++)
		{
			str00+=arr00[i] + ("00" + j.toString()).slice(-2) + "=null";
			if ( j<(p_num - 1) )			{str00+=",";}
			else if ( j==(p_num - 1) )		{str00+=";" + "\n";}
			else							{}
		}
	}

	return str00;
}
//alert(Parameter_Base_STR_ijk_Release_XX(5));
//if ( Parameter_Base_STR_ijk_Release_XX(20)==Parameter_Base_STR_ijk_Release_20() )		{alert("OK!");}
//================================================Parameter_STR_Release========================================
