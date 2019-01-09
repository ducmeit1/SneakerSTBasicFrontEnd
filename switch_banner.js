// JavaScript Document
var linkImg=["slide/image1.jpg", "slide/landing-banner-adidas-mens-20160104.jpg", "slide/banner-sale-20160101.jpg"];
var nameImg=["Adidas Tubular <span>giá chỉ từ</span>", "Adidas BRAND<span>bộ sưu tập</span>", "Sự kiện SALE<br /> <span>lên đến</span>"];
var giaImg=["1.800.000 VND", "1.100.000 VND", "60% giá gốc"];
var contentImg=["đôi giày bán chạy nhất hiện nay", "giá tốt nhất thị trường", "chỉ một lần duy nhất"];
var directImg=["adidas_tubular_red.html", "adidas.html", "sale.html"];
var index=0;
function changecontent()
{
	var linkA=document.getElementById('myimage');
	var nameA=document.getElementById('nameimage');
	var giaA=document.getElementById('giaimage');
	var contentA=document.getElementById('contentimage');
	var directA=document.getElementById('linkimage');
	var getclass=document.getElementsByClassName('pagechange');
	index++;
	if (index==3)
	    index=0;
			linkA.src=linkImg[index];
			nameA.innerHTML=nameImg[index];
			giaA.innerHTML=giaImg[index];
			contentA.innerHTML=contentImg[index];
			directA.href=directImg[index];
	for (var i=0; i < 3; i++)
	if (i!=index)
	{
			getclass.item(0).getElementsByTagName('button').item(i).style.backgroundColor="#FFF";
			getclass.item(0).getElementsByTagName('button').item(i).style.color="#000";	
	}
	else
	{
			getclass.item(0).getElementsByTagName('button').item(index).style.backgroundColor="#000";
			getclass.item(0).getElementsByTagName('button').item(index).style.color="#FFF";	
	}
			
}
function changeclick(id)
{
	index=String(id);
	var linkA=document.getElementById('myimage');
	var nameA=document.getElementById('nameimage');
	var giaA=document.getElementById('giaimage');
	var contentA=document.getElementById('contentimage');
	var directA=document.getElementById('linkimage');
		linkA.src=linkImg[index];
		nameA.innerHTML=nameImg[index];
		giaA.innerHTML=giaImg[index];
		contentA.innerHTML=contentImg[index];
		directA.href=directImg[index];
	var getclass=document.getElementsByClassName('pagechange');
	for (i=0; i<3; i++)
	if (i!=index)
	{
			getclass.item(0).getElementsByTagName('button').item(i).style.backgroundColor="#FFF";
			getclass.item(0).getElementsByTagName('button').item(i).style.color="#000";	
	}
	else
	{
			getclass.item(0).getElementsByTagName('button').item(index).style.backgroundColor="#000";
			getclass.item(0).getElementsByTagName('button').item(index).style.color="#FFF";	
	}
}
function autochange()
{
	setInterval(changecontent, 4500);
}
function checkcountcart()
{
	var storedDataCart = localStorage.getItem('n');
	var ListCart=JSON.parse(storedDataCart);
	var countgiohang=document.getElementById('countgiohang');
	countgiohang.innerHTML="Giỏ hàng ("+ListCart.length+")";
	var cartlist=document.getElementById('cartlist');
	var a="";
	if (ListCart.length == 0)
	{
		cartlist.style.display="none";
	}
	else
	{
		for (var i=0; i < ListCart.length; i++)
		{
		a=a+"<li><img src='"+ListCart[i].thumb+"' title='"+ListCart[i].name+"'</li>";
		}
		cartlist.innerHTML=a;
	}
}
function showcart()
{
	var changecontent=document.getElementById('countgiohang');
	var showgiohang=document.getElementById('cartlist');
	var storedDataCart = localStorage.getItem('n');
	var ListCart=JSON.parse(storedDataCart);
	if (ListCart.length == 0)
	{
		showgiohang.style.display="none";
	}
	else
	{
	showgiohang.style.display="block";
	changecontent.innerHTML="Thanh toán";
	}
}
function hidecart()
{
	var showgiohang=document.getElementById('cartlist');
	showgiohang.style.display="none";
	location.reload();
}