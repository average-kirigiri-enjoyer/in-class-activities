const Validate = require('../validate.js');

describe('Validate', () => {
  // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.

  describe("isPassword", () =>
  {
    it("should return false if the password is less than 8 characters", () =>
    {
      const validate = new Validate();
      expect(validate.isPassword("aaaaaaa")).toEqual(false);
    });
  });

  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.

  describe("isPassword", () =>
  {
    it("should return false if the password does not contain at least one uppercase character", () =>
    {
      const validate = new Validate();
      expect(validate.isPassword("aaaaaaaa")).toEqual(false);
    });
  });

  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.

  describe("isPassword", () =>
  {
    it("should return false if the password does not contain at least one lowercase character", () =>
    {
      const validate = new Validate();
      expect(validate.isPassword("AAAAAAAA")).toEqual(false);
    });
  });

  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.

  describe("isPassword", () =>
  {
    it("should return false if the password does not contain at least one number", () =>
    {
      const validate = new Validate();
      expect(validate.isPassword("AAAAaaaa")).toEqual(false);
    });
  });

  // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.

  describe("isPassword", () =>
  {
    it("should return true if the password complies with all the above criteria", () =>
    {
      const validate = new Validate();
      expect(validate.isPassword("AA11aa22")).toEqual(true);
    });
  });

});
