import { Component, OnInit } from '@angular/core';
import { categoriesCard } from 'src/app/core/constants/categoriesCard';
import { fakeStoreLinks } from 'src/app/core/constants/fakeStoreLinks';
import { ICategoriesCard } from 'src/app/data/interfaces/categoriesCard.interface';
import { FakeStoreService } from 'src/app/services/fakestore.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public topCategoriesCards: ICategoriesCard[] = categoriesCard
  public BestDealsProducts
  public InputPlaceholder = 'Search Here Shop or Product'

  constructor (private fakeStoreService: FakeStoreService) {}

  ngOnInit(): void {
     this.fakeStoreService.getProducts(fakeStoreLinks.getLimitedProducts + 4).subscribe(res => {
      this.BestDealsProducts = res
     })
  }
}
