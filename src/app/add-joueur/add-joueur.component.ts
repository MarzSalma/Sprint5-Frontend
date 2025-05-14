import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { FormsModule } from '@angular/forms';
import { JoueurService } from '../services/joueur.service';
import { Equipe } from '../model/equipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-joueur',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-joueur.component.html',
})
export class AddJoueurComponent implements OnInit {
  newJoueur = new Joueur();
  equipes!: Equipe[];
  newIdEquipe!: number;
  newEquipe!: Equipe;
  constructor(private joueurService: JoueurService, private router: Router) {}

  addJoueur() {
    this.newJoueur.equipe = this.equipes.find(
      (eq) => eq.idEquipe == this.newIdEquipe
    )!;
    this.joueurService.ajouterJoueur(this.newJoueur).subscribe((joueur) => {
      console.log(joueur);
      this.router.navigate(['joueurs']);
    });
  }

  ngOnInit(): void {
    this.joueurService.listerEquipes().subscribe((equipe) => {
      console.log(equipe);
      this.equipes = equipe._embedded.equipes;
    });
  }
}
