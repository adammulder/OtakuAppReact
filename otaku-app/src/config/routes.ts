import Home from "../pages/Home"
import AnimeSearch from "../pages/AnimeSearch"
import Dashboard from "../pages/Dashboard"
import Fun from "../pages/Fun"
import Resources from "../pages/Resources"
import Waifu from "../pages/Waifu"
import About from "../pages/About"




interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}


const routes: RouteType[] = [
    {
      path:"",
      component: Home,
      name: "Home Screen",
      protected: false,
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name : "Dashboard",
      protected: true,
    },
    {
      path: "/about",
      component: About,
      name: "About",
      protected: false,
    },
    {
        path: "/animesearch",
        component: AnimeSearch,
        name: "AnimeSearch",
        protected: false,
    },
    {
        path: "/resources",
        component: Resources,
        name: "Resources",
        protected: false,
    },
    {
        path: "/fun",
        component: Fun,
        name: "Fun",
        protected: false,
    },
    {
        path: "/waifu",
        component: Waifu,
        name: "Waifu",
        protected: false,
    },
  ];

export default routes