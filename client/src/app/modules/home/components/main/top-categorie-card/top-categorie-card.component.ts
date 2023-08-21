import { Component, Input } from '@angular/core';
import { ICategoriesCard } from 'src/app/data/interfaces/categoriesCard.interface';

@Component({
  selector: 'app-top-categorie-card',
  templateUrl: './top-categorie-card.component.html',
  styleUrls: ['./top-categorie-card.component.scss']
})
export class TopCategorieCardComponent {
  @Input() card: ICategoriesCard
}
