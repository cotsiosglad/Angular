import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './pages/Home/home.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeModule,
    HomeComponent,
  ],
  
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,
  // templateUrl: '../index.html',
  // templateUrl: 'pages\\Home\\home.component.html',
  styleUrls: ['./app.component.css','./pages/Home/home.component.css',

],
})
export class AppComponent {
  title = 'default';
}
