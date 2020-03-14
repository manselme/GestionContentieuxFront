import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  /*{
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },

  {
    path: "/maps",
    title: "Maps",
    rtlTitle: "خرائط",
    icon: "icon-pin",
    class: "" },
  {
    path: "/notifications",
    title: "Notifications",
    rtlTitle: "إخطارات",
    icon: "icon-bell-55",
    class: ""
  },*/

  {
    path: "/accueil",
    title: "Accueil",
    rtlTitle: "",
    icon: "icon-tie-bow",
    class: ""
  },
  {
    path: "/user",
    title: "User Profile",
    rtlTitle: "",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/affaires",
    title: "Affaires",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-bell-55",
    class: ""
  },
  {
    path: "/taches",
    title: "Taches",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-pin",
    class: ""
  },
  {
    path: "/documents",
    title: "Documents",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-atom",
    class: ""
  },
  {
    path: "/tribunals",
    title: "Tribunaux",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-world",
    class: ""
  },
  {
    path: "/icons",
    title: "Icons",
    rtlTitle: "الرموز",
    icon: "icon-atom",
    class: ""
  },
  /*,
  {
    path: "/tables",
    title: "Table List",
    rtlTitle: "قائمة الجدول",
    icon: "icon-puzzle-10",
    class: ""
  },
  {
    path: "/typography",
    title: "Typography",
    rtlTitle: "طباعة",
    icon: "icon-align-center",
    class: ""
  },
  {
    path: "/rtl",
    title: "RTL Support",
    rtlTitle: "ار تي ال",
    icon: "icon-world",
    class: ""
  }*/
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
