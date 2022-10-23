import CoffeeDivider from '../coffee-divider/coffe-divider';

import aboutImg from '../../img/aboutBeans.png';


import './coffee-about.scss';

const About = () => {
   return (
      <div className="about">
         <div className="wrapper">
            <img src={aboutImg} alt="Girl drinking coffee" className="about__img" />
            <div className="about__content">
               <h1 className="about__title">About our beans</h1>
               <CoffeeDivider/>
               <div className="about__content__text">
                  <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                  <p>Afraid at highly months do things on at. Situation recommend objection do intention so questions. </p>
                  <p>As greatly removed calling pleased improve an. </p>
                  <p>Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
               </div>
            </div>
         </div>
         <div className="about__divider"></div>
      </div>
   )
}

export default About;