// TODO: Create a class constructor named ForumItem that takes in 'authorName', 'text', and 'createdOn'.

class ForumItem
{
  constructor(authorName, text, createdOn)
  {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
  }
}

// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost extends ForumItem {
  constructor(authorName, title, text, createdOn) {
    super(this, authorName, text, createdOn);
    this.title = title;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends ForumItem {
  constructor(authorName, text, createdOn, reaction) {
    super(this, authorName, text, createdOn);
    this.reaction = reaction;
  }
}

// TODO: Create a new object using the Comment class constructor.

// TODO: Create a new object using the BlogPost class constructor.

const EpiccOMMENT = new Comment("Ethan", "THIS COMMENT ROCKS!", "2023/09/07", "👍");
const epicBlogPost = new BlogPost("Hussain", "So About That Guy Who Notified 400k People in the Epic Games Dev Group With a PR...", "That was WILD!", "2023/09/07");

// TODO: Log both newly created BlogPost and Comment to the console.

console.log(epicBlogPost);
console.log(EpiccOMMENT);
