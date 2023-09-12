// TODO: Import the Validate class.

const Validate = require("../validate.js");

// TODO: Describe a testing suite for checking the functionality of the Validate class.

// TODO: Write a test that asserts that isPassword() returns false when passed an empty string.

describe("Validate", () =>
{
    describe("isPassword", () =>
    {
        it("should not be an empty string", () =>
        {
            const validate = new Validate();
            expect(validate.isPassword("")).toEqual(true);
        });
    });
});
