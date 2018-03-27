import { Item } from '../../shared/models/item.model';
import { State } from '../../shared/enums/state.enum';

export const COLLECTION: Item[] = [
  {
    id: 'a1',
    name: 'Jean-Abdel',
    reference: '1235',
    state: State.ALIVRER
  },
  {
    id: 'a2',
    name: 'Stéphanie',
    reference: '5362',
    state: State.ENCOURS
  },
  {
    id: 'c3',
    name: 'Julien',
    reference: '2255',
    state: State.LIVREE
  },
];
