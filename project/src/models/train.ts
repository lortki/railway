interface Vagon {
  id ?: number;
  trainId ?: number;
  trainNumber ?: number;
  name ?: string;
  seats : null;
};

export interface Train {
  id ?: number;
  number ?: number;
  name ?: string;
  date ?: string;
  from ?: string;
  to ?: string;
  departure ?: string;
  arrive ?: string;
  departureId ?: number;
  vagons : Vagon[];
};
