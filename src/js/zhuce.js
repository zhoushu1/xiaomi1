$(function() {
    var aInput = $('#myform>p>input');
    var aSpan = $('#myform>p>span');
    aInput[0].onfocus = function() {
        aSpan[0].innerHTML = '请输入以字母开头的6-16位用户名';
        aSpan[0].style.color = "black"
    }
    aInput[0].onblur = function() {
        if (this.value != '') {
            var reg = /^[A-z]\w{5,15}$/;
            if (reg.test(this.value)) {
                aInput[0].style.border = '';
                aSpan[0].innerHTML = '√';
                aSpan[0].classList.add('green');
            } else {
                aSpan[0].innerHTML = '用户名格式错误';
                aSpan[0].style.color = "red";
            }
        } else {
            aSpan[0].innerHTML = '用户名不能为空';
            aSpan[0].style.color = "red";
            aInput[0].style.border = "1px solid red";
        }
        check();
    }

    aInput[1].onfocus = function() {
        aSpan[1].innerHTML = '请输入6-16位的密码';
        aSpan[1].style.color = "black"
    }
    aInput[1].onblur = function() {
        if (this.value != '') {
            var reg = /^\w{6,16}$/
            if (reg.test(this.value)) {
                aInput[1].style.border = '';
                aSpan[1].innerHTML = '√';
                aSpan[1].classList.add('green');

            } else {
                aSpan[1].innerHTML = '密码格式错误';
                aSpan[1].style.color = "red";
            }
        } else {
            aSpan[1].innerHTML = '密码不能为空';
            aSpan[1].style.color = "red";
            aInput[1].style.border = "1px solid red";
        }
        check();
    }

    aInput[2].onfocus = function() {
        aSpan[2].innerHTML = '请再次确认密码';
        aSpan[2].style.color = "black";
    }
    aInput[2].onblur = function() {
        if (this.value != '') {
            if (this.value == aInput[1].value) {
                aInput[2].style.border = '';
                aSpan[2].innerHTML = "√";
                aSpan[2].classList.add('green');
            } else {
                aSpan[2].innerHTML = "两次密码不一致";
                aSpan[2].style.color = "red";

            }
        } else {
            aSpan[2].innerHTML = " ";
            aSpan[2].style.color = "red";
            aInput[2].style.border = "1px solid red";

        }
        check();
    }

    function check() {
        var oSpanll = $('#myform>p>.green');
        console.log(oSpanll)
            // var pass= $('input[data-pass="true"]');
        if (oSpanll.length == 3) {
            aInput[3].removeAttribute('disabled');
        }
    }
})