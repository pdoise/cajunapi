import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './error-page.component.html',
    standalone: false
})

export class ErrorPageComponent {

  constructor(
    public route: ActivatedRoute,
    public router: Router,
  ) { }

}
