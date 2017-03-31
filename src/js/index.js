// var myCanvas = $('#myCanvas')[0];
// if (myCanvas.getContext) {
//     var ctx = myCanvas.getContext('2d');
// }
// var canvasBox = myCanvas.getBoundingClientRect();
// myCanvas.width = $(window).width();
// myCanvas.height = $(window).height();
// // ctx.beginPath();
// // ctx.moveTo(20,20);
// // ctx.lineTo(100,20);
// // ctx.lineWidth = 1.0;
// // ctx.strokeStyle = "#8EFEF7";
// // ctx.stroke();

// // ctx.fillStyle= "#FA8682";
// // ctx.fillRect(20, 20, 30, 30);
// // ctx.strokeRect(10,10,10,10);
// // ctx.clearRect(20,20,10,10); // 来消除某块矩形区域的内容


// // 屏幕的设备像素比
// var devicePixelRatio = window.devicePixelRatio || 1;

// // 浏览器在渲染canvas之前存储画布信息的像素比
// var backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
//     ctx.mozBackingStorePixelRatio ||
//     ctx.msBackingStorePixelRatio ||
//     ctx.oBackingStorePixelRatio ||
//     ctx.backingStorePixelRatio || 1;
// // canvas的实际渲染倍率
// var ratio = devicePixelRatio / backingStoreRatio;
// console.log(ratio);
// // $('#myCanvas').css({
// //     height:myCanvas.height / ratio,
// //     width:myCanvas.width /ratio
// // });

// // ctx.font = "Bold 40px Arial";
// // ctx.textAlign = "left";
// // ctx.fillStyle = "#000";
// // ctx.fillText('为啥那么模糊捏~', 30, 80);
// // ctx.strokeText("Hello!", 10, 400);



// // ctx.arc(100,100,25,0,Math.PI * 2,true);
// // ctx.lineWidth = 2.0;
// // ctx.strokeStyle = "#000";
// // ctx.stroke();




// // ctx.shadowOffsetX = 5;
// // ctx.shadowOffsetY = 5;
// // ctx.shadowBlur = 10;
// // ctx.shadowColor = "rgba(0,0,0,0.2)";

// // ctx.arc(100,100,90,0,Math.PI * 2,true);
// // ctx.fillStyle = myGradient;
// // ctx.fill();

// // var img = new Image();
// // img.src = '../img/pikaqiu.jpg';
// // img.onload = function(){
// //     ctx.drawImage(img,myCanvas.height/2 - 70,myCanvas.width/2- 70);
// // };
// // var filename = 'baidufe_' + (new Date()).getTime() + '.' + type;

// //下载图片
// // $('.saveCanvas').click(function() {
// //     var image = myCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream;");

// //     var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
// //     save_link.href = image;
// //     save_link.download = 'baidufe_' + (new Date()).getTime() + '.' + 'png';
// //     console.log(save_link);
// //     var event = document.createEvent('MouseEvents');  //创造一个dom
// //     event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
// //     save_link.dispatchEvent(event);  //dispatchEvent 事件触发器
// // });

// //生成图片
// // $('.saveCanvas').click(function() {
// //    var image = new Image();
// //    image.src = myCanvas.toDataURL('img/jpg');
// //    $('body').append(image);
// // });


// var myGradient = ctx.createLinearGradient(0, 0, 90, 180);
// myGradient.addColorStop(0, "#3FFFF9");
// myGradient.addColorStop(0.5897, "#FCAE9D");
// myGradient.addColorStop(1, "#fff");

// // centerX = myCanvas.width/2;
// // centerY = myCanvas.height/2;
// // rad = Math.PI*2 / 100;
// // speed = 0.1;
// // var n = 0;
// // function blueRound(){
// //     n+= 0.1;
// //     ctx.beginPath();
// //     ctx.arc(centerX,centerY,200,-Math.PI/2, -Math.PI/2 + n*rad,false);
// //     ctx.lineWidth = 49; 
// //     ctx.strokeStyle = "#30D6FB"; 
// //     ctx.stroke();
// //     ctx.closePath();
// //     ctx.restore();
// //     console.log(n);
// // }
// // function whiteRound(){
// //     ctx.save();
// //         ctx.beginPath();
// //         ctx.strokeStyle = "#fff";
// //         ctx.lineWidth = 50;
// //         ctx.arc(centerX, centerY, 200 , 0, Math.PI*2, false);
// //         ctx.stroke();
// //         ctx.closePath();
// //         ctx.restore();
// // }

// // (function demo(){
// //     window.requestAnimationFrame(demo, myCanvas);
// //     ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
// //     if(n > 100) n = 0;
// //     whiteRound();
// //     blueRound();
// // })();

// // whiteRound();
// // blueRound();





// // ctx.font="Bold 40px Arial";
// // ctx.textAlign = "left";
// // ctx.fillStyle = myGradient;
// // ctx.fillText('为啥那么模糊捏~', 30, 80);
// // ctx.strokeText("Hello!", 10, 400);


