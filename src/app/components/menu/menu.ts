import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class MenuComponent {
  menuItems = [
    {
      title: 'Premium Jain Thali',
      desc: 'A royal feast featuring delicate curries, fresh rotis, and sweets.',
      image: 'assets/images/premium-jain-thali.jpg'
    },
    {
      title: 'Dal Bati churma Thali',
      desc: 'Authentic Marwari flavor with slow-baked batis and rich churma.',
      image: 'assets/images/dal-bati-churma.jpg'
    },
    {
      title: 'Veg Hakka Noodles',
      desc: 'Crispy vegetables and perfectly cooked noodles in a savory Jain sauce.',
      image: 'assets/images/veg-hakka-noodles.jpg'
    },
    {
      title: 'Garden Fresh Pizza',
      desc: 'Thin crust loaded with farm-fresh vegetables and gooey cheese.',
      image: 'assets/images/garden-fresh-pizza.jpg'
    }
  ];
}
