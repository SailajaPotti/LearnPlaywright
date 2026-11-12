function placeOrder(item, calback){
    console.log("Placing an order");
    calback();
    console.log("Order Placed", item);
}


// // First Way
// function CompleteOrderPrint(){
//     console.log("Normal Fn");
// }

// placeOrder("Burger", CompleteOrderPrint);



// // Sencond Way Anoy
// placeOrder("Burger", function(){
//     console.log("Order is ready!, pick it up!");
// });


// Third Way - Arrow Fn
placeOrder("Burger", () => {
    console.log("Arrow Fn, I am also a function without name!")
});

// test('has title', async ({ page }) => {

// });


// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await expect(page).toHaveTitle(/Playwright/);
// });