import { Component } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',

})
export class ShopComponent {
  question = 'What is your name?';
  answer = 'unknown';

  appForm = new FormGroup({

    answer: new FormControl(''),

    });

  onSubmit(data: Partial<{answer: string | null}>)
  {
    this.answer = data.answer!;
    console.log("Your name is " + this.answer);
  }
}
