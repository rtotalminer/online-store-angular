import { Component } from '@angular/core';
import { pagesLinks, categorieLinks } from '../../constants/footerLinks';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  public pagesLinks = pagesLinks
  public categoriesLinks = categorieLinks
  public inputPlaceholder = 'Your email address'
  public inputBgColor = '#00000048'
}
