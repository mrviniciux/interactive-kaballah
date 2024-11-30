import Sephirot, { BiggerSephirot } from '../components/Sephirot';
import PageUnderConstruction from '../components/UnderConstruction/UnderConstruction';
import { biggerSephirots, sephirots } from './sephirots.mock';

const App = () => (
  <>
    <PageUnderConstruction />
    <section className="App">
      {biggerSephirots.map((props, index) => (
        <BiggerSephirot key={index} {...props} />
      ))}
      {sephirots.map((props, index) => (
        <Sephirot key={index} {...props} />
      ))}
    </section>
  </>
);

export default App;
