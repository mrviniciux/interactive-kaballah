import Sephirot, { BiggerSephirot } from '../components/Sephirot';
import { SephirotProps } from '../components/Sephirot/Sephirot.types';
import PageUnderConstruction from '../components/UnderConstruction/UnderConstruction';

const commonStyles = {
  fontColor: 'white',
  strokeColor: 'white',
};

const biggerSephirots: SephirotProps<'bigger'>[] = [
  {
    world: {
      title: '',
      aspect: 'Onipresença',
      backgroundColor: 'rgb(247 247 247)',
      startOffset: { title: '10%', aspect: '28%' },
    },
    regent: {
      title: 'Serafins - Metatron',
      backgroundColor: 'rgb(242 242 242)',
      name: 'EHEIEH',
      defect: '',
      fontColor: 'black',
      startOffset: { title: '15%' },
    },
    sephirot: {
      name: 'Kether',
      valor: 'Coroa',
      backgroundColor: 'rgb(247 247 247)',
      strokeColor: 'black',
      startOffset: { name: '10%', valor: '20%' },
    },
    planet: {
      number: 1,
      backgroundColor: 'rgb(247 247 247)',
      fontColor: 'black',
      strokeColor: 'black',
      icon: '♆',
    },
  },
  {
    world: {
      title: 'Briah (Mundo Criativo)',
      aspect: 'Onisciência',
      startOffset: { title: '10%', aspect: '28%' },
    },
    regent: {
      title: 'Tronos - Tzafquiel',
      name: 'YHVH ELOHIM',
      defect: 'Avareza',
      fontColor: commonStyles.fontColor,
      startOffset: { title: '15%' },
    },
    sephirot: {
      name: 'Binah',
      valor: 'Entendimento',
      backgroundColor: 'rgb(217, 217, 217)',
      strokeColor: commonStyles.strokeColor,
      startOffset: { name: '13%' },
    },
    planet: {
      number: 3,
      icon: '♄',
      backgroundColor: 'rgb(73, 73, 73)',
    },
  },
];

const sephirots: SephirotProps<'simple'>[] = [
  {
    regent: {
      title: 'Anjos - Gabriel',
      name: 'Shaddai El Chai',
      defect: 'Preguiça',
      ...commonStyles,
      backgroundColor: 'rgb(138, 41, 135)',
      startOffset: { title: '25%' },
    },
    sephirot: {
      name: 'Yesod',
      valor: 'Fundação',
      backgroundColor: 'rgb(205, 172, 209)',
      strokeColor: commonStyles.strokeColor,
      startOffset: { name: '9%', valor: '9%' },
    },
    planet: {
      icon: '☽',
      number: 9,
      strokeColor: commonStyles.strokeColor,
      fontColor: commonStyles.fontColor,
      backgroundColor: 'rgb(138, 41, 135)',
    },
  },
];

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
