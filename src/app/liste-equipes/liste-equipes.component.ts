import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { JoueurService } from '../services/joueur.service';
import { UpdateEquipeComponent } from '../update-equipe/update-equipe.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-equipes',
  standalone: true,
  imports: [UpdateEquipeComponent, CommonModule],
  templateUrl: './liste-equipes.component.html',
  styles: ``,
})
export class ListeEquipesComponent implements OnInit {
  equipes!: Equipe[];
  updatedEq: Equipe = { idEquipe: 0, nomEquipe: '' };
  ajout: boolean = true;
  equipe!: Equipe;

  constructor(private joueurService: JoueurService) {}

  ngOnInit(): void {
    this.joueurService.listerEquipes().subscribe((eq) => {
      this.equipes = eq._embedded.equipes;
      console.log(eq);
    });
  }

  equipeUpdated(eq: Equipe) {
    console.log(eq);
    this.joueurService.ajouterEquipe(eq).subscribe(() => {
      this.chargerEquipes();
    });
  }
  chargerEquipes() {
    this.joueurService.listerEquipes().subscribe((eq) => {
      this.equipes = eq._embedded.equipes;
      console.log(eq);
    });
  }
  updateEq(eq: Equipe) {
    this.updatedEq = eq;
    this.ajout = false;
  }
 
}
