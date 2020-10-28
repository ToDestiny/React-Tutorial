import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css'

// Setup vars
const books = [

  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51zbaGLMMfL._SY415_BO1,204,203,200_.jpg',
    author: 'Barack Obama',
    title: 'Obama: An Intimate Portraits'
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41aM4xOZxaL._SX277_BO1,204,203,200_.jpg',
    author: 'George Orwell',
    title: '1984'
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/513yGwokdcL._SX304_BO1,204,203,200_.jpg',
    author: 'George R. R. Martin',
    title: 'A Game of Thrones '
  },
];
  
  // Stateless functionnal component
// Always return JSX

// JSX Rules
// Return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting (parenthesis after return for no error)

// Nested Components, React Tools

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

const Book = ({ img, title, author }) => {
  //const Book = ({ img, title, author, children }) => {
  // Or we can say props and destructure with props.img etc

  // Also to get access to even more destructured props, I can author:{} on top
  // const { img, title, author } = props;
  
  // EVENT BASICS
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world')
  };

  const complexExample = (author) => {
    console.log(author)
  };

  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        complex example
      </button>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'));