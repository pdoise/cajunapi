import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { ActionModalComponent, IActionModal } from 'src/app/shared/components/action-modal/action-modal.component';
import { AppFiltering } from '../../../state/app.actions';
import { RecipeActions } from '../../../state/app.actions';
import { selectRecipe } from '../../../state/app.selector';
import { Recipe } from 'src/app/app.models';

@Component({
    templateUrl: './recipes-form.component.html',
    styleUrls: ['./recipes-form.component.scss'],
    standalone: false
})

export class RecipeFormComponent implements OnInit, OnDestroy {
  recipe$!: Observable<Recipe>;
  userId!: number;
  recipeId!: number;
  recipe = {} as Recipe;
  isEdit!: boolean;
  form!: FormGroup;
  image!: File;
  private recipeSub!: Subscription;

  constructor(
    private modalService: NgbModal,
    private store: Store,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.recipe$ = this.store.select(selectRecipe);
    this.userId = this.route.snapshot.params['userId'];
    this.recipeId = this.route.snapshot.params['recipeId'];
  }

  ngOnInit() {
    if (this.route.snapshot.params['recipeId']) {
      this.store.dispatch(RecipeActions.getRecipe({userId: this.userId, recipeId: this.recipeId}));
      this.isEdit = true;
    }

    this.recipeSub = this.recipe$.subscribe((recipe) => {
      if (recipe.id) { this.recipe = recipe; }
      this.form = this.formBuilder.group({
        id: [this.recipe.id || null],
        name: [this.recipe.name || '', [Validators.required]],
        description: [this.recipe.description || ''],
        ingredients: [this.recipe.ingredients || ''],
        directions: [this.recipe.directions || ''],
        user_id: this.userId
      });
    })
  }

  ngOnDestroy() {
    this.store.dispatch(AppFiltering.resetFilters());
    if (this.recipeSub) { this.recipeSub.unsubscribe(); }
  }

  saveRecipe() {
    if (this.isEdit) {
      this.store.dispatch(RecipeActions.updateRecipe({ recipe: this.form.getRawValue(), userId: this.userId, recipeId: this.recipe.id }));
    } else {
      this.store.dispatch(RecipeActions.createRecipe({ recipe: this.form.getRawValue(), userId: this.userId, }));
    }
    this.router.navigate([`/cookbook/${this.userId}`]);
  }

  deleteRecipe() {
    const modal = this.modalService.open(ActionModalComponent);
    let schema: IActionModal = {
      icon: 'fas fa-trash-alt',
      content: `Are you sure you want to delete <strong>${this.recipe.name}</strong>?`,
      theme: 'primary',
      action: 'Delete'
    }
    modal.componentInstance.name = this.recipe.name;
    modal.componentInstance.schema = schema;
    modal.result.then((result) => {
      if (result.action == 'confirm') {
        this.store.dispatch(RecipeActions.deleteRecipe({ userId: this.userId, recipeId: this.recipeId})); }
        this.router.navigate([`/cookbook/${this.userId}`]);
    });
  }

  cancel() {
    if ( this.isEdit) {
      this.router.navigate([`/cookbook/${this.userId}/recipe/${this.recipe.id}`]);
    } else {
      this.router.navigate([`/cookbook/${this.userId}`]);
    }
  }

  get formInvalid(): boolean { return !!(this.form.invalid) }

}
