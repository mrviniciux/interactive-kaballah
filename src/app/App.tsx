import Sephirot, { BiggerSephirot } from '../components/Sephirot';
import PageUnderConstruction from '../components/UnderConstruction/UnderConstruction';
import {
  binah,
  chesed,
  chokma,
  gevurah,
  hod,
  kether,
  malkuth,
  netzach,
  tiferet,
  yesod,
} from './sephirots.mock';

const App = () => (
  <>
    <PageUnderConstruction />
    <section className="App">
      <div className="kether">
        <BiggerSephirot {...kether} />
      </div>
      <div className="binah-chokma">
        <BiggerSephirot {...binah} />
        <BiggerSephirot {...chokma} />
      </div>

      <div className="gevura-chesed">
        <Sephirot {...gevurah} />
        <Sephirot {...chesed} />
      </div>

      <div className="tiferet">
        <Sephirot {...tiferet} />
      </div>

      <div className="hod-netzach">
        <Sephirot {...hod} />
        <Sephirot {...netzach} />
      </div>

      <div className="yesod">
        <Sephirot {...yesod} />
      </div>

      <div className="malkuth">
        <BiggerSephirot {...malkuth} />
      </div>
    </section>
  </>
);

export default App;
