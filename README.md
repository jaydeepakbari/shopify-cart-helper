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

| Function Name | Usage |
| :---         |     :---      |
| cart.getCart | Get cart and all of the items |
| cart.addItem | Add items to the cart |
| cart.updateItem | Update an item in the cart |
| cart.updateItemById | Update an item in the cart by Id |
| cart.updateItemByLine | Update an item in the cart By Line |
| cart.removeItem | Remove items from the cart |
| cart.removeItemById | Remove items from the cart by item id |
| cart.removeItemByLine | Remove items from the cart by line |
| cart.setNote | Add cart notes |
| cart.setCartAttributes | Add cart attributes |
| cart.addToCartWithFile | Uploading a file and saving it to line item properties |
| cart.appendFileToLineById | You can add files and images to existing line |
| cart.appendFileToLineByIndex | You can add files and images to existing line items using index |
| cart.clearCart | Clear the cart |
| cart.updateQuantities | Updating the quantities or properties of multiple items at once |
| cart.getShippingRates | Get shipping rates |
| cart.cartRequiresShipping |  |
| cart.getProduct | Check cart does not require shipping |
