function XMLToString(oXML)
{
	if (window.DOMParser)//code for Chrome, Safari, Firefox, Opera, etc.
	{
		return (new XMLSerializer()).serializeToString(oXML);
	}
	else if (window.ActiveXObject)//code for IE
	{
		var oString = oXML.xml;
		return oString;
	}
	else
	{
	}
}

function StringToXML(oString)
{
	if (window.DOMParser)//code for Chrome, Safari, Firefox, Opera, etc.
	{
		return (new DOMParser()).parseFromString(oString, "text/xml");
	}
	else if (window.ActiveXObject)//code for IE
	{
		var oXML = new ActiveXObject("Microsoft.XMLDOM");
		oXML.loadXML(oString);
		return oXML;
	}
	else
	{
	}
}

function FileToXML(oFile)
{
	if (window.XMLHttpRequest)//code for IE7+, Firefox, Chrome, Opera, Safari
	{
		xmlhttp=new XMLHttpRequest();
	}
	else// code for IE6, IE5
	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.open("GET",oFile,false);
	xmlhttp.send();
	var xmlDoc=xmlhttp.responseXML; 
	return xmlDoc;
}

function ReadTextFile(oFile)
{
	if (window.XMLHttpRequest)//code for IE7+, Firefox, Chrome, Opera, Safari
	{
		xmlhttp=new XMLHttpRequest();
	}
	else// code for IE6, IE5
	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.open("GET",oFile,false);
	xmlhttp.send();
	var TextDoc=xmlhttp.responseText; 
	return TextDoc;
}
