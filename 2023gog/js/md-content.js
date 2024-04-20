//觸發彈窗底部頁面禁止滑動
function fixed() {
    var scrollTop = document.body.scrollTop;//設定背景元素的位置
    $('#md-content').attr('data-top', scrollTop);
    var contentStyle = document.getElementById("md-content").style;//content是可以滾動的背景元素id名稱
    contentStyle.position = 'fixed'; //contentStyle是第二步的變數，設定背景元素的position屬性為‘fixed’
    contentStyle.width = '100%';
    contentStyle.top = "-" + scrollTop + "px";
  }
  
  //關閉彈窗底部頁面恢復滑動
  function fixed_cancel() {
    var contentStyle = document.getElementById("md-content").style;
    var scrollTop = $('#md-content').attr('data-top');//設定背景元素的位置
    contentStyle.top = '0px';//恢復背景元素的初始位置
    contentStyle.position = "static";//恢復背景元素的position屬性
    $(document).scrollTop(scrollTop);//scrollTop,設定滾動條的位置
}
