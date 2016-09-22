import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DictionariesComponent } from './dictionaries/dictionaries.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'dictionaries', component: DictionariesComponent}
];

export const routing = RouterModule.forRoot(routes);
