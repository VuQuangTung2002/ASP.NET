function validate() {
    //Đăng ký
    var check1=0;
    var check2=0;
    var password = document.getElementById("txtPass").value;
    var pass = document.getElementById("txtPW").value;

    var regex_password = /^([a-zA-Z0-9]{0,8})$/;

    if(!regex_password.test(password)){
        document.getElementById("errpass").innerHTML = "Mật khẩu không hợp lệ"
        
    }else{
        document.getElementById("errpass").innerHTML = "Mật khẩu hợp lệ"
        check1=1;
    }

    if(password != pass) {
		document.getElementById("errPW").innerHTML = "Mật khẩu không khớp"
        
	} else{
        document.getElementById("errPW").innerHTML = "Mật khẩu khớp"
        check2=1;
    }

    //Thông tin
    //họ
    var frstName = document.getElementById("txtHo").value;
    var regex_frstName = /^[A-Z]([a-zA-Z]+\s*)+$/;
    if(!regex_frstName.test(frstName)){
        document.getElementById("errHo").innerHTML = "Họ không hợp lệ"
    }else{
        document.getElementById("errHo").innerHTML = "Họ hợp lệ"
    }
    //tên
    var lstName = document.getElementById("txtTen").value;
    var regex_lstName = /(^[A-Z]{1}\w+){1}$/;
    if(!regex_lstName.test(lstName)){
        document.getElementById("errTen").innerHTML = "Tên không hợp lệ"
    }else{
        document.getElementById("errTen").innerHTML = "Tên hợp lệ"
    }
    //Email
    var email = document.getElementById("txtEmail").value;
    var regex_email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if(!regex_email.test(email)){
        document.getElementById("errEmail").innerHTML = "Tên email không hợp lệ"
    }else{
        document.getElementById("errEmail").innerHTML = "Tên email hợp lệ"
    }
    //Phone
    var phone = document.getElementById("txtTel").value;
    var regex_phone = /^0{1}\d{9}$/;
    if(!regex_phone.test(phone)){
        document.getElementById("errTel").innerHTML = "Số điện thoại không hợp lệ"
    }else{
        document.getElementById("errTel").innerHTML = "Số điện thoại hợp lệ"
    }
    //Địa chỉ
    var address = document.getElementById("diachi").value;
    var regex_address =  /^[A-Za-z0-9\s]+$/;
    if(!regex_address.test(address)){
        document.getElementById("errDiaChi").innerHTML = "Địa chỉ không hợp lệ"
    }else{
        document.getElementById("errDiaChi").innerHTML = "Địa chỉ hợp lệ"
    }
    
}