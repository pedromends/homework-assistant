import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
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
