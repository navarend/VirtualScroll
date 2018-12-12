import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dragDrop', component: DragDropComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
