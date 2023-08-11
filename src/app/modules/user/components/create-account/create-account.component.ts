import { Component } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  public success = false;
  public loading = false;
  public errors: string[];

  constructor() {

  }

  ngOnInit() {
  }

  async helloworld() {
    if (!this.loading) {
      this.loading = true;
    }

    console.log("DO STUFF")
    await new Promise(r => setTimeout(r, 2000));

    this.loading = false;

  }
}