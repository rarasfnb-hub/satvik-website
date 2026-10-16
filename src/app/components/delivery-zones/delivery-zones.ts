import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery-zones',
  standalone: true,
  templateUrl: './delivery-zones.html',
  styleUrl: './delivery-zones.scss'
})
export class DeliveryZonesComponent {
  readonly primaryZones = [
    {
      name: 'Marathahalli & Munnekolala',
      highlight: 'Kitchen Hub • Express Delivery',
      landmarks: 'AECS Layout, Spice Garden, Kundalahalli Gate, Manjunatha Layout'
    },
    {
      name: 'Whitefield & Brookefield',
      highlight: 'Lunch Boxes & Tiffins',
      landmarks: 'ITPB, ITPL Road, Hope Farm, Prestige Shantiniketan, Brigade Tech Park'
    },
    {
      name: 'Bellandur & Outer Ring Road',
      highlight: 'Corporate Meal Delivery',
      landmarks: 'RMZ EcoSpace, EcoWorld, Devarabeesanahalli, Green Glen Layout'
    },
    {
      name: 'Kadubeesanahalli & Panathur',
      highlight: 'Daily Office Tiffins',
      landmarks: 'Prestige Tech Park, Cessna Business Park, Embassy TechVillage'
    },
    {
      name: 'Mahadevapura & Doddanekundi',
      highlight: 'Direct WhatsApp Delivery',
      landmarks: 'Bagmane World Tech Center, Ferns City, Phoenix Marketcity corridor'
    },
    {
      name: 'HSR Layout & Sarjapur Road',
      highlight: 'Event & Bulk Catering',
      landmarks: 'Sectors 1-7, Haralur Road, Kaikondrahalli, Carmelaram'
    }
  ];
}
