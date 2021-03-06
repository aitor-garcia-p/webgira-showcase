import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DictionariesComponent } from './dictionaries/dictionaries.component';
import { NnAnalysisComponent } from './nn-analysis/nn-analysis.component';
import { FurnitureNnAnalysisComponent } from './furniture-nn-analysis/furniture-nn-analysis.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'dictionaries', component: DictionariesComponent},
  { path: 'nn-analysis', component: NnAnalysisComponent},
  { path: 'furniture-nn-analysis', component: FurnitureNnAnalysisComponent}
];

export const routing = RouterModule.forRoot(routes);
