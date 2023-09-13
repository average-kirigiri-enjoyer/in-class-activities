const BlogPost = require('../blogPost.js');

describe('BlogPost', () =>
{
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.
  
  describe("authorName", () =>
  {
    it("should throw an error if the author name is less than 2 characters long", () =>
    {
      const authorName = "a";
      expect(() => 
      {
        new BlogPost(authorName);
      }).toThrow("Author must be at least 2 characters long.");
    });
  });
  
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.

  describe("authorName", () =>
  {
    it("should throw an error if the author name contains special characters other than underscores", () =>
    {
      const authorName = "a@";
      expect(() =>
      {
        new BlogPost(authorName);
      }).toThrow("Author must only contain letters, numbers, dashes, and underscores")
    });
  });
});
