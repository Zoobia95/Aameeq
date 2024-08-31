import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  {
    path: "",
    component: AnimationComponent
  },

  {
    path: "about",
    component: AboutPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
