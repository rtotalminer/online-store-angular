import { Component } from '@angular/core';
import { categoriesCard } from 'src/app/core/constants/categoriesCard';
import { ICategoriesCard } from 'src/app/data/interfaces/categoriesCard.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
    public topCategoriesCards: ICategoriesCard[] = categoriesCard
}
