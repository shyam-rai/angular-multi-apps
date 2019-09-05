import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// List of providers
const providers = [];

const routes: Routes = [
  { path: 'one', component: View1Component },
  { path: 'two', component: View2Component },
  { path: '', redirectTo: 'one' }
];

@NgModule({
  declarations: [AppComponent, View1Component, View2Component, NavComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers,
  bootstrap: [AppComponent]
})
export class App1Module {}

@NgModule({})
export class App1SharedModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: AppModule,
  //     providers
  //   };
  // }
}
