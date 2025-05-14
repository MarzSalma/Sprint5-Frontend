import { Equipe } from './equipe.model';
export class EquipeWrapped {
  _embedded!: { equipes: Equipe[] };
}
