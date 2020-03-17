import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './component/home-page/home-page.component';
import {InfoComponent} from './component/info/info.component';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {ProfileDetailsComponent} from './component/profile/profile-details/profile-details.component';
import {ProfileMessageComponent} from './component/profile/profile-message/profile-message.component';
import {ProfileComponent} from './component/profile/profile.component';
import {OutGuard} from './guards/out.guard';
import {InputGuard} from './guards/input.guard';
import {CarListComponent} from './component/car-list/car-list.component';
import {TodoComponent} from './component/todo/todo.component';

const profileRoutes: Routes = [
  {path: 'profile-details', component: ProfileDetailsComponent},
  {path: 'profile-message', component: ProfileMessageComponent},
];

const routes: Routes = [
  {path: 'info', component: InfoComponent, canDeactivate: [OutGuard], canActivate: [InputGuard]},
  {path: 'profile', component: ProfileComponent, children: profileRoutes},
  {path: 'car-list', component: CarListComponent},
  {path: 'todo', component: TodoComponent},
  {path: '', component: HomePageComponent},
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
