import { SephirotProps } from '../components/Sephirot/Sephirot.types';

export const commonStyles = {
  fontColor: 'white',
  strokeColor: 'white',
};

export const biggerSephirots: SephirotProps<'bigger'>[] = [
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
      title: 'Atziluth (mundo arquétipo)',
      aspect: 'Onipotência',
      startOffset: { title: '10%', aspect: '28%' },
    },
    regent: {
      title: 'Arcanjo - Raziel',
      name: 'Yah',
      defect: 'Tirania',
      ...commonStyles,
      backgroundColor: 'rgb(0, 255, 255)',
      startOffset: { title: '15%' },
    },
    sephirot: {
      name: 'Chokmah',
      valor: 'Sabedoria',
      backgroundColor: 'rgb(200, 230, 250)',
      strokeColor: commonStyles.strokeColor,
      startOffset: { name: '2%', valor: '2%' },
    },
    planet: {
      icon: '♅',
      number: 2,
      strokeColor: commonStyles.strokeColor,
      fontColor: commonStyles.fontColor,
      backgroundColor: 'rgb(0, 255, 255)',
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

export const sephirots: SephirotProps<'simple'>[] = [
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

  {
    regent: {
      title: 'Arcanjo - Tzadkiel',
      name: 'El Elyon',
      defect: 'Tirania',
      ...commonStyles,
      backgroundColor: 'rgb(0, 255, 0)',
      startOffset: { title: '30%' },
    },
    sephirot: {
      name: 'Chesed',
      valor: 'Misericórdia',
      backgroundColor: 'rgb(200, 250, 200)',
      strokeColor: commonStyles.strokeColor,
      startOffset: { name: '4%', valor: '4%' },
    },
    planet: {
      icon: '♃',
      number: 4,
      strokeColor: commonStyles.strokeColor,
      fontColor: commonStyles.fontColor,
      backgroundColor: 'rgb(0, 255, 0)',
    },
  },
  {
    regent: {
      title: 'Arcanjo - Camael',
      name: 'Elohim Gibor',
      defect: 'Crueldade',
      ...commonStyles,
      backgroundColor: 'rgb(255, 0, 0)',
      startOffset: { title: '35%' },
    },
    sephirot: {
      name: 'Gevurah',
      valor: 'Força',
      backgroundColor: 'rgb(255, 180, 180)',
      strokeColor: commonStyles.strokeColor,
      startOffset: { name: '5%', valor: '5%' },
    },
    planet: {
      icon: '♂',
      number: 5,
      strokeColor: commonStyles.strokeColor,
      fontColor: commonStyles.fontColor,
      backgroundColor: 'rgb(255, 0, 0)',
    },
  },
  {
    regent: {
      title: 'Arcanjo - Raphael',
      name: 'Tetragrammaton',
      defect: 'Hipocrisia',
      ...commonStyles,
      backgroundColor: 'rgb(255, 255, 0)',
      startOffset: { title: '40%' },
    },
    sephirot: {
      name: 'Tiferet',
      valor: 'Beleza',
      backgroundColor: 'rgb(250, 250, 200)',
      strokeColor: commonStyles.strokeColor,
      startOffset: { name: '6%', valor: '6%' },
    },
    planet: {
      icon: '☉',
      number: 6,
      strokeColor: commonStyles.strokeColor,
      fontColor: commonStyles.fontColor,
      backgroundColor: 'rgb(255, 255, 0)',
    },
  },
  {
    regent: {
      title: 'Arcanjo - Haniel',
      name: 'Elohim Tzabaoth',
      defect: 'Hedonismo',
      ...commonStyles,
      backgroundColor: 'rgb(0, 0, 255)',
      startOffset: { title: '45%' },
    },
    sephirot: {
      name: 'Netzach',
      valor: 'Eternidade',
      backgroundColor: 'rgb(200, 200, 250)',
      strokeColor: commonStyles.strokeColor,
      startOffset: { name: '7%', valor: '7%' },
    },
    planet: {
      icon: '♀',
      number: 7,
      strokeColor: commonStyles.strokeColor,
      fontColor: commonStyles.fontColor,
      backgroundColor: 'rgb(0, 0, 255)',
    },
  },
  {
    regent: {
      title: 'Arcanjo - Michael',
      name: 'Elohim Tzabaoth',
      defect: 'Corrupção',
      ...commonStyles,
      backgroundColor: 'rgb(0, 255, 255)',
      startOffset: { title: '50%' },
    },
    sephirot: {
      name: 'Hod',
      valor: 'Glória',
      backgroundColor: 'rgb(200, 230, 250)',
      strokeColor: commonStyles.strokeColor,
      startOffset: { name: '8%', valor: '8%' },
    },
    planet: {
      icon: '☿',
      number: 8,
      strokeColor: commonStyles.strokeColor,
      fontColor: commonStyles.fontColor,
      backgroundColor: 'rgb(0, 255, 255)',
    },
  },
];
