import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UnitsComponent } from './units/units.component';
import { CarouselComponent } from './units/carousel/carousel.component';
import { AccordionComponent } from './units/accordion/accordion.component';
import { CardsComponent } from './units/cards/cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,CarouselComponent,AccordionComponent,CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularproject';
}
