// JavaScript Document
var coupon=["abc", "123"];
function DataProduct(code, thumb, name, price, size)
{
	this.code = code;
	this.thumb = thumb;
	this.name = name;
	this.price = price;
	this.size = size;
}
function getDataProduct()
{
	
	var code=document.getElementById('code_product');
	var thumb=document.getElementById('main_pic');
	var name=document.getElementById('nameProduct');
	var price=document.getElementById('priceProduct');
	var size=document.getElementById('sizeProduct');
	code=code.innerHTML;
	thumb=thumb.src;
	name=name.innerHTML;
	size=size.value;
	price=price.innerHTML;
	var ListItem=[];
	var read = localStorage.getItem('n');
	if(!read)
	{
		alert('Đã thêm vào giỏ hàng');
		ListItem[0]=new DataProduct(code, thumb, name, price, size);
		localStorage.setItem('n', JSON.stringify(ListItem));
	}
	else
	{
		var storedData = localStorage.getItem('n');
		var ListItem = JSON.parse(storedData);
		for(var i=0; i < ListItem.length;i++){
			if (ListItem[i].code==code && ListItem[i].size==size)
			{
				alert('Mỗi khách hàng chỉ được mua 1 sản phẩm với Size này. Vui lòng chọn Size hoặc sản phảm khác!');
				return;
			}
		}
			ListItem[ListItem.length] = new DataProduct(code, thumb, name, price, size);
			localStorage.setItem('n', JSON.stringify(ListItem));
			alert('Đã thêm vào giỏ hàng');
	}
	location.reload();
}
function printItem()
{
	//localStorage.clear();
	var printcart=document.getElementById('printcart');
	var printtotal=document.getElementById('total');
	var displaycontent=document.getElementById('content');
	var hidecontentempty=document.getElementById('content_empty');
	var countgiohang=document.getElementById('countgiohang');
	
	var sum=0;
	var total = "";
	var t = "";
	var storedData = localStorage.getItem('n');
	var ListItem=JSON.parse(storedData);
	countgiohang.innerHTML="Giỏ hàng ("+ListItem.length+")";
	if (ListItem.length != 0)
	{
		displaycontent.style.display="block";
		hidecontentempty.style.display="none";
	}
	else
	{
		displaycontent.style.display="none";
		hidecontentempty.style.display="block";
	}
	
	for (var i=0; i < ListItem.length; i++)
	{
		if (i%2!=0)
		{
		t=t+"<li class='item' style='background-color: #FFF'>";
		}
		else
		{
		t=t+"<li class='item'>";
		}
		t=t+"<div class='remove' onclick='removeProduct("+i+")'>X</div>";
		t=t+"<div class='c1'><div class='c1_img'><img src='"+ListItem[i].thumb+"'></div><div class='c1_info'>"+ListItem[i].name+"<br /><span>"+ListItem[i].code+"</span></div></div>";
		t=t+"<div class='c2' style='margin-left:20px'>"+ListItem[i].size+"</div>";
		t=t+"<div class='c3'>1</div>";
		t=t+"<div class='c4'>"+ListItem[i].price+"</div>";
		t=t+"</li>";
		var convert=parseFloat(ListItem[i].price);
		sum=parseFloat(sum)+convert;
	}
	sum = sum*1000000;
	sum = sum.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	total=total+"Tổng tiền thanh toán: "+sum+" VND";
	printcart.innerHTML=t;
	printtotal.innerHTML=total;
}

function removeProduct(index)
{
	var storedData=localStorage.getItem('n');
	var ListItem=JSON.parse(storedData);
	ListItem.splice(index,1);
	localStorage.setItem('n',JSON.stringify(ListItem));
	location.reload();
}
function getMY()
{	
var month=document.getElementById('month');
var year=document.getElementById('year');
var month2=document.getElementById('month2');
var year2=document.getElementById('year2');
var montht="";
var i;
for (i=1; i<13;i++)
{
	montht=montht+"<option value='"+i+"'>"+i+"</option>";
}
var yeart="";
for (i=2016; i < 2025; i++)
{
	yeart=yeart+"<option value='"+i+"'>"+i+"</option>";
}
month.innerHTML=montht;
year.innerHTML=yeart;
month2.innerHTML=montht;
year2.innerHTML=yeart;
}

