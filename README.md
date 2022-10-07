# Shopify cart helper

This Javascript library that makes it easy to add dynamic cart features to Shopify themes.


## Features

- Get cart and all of the items
- Add items to the cart
- Update an item in the cart
- Remove items from the cart
- Add cart notes
- Add cart attributes
- Uploading a file and saving it to line item properties
- Clear the cart
- Updating the quantities or properties of multiple items at once
- Get shipping rates
- Get a product

## Usage/Examples

| Function Name | Usage | Example |
| :---         |     :---      |     :---      |
| cart.getCart | Get cart and all of the items | await getCart() |
| cart.addItem | Add items to the cart | await addItem(123456, 1) |
| cart.updateItemById | Update an item in the cart by Id | await updateItemById(123456, 2, { updated: "true" }) |
| cart.updateItemByLine | Update an item in the cart By Line | await updateItemByLine(2, 2, { name: "Jaydeep" }) |
| cart.removeItemById | Remove items from the cart by item id | await removeItemById(1234) |
| cart.removeItemByLine | Remove items from the cart by line | await removeItemById(1234) |
| cart.setNote | Add cart notes | await setNote("Cart Note Text") |
| cart.setCartAttributes | Add cart attributes | await setCartAttributes({ LocalTime: new Date()) |
| cart.addToCartWithFile | Uploading a file and saving it to line item properties | const input = document.querySelector("#file-input"); const newLineItem = await addToCartWithFile(123456, input.files[0]); |
| cart.appendFileToLineById | You can add files and images to existing line | |
| cart.appendFileToLineByIndex | You can add files and images to existing line items using index | |
| cart.clearCart | Clear the cart | await clearCart() |
| cart.updateQuantities | Updating the quantities or properties of multiple items at once |  await updateQuantities([{id: 123, quantity: 2}, { id: 234, quantity: 4 }]) |
| cart.getShippingRates | Get shipping rates | await getShippingRates("12345", "Minnesota", "United States") | 
| cart.cartRequiresShipping | Check cart does not require shipping | await.cartRequiresShipping() |
| cart.getProduct | get the product JSON data by handle | await getProduct("my-fabulous-product") |
