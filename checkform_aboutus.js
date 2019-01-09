// JavaScript Document
function guiform()
{
	var ten=document.getElementById('ten').value;
	var email=document.getElementById('email').value;
	var dienthoai=document.getElementById('dienthoai').value;
	var tenyeucau=document.getElementById('tenyeucau').value;
	var tinnhan=document.getElementById('tinnhan').value;
	if (ten == "" || email == "" || dienthoai == "" || tenyeucau == "" || tinhan == "")
	{
		alert('Không được bỏ trống bất kỳ thông tin nào!');
		return;
	}
	
	if (/[^a-zA-Z\s]/i.test(ten) || ten.length < 5 || ten.length > 50)
	{
		alert('Vui lòng nhập đúng tên người gửi!');
		return;
	}
	if (/[^0-9]/i.test(dienthoai) || dienthoai.length < 8 || dienthoai.length > 12)
	{
		alert('Số điện thoại chỉ được nhập từ 0 - 9 (8 - 12 số)');
		return;
	}
	if(!(/^[a-zA-Z]+[0-9]*[@][a-z]+[.][a-z]+([.][a-z]+)?$/i.test(email)) || email.length < 8)
	{
		alert('Email không hợp lệ');
		return;
	}
	alert('Đã gửi thành công. Cảm ơn bạn đã quan tâm');
}