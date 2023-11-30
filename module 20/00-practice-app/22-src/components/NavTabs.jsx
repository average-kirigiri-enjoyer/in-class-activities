// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
          //ternary if / else statement
          //checks if the page is currently on the home page
          //if it is, it sets the classname to nav-link active
          //otherwise, sets class name to nav-link

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //  TODO: Add a comment explaining what this logic is doing
          // clicking on the about link changes the page to the about page
          // runs a ternary if / else statement to check if the page is currently on the about page
          //if it is, it sets the classname to nav-link active
          //otherwise, sets class name to nav-link

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          //  TODO: Add a comment explaining what this logic is doing
          // clicking on the blog link changes the page to the blog page
          // runs a ternary if / else statement to check if the page is currently on the blog page
          //if it is, it sets the classname to nav-link active
          //otherwise, sets class name to nav-link

          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing
          // clicking on the contact link changes the page to the contact page
          // runs a ternary if / else statement to check if the page is currently on the contact page
          //if it is, it sets the classname to nav-link active
          //otherwise, sets class name to nav-link

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
