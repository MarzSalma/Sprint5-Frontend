import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from '../model/equipe.model';

@Component({
  selector: 'app-update-joueur',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-joueur.component.html',
  styles: ``,
})
export class UpdateJoueurComponent implements OnInit {
  currentJoueur = new Joueur();
  equipes!: Equipe[];
  updateIdEquipe!: number;

  constructor(
    private joueurService: JoueurService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  updateJoueur() {
    this.currentJoueur.equipe = this.equipes.find(
      (eq) => eq.idEquipe == this.updateIdEquipe
    )!;
    this.joueurService.updateJoueur(this.currentJoueur).subscribe((joueur) => {
      this.router.navigate(['joueurs']);
    });
  }

  ngOnInit(): void {
    this.joueurService.listerEquipes().subscribe((eq) => {
      console.log(eq);
      this.equipes = eq._embedded.equipes;
    });

    this.joueurService
      .consulterJoueur(this.activatedRoute.snapshot.params['id'])
      .subscribe((joueur) => {
        this.currentJoueur = joueur;
        if (this.currentJoueur.equipe) {
          this.updateIdEquipe = this.currentJoueur.equipe.idEquipe;
        }
      });
  }
}
