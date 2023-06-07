import ironhack from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

import './App.css';
import Image from './Components/Image';
import Text from './Components/Text';
import Text2 from './Components/Text2';
import Button from './Components/Button';
console.log(ironhack)

function App() {
  return (
    <div className='App'>
      <section className="Section1">
      <div className='TopIcons'>
        <Image src={ironhack} />
        <Image src={menu} />
        </div>
        <Text />
        <Button className="Button" text="Awesome!" />
      </section>
      <section className='categories'>
        <div>
          <Image src={icon1} />
          <Text2 text="Declarative" text1="React makes it painless to create interactive UIs." />
        </div>
        <div>
          <Image src={icon2} />
          <Text2 text="Components" text1="Build encapsulated components that manage their state." />
        </div>
        <div>
          <Image src={icon3} />
          <Text2 text="Single-Way" text1="A set of immutable values are passed to the component's." />
        </div>
        <div>
          <Image src={icon4} />
          <Text2 text="JSX" text1="Statically-typed, designed to run on modern browsers." />
        </div>
      </section>
    </div>
  );
}

export default App;

