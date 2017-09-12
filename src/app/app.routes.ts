import { RouterModule, Routes } from '@angular/router';

import { LoginGuard } from "./services/login.guard";
import { LoginComponent } from "./login/login.component";

import { HomeComponent } from "./home/home.component";

import { CategoryComponent } from "./category/category.component";

import { CatalogComponent } from "./catalog/catalog.component";

import { ProductComponent } from "./product/product.component";
import { UserComponent } from "./user/user.component";

import { PublishComponent} from './publish/publish.component';

import { EnterpriseComponent } from './enterprise/enterprise.component';

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

    path: 'product',
    component: ProductComponent,
    canActivate: [ LoginGuard ]
  },
  {

    path: 'catalog',
    component: CatalogComponent,
    canActivate: [ LoginGuard ]
  },
  {
    path: 'enterprise',
    component: EnterpriseComponent,
    canActivate: [ LoginGuard ]
  },
  {

    path: 'user',
    component: UserComponent,
    canActivate: [ LoginGuard ]
  },
  {
    
        path: 'publish',
        component: PublishComponent,
        canActivate: [ LoginGuard ]
      },
  {

    path: '**',
    redirectTo: ''
  }
];

export const routing = RouterModule.forRoot( appRoutes );
