import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Employee/home';
import { LoginComponent } from './login';
import { ApplyforleaveComponent } from './Employee/applyforleave/applyforleave.component';
import { AuthGuard } from './_helpers';
import { MyleavesComponent } from './Employee/myleaves/myleaves.component';
import { CheckleavesComponent } from './Employee/checkleaves/checkleaves.component';
import { LeaverequestComponent } from './Manager/leaverequest/leaverequest.component';
import {ViewrequestComponent} from './Manager/viewrequest/viewrequest.component';
import { ManagerhomeComponent } from './Manager/managerhome/managerhome.component';
import { UpdateLeaveComponent } from './Employee/update-leave.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'applyforleave', component: ApplyforleaveComponent},
    {path: 'my-leaves', component: MyleavesComponent},
    {path: 'check-leaves', component: CheckleavesComponent},
    {path: 'leave-request', component:LeaverequestComponent},
    {path:'view-request', component: ViewrequestComponent},
    {path:'manager-home', component: ManagerhomeComponent},
    {path:'update', component: UpdateLeaveComponent}
        // otherwise redirect to home
    //{ path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
