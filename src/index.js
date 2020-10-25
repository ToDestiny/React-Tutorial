import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css'


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
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
    <Image />
    <Title />
    <Author/>
    </article>
  )
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/51zbaGLMMfL._SY415_BO1,204,203,200_.jpg" alt="" />;

const Title = () => <h1>Obama: An Intimate Portrait</h1>;

const Author = () => <h4 style={{color:'#617d98', fontSize:'0.75rem', marginTop:'0.25rem'}}>Barack Obama</h4>

ReactDom.render(<BookList />, document.getElementById('root'));