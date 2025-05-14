import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-joueurs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './joueurs.component.html'
  
})
export class JoueursComponent implements OnInit {
  joueurs!: Joueur[]; 

  constructor(
    private joueurService: JoueurService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.chargerJoueurs();
  }

  chargerJoueurs() {
    this.joueurService.listerJoueurs().subscribe((joueurs) => {
      console.log(joueurs);
      this.joueurs = joueurs;
    });
  }

  supprimerJoueur(j: Joueur) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.joueurService.supprimerJoueur(j.idJoueur!).subscribe(() => {
        console.log('joueur supprimé');
        this.chargerJoueurs();
      });
    }
  }
}
