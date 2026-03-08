import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { TrustBarComponent } from './components/trust-bar/trust-bar';
import { PhilosophyComponent } from './components/philosophy/philosophy';
import { BenefitsComponent } from './components/benefits/benefits';
import { MenuComponent } from './components/menu/menu';
import { SpecialsComponent } from './components/specials/specials';
import { ServicesComponent } from './components/services/services';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    TrustBarComponent,
    PhilosophyComponent,
    BenefitsComponent,
    MenuComponent,
    SpecialsComponent,
    ServicesComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('satvik-angular');
}
