import { Component } from '@angular/core';

interface Brand {
  name: string;
  /** Path under public/, e.g. 'images/brands/acme.svg'. Without one, a placeholder is shown. */
  logo?: string;
}

@Component({
  selector: 'app-brand-carousel',
  standalone: true,
  templateUrl: './brand-carousel.html',
  styleUrls: ['./brand-carousel.css'],
})
export class BrandCarousel {
  brands: Brand[] = [
    { name: 'Porsche Dealer', logo: 'images/brands/porsche.png' },
    { name: 'Ineos Grenadier Dealer', logo: 'images/brands/ineos.png' },
    { name: 'Al Mehairi Real Estate', logo: 'images/brands/almehairi.png' },
    { name: 'Morgan Motor Company Dealer', logo: 'images/brands/morgan-cropped.png' },
    { name: 'Emerald Qatar', logo: 'images/brands/emerald-qatar-cropped.png' },
    { name: 'Al Adiyat Automobiles', logo: 'images/brands/adiyat.png' },
    // { name: 'Brand 7' },
    // { name: 'Brand 8' },
  ];
}
