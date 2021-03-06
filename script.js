var bookList = [{id: 1, price: 10.80, quantity: 0, bookTitle: "The Alchemist", bookCover: "Product-Image-Coming-Soon.png"},
        {id: 2, price: 15.68, quantity: 0, bookTitle: 'The Mastery', bookCover: 'Product-Image-Coming-Soon.png'},
        {id: 3, price: 13.95, quantity: 0, bookTitle: 'Think and Grow Rich', bookCover: 'Product-Image-Coming-Soon.png'},
        {id: 4, price: 5.99, quantity: 0, bookTitle: 'As a Man Thinked', bookCover: 'Product-Image-Coming-Soon.png'},
        {id: 5, price: 13.52, quantity: 0, bookTitle: 'No Excuses: The Power of ...', bookCover: 'Product-Image-Coming-Soon.png'},
        {id: 6, price: 14.55, quantity: 0, bookTitle: 'The 10X Rule The Only...', bookCover: 'Product-Image-Coming-Soon.png'},
        {id: 7, price: 9.19, quantity: 0, bookTitle: 'The Power of Positive Thinking', bookCover: 'Product-Image-Coming-Soon.png'},
        {id: 8, price: 13.26, quantity: 0, bookTitle: 'Awaken The Giant Within', bookCover: 'Product-Image-Coming-Soon.png'},
        {id: 9, price: 11.19, quantity: 0, bookTitle: 'The War of Art', bookCover: 'Product-Image-Coming-Soon.png'},
        {id: 10, price: 6.09, quantity: 0, bookTitle: "Man's Search for Meaning", bookCover: 'Product-Image-Coming-Soon.png'}];

var total = 0;

