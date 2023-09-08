// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'
// TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'

function BlogPost(authorName, title, text, createdOn)
{
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    this.printMetaData = function()
    {
        console.log(`Created by ${authorName} on ${createdOn}`);
    }
}

// TODO: Create a new object using the 'BlogPost' constructor

const blogPost1 = new BlogPost("Ethan", "Why I Call Myself A Wolf When I Code", "[REDACTED]", "2023/09/07");

// TODO: Call the 'printMetaData()' method on the new object

blogPost1.printMetaData();