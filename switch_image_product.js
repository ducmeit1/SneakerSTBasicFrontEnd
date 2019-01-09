// JavaScript Document
function switch_image_product(id1, id2)
{
	var main_pic=document.getElementById(id1);
	var switch_pic=document.getElementById(id2);
	main_pic.src=switch_pic.src;
}
var i=1;
function next_image1(linkanh, numbig)
{
	var linkanh=String(linkanh);
	var numbig=String(numbig);
	if (i < numbig)
	{
		i++;
		document.images['main'].src= linkanh+ + i + '.jpg';
	}
	else
	{
		i=1;
		document.images['main'].src= linkanh+ + i + '.jpg';
	}
	
}

function preview_image1(linkanh, numbig)
{
	var linkanh=String(linkanh);
	var numbig=String(numbig);
	if (i <= 1 )
	{
		i=numbig;
		document.images['main'].src= linkanh+ + i + '.jpg';
	}
	else
	{
		i--;
		document.images['main'].src= linkanh+ + i + '.jpg';
	}
	
}

function next_image2(linkanh, numbig)
{
	var linkanh=String(linkanh);
	var numbig=String(numbig);
	if (i < numbig)
	{
		i++;
		document.images['mainto'].src= linkanh+ + i + '.jpg';
	}
	else
	{
		i=1;
		document.images['mainto'].src= linkanh+ + i + '.jpg';
	}
	
}

function preview_image2(linkanh, numbig)
{
	var linkanh=String(linkanh);
	var numbig=String(numbig);
	if (i <= 1 )
	{
		i=numbig;
		document.images['mainto'].src= linkanh+ + i + '.jpg';
	}
	else
	{
		i--;
		document.images['mainto'].src= linkanh+ + i + '.jpg';
	}
	
}

function clickzoom()
{
	var annoidung=document.getElementById('displayornot');
	annoidung.style.display="none";
	var zoomlen=document.getElementById('zoombackground');
	zoomlen.style.display="block";
}

function closezoom()
{
	var annoidung=document.getElementById('displayornot');
	annoidung.style.display="block";
	var zoomlen=document.getElementById('zoombackground');
	zoomlen.style.display="none";
}
