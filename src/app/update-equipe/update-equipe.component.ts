import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-equipe',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-equipe.component.html',
  styles: ``,
})
export class UpdateEquipeComponent implements OnInit {
  @Input() equipe!: Equipe;
  @Input() ajout!: boolean;

  ngOnInit(): void {
    console.log(this.equipe);
  }
  @Output() equipeUpdated = new EventEmitter<Equipe>();
  saveEquipe() {
    this.equipeUpdated.emit(this.equipe);
  }
}
