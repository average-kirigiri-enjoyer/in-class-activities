// TODO: Create a class constructor named ForumItem that takes in 'authorName', 'text', and 'createdOn'.
/* ES6
class ForumItem
{
  constructor(authorName, text, createdOn)
  {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
  }
}

class BlogPost extends ForumItem
{
  constructor(authorName, title, text, createdOn)
  {
    super(authorName, text, createdOn);
    this.title = title;
    this.comments = [];
  }

  addComment(comment)
  {
    this.comments.push(comment);
  }
}

class Comment extends ForumItem
{
  constructor(authorName, text, createdOn, reaction)
  {
    super(authorName, text, createdOn);
    this.reaction = reaction;
  }
}*/

// ES5
function ForumItem(authorName, createdOn)
{
  this.authorName = authorName;
  this.createdOn = createdOn;
}

function titleAndText(title, text)
{
  this.title = title;
  this.text = text;
}

function BlogPost(authorName, title, text, createdOn)
{
  ForumItem.call(this, authorName, createdOn);
  titleAndText.call(this, title, text);
  this.comments = [];
}

BlogPost.prototype.addComment = function(comment)
{
  this.comments.push(comment);
}

function Comment(authorName, text, createdOn, reaction)
{
  ForumItem.call(this, authorName, createdOn);
  this.text = text;
  this.reaction = reaction;
}

// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.

// TODO: Create a new object using the Comment class constructor.

// TODO: Create a new object using the BlogPost class constructor.

const EpiccOMMENT = new Comment("Ethan", "THIS COMMENT ROCKS!", "2023/09/07", "👍");
const epicBlogPost = new BlogPost("Hussain", "So About That Guy Who Notified 400k People in the Epic Games Dev Group With a PR...", "That was WILD!", "2023/09/07");

// TODO: Log both newly created BlogPost and Comment to the console.

console.log(epicBlogPost);
console.log(EpiccOMMENT);