// // var canvas = document.querySelector('canvas'),
// //     context = canvas.getContext('2d'),
// //     w = canvas.width = window.innerWidth,
// //     h = canvas.height = window.innerHeight;

// //初始化
// //   var clearColor = 'rgba(0, 0, 0, .1)',             //用于绘制渐变阴影
// //       wordColor = "#20FFFC",                         //文字颜色
// //       words = "0123456789qwertyuiopasdfghjklzxcvbnm,./;QWERTYUIOP{}ASDFGHJHJKL:ZXCVBBNM<>?",
// //       wordsArr = words.split(''),                 //将文字拆分进一个数组
// //       font_size = 16,  //字体大小
// //       clumns = myCanvas.width / font_size,                     //文字降落的列数
// //       drops = [];

// //    for(var i=0; i< clumns; i++){
// //        drops[i] = 1;  //列数
// //    }
// //   console.log(drops);

// //  function draw(){
// //      ctx.save();
// //      ctx.fillStyle = wordColor;
// //      ctx.font = font_size + "px arial";
// //      //核心
// //      for (var i = 0; i < drops.length; i++){
// //           var text = wordsArr[Math.floor(Math.random() * wordsArr.length)];
// //               ctx.fillText(text, i * font_size, drops[i] * font_size);
// //               if (drops[i] * font_size > myCanvas.height && Math.random() > 0.98){
// //                       drops[i] = 0;
// //               }
// //               drops[i]++;
// //       }
// //      ctx.restore();
// // }

// //   //动画循环
// // (function drawFrame(){
// //       window.requestAnimationFrame(drawFrame, myCanvas);
// //       ctx.fillStyle = clearColor;
// //       ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);  //增加屏障
// //       draw();
// //  }());


// // var clearColor = 'rgba(0,0,0,.1)';
// // var words = "qwertyuiopasdfghjklzxcvbnm,./;QWERTYUIOP{}ASDFGHJHJKL:ZXCVBBNM<>?,";
// // var word = words.split('');
// // var fontSize = 16;
// // var clumns = myCanvas.width / fontSize;
// // drops = [];
// // for (var i = 0; i < clumns; i++) {
// //     drops[i] = 1;
// // }

// // function moveFont() {
// //     ctx.save();
// //     ctx.fillStyle = "#fff";
// //     ctx.font = 16;
// //     for (var i = 0; i < drops.length; i++) {
// //         var text = word[Math.floor(Math.random() * word.length)];
// //         ctx.fillText(text, i * fontSize, drops[i] * fontSize); //(text,x,y)
// //         if (drops[i] * fontSize > myCanvas.height && Math.random() > 0.98) {
// //             drops[i] = 0;
// //         }
// //         drops[i] = drops[i] + 1;
// //     }
// //     ctx.restore();
// // }
// // (function frame() {
// //     window.requestAnimationFrame(frame, myCanvas);
// //     ctx.fillStyle = clearColor;
// //     ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
// //     moveFont();
// // })();

// function Arrow() {
//     this.x = 0; //初始位置
//     this.y = 0;
//     this.rotation = 0; //初始旋转角度
//     this.color = '#ffff00';

// }
// //在原型上定义draw方法
// Arrow.prototype.draw = function(context) {
//     context.save();
//     context.translate(this.x, this.y); //将坐标移到this.x 和 this.y
//     context.rotate(this.rotation); //设置旋转角度
//     context.lineWidth = 5; //设置线宽
//     context.fillStyle = this.color; //设置填充色
//     context.beginPath(); //路径开始
//     context.moveTo(-50, -25);
//     context.lineTo(0, -25);
//     context.lineTo(0, -50);
//     context.lineTo(50, 0);
//     context.lineTo(0, 50);
//     context.lineTo(0, 25);
//     context.lineTo(-50, 25);
//     context.closePath(); //路径闭合
//     context.stroke(); //描边
//     context.fill(); //填充
//     context.restore();
// };

// window.onload = function() {
//     var centerX = myCanvas.width / 2;
//     var centerY = myCanvas.height / 2;

//     //传入canvas,获取鼠标在canvas上移动是的坐标
//     var mouse = utils.captureMouse(myCanvas);

//     //新建一个arrow对象
//     var arrow = new Arrow();

//     //将arrow的坐标设置为canvas的中心
//     arrow.x = centerX;
//     arrow.y = centerY;

//     //动画循环函数
//     (function drawFrame() {
//         window.requestAnimationFrame(drawFrame, myCanvas);
//         ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

//         //获取dy,dx值
//         var dx = mouse.x - arrow.x,
//             dy = mouse.y - arrow.y;

//         //设置旋转角度
//         arrow.rotation = Math.atan2(dy, dx);

//         //调用draw方法画出
//         arrow.draw(ctx);

//     })();
// };


// window.onload = function() {

