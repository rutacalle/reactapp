import React from 'react';

import './App.css';

import Menu from './Menu';
import List from './List';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {

      books: [
        {id:0, rating: 4, title: 'Historia de fantasmas', image: 'pelicula01.jpg'},
        { id: 1, rating: 3, title: 'El hombre duplicado', image: 'pelicula02.jpg' },
        { id: 2, rating: 5, title: 'El cubo', image: 'pelicula03.jpg' },
        { id: 3, rating: 5, title: 'Cronocrímenes', image: 'pelicula04.jpg' },
        { id: 4, rating: 5, title: 'Midsomma', image: 'pelicula05.jpg' },
      ]
      
    };

  }

  render() {
     return(
    
    <div className="app">
      
      <Menu title="MyApp"/>
         <List items={this.state.books}/>
      </div>
     
    
  );
  }
 
}

export default App;
