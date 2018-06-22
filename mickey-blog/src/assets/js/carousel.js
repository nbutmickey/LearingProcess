$(function () {
  let timer='';//定义计时器
  $('.container').mouseover(function () {
    $('.btn_left').show('1000');
    $('.btn_right').show('1000');
    clearInterval(timer);
  }).mouseleave(function () {
    $('.btn_left').hide('1000');
    $('.btn_right').hide('1000');
    timer=setInterval(btn_right,4000);
  });
});
//图片自动轮播
timer=setInterval(btn_right,4000);
let arr=['p1','p2','p3','p4','p5','p6','p7'];
let index=0;

$('.btn_right').on('click',function () {
  btn_right()
});

//封装点击下一张函数
function btn_right() {
  arr.push(arr[0]);
  arr.shift();
  $('.content li').each(function (i,e) {
    $(e).removeClass().addClass(arr[i]);
  });
  index++;
  if(index>6){
    index=0;
  }
}


