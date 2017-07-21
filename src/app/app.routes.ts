import { RouterModule, Routes } from '@angular/router';

import { LoginGuard } from "./services/login.guard";
import { LoginComponent } from "./login/login.component";

import { HomeComponent } from "./home/home.component";

import { CategoryComponent } from "./category/category.component";
import { CategoryEditComponent } from "./category/category-edit/category-edit.component";

import { CollectionComponent } from "./collection/collection.component";
import { CollectionEditComponent } from "./collection/collection-edit/collection-edit.component";

import { DemandComponent } from "./demand/demand.component";
import { DemandEditComponent } from "./demand/demand-edit/demand-edit.component";

import { SectorComponent } from "./sector/sector.component";

import { FlagComponent } from "./flag/flag.component";

import { ProductComponent } from "./product/product.component";

import { SectorEditComponent } from "./sector/sector-edit/sector-edit.component";

import { FlagEditComponent } from "./flag/flag-edit/flag-edit.component";

import { UserComponent } from "./user/user.component";

const appRoutes: Routes = [

  {

    path: 'login',
    component: LoginComponent
  },
  {

    path: '',
    component: HomeComponent,
    canActivate: [ LoginGuard ]
  },
  {

    path: 'home',
    component: HomeComponent,
    canActivate: [ LoginGuard ]
  },
  {

    path: 'category',
    component: CategoryComponent,
    canActivate: [ LoginGuard ]
  },
  {
  
    path: 'category/edit/:id',
    component: CategoryEditComponent,
    canActivate: [ LoginGuard ]
  },
  {

    path: 'product',
    component: ProductComponent,
    canActivate: [ LoginGuard ]
  },
  {

    path: 'collection',
    component: CollectionComponent,
    canActivate: [ LoginGuard ]
  },
  {

    path: 'collection/edit/:id',
    component: CollectionEditComponent,
    canActivate: [ LoginGuard ]
  },
  {

    path: 'demand',
    component: DemandComponent,
    canActivate: [ LoginGuard ]
  },
  {

    path: 'demand/edit/:id',
    component: DemandEditComponent,
    canActivate: [ LoginGuard ]
  },
  {

    path: 'sector',
    component: SectorComponent,
    canActivate: [ LoginGuard ]
  },
  {

    path: 'sector/edit/:id',
    component: SectorEditComponent,
    canActivate: [ LoginGuard ]
  },
  {

    path: 'user',
    component: UserComponent,
    canActivate: [ LoginGuard ]
  },
  {

    path: 'flag',
    component: FlagComponent,
    canActivate: [ LoginGuard ]
  },
  {

    path: 'flag/edit/:id',
    component: FlagEditComponent,
    canActivate: [ LoginGuard ]
  },
  {

    path: '**',
    redirectTo: ''
  }
];

export const routing = RouterModule.forRoot( appRoutes );
