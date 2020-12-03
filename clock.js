function timing()
{
	setInterval(time,1000)

function time() 
{ 
	var tym= new Date();
	var hours=tym.getHours();
	var min= tym.getMinutes();
	var sec = tym.getSeconds();
	var hrdeg=hours*30 +(min/2);
	var mindeg= min*6;
	var secdeg= sec*6;
	document.getElementById("hr").style.transform="translateX(-50%) rotate("+hrdeg+"deg)";
	document.getElementById("m").style.transform="translateX(-50%) rotate("+mindeg+"deg)";
	document.getElementById("s").style.transform="translateX(-50%) rotate("+secdeg+"deg)";


	var t;
	if (hours<10&&min<10&&sec<10)
	{
		t="0"+hours +":0"+min+":0"+sec;
	 document.getElementById("displayt").innerHTML=t;	
	}
	else if(sec<10&&min<10)
	{
		t=hours +":0"+min+":0"+sec;
	 document.getElementById("displayt").innerHTML=t;	
	}
	else if (hours<10&&sec<10)
	{
		t="0"+hours +":"+min+":0"+sec;
	 document.getElementById("displayt").innerHTML=t;	
	}
	else if (hours<10&&min<10)
	{
		t="0"+hours +":0"+min+":"+sec;
	 document.getElementById("displayt").innerHTML=t;	
	}
	

	else if(min<10)
	{ 
		t=hours +":0"+min+":"+sec;
	 document.getElementById("displayt").innerHTML=t;	
	}
	else if (sec<10) 
	{
		t=hours +":"+min+":0"+sec;
	 document.getElementById("displayt").innerHTML=t;	
	}
	else if(hours<10)
	{
		t="0"+hours +":"+min+":"+sec;
	 document.getElementById("displayt").innerHTML=t;	
	
	}

    else
    {
	document.getElementById("displayt").innerHTML=t;
    }

}

time();
}