//     function SubType() {
//         var doc = document;
//         this.containerDom = doc.querySelector('.container');
//         this.pageListDom = Array.prototype.slice.apply(doc.querySelectorAll('.page'));
//         this.fileDom = doc.querySelector('#files');
//         this.picAreaDom = doc.querySelector('.pic-area');
//         this.submitBtnDom = doc.querySelector('.submit-btn');
//         this.showAreaDom = doc.querySelector('.show-area');
//     }

//     SubType.prototype = {
//         init: function() {
//             this.turnPage(0);
//         },

//         handleUpload: function(files) {
//             var reader = new FileReader(),
//                 _this = this;
//             reader.readAsDataURL(files);

//             reader.onload = function() {
//                 _this.chooseComplete(reader.result);
//             };
//         },

//         chooseComplete: function(url) {
//             var _this = this;
//             this.cutter = new Cutter(this.picAreaDom, {
//                 imgUrl: url,
//                 conWidth: this.containerDom.offsetWidth,
//                 conHeight: this.containerDom.offsetWidth * 1.2,
//                 speed: 2,
//                 callback: function() {
//                     _this.turnPage(1);
//                 }
//             });
//         },

//         cutImage: function() {
//             var result = this.cutter.cut();
//             this.showAreaDom.style.backgroundImage = 'url(' + result + ')';
//             this.turnPage(2);
//         },

//         turnPage: function(pageIndex) {
//             this.pageListDom.forEach(function(item, index) {
//                 item.style.display = 'none';
//             });
//             this.pageListDom[pageIndex].style.display = 'block';
//         }
//     };

//     var a = new SubType();
//     a.init();

//     a.fileDom.onchange = function(e) {
//         a.handleUpload(e.target.files[0]);
//     };

//     a.submitBtnDom.onclick = function() {
//         demo();
//         // a.cutImage();
//     };

//     function demo() {
//         alert("sds");
//         // $('.page-choose').append('<canvas width="150" height="150"></canvas>');
//         // var myCanvas = $('canvas')[0];
//         // if (myCanvas.getContext) {
//         //     var ctx = myCanvas.getContext('2d');
//         // }
//         // myCanvas.width = $('.page-choose').width();
//         // myCanvas.height = $('.page-choose').height();

//         // var image = new Image();
//         // image.src = myCanvas.toDataURL('img/jpg');
//         // $('body').append(image);
//         // $('.pic-area').append('<div class="bg"></div>');
//         html2canvas($('.pic-area'), {
//             onrendered: function(canvas) {
//                  var image = new Image();
//                  image.src = canvas.toDataURL("image/jpg");
//                  $('body').append(image);
//             },
//             // width: 300,
//             // height: 300
//         });
//     }

// };



//下载图片
// $('.saveCanvas').click(function() {
//     var image = myCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream;");

//     var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
//     save_link.href = image;
//     save_link.download = 'baidufe_' + (new Date()).getTime() + '.' + 'png';
//     console.log(save_link);
//     var event = document.createEvent('MouseEvents');  //创造一个dom
//     event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
//     save_link.dispatchEvent(event);  //dispatchEvent 事件触发器
// });

//生成图片
// $('.saveCanvas').click(function() {
//    var image = new Image();
//    image.src = myCanvas.toDataURL('img/jpg');
//    $('body').append(image);
// });



// var img = $('.img-content').find('img')[0];
// var main = $('.img-base64')[0];
// img.crossOrigin = "anonymous";

// function getImageBase64(img) {
//     var canvas = document.createElement("canvas");
//     canvas.width = img.width;
//     canvas.height = img.height;

//     var ctx = canvas.getContext("2d");
//     ctx.drawImage(img, 0, 0, img.width, img.height);
//     var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
//     var dataURL = canvas.toDataURL("image/" + ext).replace("image/" + ext, "image/octet-stream");
//     // img.setAttribute('crossOrigin', 'anonymous');  //前提是服务器支持跨域
//     return dataURL;
// }



// $(main).append('<img src="" alt="">');

// img.onload = function(){
//    $(main).find('img').attr('src',getImageBase64(img));
// };


// var files = $('.label')[0];
// var images;
// files.onchange = function(e) {
//     // // var data = e.target.files[0];
//     // var data = $('input')[0].files[0];
//     // var reader = new FileReader();
//     // reader.readAsDataURL(data);
//     // reader.onload = function() {
//     //     $(main).find('img').attr('src', reader.result);
//     // };
//     images = $('input')[0].files[0];
//     demo();

// };
// function demo() {
//     images.name = 'http://avatar.csdn.net/F/3/7/1_linlzk.jpg';
//     var reader = new FileReader();
//     reader.readAsDataURL(images);
//     reader.onload = function() {
//         $(main).find('img').attr('src', reader.result);
//     };
// }

// demo();



//获取元素
// document.getElementsByTagName();
// document.getElementsByClassName();
// document.getElementById();
// document.querySelector();
// document.querySelectorAll();
















