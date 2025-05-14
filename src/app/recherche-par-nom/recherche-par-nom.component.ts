import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JoueurService } from '../services/joueur.service';
import { Joueur } from '../model/joueur.model';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recherche-par-nom.component.html',
  styles: ``,
})
export class RechercheParNomComponent implements OnInit {
  joueurs!: Joueur[];
  nomJoueur!: string;
  constructor(private joueurService: JoueurService) {}

  ngOnInit(): void {
    this.joueurService.listerJoueurs().subscribe((j) => {
      console.log(j);
      this.joueurs = j;
    });
  }

  onKeyUp(filterText: string) {
    this.joueurs = this.joueurs.filter((item) =>
      item.nomJoueur!.toLowerCase().includes(filterText)
    );
  }

  rechercherJoueur() {
    if (this.nomJoueur)
      this.joueurService.rechercherParNom(this.nomJoueur).subscribe((j) => {
        console.log(j);
        this.joueurs = j;
      });
    else
      this.joueurService.listerJoueurs().subscribe((j) => {
        console.log(j);
        this.joueurs = j;
      });
  }
}
