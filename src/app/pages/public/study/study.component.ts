import { Component } from '@angular/core';

@Component({
  selector: 'app-study',
  standalone: false,
  templateUrl: './study.component.html',
  styleUrl: './study.component.scss'
})
export class StudyComponent {
  selectedSubject: undefined;
  selectedTopic: string = "";
  selectedPhase: string = "";

  subject: any[] = [];
  topic: any[] = [];
  phase: any[] = [];
  
  ngOnInit(): void {
    this.subject = [
      {name:"História"},
      {name:"Geografia"},
      {name:"Matemática"},
      {name:"Artes"},
      {name:"Ciências"},
      {name:"Biologia"},
      {name:"Português"},
      {name:"Inglês"}
    ];
  
    this.topic = [
      {name:"Tópico"},
      {name:"Tópico 1"},
      {name:"Tópico 1"},
      {name:"Tópico 1"},
      {name:"Tópico 1"},
      {name:"Tópico 1"},
      {name:"Tópico 1"},
      {name:"Tópico 1s"}
    ];
  
    this.phase = [
      {name:"Tópico 1"},
      {name:"Tópico 1"},
      {name:"Tópico 1"},
      {name:"Tópico 1"},
      {name:"Tópico 1"},
      {name:"Tópico 1"},
      {name:"Tópico 1"},
      {name:"Tópico 1s"}
    ];
  }
}
