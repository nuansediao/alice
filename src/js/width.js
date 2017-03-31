
;(function(func) {

    //在用户调试窗口时,递归方法
    window.onresize = function() {
        func();
    };
    func();

})(function resetRootEm() {
    var clientWidth = Math.max(320, window.innerWidth);
    document.documentElement.style.fontSize = (clientWidth / (750 / 40)) + 'px';
});
