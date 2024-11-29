type Theming<T = World | Regent | Sephirot> = {
  backgroundColor?: string;
  fontColor?: string;
  strokeColor?: string;
  startOffset?: Partial<T>;
};

type World = {
  title: string; //above
  aspect: string; //below
};

type Regent = {
  title: string; //above
  name: string;
  defect?: string;
};

type Sephirot = {
  name: string;
  valor: string;
};

type Planet = {
  icon?: string | ReactElement;
  number: number;
};

export type SimpleSephirot = {
  regent: Regent & Theming<Regent>;
  sephirot: Sephirot & Theming<Sephirot>;
  planet: Planet & Theming;
};

export type BiggerSephirot = {
  world: World & Theming<World>;
  regent: Regent & Theming<Regent>;
  sephirot: Sephirot & Theming<Sephirot>;
  planet: Planet & Theming<Planet>;
};

export type SephirotProps<T extends 'simple' | 'bigger'> = T extends 'simple'
  ? SimpleSephirot
  : BiggerSephirot;
