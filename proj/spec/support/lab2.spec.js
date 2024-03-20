const lab2 = require("../../../lab/lab2")

/*
    Testing User Class in Lab2 file
*/
describe("User Class : ", () => {

    /**
     * a teardown function to initialize lab2 User class
     * @param {string} user an object of User("username","password").
     * @type { lab2 }
    **/
    let user;
    /* here */
    beforeAll(() => {
        user = new lab2("username", "password");
    })

    /*
        Resetting User.cart Array before each test
    */
    beforeEach(() => {
        user.cart = [];
    })

    describe("addToCart function : ", () => {
        /* 
                            addToCart
            --test that the function takes an Object and store it in an Array
        */
        it("Expect to store an object in an Array", function () {
            /* Arrange */
            let param = { name: "name", price: 333 };
            user.addToCart(param);

            /* Act */
            let actualValue = user.cart;
            let expectedValue = jasmine.objectContaining(param);

            /* Assert */
            expect(actualValue).toContain(expectedValue);
        })
    });

    describe("calculateTotalCartPrice function : ", () => {

        let param = [];
        beforeEach(() => {
            param[0] = { name: "name1", price: 333 };
            param[1] = { name: "name2", price: 333 };
            param[2] = { name: "name3", price: 333 };
            user.addToCart(param[0]);
            user.addToCart(param[1]);
            user.addToCart(param[2]);
        })
        /* 
                        calculateTotalCartPrice
            --test that the function correctly return a Number data type
        */
        it("Expect to return a Number DataType", function () {
            let actualValue = user.calculateTotalCartPrice();
            let expectedValue = jasmine.any(Number);
            expect(actualValue).toEqual(expectedValue);
        })

        /* 
                        calculateTotalCartPrice
            --test that the function correctly calculate the total price of input Objects
        */
        it("Expect to return a value of 999", function () {
            let actualValue = user.calculateTotalCartPrice();
            let expectedValue = param.reduce((total, ele) => total + ele.price, 0);
            expect(actualValue).toBe(expectedValue);
        })
    });
});

