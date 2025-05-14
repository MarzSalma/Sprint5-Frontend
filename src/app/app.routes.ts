import { Routes } from '@angular/router';
import { JoueursComponent } from './joueurs/joueurs.component';
import { AddJoueurComponent } from './add-joueur/add-joueur.component';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';
import { RechercheParEquipeComponent } from './recherche-par-equipe/recherche-par-equipe.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeEquipesComponent } from './liste-equipes/liste-equipes.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { joueurGuard } from './joueur.guard';

export const routes: Routes = [
  { path: 'joueurs', component: JoueursComponent },
  {
    path: 'add-joueur',
    component: AddJoueurComponent,
    canActivate: [joueurGuard],
  },
  { path: '', redirectTo: 'joueurs', pathMatch: 'full' },
  { path: 'updateJoueur/:id', component: UpdateJoueurComponent },
  { path: 'rechercheParEquipe', component: RechercheParEquipeComponent },
  { path: 'rechercheParNom', component: RechercheParNomComponent },
  { path: 'listerEquipes', component: ListeEquipesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
 
];