document.addEventListener("DOMContentLoaded", function (event) {
    var bookQuantityList = document.getElementsByClassName('quantity-value');
    var shoppingBtn = document.getElementById('s-cart');
    var promoCode = document.getElementById('promo-code-input')
    var promoCodeBtn = document.getElementById('promo-code-btn');
    var totalPrice = document.getElementById('total-price-ans');
    var btn0 = document.getElementById('add-cart-0');
    var btn1 = document.getElementById('add-cart-1');
    var btn2 = document.getElementById('add-cart-2');
    var btn3 = document.getElementById('add-cart-3');
    var btn4 = document.getElementById('add-cart-4');
    var btn5 = document.getElementById('add-cart-5');
    var btn6 = document.getElementById('add-cart-6');
    var btn7 = document.getElementById('add-cart-7');
    var btn8 = document.getElementById('add-cart-8');
    var btn9 = document.getElementById('add-cart-9');
    var btnList = [
        {
            btn: document.getElementById('add-cart-0')
        },
        {
            btn: document.getElementById('add-cart-1')
        },
        {
            btn: document.getElementById('add-cart-2')
        },
        {
            btn: document.getElementById('add-cart-3')
        },
        {
            btn: document.getElementById('add-cart-4')
        },
        {
            btn: document.getElementById('add-cart-5')
        },
        {
            btn: document.getElementById('add-cart-6')
        },
        {
            btn: document.getElementById('add-cart-7')
        },
        {
            btn: document.getElementById('add-cart-8')
        },
        {
            btn: document.getElementById('add-cart-9')
        }
    ];

    shoppingBtn.addEventListener('click', function (event) {
        var cartContainer = document.getElementById('cartContainer');
        if (cartContainer.style.right === '0px') {
            cartContainer.style.right = '-600px';
        } else {
            cartContainer.style.right = '0px';
        }
    });

    btn0.addEventListener('click', function () {
        var cartItemContainer = document.getElementById('cart-item-container');
        var cartItem = document.createElement('div');
        var cartItemImg = document.createElement('img');
        var itemDesc = document.createElement('div');
        var para1 = document.createElement('p');
        var para2 = document.createElement('p');
        var para3 = document.createElement('p');
        var qtyInput = document.createElement('input');
        var button1 = document.createElement('button');
        var button2 = document.createElement('button');
        bookList[0].quantity = bookQuantityList[0].value;
        var price = (bookList[0].quantity * bookList[0].price).toFixed(2);
        var nPrice = parseFloat(price);
        button1.textContent = 'DELETE';
        button2.textContent = 'UPDATE';
        para1.textContent = bookList[0].bookTitle;
        para2.textContent = "Qty:";
        para3.textContent = "$" + price;
        qtyInput.setAttribute('id', 'cart-item-qty');
        qtyInput.type = 'number';
        qtyInput.value = bookList[0].quantity;
        total += nPrice;
        cartItem.setAttribute('class', 'cart-item');
        itemDesc.setAttribute('class', 'item-description');
        cartItemImg.setAttribute('src', bookList[0].bookCover);
        button1.setAttribute('class', 'cart-item-btn');
        button2.setAttribute('class', 'cart-item-btn');
        cartItemContainer.appendChild(cartItem);
        cartItem.appendChild(cartItemImg);
        cartItem.appendChild(itemDesc);
        itemDesc.appendChild(para1);
        itemDesc.appendChild(para2);
        itemDesc.appendChild(qtyInput);
        itemDesc.appendChild(para3);
        cartItem.appendChild(button1);
        cartItem.appendChild(button2);

        totalPrice.textContent = "Total Price: $" + total.toFixed(2);

        button1.addEventListener('click', function () {
            cartItemContainer.removeChild(cartItem);
            total -= nPrice;
        });

        button2.addEventListener('click', function (event) {
            bookList[0].quantity = qtyInput.value;
            price = (bookList[0].quantity * bookList[0].price).toFixed(2);
            para3.textContent = price;
            var newNprice = parseFloat(price);
            total = (total - nPrice) + newNprice;
            nPrice = newNprice;
            totalPrice.textContent = "Total Price: $" + total.toFixed(2);
        });
    });

    btn1.addEventListener('click', function () {
        var cartItemContainer = document.getElementById('cart-item-container');
        var cartItem = document.createElement('div');
        var cartItemImg = document.createElement('img');
        var itemDesc = document.createElement('div');
        var para1 = document.createElement('p');
        var para2 = document.createElement('p');
        var para3 = document.createElement('p');
        var qtyInput = document.createElement('input');
        var button1 = document.createElement('button');
        var button2 = document.createElement('button');
        bookList[1].quantity = bookQuantityList[1].value;
        var price = (bookList[1].quantity * bookList[1].price).toFixed(2);
        var nPrice = parseFloat(price);
        button1.textContent = "DELETE";
        button2.textContent = "UPDATE";
        para1.textContent = bookList[1].bookTitle;
        para2.textContent = "Qty:";
        para3.textContent = "$" + price;
        qtyInput.setAttribute('id', 'cart-item-qty');
        qtyInput.type = 'number';
        qtyInput.value = bookList[1].quantity;
        total = total + nPrice;
        cartItem.setAttribute('class', 'cart-item'); 
        itemDesc.setAttribute('class', 'item-description');
        cartItemImg.setAttribute('src', bookList[2].bookCover);
        button1.setAttribute('class', 'cart-item-btn');
        button2.setAttribute('class', 'cart-item-btn');
        cartItemContainer.appendChild(cartItem);
        cartItem.appendChild(cartItemImg);
        cartItem.appendChild(itemDesc);
        itemDesc.appendChild(para1);
        itemDesc.appendChild(para2);
        itemDesc.appendChild(qtyInput);
        itemDesc.appendChild(para3);
        cartItem.appendChild(button1);
        cartItem.appendChild(button2);
        totalPrice.textContent = "Total Price: $" + total.toFixed(2);

        button1.addEventListener('click', function () {
            cartItemContainer.removeChild(cartItem);
            total -= nPrice;
        });

        button2.addEventListener('click', function (event) {
            bookList[1].quantity = qtyInput.value;
            price = (bookList[1].quantity * bookList[1].price).toFixed(2);
            para3.textContent = price;
            var newNprice = parseFloat(price);
            total = (total - nPrice) + newNprice;
            nPrice = newNprice;
            totalPrice.textContent = "Total Price: $" + total.toFixed(2);
        });
    });

    btn2.addEventListener('click', function () {
        var cartItemContainer = document.getElementById('cart-item-container');
        var cartItem = document.createElement('div');
        var cartItemImg = document.createElement('img');
        var itemDesc = document.createElement('div');
        var para1 = document.createElement('p');
        var para2 = document.createElement('p');
        var para3 = document.createElement('p');
        var qtyInput = document.createElement('input');
        var button1 = document.createElement('button');
        var button2 = document.createElement('button');
        bookList[2].quantity = bookQuantityList[2].value;
        var price = (bookList[2].quantity * bookList[2].price).toFixed(2);
        var nPrice = parseFloat(price);
        button1.textContent = "DELETE";
        button2.textContent = "UPDATE";
        para1.textContent = bookList[2].bookTitle;
        para2.textContent = "Qty:";
        para3.textContent = "$" + price;
        qtyInput.setAttribute('id', 'cart-item-qty');
        qtyInput.type = "number";
        qtyInput.value = bookList[2].quantity;
        total = total + nPrice;
        cartItem.setAttribute('class', 'cart-item');
        itemDesc.setAttribute('class', 'item-description');
        cartItemImg.setAttribute('src', bookList[2].bookCover);
        button1.setAttribute('class', 'cart-item-btn');
        button2.setAttribute('class', 'cart-item-btn');
        cartItemContainer.appendChild(cartItem);
        cartItem.appendChild(cartItemImg);
        cartItem.appendChild(itemDesc);
        itemDesc.appendChild(para1);
        itemDesc.appendChild(para2);
        itemDesc.appendChild(qtyInput);
        itemDesc.appendChild(para3);
        cartItem.appendChild(button1);
        cartItem.appendChild(button2);
        totalPrice.textContent = "Total Price: $" + total.toFixed(2);

        button1.addEventListener('click', function () {
            cartItemContainer.removeChild(cartItem);
            total -= nPrice;
        });

        button2.addEventListener('click', function (event) {
            bookList[2].quantity = qtyInput.value;
            price = (bookList[2].quantity * bookList[2].price).toFixed(2);
            para3.textContent = price;
            var newNprice = parseFloat(price);
            total = (total - nPrice) + newNprice;
            nPrice = newNprice;
            totalPrice.textContent = "Total Price: $" + total.toFixed(2);
        });
    });

    btn3.addEventListener('click', function () {
        var cartItemContainer = document.getElementById('cart-item-container');
        var cartItem = document.createElement('div');
        var cartItemImg = document.createElement('img');
        var itemDesc = document.createElement('div');
        var para1 = document.createElement('p');
        var para2 = document.createElement('p');
        var para3 = document.createElement('p');
        var qtyInput = document.createElement('input');
        var button1 = document.createElement('button');
        var button2 = document.createElement('button');
        bookList[3].quantity = bookQuantityList[3].value;
        var price = (bookList[3].quantity * bookList[3].price).toFixed(2);
        var nPrice = parseFloat(price);
        button1.textContent = "DELETE";
        button2.textContent = "UPDATE";
        para1.textContent = bookList[3].bookTitle;
        para2.textContent = "Qty:";
        para3.textContent = "$" + price;
        qtyInput.setAttribute('id', 'cart-item-qty');
        qtyInput.type = 'number';
        qtyInput.value = bookList[3].quantity;
        total = total + nPrice;
        cartItem.setAttribute('class', 'cart-item');
        itemDesc.setAttribute('class', 'item-description');
        cartItemImg.setAttribute('src', bookList[3].bookCover);
        button1.setAttribute('class', 'cart-item-btn');
        button2.setAttribute('class', 'cart-item-btn');
        cartItemContainer.appendChild(cartItem);
        cartItem.appendChild(cartItemImg);
        cartItem.appendChild(itemDesc);
        itemDesc.appendChild(para1);
        itemDesc.appendChild(para2);
        itemDesc.appendChild(qtyInput);
        itemDesc.appendChild(para3);
        cartItem.appendChild(button1);
        cartItem.appendChild(button2);
        totalPrice.textContent = "Total Price: $" + total.toFixed(2);
        
        button1.addEventListener('click', function () {
            cartItemContainer.removeChild(cartItem);
            total -= nPrice;
        });

        button2.addEventListener('click', function (event) {
            bookList[3].quantity = qtyInput.value;
            price = (bookList[3].quantity * bookList[3].price).toFixed(2);
            para3.textContent = price;
            var newNprice = parseFloat(price);
            total = (total - nPrice) + newNprice;
            nPrice = newNprice;
            totalPrice.textContent = "Total Price: $" + total.toFixed(2);
        });
    });

    btn4.addEventListener('click', function () {
        var cartItemContainer = document.getElementById('cart-item-container');
        var cartItem = document.createElement('div');
        var cartItemImg = document.createElement('img');
        var itemDesc = document.createElement('div');
        var para1 = document.createElement('p');
        var para2 = document.createElement('p');
        var para3 = document.createElement('p');
        var qtyInput = document.createElement('input');
        var button1 = document.createElement('button');
        var button2 = document.createElement('button');
        bookList[4].quantity = bookQuantityList[4].value;
        var price = (bookList[4].quantity * bookList[4].price).toFixed(2);
        var nPrice = parseFloat(price);
        button1.textContent = "DELETE";
        button2.textContent = "UPDATE";
        para1.textContent = bookList[4].bookTitle;
        para2.textContent = "Qty:";
        para3.textContent = "$" + (bookList[4].quantity * bookList[4].price).toFixed(2);
        qtyInput.setAttribute('id', 'cart-item-qty');
        qtyInput.type = 'number';
        qtyInput.value = bookList[4].quantity;
        total = total + nPrice;
        cartItem.setAttribute('class', 'cart-item');
        itemDesc.setAttribute('class', 'item-description');
        cartItemImg.setAttribute('src', bookList[4].bookCover);
        button1.setAttribute('class', 'cart-item-btn');
        button2.setAttribute('class', 'cart-item-btn');
        cartItemContainer.appendChild(cartItem);
        cartItem.appendChild(cartItemImg);
        cartItem.appendChild(itemDesc);
        itemDesc.appendChild(para1);
        itemDesc.appendChild(para2);
        itemDesc.appendChild(qtyInput);
        itemDesc.appendChild(para3);
        cartItem.appendChild(button1);
        cartItem.appendChild(button2);
        totalPrice.textContent = "Total Price: $" + total.toFixed(2);
        
        button1.addEventListener('click', function () {
            cartItemContainer.removeChild(cartItem);
            total -= nPrice;
        });

        button2.addEventListener('click', function (event) {
            bookList[4].quantity = qtyInput.value;
            price = (bookList[4].quantity * bookList[4].price).toFixed(2);
            para3.textContent = price;
            var newNprice = parseFloat(price);
            total = (total - nPrice) + newNprice;
            nPrice = newNprice;
            totalPrice.textContent = "Total Price: $" + total.toFixed(2);
        });
    });

    btn5.addEventListener('click', function () {
        var cartItemContainer = document.getElementById('cart-item-container');
        var cartItem = document.createElement('div');
        var cartItemImg = document.createElement('img');
        var itemDesc = document.createElement('div');
        var para1 = document.createElement('p');
        var para2 = document.createElement('p');
        var para3 = document.createElement('p');
        var qtyInput = document.createElement('input');
        var button1 = document.createElement('button');
        var button2 = document.createElement('button');
        bookList[5].quantity = bookQuantityList[5].value;
        var price = (bookList[5].quantity * bookList[5].price).toFixed(2);
        var nPrice = parseFloat(price);
        button1.textContent = "DELETE";
        button2.textContent = "UPDATE";
        para1.textContent = bookList[5].bookTitle;
        para2.textContent = "Qty:";
        para3.textContent = "$" + (bookList[5].quantity * bookList[5].price).toFixed(2);
        qtyInput.setAttribute('id', 'cart-item-qty');
        qtyInput.type = 'number';
        qtyInput.value = bookList[5].quantity;
        total = total + nPrice;
        cartItem.setAttribute('class', 'cart-item');
        itemDesc.setAttribute('class', 'item-description');
        cartItemImg.setAttribute('src', bookList[5].bookCover);
        button1.setAttribute('class', 'cart-item-btn');
        button2.setAttribute('class', 'cart-item-btn');
        cartItemContainer.appendChild(cartItem);
        cartItem.appendChild(cartItemImg);
        cartItem.appendChild(itemDesc);
        itemDesc.appendChild(para1);
        itemDesc.appendChild(para2);
        itemDesc.appendChild(qtyInput);
        itemDesc.appendChild(para3);
        cartItem.appendChild(button1);
        cartItem.appendChild(button2);
        totalPrice.textContent = "Total Price: $" + total.toFixed(2);
        button1.addEventListener('click', function () {
            cartItemContainer.removeChild(cartItem);
            total -= nPrice;
        });

        button2.addEventListener('click', function (event) {
            bookList[5].quantity = qtyInput.value;
            price = (bookList[5].quantity * bookList[5].price).toFixed(2);
            para3.textContent = price;
            var newNprice = parseFloat(price);
            total = (total - nPrice) + newNprice;
            nPrice = newNprice;
            totalPrice.textContent = "Total Price: $" + total.toFixed(2);
        });
    });

    btn6.addEventListener('click', function () {
        var cartItemContainer = document.getElementById('cart-item-container');
        var cartItem = document.createElement('div');
        var cartItemImg = document.createElement('img');
        var itemDesc = document.createElement('div');
        var para1 = document.createElement('p');
        var para2 = document.createElement('p');
        var para3 = document.createElement('p');
        var qtyInput = document.createElement('input');
        var button1 = document.createElement('button');
        var button2 = document.createElement('button');
        bookList[6].quantity = bookQuantityList[6].value;
        var price = (bookList[6].quantity * bookList[6].price).toFixed(2);
        var nPrice = parseFloat(price);
        button1.textContent = "DELETE";
        button2.textContent = "UPDATE";
        para1.textContent = bookList[6].bookTitle;
        para2.textContent = "Qty:";
        para3.textContent = "$" + (bookList[6].quantity * bookList[6].price).toFixed(2);
        qtyInput.setAttribute('id', 'cart-item-qty');
        qtyInput.type = 'number';
        qtyInput.value = bookList[6].quantity;
        total = total + nPrice;
        cartItem.setAttribute('class', 'cart-item');
        itemDesc.setAttribute('class', 'item-description');
        cartItemImg.setAttribute('src', bookList[6].bookCover);
        button1.setAttribute('class', 'cart-item-btn');
        button2.setAttribute('class', 'cart-item-btn');
        cartItemContainer.appendChild(cartItem);
        cartItem.appendChild(cartItemImg);
        cartItem.appendChild(itemDesc);
        itemDesc.appendChild(para1);
        itemDesc.appendChild(para2);
        itemDesc.appendChild(qtyInput);
        itemDesc.appendChild(para3);
        cartItem.appendChild(button1);
        cartItem.appendChild(button2);
        totalPrice.textContent = "Total Price: $" + total.toFixed(2);
        
        button1.addEventListener('click', function () {
            cartItemContainer.removeChild(cartItem);
            total -= nPrice;
        });

        button2.addEventListener('click', function (event) {
            bookList[6].quantity = qtyInput.value;
            price = (bookList[6].quantity * bookList[6].price).toFixed(2);
            para3.textContent = price;
            var newNprice = parseFloat(price);
            total = (total - nPrice) + newNprice;
            nPrice = newNprice;
            totalPrice.textContent = "Total Price: $" + total.toFixed(2);
        });
    });

    btn7.addEventListener('click', function () {
        var cartItemContainer = document.getElementById('cart-item-container');
        var cartItem = document.createElement('div');
        var cartItemImg = document.createElement('img');
        var itemDesc = document.createElement('div');
        var para1 = document.createElement('p');
        var para2 = document.createElement('p');
        var para3 = document.createElement('p');
        var qtyInput = document.createElement('input');
        var button1 = document.createElement('button');
        var button2 = document.createElement('button');
        bookList[7].quantity = bookQuantityList[7].value;
        var price = (bookList[7].quantity * bookList[7].price).toFixed(2);
        var nPrice = parseFloat(price);
        button1.textContent = "DELETE";
        button2.textContent = "UPDATE";
        para1.textContent = bookList[7].bookTitle;
        para2.textContent = "Qty:";
        para3.textContent = "$" + (bookList[7].quantity * bookList[7].price).toFixed(2);
        qtyInput.setAttribute('id', 'cart-item-qty');
        qtyInput.type = 'number';
        qtyInput.value = bookList[7].quantity;
        total = total + nPrice;
        cartItem.setAttribute('class', 'cart-item');
        itemDesc.setAttribute('class', 'item-description');
        cartItemImg.setAttribute('src', bookList[7].bookCover);
        button1.setAttribute('class', 'cart-item-btn');
        button2.setAttribute('class', 'cart-item-btn');
        cartItemContainer.appendChild(cartItem);
        cartItem.appendChild(cartItemImg);
        cartItem.appendChild(itemDesc);
        itemDesc.appendChild(para1);
        itemDesc.appendChild(para2);
        itemDesc.appendChild(qtyInput);
        itemDesc.appendChild(para3);
        cartItem.appendChild(button1);
        cartItem.appendChild(button2);
        totalPrice.textContent = "Total Price: $" + total.toFixed(2);
        
        button1.addEventListener('click', function () {
            cartItemContainer.removeChild(cartItem);
            total -= nPrice;
        });

        button2.addEventListener('click', function (event) {
            bookList[7].quantity = qtyInput.value;
            price = (bookList[7].quantity * bookList[7].price).toFixed(2);
            para3.textContent = price;
            var newNprice = parseFloat(price);
            total = (total - nPrice) + newNprice;
            nPrice = newNprice;
            totalPrice.textContent = "Total Price: $" + total.toFixed(2);
        });
    });

    btn8.addEventListener('click', function () {
        var cartItemContainer = document.getElementById('cart-item-container');
        var cartItem = document.createElement('div');
        var cartItemImg = document.createElement('img');
        var itemDesc = document.createElement('div');
        var para1 = document.createElement('p');
        var para2 = document.createElement('p');
        var para3 = document.createElement('p');
        var qtyInput = document.createElement('input');
        var button1 = document.createElement('button');
        var button2 = document.createElement('button');
        bookList[8].quantity = bookQuantityList[8].value;
        var price = (bookList[8].quantity * bookList[8].price).toFixed(2);
        var nPrice = parseFloat(price);
        button1.textContent = "DELETE";
        button2.textContent = "UPDATE";
        para1.textContent = bookList[8].bookTitle;
        para2.textContent = "Qty:";
        para3.textContent = "$" + (bookList[8].quantity * bookList[8].price).toFixed(2);
        qtyInput.setAttribute('id', 'cart-item-qty');
        qtyInput.type = 'number'; 
        qtyInput.value = bookList[8].quantity;
        total = total + nPrice;
        cartItem.setAttribute('class', 'cart-item');
        itemDesc.setAttribute('class', 'item-description');
        cartItemImg.setAttribute('src', bookList[8].bookCover);
        button1.setAttribute('class', 'cart-item-btn');
        button2.setAttribute('class', 'cart-item-btn');
        cartItemContainer.appendChild(cartItem);
        cartItem.appendChild(cartItemImg);
        cartItem.appendChild(itemDesc);
        itemDesc.appendChild(para1);
        itemDesc.appendChild(para2);
        itemDesc.appendChild(qtyInput);
        itemDesc.appendChild(para3);
        cartItem.appendChild(button1);
        cartItem.appendChild(button2);
        totalPrice.textContent = "Total Price: $" + total.toFixed(2);
        
        button1.addEventListener('click', function () {
            cartItemContainer.removeChild(cartItem);
            total -= nPrice;
        });

        button2.addEventListener('click', function (event) {
            bookList[8].quantity = qtyInput.value;
            price = (bookList[8].quantity * bookList[8].price).toFixed(2);
            para3.textContent = price;
            var newNprice = parseFloat(price);
            total = (total - nPrice) + newNprice;
            nPrice = newNprice;
            totalPrice.textContent = "Total Price: $" + total.toFixed(2);
        });
    });

    btn9.addEventListener('click', function () {
        var cartItemContainer = document.getElementById('cart-item-container');
        var cartItem = document.createElement('div');
        var cartItemImg = document.createElement('img');
        var itemDesc = document.createElement('div');
        var para1 = document.createElement('p');
        var para2 = document.createElement('p');
        var para3 = document.createElement('p');
        var qtyInput = document.createElement('input');
        var button1 = document.createElement('button');
        var button2 = document.createElement('button');
        bookList[9].quantity = bookQuantityList[9].value;
        var price = (bookList[9].quantity * bookList[9].price).toFixed(2);
        var nPrice = parseFloat(price);
        button1.textContent = "DELETE";
        button2.textContent = "UPDATE";
        para1.textContent = bookList[9].bookTitle;
        para2.textContent = "Qty:";
        para3.textContent = "$" + (bookList[9].quantity * bookList[9].price).toFixed(2);
        qtyInput.setAttribute('id', 'cart-item-qty');
        qtyInput.type = 'number'; 
        qtyInput.value = bookList[9].quantity;
        total = total + nPrice;
        cartItem.setAttribute('class', 'cart-item');
        itemDesc.setAttribute('class', 'item-description');
        cartItemImg.setAttribute('src', bookList[9].bookCover);
        button1.setAttribute('class', 'cart-item-btn');
        button2.setAttribute('class', 'cart-item-btn');
        cartItemContainer.appendChild(cartItem);
        cartItem.appendChild(cartItemImg);
        cartItem.appendChild(itemDesc);
        itemDesc.appendChild(para1);
        itemDesc.appendChild(para2);
        itemDesc.appendChild(qtyInput);
        itemDesc.appendChild(para3);
        cartItem.appendChild(button1);
        cartItem.appendChild(button2);
        totalPrice.textContent = "Total Price: $" + total.toFixed(2);
        
        button1.addEventListener('click', function () {
            cartItemContainer.removeChild(cartItem);
            total -= nPrice;
        });

        button2.addEventListener('click', function (event) {
            bookList[8].quantity = qtyInput.value;
            price = (bookList[8].quantity * bookList[8].price).toFixed(2);
            para3.textContent = price;
            var newNprice = parseFloat(price);
            total = (total - nPrice) + newNprice;
            nPrice = newNprice;
            totalPrice.textContent = "Total Price: $" + total.toFixed(2);
        });
    }); 

    promoCodeBtn.addEventListener('click', function (event) {
        var discountPrice = 0;
        
        if(promoCode.value === "CESARSUMMERSALE" || promoCode.value === 'cesarsummersale') {
            discountPrice = total * (10/100);
            total = total - discountPrice;
            totalPrice.textContent = "Total Price: $" + total.toFixed(2);
        } else {
            totalPrice.textContent = "Total Price: $" + total.toFixed(2);
        }
    });
});