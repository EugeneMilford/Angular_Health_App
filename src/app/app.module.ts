import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodsListComponent } from './foods/foods-list/foods-list.component';
import { FoodsComponent } from './foods/foods.component';
import { FoodsEditComponent } from './foods/foods-edit/foods-edit.component';
import { FoodsAddComponent } from './foods/foods-add/foods-add.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExerciseListComponent } from './exercise/exercise-list/exercise-list.component';
import { ExerciseEditComponent } from './exercise/exercise-edit/exercise-edit.component';
import { ExerciseAddComponent } from './exercise/exercise-add/exercise-add.component';
import { SleepComponent } from './sleep/sleep.component';
import { SleepListComponent } from './sleep/sleep-list/sleep-list.component';
import { SleepEditComponent } from './sleep/sleep-edit/sleep-edit.component';
import { SleepAddComponent } from './sleep/sleep-add/sleep-add.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodsListComponent,
    FoodsComponent,
    FoodsEditComponent,
    FoodsAddComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ExerciseComponent,
    ExerciseListComponent,
    ExerciseEditComponent,
    ExerciseAddComponent,
    SleepComponent,
    SleepListComponent,
    SleepEditComponent,
    SleepAddComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
