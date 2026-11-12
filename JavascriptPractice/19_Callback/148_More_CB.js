function test(item, callMeWhenDone) {
    console.log("Hi start the Testcase", item);
    callMeWhenDone();
    console.log("in main method");
}

test("Verify the login page is working", async (page) =>{
    console.log("in sub method");
});