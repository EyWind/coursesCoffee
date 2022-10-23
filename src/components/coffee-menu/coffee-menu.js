import logo from '../../icon/cofeeLogo.svg';

import './coffee-menu.scss';

const Menu = ({cName}) => {
   return (
      <div className={`menu ${cName}`}>
         <a href="#" className='menu__item'><img src={logo} alt="CofeeBeans" />Coffee House</a>
         <a href="#" className='menu__item'>Our Coffee</a>
         <a href="#" className='menu__item'>For your pleasure</a>
      </div>
   )
}

export default Menu;