import { Component } from '@angular/core';
import { HomeModule } from './pages/Home/home.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeModule],
  
  template: `<h1>Default</h1>`,
  // templateUrl: '../index.html',
  // templateUrl: 'pages\\Home\\home.component.html',
  styleUrls: ['./app.component.css','./pages/Home/home.component.css',

],
})
export class AppComponent {
  title = 'default';
}
