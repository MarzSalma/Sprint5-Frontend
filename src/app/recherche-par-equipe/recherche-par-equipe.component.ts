import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Equipe } from '../model/equipe.model';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-recherche-par-equipe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recherche-par-equipe.component.html',
  styles: ``,
})
export class RechercheParEquipeComponent implements OnInit {
  joueurs!: Joueur[];
  IdEquipe!: number;
  equipes!: Equipe[];

  constructor(private joueurService: JoueurService) {}

  ngOnInit(): void {
    this.joueurService.listerEquipes().subscribe((eq) => {
      this.equipes = eq._embedded.equipes;
      console.log(eq);
    });
  }
  onChange() {
    this.joueurService.rechercherParEquipe(this.IdEquipe).subscribe((j) => {
      this.joueurs = j;
    });
  }
}
