import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-subject-progress',
  standalone: false,
  templateUrl: './card-subject-progress.component.html',
  styleUrl: './card-subject-progress.component.scss'
})
export class CardSubjectProgressComponent {

  @Input({ required: true }) subject: string = "";
  @Input({ required: true }) nquestoes: number = 0;
  @Input({ required: true }) ntopicos: number = 0;
  @Input({ required: true }) nrevisoes: number = 0;
  @Input({ required: true }) progress: number = 0;
}
