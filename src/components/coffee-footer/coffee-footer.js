import Menu from '../coffee-menu/coffee-menu';
import CoffeeDivider from '../coffee-divider/coffe-divider';

import './coffee-footer.scss';

const Footer = () => {
   return (
      <div className="footer">
         <Menu cName="menu-footer"/>
         <CoffeeDivider/>
      </div>
   )
}
export default Footer;