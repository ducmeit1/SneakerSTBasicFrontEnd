// JavaScript Document
function printOrder()
{
	var i;
	var printcart=document.getElementById('content_order');
	var numberorder=document.getElementById('donhang');
	numberorder=numberorder.value;
	var printtotal=document.getElementById('total');
	var sum=0;
	var t = "";
	var storedData1 = localStorage.getItem('n'+numberorder);
	var storedData2 = localStorage.getItem('keyOrder'+numberorder);
	var ListItem1 = JSON.parse(storedData1);
	var ListItem2 = JSON.parse(storedData2);
	if ((!storedData1 && !storedData2) || numberorder=='')
	{
		alert('Xin lỗi! Mã đơn hàng không chính xác');
		return;
	}
	printcart.style.display="block";
	t=t+"<h1>Thông tin đơn hàng: <span>"+numberorder+"</span></h1>";
	t=t+"<div class='info_khachhang' style='margin-left: 10px'>";
	t=t+"<div class='left'>";
	t=t+"<ul>";
	t=t+"<li class='label'>Thông tin người nhận</li>";
	t=t+"<li>Họ và tên: <span>"+ListItem2[0].receiver+"</span></li>";
	t=t+"<li>Địa chỉ: <span>"+ListItem2[0].address+"</span></li>";
	t=t+"<li>Số điện thoại: <span>"+ListItem2[0].telephone+"</span></li>";
	t=t+"<li>Email: <span>"+ListItem2[0].email+"</span></li>";
	t=t+"<li>Phương thức vận chuyển: <span>Bưu điện (dự kiến 3 - 4 ngày)</span></li>";
	t=t+"</ul></div>";
	
	t=t+"<div class='right'>";
	
	t=t+"<ul>";
	t=t+"<li class='label'>Thông tin thanh toán</li>";
	t=t+"<li>Chủ thẻ: <span>"+ListItem2[0].cardholder+"</span></li>";
	t=t+"<li>Mã thẻ: <span>"+ListItem2[0].cardnumber+"</span></li>";
	t=t+"<li>Ngày hết hạn: <span>"+ListItem2[0].month+"/"+ListItem2[0].year+"</span></li>";
	t=t+"<li>Mã CCV: <span>"+ListItem2[0].ccv+"</span></li>";
	t=t+"<li>Trạng thái: <span>Đã thanh toán thành công</span></li>";
	t=t+"</ul></div></div>";
	
	t=t+"<div class='sanpham'>";
	t=t+"<h1>Sản phẩm đã mua</h1>";
	t=t+"<ul>";
	t=t+"<li style='padding-top: 10px; padding-bottom: 10px; font-weight: bold'><div class='c1' style='margin-left: 20px;'>Sản phẩm</div><div class='c2'>Size</div><div class='c3'>Số lượng</div><div class='c4'>Giá</div></li>";

	for (i=0;i<ListItem1.length;i++)
	{
		if (i%2==0)
		{
		t=t+"<li class='item' style='background-color: #F0F0F0'>";
		}
		else
		{
			t=t+"<li class='item'>";
		}
			
		t=t+"<div class='c1'><div class='c1_img'><img src='"+ListItem1[i].thumb+"'></div><div class='c1_info'>"+ListItem1[i].name+"<br /><span>"+ListItem1[i].code+"</span></div></div>";
		
		t=t+"<div class='c2' style='margin-left: 20px'>"+ListItem1[i].size+"</div><div class='c3'>1</div><div class='c4'>"+ListItem1[i].price+"</div></li>";
		var convert=parseFloat(ListItem1[i].price);
		sum=parseFloat(sum)+convert;
	}
	
	sum = sum*1000000;
	sum = sum.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	t=t+"</ul></div>";
	t=t+"<div class='total_tien'><span id='total'>Đã thanh toán: "+sum+" VND</span></div></div>";
	
	printcart.innerHTML=t;

}
            