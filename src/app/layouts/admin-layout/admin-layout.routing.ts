import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { LoginComponent } from 'src/app/login/login.component';
import { TribunalComponent } from "../../pages/tribunal/tribunal.component";
import { DocumentComponent } from 'src/app/pages/document/document.component';
import { AffaireComponent } from 'src/app/pages/affaire/affaire.component';
<<<<<<< HEAD
//import { AccueilComponent } from 'src/app/pages/accueil/accueil.component';
=======
>>>>>>> a9e8f6d75a2308c5cd021bbf4f1f592daaed9e64
import { TacheComponent } from 'src/app/pages/tache/tache.component';
import { TiersComponent } from 'src/app/pages/tiers/tiers.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  /*
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },*/
  { path:"", redirectTo: "/login", pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: "dashboard", component: DashboardComponent },
  { path: "user", component: UserComponent },
  { path: "tribunals", component: TribunalComponent },
  {path: "affaires", component:AffaireComponent},
  {path : "documents" , component: DocumentComponent},
  {path: "taches", component : TacheComponent},
  { path: "icons", component: IconsComponent },
  { path: "tiers", component: TiersComponent },
  /*{ path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },*/
  // { path: "rtl", component: RtlComponent }
];
