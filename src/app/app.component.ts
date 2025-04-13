import { Component } from '@angular/core';
import { ComponentsModule } from "./components/components.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ComponentsModule]
})
export class AppComponent {

}
