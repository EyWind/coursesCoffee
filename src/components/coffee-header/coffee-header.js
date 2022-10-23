import Menu from '../coffee-menu/coffee-menu';


import './coffee-header.scss';

const Header = () => {
   return (
      <div className="header">
         <Menu cName="menu-head"/>
         <h1 className='header__title'>Our Coffee</h1>
      </div>
   )
}

export default Header;