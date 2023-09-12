const Validate = require('../validate.js');

describe('Validate', () => {
  // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.

  describe("isPassword", () =>
  {
    it("should return false if the password is less than 8 characters"), () => 
    {
      const validate = new Validate();
      expect(validate.isPassword("aaaaaaa")).toEqual(false);
    }
  });

  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
  // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
});
