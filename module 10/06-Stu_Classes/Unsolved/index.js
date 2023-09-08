// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.

class BlogPost
{
    constructor(authorName, title, text, createdOn)
    {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.createdOn = createdOn;
        this.comments = [];
    }

    printMetaData()
    {
        console.log(`Created by ${this.authorName} on ${this.createdOn}`);
    };

    addComment(comment)
    {
        this.comments.push(comment);
    };
}

// TODO: Give BlogPost a property called 'comments' that is set to an empty array.

// TODO: Give BlogPost a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn)'.

// TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array.

// TODO: Create a class constructor called Comment that takes in 'authorName', 'text', 'createdOn', and 'reaction'.

class comment
{
    constructor(authorName, text, createdOn, reaction)
    {
        this.authorName = authorName;
        this.text = text;
        this.createdOn = createdOn;
        this.reaction = reaction;
    }

    printMetaData()
    {
        console.log(`Created by ${this.authorName} on ${this.createdOn} ${this.reaction}`);
    };
}



// TODO: Give Comment a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn) (reaction)'.

// TODO: Create a new object using the Comment class constructor.

// TODO: Create a new object using the BlogPost class constructor.

const EpiccOMMENT = new comment("Ethan", "THIS COMMENT ROCKS!", "2023/09/07", "👍");
const epicBlogPost = new BlogPost("Hussain", "So About That Guy Who Notified 400k People in the Epic Games Dev Group With a PR...", "That was WILD!", "2023/09/07");

// TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.

epicBlogPost.addComment(EpiccOMMENT);

// TODO: Print the meta data for both the BlogPost and the Comment to the console.

epicBlogPost.printMetaData();
EpiccOMMENT.printMetaData();
