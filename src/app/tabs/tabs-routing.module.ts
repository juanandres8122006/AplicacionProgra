import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
{
  path:"start",
  loadChildren: ()=>import("./start/start.module").then(hijo=>hijo.StartPageModule)
  },
  {
  path:"middle",
  loadChildren: ()=>import("./middle/middle.module").then(hijo=>hijo.MiddlePageModule)
  },
  {
   path:"end",
   loadChildren: ()=>import("./end/end.module").then(hijo=>hijo.EndPageModule)
  }
]
  }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
