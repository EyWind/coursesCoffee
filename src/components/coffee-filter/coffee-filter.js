import { Component } from 'react';

import './coffee-filter.scss';

class Filter extends Component {

   constructor(props) {
      super(props);
      this.state = {
         inpt: ''
      }
   }

   onInputChange = (e) => {
      let inpt = e.target.value;

      this.setState({inpt});

      this.props.onInputChange(inpt);
   }

   onFilterChange = (e) => {
      this.props.onFilterChange(e.target.getAttribute('label'));
   }
   
   render () {

      const buttonsObj = [
         {name: 'All'},
         {name: 'Brazil'},
         {name: 'Kenya'},
         {name: 'Columbia'}
      ];

      const btns = buttonsObj.map(({name}) => {

         const check = name === this.props.filter;
         const clazz = check ? 'active' : false;

         return (
            <button 
               type="button"
               className={`filter__filter_btns ${clazz}`}
               label={name}
               key={name}
               onClick={this.onFilterChange}>
                  {name}
            </button>
         )
      })
      
      return (
         <div className="filter">
            <div className="filter__search">
               <label htmlFor="search">Lookiing for</label>
               <input 
                  type="text" 
                  name="search" 
                  id="search" 
                  placeholder='start typing here...'
                  value={this.state.inpt}
                  onChange={this.onInputChange} />
            </div>
            <div className="filter__filter">
               <span>Or filter</span>
               {btns}
            </div>
        </div>
      )
   }
}

export default Filter;