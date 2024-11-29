type Theming = {
  backgroundColor?: string;
  fontColor?: string;
  strokeColor?: string;
};

export type SephirotProps = {
  world: {
    title: string; //above
    aspect: string; //below
  } & Theming;
  regent: {
    title: string; //above
    name: string;
    defect?: string;
  } & Theming;
  sephirot: {
    name: string;
    valor: string;
  } & Theming;
  planet: {
    icon?: ReactElement;
    number: number;
  } & Theming;
};
