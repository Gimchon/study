console.log("hello worldhaha")
let btn = document.getElementById("btn")//获取按钮元素的节点
console.log(btn)
btn.onclick=()=>{//按钮的点击事件
    console.log(666)
    window.location.href="./home.html";
}