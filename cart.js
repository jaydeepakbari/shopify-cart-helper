var cart = {
	getCart: async function() {
	    const result = await fetch("/cart.json");

	    if (result.status === 200) {
	        return result.json();
	    }

	    throw new Error(`Failed to get request, Shopify returned ${result.status} ${result.statusText}`);
	},

	addItem: async function(variantId, quantity) {
	    const result = await fetch("/cart/add.json", {
	        method: "POST",
	        headers: {
	            "Content-Type": "application/json",
	            "Accept": "application/json"
	        },
	        body: JSON.stringify({
	            id: variantId,
	            quantity: quantity
	        })
	    })
	},

	updateItem: async function(data) {
	    const result = await fetch("/cart/change.json", {
	        method: "POST",
	        headers: {
	            "Content-Type": "application/json",
	            "Accept": "application/json"
	        },
	        body: JSON.stringify(data)
	    });

	    return cart.json();
	},

	updateItemById: async function(lineItemId, newQuantity, newProperties = {}) {
	    return await updateItem({
	        id: lineItemId,
	        quantity: newQuantity,
	        properties: newProperties
	    });
	},

	updateItemByLine: async function(oneBasedLineIndex, newQuantity, newProperties = {}) {
	    return await updateItem({
	        line: oneBasedLineIndex,
	        quantity: newQuantity,
	        properties: newProperties
	    });
	},

	removeItem: async function(data) {
	    const result = await fetch("/cart/change.json", {
	        method: "POST",
	        headers: {
	            "Content-Type": "application/json",
	            "Accept": "application/json"
	        },
	        body: JSON.stringify({
	            ...data,
	            quantity: 0
	        })
	    });

	    return result.json();
	},

	removeItemById: async function(id) {
	    return await removeItem({ id: id });
	},

	removeItemByLine: async function(oneBasedLineIndex) {
	    return await removeItem({ line: oneBasedLineIndex });
	},

	setNote: async function(note) {
	    const result = await fetch("/cart/update.json", {
	        method: "POST",
	        headers: {
	            "Content-Type": "application/json",
	            "Accept": "application/json"
	        },
	        body: JSON.stringify({
	            note: note
	        })
	    });

	    return result.json();
	},

	setCartAttributes: async function(attributes = {}) {
	    const result = await fetch("/cart/update.json", {
	        method: "POST",
	        headers: {
	            "Content-Type": "application/json",
	            "Accept": "application/json"
	        },
	        body: JSON.stringify({
	            attributes: attributes 
	        })
	    });

	    return result.json();
	},

	addToCartWithFile: async function(variantId, file) {
	    const data = new FormData();
	    data.append("properties[file]", file);
	    data.append("id", variantId);

	    const result = await fetch("/cart/add.json", {
	        method: "POST",
	        body: data
	    });

	    return result.json();
	},

	changeItem: async function(data) {
	    const result = await fetch("/cart/change.json", {
	        method: "POST",
	        body: data
	    });

	    return result.json();
	},

	appendFileToLineById: async function(variantId, quantity, file) {
	    const data = new FormData();
	    data.append("id", variantId);
	    data.append("properties[file]", file);
	    data.append("quantity", quantity);

	    return await changeItem(data);
	},

	appendFileToLineByIndex: async function(oneBasedLineIndex, quantity, file) {
	    const data = new FormData();
	    data.append("line", oneBasedLineIndex);
	    data.append("properties[file]", file);
	    data.append("quantity", quantity);

	    return await changeItem(data);
	},

	clearCart: async function() {
	    const result = await fetch({
	        method: "POST",
	        headers: {
	            "Accept": "application/json"
	        }
	    });

	    return result.json();
	},

	updateQuantities: async function(data) {
	    const result = await fetch({
	        method: "POST",
	        headers: {
	            "Content-Type": "application/json",
	            "Accept": "application/json"
	        },
	        bodoy: JSON.stringify({ updates: data });
	    });
	},


	getShippingRates: async function(zip, state, country) {
	    const url = encodeURI(`shipping_address[zip]=${zip}&shipping_address[country]=${country}&shipping_address[province]=${state}`);
	    const result = await fetch(`/cart/shipping_rates.json?${url}`, {
	        method: "GET",
	        headers: {
	            "Accept": "application/json"
	        }
	    });

	    return result.json();
	},

	cartRequiresShipping: async function() {
	    const cart = await fetch("/cart.json", {
	        method: "GET",
	        headers: {
	            "Accept": "application/json"
	        }
	    });

	    return cart.items.some(i => i.requires_shipping === true);
	},

	getProduct: async function(handle) {
	    const result = await fetch(`/products/${handle}.json`, {
	        headers: {
	            "Content-Type": "application/json",
	            "Accept": "application/json"
	        }
	    });

	    return result.json();
	}
}
