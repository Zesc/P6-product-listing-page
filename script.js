var bookList = [{id: 1, price: 10.80, quantity: 0, bookTitle: "The Alchemist", bookCover: "Product-Image-Coming-Soon.png"},
        {id: 2, price: 15.68, quantity: 0, bookTitle: 'The Mastery', bookCover: 'Product-Image-Coming-Soon.png'},
        {id: 3, price: 13.95, quantity: 0, bookTitle: 'Think and Grow Rich', bookCover: 'Product-Image-Coming-Soon.png'},
        {id: 4, price: 5.99, quantity: 0, bookTitle: 'As a Man Thinked', bookCover: 'Product-Image-Coming-Soon.png'},
        {id: 5, price: 13.52, quantity: 0, bookTitle: 'No Excuses: The Power of Self-Discipline', bookCover: 'Product-Image-Coming-Soon.png'},
        {id: 6, price: 14.55, quantity: 0, bookTitle: 'The 10X Rule The Only...', bookCover: 'Product-Image-Coming-Soon.png'},
        {id: 7, price: 9.19, quantity: 0, bookTitle: 'The Power of Positive Thinking', bookCover: 'Product-Image-Coming-Soon.png'},
        {id: 8, price: 13.26, quantity: 0, bookTitle: 'Awaken The Giant Within', bookCover: 'Product-Image-Coming-Soon.png'},
        {id: 9, price: 11.19, quantity: 0, bookTitle: 'The War of Art', bookCover: 'Product-Image-Coming-Soon.png'},
        {id: 10, price: 6.09, quantity: 0, bookTitle: "Man's Search for Meaning", bookCover: 'Product-Image-Coming-Soon.png'}];

var total = 0;

