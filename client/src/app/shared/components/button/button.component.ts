import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  public label = '';

	@Input()
	set text(name: string) {
		this.label = name;
	}

	@Input() type: string = 'button';
	@Output() btnClick = new EventEmitter();
	@Input() loading = false;

	constructor() {}

	onClick() {
		this.btnClick.emit();
	}
}