# study<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        button {
            width: 80px;
            height: 30px;
            border: 1px solid #ccc;
            outline: none;
            cursor: pointer;
        }

        .active {
            background: #58bc58;
            color: #fff;
        }
    </style>
</head>

<body>
    <button id="btn1" class="active">微信</button>
    <button id="btn2">通讯录</button>
    <button id="btn3">发现</button>
    <button id="btn4">我的</button>

    <script>
        // var btn1 = document.getElementById('btn1');
        // var btn2 = document.getElementById('btn2');
        // var btn3 = document.getElementById('btn3');
        // var btn4 = document.getElementById('btn4');

        // 通过标签名的形式获取元素
        // 通过标签名获取的数据 得到是一个伪数组集合
        //集合中包含获取到的元素
        // 也有length属性 ，length属性的值表示获取到元素的个数
        // 也有索引，也是从0开始，每一个元素的唯一标识
        var btns = document.getElementsByTagName('button');

        // btns 是一个伪数组 不能直接绑定事件
        // btns.onclick = function () {
        //     console.log(1);
        // }

        // 获取集合中的每一个元素 然后给这些元素绑定
        // btns[0]  h获取索引为0 的元素
        // 循环获取每一个元素
        for (var i = 0; i < btns.length; i++) {
            // console.log(btns[i]);
            // 得到每一个元素之后，给元素添加点击事件
            btns[i].onclick = function () {
                // 这里面代码 用户什么时候点击 代码就什么时候执行
                // 当用户点击的时候 循环就已经执行结束
                // 循环执行结束 i = 4
                // btns 集合中没有索引为4的元素
                // console.log(i);
                // console.log(btns[i]);
                // 排他思想：
                // 先把所有元素的active都移出:循环集合得到所有的元素
                // 然后给当前点击的元素添加
                for(var j = 0;j<btns.length;j++){
                    // console.log(btns[j]);
                    btns[j].className = '';
                }

                // this 表示当前点击的元素
                this.className = 'active';
            }
        }

        // btn1.onclick = function () {
        //     console.log('按钮1');
        // }
        // btn2.onclick = function () {
        //     console.log('按钮2');
        // }
        // btn3.onclick = function () {
        //     console.log('按钮3');
        // }
        // btn4.onclick = function () {
        //     console.log('按钮4');
        // }
    </script>
</body>

</html>
