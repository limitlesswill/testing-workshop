const lab1 = require("../../../lab/lab1")

/*
    Testing the first function in Lab1 file
            capitalizeTextFirstChar
*/
describe("capitalizeTextFirstChar function : ", () => {
    /* 
                    first test case 
        1-test that the function takes a string it will return type to be a string
    */
    it("It should return a string type", function () {
        let actualValue = lab1.capitalizeTextFirstChar("first test case");
        let expectedType = jasmine.any(String);
        expect(actualValue).toEqual(expectedType);
    })

    /* 
                    second test case 
        2-test that the function takes a string and return it after capitalize it
    */
    it("It should capitalize each first character of each word in a string", function () {
        let actualValue = lab1.capitalizeTextFirstChar("wael abdulHaaq");
        let expectedValue = "Wael AbdulHaaq";
        expect(actualValue).toBe(expectedValue);
    })

    /* 
                    third test case 
        3-test if the function takes number it will throw type error says parameter should be string
    */
    it("It should throw an error when passing number input", function () {
        let fun = () => lab1.capitalizeTextFirstChar(50);
        expect(fun).toThrow();
    })
});

/*
    Testing the second function in Lab1 file
                createArray
*/
describe("createArray function : ", () => {
    /* 
                    first test case
        1-test that the return value of type array 
    */
    it("It should return an Array type", function () {
        let actualValue = lab1.createArray(7);
        let expectedType = jasmine.any(Array);
        expect(actualValue).toEqual(expectedType);
    })

    /* 
                    second test case
        2-test if we pass 2 it will return array of length 2 and test it includes 1
    */
    it("It should return an Array of size 2 where 2 is a number input and it should include number 1", function () {
        let actualValue = lab1.createArray(2);
        let expectedValue = 2;
        expect(actualValue).toHaveSize(expectedValue);
        expect(actualValue).toContain(1);
    })

    /* 
                    third test case 
        3-test if we pass 3 it will return array of length 3 and test it doesn't include 3
    */
    it("It should return an Array of size 3 where 3 is a number input and it should NOT include number 3", function () {
        let actualValue = lab1.createArray(3);
        let expectedValue = [0, 1, 2]
        expect(actualValue).toEqual(expectedValue);
        expect(actualValue).not.toContain(3);
    })
});

/*
    Testing the third function in Lab1 file
                random
*/
describe("random function : ", () => {
    /* 
                    first test case
        1-test that the return value is a number
    */
    it("It should return a Number data type", function () {
        let actualValue = lab1.random(1, 7);
        let expectedType = jasmine.any(Number);
        expect(actualValue).toEqual(expectedType);
    })


    /* 
                    second test case
        2-test if we pass 5,7 it will return a number >= 5 and <= 7
    */
    it("It should return a number within 5 to 7 [including both]", function () {
        let actualValue = lab1.random(5, 7);
        expect(actualValue >= 5 && actualValue <= 7).toBeTrue();
    })

    /*
                    third test case
        3-test if we pass 3 it will return NaN
    */
    it("It should return NaN", function () {
        let actualValue = lab1.random(3);
        expect(actualValue).toBeNaN();
    })
});

/*
    Testing the fourth function in Lab1 file
                stringReverse
*/
describe("stringReverse function : ", () => {

    /**
    * unifying the tests with a teardown function.
    * @param {string} ALI ALL TEST CASES' VALUE.
    **/
    let actualValue;
    /* here */
    beforeAll(() => {
        actualValue = lab1.stringReverse("ALI");
    })

    /* 
                    first test case
        1-test that the return value is a string
    */
    it("It should return a String type", function () {
        let expectedType = jasmine.any(String);
        expect(actualValue).toEqual(expectedType);
    })

    /* 
                    second test case
        2-test that return should be string after reversing it.
    */
    it("It should return a reversed string", function () {
        let expectedValue = "ILA";
        expect(actualValue).toBe(expectedValue);
    })

    /*
                    third test case
        3-test that return should have the same number of characters after reversing.
    */
    it("It should return the same characters' number", function () {
        let expectedValue = actualValue.length;
        expect(actualValue).toHaveSize(expectedValue);
    })
});