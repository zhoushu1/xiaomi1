$(function() {
    var shop = cookie.get('shop');
    if (shop) {
        shop = JSON.parse(shop);
        var idList = shop.map(elm => elm.id).join();
        $.ajax({
            type: "get",
            url: "../lib/shop.php",
            data: {
                "idList": idList
            },
            dataType: "json",
            success: function(res) {
                var template = "";
                res.forEach((elm, i) => {
                    var pic = JSON.parse(elm.pic);
                    var arr = shop.filter((val, i) => {
                        return val.id === elm.id;
                    });
                    template = `
                    <div class="box-two-list">
                    <input type="checkbox" class="box-two-ck hehe" id="p-${elm.id}" value="${((arr[0].num*elm.price).toFixed(2))}">
                    <div class="p-title">
                        <img src="${pic[0].src}" alt="">
                        <h3><a href="#">${elm.title}</a></h3>
                    </div>
                    <span style="display: inline-block;width: 130px;line-height: 90px;margin-right: 50px;">${elm.price}元</span>
                    <input type="number" class="box-two-num" value="${arr[0].num}" style="width: 100px;height:38px;">
                    <span style="display: inline-block;text-align:center;width:150px;margin-left: 65px;color: #ff6700">${((arr[0].num*elm.price).toFixed(2))}元</span>
                    <span style="display: inline-block;text-align:center;width:30px;margin-left: 50px"><a href="#" style="color: #757575;font-size: 18px">×</a></span>
                </div> 
                    `;
                    $('.box-two').append(template);
                });
            }
        });
    }
});