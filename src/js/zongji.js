$(function() {
    var allok = document.querySelector(".box-two"); 
    var item = document.querySelectorAll(".box-two-ck");
    var allsum = document.querySelector(".allsum");
    var arr = [];
    allok.addEventListener('click', function(ev) {
        ev = event || ev;
        var target = ev.target || ev.srcElement;
        var sum = 0;   
        var price = target.value; 
        if (target.type == "checkbox" && target.checked) {        
            arr.push(price);
            for (var i = 0; i < arr.length; i++) {
                sum += parseFloat(arr[i]);
            } 
            allsum.innerHTML = sum;
        } else if (target.type == "checkbox" && !target.checked) {
            var bum = Number(allsum.innerHTML) - Number(target.value);
            allsum.innerHTML = bum;
        } 
    }) 
})