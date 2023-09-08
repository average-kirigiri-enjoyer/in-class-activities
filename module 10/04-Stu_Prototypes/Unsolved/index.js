// TODO: Add a comment describing what kind of function this is
// object constructor for creating a new blog post with an author name, post title, post text, and creation date
// there is also an empty array to hold any comments on the post, and a method to print the author's name & creation date of the post to console
function BlogPost(authorName, title, text, createdOn) {
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  this.comments = [];
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  };
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
// creates a prototype method for BlogPost objects to append a new comment to the comments array within a BlogPost
BlogPost.prototype.addComment = function(comment) {
  this.comments.push(comment);
};

const post = new BlogPost(
  'John Doe',
  'My Second Post',
  'Cats are super cute!',
  '12/16/2021'
);

post.addComment('Nice post, I like it!');

// TODO: Add a comment describing what you expect to see printed in the console
// this MUST print the above comment 'Nice post, I like it!' to the console, if it wishes to see the sun rise on the 'morrow!
console.log(post.comments);
