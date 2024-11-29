import Sephirot, { BiggerSephirot } from '../components/Sephirot';
import PageUnderConstruction from '../components/UnderConstruction/UnderConstruction';

function App() {
  return (
    <>
      <PageUnderConstruction />
      <section className="App">
        <BiggerSephirot
          world={{
            title: 'Briah (Mundo Criativo)',
            aspect: 'Onisciência',
            startOffset: {
              title: '10%',
              aspect: '28%',
            },
          }}
          regent={{
            title: 'Tronos - Tzafquiel',
            name: 'YHVH ELOHIM',
            defect: 'Avareza',
            fontColor: 'white',
            startOffset: {
              title: '15%',
            },
          }}
          sephirot={{
            name: 'Binah',
            valor: 'Entendimento',
            backgroundColor: 'rgb(217, 217, 217)',
            strokeColor: 'white',
            startOffset: {
              name: '13%',
            },
          }}
          planet={{
            number: 3,
            backgroundColor: 'rgb(73, 73, 73)',
          }}
        />

        <Sephirot
          regent={{
            title: 'Anjos - Gabriel',
            name: 'Shaddai El Chai',
            defect: 'Preguiça',
            fontColor: 'white',
            strokeColor: 'white',
            backgroundColor: 'rgb(138, 41, 135)',
            startOffset: {
              title: '25%',
            },
          }}
          sephirot={{
            name: 'Yesod',
            valor: 'Fundação',
            backgroundColor: 'rgb(205, 172, 209)',
            strokeColor: 'white',
            startOffset: {
              name: '9%',
              valor: '9%',
            },
          }}
          planet={{
            icon: '☽',
            number: 9,
            strokeColor: 'white',
            fontColor: 'white',
            backgroundColor: 'rgb(138, 41, 135)',
          }}
        />
      </section>
    </>
  );
}

export default App;
