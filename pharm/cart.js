let transaction="";

fetch('http://127.0.0.1/pos/pharm1.0.2/salesData.php').then((data) => {
		return data.json();
	}).then((completedata)=>{
		// console.log(completedata);
		let data1="";
		completedata.map((values)=>{
			data1+= 
			`<div class="product-item">
			<div class="productID">Product ID: ${values.productID}</div>
			<div class="productname">Product: ${values.productName}</div>
			<div class="category">Category: ${values.category }</div>
			<div class="price">Price: #<span> ${values.price} </span></div>
			<div class="availability">Availability: ${values.availability}</div>
			<div class="cart-action">
				<input type="number" class="product-quantity" name="quantity" value="1" size="2" />
				<input type="submit" value="Add to Cart" class="add-to-cart" onClick="addToCart(this)" />
			</div>
			</div>`;
		});
		document.getElementById("product_item_container").innerHTML=data1;
		// console.log(data1);
	}).catch((err)=>{
		console.log(err);
	})

	showCartTable();


function addToCart(element) {
	var productParent = $(element).closest('div.product-item');

	var price = $(productParent).find('.price span').text();
	var productName = $(productParent).find('.productname').text();
	var quantity = $(productParent).find('.product-quantity').val();

	var cartItem = {
		productName: productName,
		price: price,
		quantity: quantity
	};
	var cartItemJSON = JSON.stringify(cartItem);

	var cartArray = new Array();
	// If javascript shopping cart session is not empty
	if (sessionStorage.getItem('shopping-cart')) {
		cartArray = JSON.parse(sessionStorage.getItem('shopping-cart'));
	}
	cartArray.push(cartItemJSON);

	var cartJSON = JSON.stringify(cartArray);
	sessionStorage.setItem('shopping-cart', cartJSON);
	showCartTable();
}

function emptyCart() {
	if (sessionStorage.getItem('shopping-cart')) {
		// Clear JavaScript sessionStorage by index
		sessionStorage.removeItem('shopping-cart');
		showCartTable();
	}
}

function checkOutcart(){
	// fetch('http://127.0.0.1/pos/pharm1.0.2/salesinsert.php?des=product1&qu=1&up=100&st=100').then((data) => {
		
	// 	})
	emptyCart();
	console.log(transaction);
}

function removeCartItem(index) {
	if (sessionStorage.getItem('shopping-cart')) {
		var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart'));
		sessionStorage.removeItem(shoppingCart[index]);
		showCartTable();
	}
}

function showCartTable() {
	var cartRowHTML = "";
	var cartRowHTMLx = "";
	var itemCount = 0;
	var grandTotal = 0;

	var price = 0;
	var quantity = 0;
	var subTotal = 0;

	if (sessionStorage.getItem('shopping-cart')) {
		var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart'));
		itemCount = shoppingCart.length;

		//Iterate javascript shopping cart array
		shoppingCart.forEach(function(item) {
			var cartItem = JSON.parse(item);
			price = parseFloat(cartItem.price);
			quantity = parseInt(cartItem.quantity);
			subTotal = price * quantity

			cartRowHTML += "<tr>" +
				"<td>" + cartItem.productName + "</td>" +
				"<td class='text-right'>#" + price.toFixed(2) + "</td>" +
				"<td class='text-right'>" + quantity + "</td>" +
				"<td class='text-right'>#" + subTotal.toFixed(2) + "</td>" +
				"</tr>";

			grandTotal += subTotal;
			// transaction = cartItem;
		});
		// shoppingCart.forEach(function(item) {
		// 	var cartItemx = JSON.parse(item);
		// 	price = parseFloat(cartItemx.price);
		// 	quantity = parseInt(cartItemx.quantity);
		// 	subTotal = price * quantity

		// 	cartRowHTMLx += cartItemx.productName + price.toFixed(0) + quantity + 
		// 	subTotal.toFixed(0);

		// 	// grandTotal += subTotal;
		// 	transaction = cartRowHTMLx;
		// });
	}

	$('#cartTableBody').html(cartRowHTML);
	$('#itemCount').text(itemCount);
	$('#totalAmount').text("#" + grandTotal.toFixed(2));
}


