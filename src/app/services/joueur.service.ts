import { Injectable } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { Equipe } from '../model/equipe.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { EquipeWrapped } from '../model/EquipeWrapped.model';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class JoueurService {
  apiURL: string = 'http://localhost:8089/joueurs/api';
  apiURLeq: string = 'http://localhost:8089/joueurs/eq';
  joueur!: Joueur;
  joueurs!: Joueur[];
  equipes!: Equipe[];
  constructor(private http: HttpClient, private authService: AuthService) {
    /*this.equipes = [
      {
        idEquipe: 1,
        nomEquipe: 'PSG',
        descriptionEquipe: 'Paris Saint-Germain',
      },
      { idEquipe: 2, nomEquipe: 'FCB', descriptionEquipe: 'FC Barcelone' },
      {
        idEquipe: 3,
        nomEquipe: 'Real Madrid',
        descriptionEquipe: 'Real Madrid',
      },
    ];
    this.joueurs = [
      {
        idJoueur: 1,
        nomJoueur: 'Lionel Messi',
        age: 36,
        dateNaissance: new Date('1987-06-24'),
        equipe: {
          idEquipe: 2,
          nomEquipe: 'FCB',
          descriptionEquipe: 'FC Barcelone',
        },
      },
      {
        idJoueur: 2,
        nomJoueur: 'Cristiano Ronaldo',
        age: 38,
        dateNaissance: new Date('1985-02-05'),
        equipe: {
          idEquipe: 3,
          nomEquipe: 'Real Madrid',
          descriptionEquipe: 'Real Madrid',
        },
      },
      {
        idJoueur: 3,
        nomJoueur: 'Achraf Hakimi',
        age: 24,
        dateNaissance: new Date('1998-11-04'),
        equipe: {
          idEquipe: 1,
          nomEquipe: 'PSG',
          descriptionEquipe: 'Paris Saint-Germain',
        },
      },
      {
        idJoueur: 4,
        nomJoueur: 'Kylian Mbappé',
        age: 24,
        dateNaissance: new Date('1998-12-20'),
        equipe: {
          idEquipe: 3,
          nomEquipe: 'Real Madrid',
          descriptionEquipe: 'Real Madrid',
        },
      },
    ];*/
  }
  listerJoueurs(): Observable<Joueur[]> {
    return this.http.get<Joueur[]>(this.apiURL + '/all');
  }

  ajouterJoueur(joueur: Joueur): Observable<Joueur> {
    return this.http.post<Joueur>(this.apiURL + '/addjoueur', joueur);
  }
  supprimerJoueur(id: number) {
    const url = `${this.apiURL}/deljoueur/${id}`;
    return this.http.delete(url);
  }
  consulterJoueur(id: number): Observable<Joueur> {
    const url = `${this.apiURL}/getbyid/${id}`;
    return this.http.get<Joueur>(url);
  }
  updateJoueur(joueur: Joueur): Observable<Joueur> {
    return this.http.put<Joueur>(this.apiURL + '/updatejoueur', joueur);
  }
  listerEquipes(): Observable<EquipeWrapped> {
    return this.http.get<EquipeWrapped>(this.apiURLeq);
  }
  consulterEquipe(id: number): Equipe {
    return this.equipes.find((equipe) => equipe.idEquipe == id)!;
  }

  rechercherParEquipe(idEquipe: number): Observable<Joueur[]> {
    const url = `${this.apiURL}/joueursequipe/${idEquipe}`;
    return this.http.get<Joueur[]>(url);
  }
  rechercherParNom(nom: string): Observable<Joueur[]> {
    const url = `${this.apiURL}/joueurByName/${nom}`;
    return this.http.get<Joueur[]>(url);
  }
  ajouterEquipe(eq: Equipe): Observable<Equipe> {
    return this.http.post<Equipe>(this.apiURLeq, eq, httpOptions);
  }
}
