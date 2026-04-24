import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AuthService } from '../auth/auth.service';
import { RecipeActions } from '../state/app.actions';
import { selectRecipes, selectFilteredRecipes } from '../state/app.selector';
import { Recipe } from 'src/app/app.models';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    standalone: false
})

export class LandingComponent implements OnInit {
  recipes$!: Observable<Recipe[]>;
  filteredRecipes$!: Observable<Recipe[]>;

  constructor(
    public auth: AuthService,
    private store: Store,
    private router: Router,
  ) {
    this.recipes$ = this.store.select(selectRecipes);
    this.filteredRecipes$ = this.store.select(selectFilteredRecipes);
  }

  ngOnInit(): void {
    this.store.dispatch(RecipeActions.getRecipes());
  }

  goRecipe(recipe: Recipe): void {
    this.router.navigate([`/cookbook/${recipe.user_id}/recipe/${recipe.id}`]);
  }

}