document.addEventListener("DOMContentLoaded", function (event) {
    var bookQuantityList = document.getElementsByClassName('quantity-value');
    var shoppingBtn = document.getElementById('s-cart');
    shoppingBtn.addEventListener('click', function (event) {
        var cartContainer = document.getElementById('cartContainer');
        if (cartContainer.style.right === '0px') {
            cartContainer.style.right = '-600px';
        } else {
            cartContainer.style.right = '0px';
        }
    });
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

    var totalPrice = document.getElementById('total-price-ans');
    var btn0 = document.getElementById('add-cart-0');
    btn0.addEventListener('click', function () {
        bookList[0].quantity = bookQuantityList[0].value;
        var cartItemContainer = document.getElementById('cart-item-container');
        var cartItem = document.createElement('div');
        var cartItemImg = document.createElement('img');
        var itemDesc = document.createElement('div');
        var para1 = document.createElement('p');
        var para2 = document.createElement('p');
        var para3 = document.createElement('p');
        var button1 = document.createElement('button');
        var button2 = document.createElement('button');
        var price = (bookList[0].quantity * bookList[0].price).toFixed(2);
        var nPrice = parseFloat(price);
        button1.textContent = 'DELETE';
        button2.textContent = 'UPDATE';
        para1.textContent = bookList[0].bookTitle;
        para2.textContent = bookList[0].quantity;
        para3.textContent = "$" + price;
        total = total + nPrice;
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
        itemDesc.appendChild(para3);
        cartItem.appendChild(button1);
        cartItem.appendChild(button2);
        totalPrice.textContent = "Total Price: $" + total.toFixed(2);
        console.log(typeof total, typeof nPrice);
    });
    var btn1 = document.getElementById('add-cart-1');
    btn1.addEventListener('click', function () {
        bookList[1].quantity = bookQuantityList[1].value;
        var cartItemContainer = document.getElementById('cart-item-container');
        var cartItem = document.createElement("div");
        var cartItemImg = document.createElement("img");
        var itemDesc = document.createElement("div");
        var para1 = document.createElement("p");
        var para2 = document.createElement("p");
        var para3 = document.createElement("p");
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        var price = (bookList[1].quantity * bookList[1].price).toFixed(2);
        button1.textContent = "DELETE";
        button2.textContent = "UPDATE";
        para1.textContent = bookList[1].bookTitle;
        para2.textContent = bookList[1].quantity;
        para3.textContent = "$" + price;
        bookList[10].total = parseFloat(bookList[10].total) + parseFloat(price);
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
        itemDesc.appendChild(para3);
        cartItem.appendChild(button1);
        cartItem.appendChild(button2);
        var totalPrice = document.getElementById('total-price-ans');
        totalPrice.textContent = "Total Price: $" + bookList[10].total;
    });

    var btn2 = document.getElementById('add-cart-2');
    btn2.addEventListener('click', function () {
        bookList[2].quantity = bookQuantityList[2].value;
        var cartItemContainer = document.getElementById('cart-item-container');
        var cartItem = document.createElement("div");
        var cartItemImg = document.createElement("img");
        var itemDesc = document.createElement("div");
        var para1 = document.createElement("p");
        var para2 = document.createElement("p");
        var para3 = document.createElement("p");
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        var price = 
        button1.textContent = "DELETE";
        button2.textContent = "UPDATE";
        para1.textContent = bookList[2].bookTitle;
        para2.textContent = bookList[2].quantity;
        para3.textContent = "$" + (bookList[2].quantity * bookList[2].price).toFixed(2);
        bookList[10].total = (bookList[10].total + parseFloat((bookList[2].quantity * bookList[2].price).toFixed(2))).toFixed(2);
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
        itemDesc.appendChild(para3);
        cartItem.appendChild(button1);
        cartItem.appendChild(button2);
        var totalPrice = document.getElementById('total-price-ans');
        totalPrice.textContent = "Total Price: $" + bookList[10].total;
    });

    var btn3 = document.getElementById('add-cart-3');
    btn3.addEventListener('click', function () {
        bookList[3].quantity = bookQuantityList[3].value;
        var cartItemContainer = document.getElementById('cart-item-container');
        var cartItem = document.createElement("div");
        var cartItemImg = document.createElement("img");
        var itemDesc = document.createElement("div");
        var para1 = document.createElement("p");
        var para2 = document.createElement("p");
        var para3 = document.createElement("p");
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        button1.textContent = "DELETE";
        button2.textContent = "UPDATE";
        para1.textContent = bookList[3].bookTitle;
        para2.textContent = bookList[3].quantity;
        para3.textContent = "$" + (bookList[3].quantity * bookList[3].price).toFixed(2);
        bookList[10].total = (bookList[10].total + parseFloat((bookList[3].quantity * bookList[3].price).toFixed(2))).toFixed(2);
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
        itemDesc.appendChild(para3);
        cartItem.appendChild(button1);
        cartItem.appendChild(button2);
        var totalPrice = document.getElementById('total-price-ans');
        totalPrice.textContent = "Total Price: $" + bookList[10].total;
    });

    var btn4 = document.getElementById('add-cart-4');
    btn4.addEventListener('click', function () {
        bookList[4].quantity = bookQuantityList[4].value;
        var cartItemContainer = document.getElementById('cart-item-container');
        var cartItem = document.createElement("div");
        var cartItemImg = document.createElement("img");
        var itemDesc = document.createElement("div");
        var para1 = document.createElement("p");
        var para2 = document.createElement("p");
        var para3 = document.createElement("p");
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        button1.textContent = "DELETE";
        button2.textContent = "UPDATE";
        para1.textContent = bookList[4].bookTitle;
        para2.textContent = bookList[4].quantity;
        para3.textContent = "$" + (bookList[4].quantity * bookList[4].price).toFixed(2);
        bookList[10].total = (bookList[10].total + parseFloat((bookList[4].quantity * bookList[4].price).toFixed(2))).toFixed(2);
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
        itemDesc.appendChild(para3);
        cartItem.appendChild(button1);
        cartItem.appendChild(button2);
        var totalPrice = document.getElementById('total-price-ans');
        totalPrice.textContent = "Total Price: $" + bookList[10].total;
    });

    var btn5 = document.getElementById('add-cart-5');
    btn5.addEventListener('click', function () {
        bookList[5].quantity = bookQuantityList[5].value;
        var cartItemContainer = document.getElementById('cart-item-container');
        var cartItem = document.createElement("div");
        var cartItemImg = document.createElement("img");
        var itemDesc = document.createElement("div");
        var para1 = document.createElement("p");
        var para2 = document.createElement("p");
        var para3 = document.createElement("p");
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        button1.textContent = "DELETE";
        button2.textContent = "UPDATE";
        para1.textContent = bookList[5].bookTitle;
        para2.textContent = bookList[5].quantity;
        para3.textContent = "$" + (bookList[5].quantity * bookList[5].price).toFixed(2);
        bookList[10].total = (bookList[10].total + parseFloat((bookList[5].quantity * bookList[5].price).toFixed(2))).toFixed(2);
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
        itemDesc.appendChild(para3);
        cartItem.appendChild(button1);
        cartItem.appendChild(button2);
        var totalPrice = document.getElementById('total-price-ans');
        totalPrice.textContent = "Total Price: $" + bookList[10].total;
    });

    var btn6 = document.getElementById('add-cart-6');
    btn6.addEventListener('click', function () {
        bookList[6].quantity = bookQuantityList[6].value;
        var cartItemContainer = document.getElementById('cart-item-container');
        var cartItem = document.createElement("div");
        var cartItemImg = document.createElement("img");
        var itemDesc = document.createElement("div");
        var para1 = document.createElement("p");
        var para2 = document.createElement("p");
        var para3 = document.createElement("p");
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        button1.textContent = "DELETE";
        button2.textContent = "UPDATE";
        para1.textContent = bookList[6].bookTitle;
        para2.textContent = bookList[6].quantity;
        para3.textContent = "$" + (bookList[6].quantity * bookList[6].price).toFixed(2);
        bookList[10].total = (bookList[10].total + parseFloat((bookList[6].quantity * bookList[6].price).toFixed(2))).toFixed(2);
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
        itemDesc.appendChild(para3);
        cartItem.appendChild(button1);
        cartItem.appendChild(button2);
        var totalPrice = document.getElementById('total-price-ans');
        totalPrice.textContent = "Total Price: $" + bookList[10].total;
    });

    var btn7 = document.getElementById('add-cart-7');
    btn7.addEventListener('click', function () {
        bookList[7].quantity = bookQuantityList[7].value;
        var cartItemContainer = document.getElementById('cart-item-container');
        var cartItem = document.createElement("div");
        var cartItemImg = document.createElement("img");
        var itemDesc = document.createElement("div");
        var para1 = document.createElement("p");
        var para2 = document.createElement("p");
        var para3 = document.createElement("p");
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        button1.textContent = "DELETE";
        button2.textContent = "UPDATE";
        para1.textContent = bookList[7].bookTitle;
        para2.textContent = bookList[7].quantity;
        para3.textContent = "$" + (bookList[7].quantity * bookList[7].price).toFixed(2);
        bookList[10].total = (bookList[10].total + parseFloat((bookList[7].quantity * bookList[7].price).toFixed(2))).toFixed(2);
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
        itemDesc.appendChild(para3);
        cartItem.appendChild(button1);
        cartItem.appendChild(button2);
        var totalPrice = document.getElementById('total-price-ans');
        totalPrice.textContent = "Total Price: $" + bookList[10].total;
    });

    var btn8 = document.getElementById('add-cart-8');
    btn8.addEventListener('click', function () {
        bookList[8].quantity = bookQuantityList[8].value;
        var cartItemContainer = document.getElementById('cart-item-container');
        var cartItem = document.createElement("div");
        var cartItemImg = document.createElement("img");
        var itemDesc = document.createElement("div");
        var para1 = document.createElement("p");
        var para2 = document.createElement("p");
        var para3 = document.createElement("p");
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        button1.textContent = "DELETE";
        button2.textContent = "UPDATE";
        para1.textContent = bookList[8].bookTitle;
        para2.textContent = bookList[8].quantity;
        para3.textContent = "$" + (bookList[8].quantity * bookList[8].price).toFixed(2);
        bookList[10].total = (bookList[10].total + parseFloat((bookList[8].quantity * bookList[8].price).toFixed(2))).toFixed(2);
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
        itemDesc.appendChild(para3);
        cartItem.appendChild(button1);
        cartItem.appendChild(button2);
        var totalPrice = document.getElementById('total-price-ans');
        totalPrice.textContent = "Total Price: $" + bookList[10].total;
    });

    var btn9 = document.getElementById('add-cart-9');
    btn9.addEventListener('click', function () {
        bookList[9].quantity = bookQuantityList[9].value;
        var cartItemContainer = document.getElementById('cart-item-container');
        var cartItem = document.createElement("div");
        var cartItemImg = document.createElement("img");
        var itemDesc = document.createElement("div");
        var para1 = document.createElement("p");
        var para2 = document.createElement("p");
        var para3 = document.createElement("p");
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        button1.textContent = "DELETE";
        button2.textContent = "UPDATE";
        para1.textContent = bookList[9].bookTitle;
        para2.textContent = bookList[9].quantity;
        para3.textContent = "$" + (bookList[9].quantity * bookList[9].price).toFixed(2);
        bookList[10].total = (bookList[10].total + parseFloat((bookList[9].quantity * bookList[9].price).toFixed(2))).toFixed(2);
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
        itemDesc.appendChild(para3);
        cartItem.appendChild(button1);
        cartItem.appendChild(button2);
        var totalPrice = document.getElementById('total-price-ans');
        totalPrice.textContent = "Total Price: $" + bookList[10].total;
    }); 
});