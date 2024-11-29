type Theming = {
  backgroundColor?: string;
  fontColor?: string;
  strokeColor?: string;
};

type Regent = {
  title: string; //above
  name: string;
  defect?: string;
} & Theming;

type Sephirot = {
  name: string;
  valor: string;
} & Theming;

type Planet = {
  icon?: string | ReactElement;
  number: number;
} & Theming;

export type SimpleSephirot = {
  regent: Regent;
  sephirot: Sephirot;
  planet: Planet;
};

export type BiggerSephirot = {
  world: {
    title: string; //above
    aspect: string; //below
  } & Theming;
  regent: Regent;
  sephirot: Sephirot;
  planet: Planet;
};

export type SephirotProps<T extends 'simple' | 'bigger'> = T extends 'simple'
  ? SimpleSephirot
  : BiggerSephirot;
