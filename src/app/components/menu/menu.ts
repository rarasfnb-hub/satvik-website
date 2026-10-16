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
      desc: 'A royal feast with rich paneer gravy, homestyle dal, fresh phulkas, fragrant rice, and sweet.',
      image: 'assets/images/premium-jain-thali.webp'
    },
    {
      title: 'Dal Bati Churma Thali',
      desc: 'Authentic Marwari slow-baked batis, aromatic panchmel dal, and rich desi ghee churma.',
      image: 'assets/images/dal-bati-churma.webp'
    },
    {
      title: 'Veg Hakka Noodles',
      desc: 'Wok-tossed noodles with crunchy bell peppers and cabbage in our signature zero-root Jain sauce.',
      image: 'assets/images/veg-hakka-noodles.webp'
    },
    {
      title: 'Garden Fresh Pizza',
      desc: 'Crisp thin crust loaded with farm-fresh bell peppers, sweet corn, and melted mozzarella.',
      image: 'assets/images/garden-fresh-pizza.webp'
    }
  ];
}
