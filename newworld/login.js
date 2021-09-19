console.log("hello worldhaha")
let btn = document.getElementById("btn")//获取按钮元素的节点
console.log(btn)
let account = document.getElementById('account')//获取账号输入框节点
let pwd = document.getElementById('pwd')//获取密码输入框节点
function login(){
    console.log(account.value)
    console.log(pwd.value)
    if(account.value== ''){
        alert('账号不能为空！')
        return
    }
    if(pwd.value==''){
        alert('密码不能为空！')
        return
    }
    if(account.value.length<=5){
        alert('账号长度不能小于等于5')
        return
    }
    if(account.value=='123456'&&pwd.value=='456789'){
        window.location.href="./home.html";
    }else{
        alert('账号或者密码错误')
    }
}
btn.onclick=()=>{//按钮的点击事件
    login()
    console.log(666)
    //window.location.href="./home.html";
}
document.onkeydown = function(e){
    var theEvent = window.event ||e;
    var code =theEvent.keyCode || theEvent.which  || theEvent.charCode;
    if(code == 13){
        login();
    }
}
let eyes = document.getElementById('eyes')
eyes.onclick=()=>{
    console.log(pwd.type)
    if(pwd.type=='password'){
        pwd.type='text'
    }else if(pwd.type=='text'){
        pwd.type='password'
    }
}