function showhide_pay(id1, id2)
{
	var show=document.getElementById(id1);
	show.style.display="block";
	var hide=document.getElementById(id2);
	hide.style.display="none";
	var showbutton=document.getElementById('button');
	showbutton.style.display="block";
}

function changeclass(id1, id2)
{
	var toi=document.getElementById(id1);
	var sang=document.getElementById(id2);
	toi.style.opacity="0.5";
	sang.style.opacity="1";
}
function get_info_pay(order, receiver, address, telephone, email, cardholder, cardnumber, month, year, ccv)
{
	this.order=order;
	this.receiver=receiver;
	this.address=address;
	this.telephone=telephone;
	this.email=email;
	this.cardholder=cardholder;
	this.cardnumber=cardnumber;
	this.month=month;
	this.year=year;
	this.ccv=ccv;
}
function randomnumber()
{
	var randomnumber=Math.floor((Math.random()*10000));
	document.getElementById('order').innerHTML=randomnumber;
	return;
}

function get_order()
{
	var receiver=document.getElementById('receiver').value;
	var address=document.getElementById('address').value;
	var telephone=document.getElementById('telephone').value;
	var email=document.getElementById('email').value;
	var cardholder=document.getElementById('cardholder').value;
	var cardnumber=document.getElementById('cardnumber').value;
	var month=document.getElementById('month').value;
	var year=document.getElementById('year').value;
	var ccv=document.getElementById('ccv').value;
	
	if (receiver == "" || address == "" || telephone == "" || email == "" || cardholder == "" || cardnumber == "" || ccv == "")
	{
		alert('Không được bỏ trống bất kỳ thông tin nào!');
		return;
	}
	
	if (/[^a-zA-Z\s]/i.test(receiver) || /[^a-zA-Z\s]/i.test(cardholder) || receiver.length < 5 || receiver.length > 50 || cardholder.length < 5 || cardholder.length > 50)
	{
		alert('Người nhận và chủ thẻ chỉ sử dụng chữ cái thường hoặc HOA!');
		return;
	}
	if (/[^0-9]/i.test(telephone) || telephone.length < 8 || telephone.length > 12)
	{
		alert('Số điện thoại chỉ được nhập từ 0 - 9 (8 - 12 số)');
		return;
	}
	if (/[^a-zA-Z0-9//,\s]/i.test(address) || address.length < 8)
	{
		alert('Địa chỉ không hợp lệ');
		return;
	}
	if(!(/^[a-zA-Z]+[0-9]*[@][a-z]+[.][a-z]+([.][a-z]+)?$/i.test(email)) || email.length < 8)
	{
		alert('Email không hợp lệ');
		return;
	}
	if (/^(?:4[5][0-9]{11})$/i.test(cardnumber) ||cardnumber.length < 12 || cardnumber.length > 12) 
	{
		alert('Mã số thẻ không hợp lệ');
		return;
	}
	if (month==1 && year==2016)
	{
		alert('Ngày hết hạn của thẻ không hợp lệ');
		return;
	}
	if (/[^0-9]/i.test(ccv) || ccv.length < 3 || ccv.length > 3)
	{
		alert('Mã CCV không hợp lệ');
		return;
	}
	var ListV2=[];
	var order=randomnumber=Math.floor((Math.random()*10000));
	localStorage.setItem('order',JSON.stringify(ListV2));
	var ListOrder=[];
	var readData = localStorage.getItem('keyOrder');
	if (!readData)
	{
		ListOrder[0]=new get_info_pay(order, receiver, address, telephone, email, cardholder, cardnumber, month, year, ccv);
		localStorage.setItem('keyOrder'+order, JSON.stringify(ListOrder));
	}
	else
	{
	var ListOrder=JSON.parse(readData);
	for (var i=0; i < ListOrder.length; i++)
	{
		if(ListOrder[i].order=order)
		order++;
	}
	ListOrder[ListOrder.length]=new get_info_pay(order, receiver, address, telephone, email, cardholder, cardnumber, month, year, ccv);
	localStorage.setItem('keyOrder'+order, JSON.stringify(ListOrder));
	}
	var readData2 = localStorage.getItem('n');
	var ListOrder2=JSON.parse(readData2);
	localStorage.setItem('n'+order,JSON.stringify(ListOrder2));
	var alertT="Đã thanh toán. Mã đơn hàng của bạn là: "+order+"";
	alert(alertT);
	localStorage.removeItem('keyOrder');
	localStorage.removeItem('n');
	window.open("printorder.html");
	location.reload();
	
}
