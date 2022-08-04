import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {EmpModule} from './emp/emp.module'

const routes: Routes = [
  
  {path:'home', component: HomeComponent},
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'emp1',loadChildren: () => import ('./emp/emp.module').then(m => m.EmpModule)   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
