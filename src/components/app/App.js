import { Component } from 'react';

import Header from '../coffee-header/coffee-header';
import About from '../coffee-about/coffee-about';
import Filter from '../coffee-filter/coffee-filter'
import Cards from '../coffee-cards/coffee-cards';
import Footer from '../coffee-footer/coffee-footer';

import './App.scss';
import coffeeImg from '../../img/coffeeGoods.png';

class App extends Component {

   constructor(props) {
      super(props);

      this.state = {
         cards: [
            {img: coffeeImg, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '8.89$', id: 1},
            {img: coffeeImg, name: 'AROMenya Coffee 1 kg', country: 'Kenya', price: '6.99$', id: 2},
            {img: coffeeImg, name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '7.50$', id: 3},
            {img: coffeeImg, name: 'BrazilISTICO Coffee 1 kg', country: 'Brazil', price: '4.39$', id: 4},
            {img: coffeeImg, name: 'AROMazil Coffee 1 kg', country: 'Brazil', price: '9.99$', id: 5},
            {img: coffeeImg, name: 'KenyaSTICO Coffee 1 kg', country: 'Kenya', price: '8.99$', id: 6},
         ],
         inpt: '',
         filter: 'All'
      }
   }

   searchFilter = (arr, inpt) => {
      if (inpt.length === 0) {
         return arr;
      }
      return arr.filter(e => e.name.indexOf(inpt) > -1);
   }

   onInputChange = (inpt) => {
      this.setState({inpt});
   }

   filterUpd = (arr, filter) => {
      if (filter.length === 0 || filter === 'All') {
         return arr;
      } 
      return arr.filter(e => e.country === filter);
   }

   onFilterChange = (filter) => {
      this.setState({filter});
   }

   render () {

      const {cards, inpt, filter} = this.state;

      const visibleElements = this.filterUpd(this.searchFilter(cards, inpt), filter);
      
      return (
         <div className="App">
            <Header/>
            <About/>
            <Filter 
               onInputChange={this.onInputChange} 
               onFilterChange={this.onFilterChange} 
               filter={filter}/>
            <Cards data={visibleElements}/>
            <Footer/>
         </div>
      );
   }
   
}

export default App;
