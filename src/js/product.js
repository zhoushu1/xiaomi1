$(function() {
    var id = location.search.split('=')[1];
    $.ajax({
        type: "get",
        url: "../lib/getitem.php",
        data: {
            "id": id
        },
        dataType: "json",
        success: function(res) {
            var pic = JSON.parse(res.pic);
            var template = `
            <div class="main">
            <div class="product-box">
                <div class="container">
                    <h2>${res.title}</h2>
                    <div class="con">
                        <div class="right">
                            <a href="#">概述</a>
                            <span>|</span>
                            <a href="#">公交城市</a>
                            <span>|</span>
                            <a href="#">参数</a>
                            <span>|</span>
                            <a href="#">F码通道</a>
                            <span>|</span>
                            <a href="#">用户评价</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="main-left">
                    <img src="${pic[1].src}" alt="">
                </div>
                <div class="main-right">
                    <h2>${res.title}</h2>
                    <p class="main-one">${res.des}</p>
                    <p class="main-two">小米自营</p>
                    <p class="main-three">${res.price}</p>
                    <div class="main-zp">
                        <span>赠品</span><i>赠米粉卡，最高含100元话费</i>
                    </div>
                    <div class="main-adr">
                        <div><i class="iconfont">&#xe506;</i><span>浙江</span><span>杭州市</span><span>江干区</span><span>修改</span></div>
                        <p>有现货</p>
                    </div>
                    <p class="main-four">选择颜色</p>
                    <ul>
                        <li>
                            <a href="#" style="color:black;"><img src="${pic[0].src}" alt="" style="width: 16px;height:16px;vertical-align: middle;margin-right: 10px;">黑色</a>
                        </li>
                        <li>
                            <a href="#" style="color:blue;"><img src="${pic[0].src}" alt="" style="width: 16px;height:16px;vertical-align: middle;margin-right: 10px;">蓝色</a>
                        </li>
                        <li>
                            <a href="#" style="color:red;"><img src="${pic[0].src}" alt="" style="width: 16px;height:16px;vertical-align: middle;margin-right: 10px;">红色</a>
                        </li>
                    </ul>
                    <div class="main-zj">
                        <p class="zj-one"><span>${res.title}</span><span>${res.price}元</span></p>
                        <P class="zj-three"><i>数量</i><input type="number" value="1" id="num"></p>
                    
                    </div>
                    <div>
                        <a href="../html/shop-car.html" style="display:inline-block;"><input type="button" class="btn-one add" value="加入购物车"></a>
                        <a href="#" class="btn-two"><i class="iconfont">&#xe604;</i>喜欢</a>
                    </div>
                    <p class="main-six"><i class="iconfont">&#xe50d;</i><em>小米自营</em><i class="iconfont">&#xe50d;</i><em>小米发货</em><i class="iconfont">&#xe50d;</i><em>7天无理由退货</em><i class="iconfont">&#xe50d;</i><em>运费说明</em></p>
                </div>
            </div>
        </div>`;
            $('.main').append(template).find('.add').on('click', function() {
                additem(res.id, res.price, $('#num').val());
            });
        }
    });

    function additem(id, price, num) {
        var shop = cookie.get('shop');
        var product = {
            "id": id,
            "price": price,
            "num": num
        };

        if (shop) {
            shop = JSON.parse(shop);

            if (shop.some(elm => elm.id == id)) {
                shop.forEach((elm, i) => {
                    elm.id == id ? elm.num = num : null;
                });
            } else {
                shop.push(product);
            }
            cookie.set('shop', JSON.stringify(shop), 1);
        } else {
            shop = [];
            shop.push(product);
            cookie.set('shop', JSON.stringify(shop), 1);
        }

    }

});