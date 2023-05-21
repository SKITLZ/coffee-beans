export type SortMap = { [key: string]: string };

export interface Sort {
  label: string;
  color: string;
}

export interface Coffee {
  uid: string;
  origin: string;
  blendName: string;
  variety: string;
  intensifier: string;
  sorts: Sort[];
  img?: Blob;
}
