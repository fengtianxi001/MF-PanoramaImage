export type markerType = {
  coordinates_2d: Array<number>;
  coordinates_3d: Array<number>;
  name: string;
};

export type PanelButtonType = {
  icon: string;
  tip: string;
  click: Function;
};
