$(function() {
    $('.box-one-ck').on('click', function() {
        checkall();
    })

    function checkall() {            
        var allok = document.querySelector(".box-one-ck");            
        var item = document.querySelectorAll(".box-two-ck");
        console.log(item);          
        if (allok.checked) {               
            for (var j = 0; j < item.length; j++) {
                item[j].checked = true;
            } 
        } else {
            for (var j = 0; j < item.length; j++) {
                item[j].checked = false;
            }
        }
        var num = 0;            
        for (var i = 0; i < item.length; i++) {              
            if (item[i].checked == true) {                  
                num += parseFloat(item[i].value);             
            }            
        }            
        var allsum = document.querySelector(".allsum");            
        allsum.innerHTML = num;         
    }
})