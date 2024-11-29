import BiggerSephirot from '../components/sephirot/BiggerSephirot';

function App() {
  return (
    <section className="App">
      <BiggerSephirot
        world={{
          title: '  Briah (Mundo Criativo)',
          aspect: '     Onisciência',
        }}
        regent={{
          title: '   Tronos - Tzafquiel',
          name: 'YHVH ELOHIM',
          defect: 'Avareza',
          fontColor: 'white',
        }}
        sephirot={{
          name: '  Binah',
          valor: 'Entendimento',
          backgroundColor: 'rgb(217, 217, 217)',
          strokeColor: 'white',
        }}
        planet={{
          number: 3,
          backgroundColor: 'rgb(73, 73, 73)',
        }}
      />
    </section>
  );
}

export default App;
