$(function() {
    $.ajax({
        type: "get",
        url: "../lib/getall.php",
        dataType: "json",
        success: function(response) {
            var template = '';
            response.forEach((elm, i) => {
                var pic = JSON.parse(elm.pic);
                template += `
        <li><a href="product.html?id=${elm.id}">
            <img src="${pic[0].src}" alt="">
            <p class="p-title">${elm.title}</p>
            <p class="price" style="color:rgb(255, 136, 0)">${elm.price}元</p>
            <p>${elm.pj}人好评</p>
        </a></li> `;
            });
            $('.tuijian-list').append(template);
        }
    });
});