import './coffee-cards.scss';

const Cards = ({data}) => {


   const cardsArr = data.map(({img, name, country, price, id}) => {

      return (
         <div className="cards__item" key={id}>
            <div className='cards__img'><img src={img} alt="goods" /></div>
            <div className="cards__name">{name}</div>
            <div className="cards__country">{country}</div>
            <div className="cards__price">{price}</div>
         </div>
      )
   })
   
   return (
      <div className="cards">
         {cardsArr}
      </div>
   )
}

export default Cards;