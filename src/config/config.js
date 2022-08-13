import { createBrowserHistory } from 'history'
export const history = createBrowserHistory();
export const SIDEBAR_ITEMS = [
    {
        display_name: "Dashboard",
        route: "/",
        icon: "fa-solid fa-gauge-low"
    },
    {
        display_name: "Customers",
        route: "/customers",
        icon: "fa-solid fa-user-plus"
    },
    {
        display_name: "Settings",
        route: "/settings",
        icon: "fa-solid fa-gear"
    },
    {
        display_name: "Document",
        route: "/document",
        icon: "fa-solid fa-book"
    }
]
//CSE_BBC
// export const USERNAME = 'nonameex2'; //Add username Server 1
export const USERNAME = ''; //Add username Server 1
export const ACTIVE_KEY = '' // active key
export const FEED_BUZZER = ''; //buzzer add feed id.
export const FEED_LED = ''; // replay add feed id.
export const FEED_LED_NAME = "";
export const FEED_BUZZER_NAME = "";
export const FEED_DRV = '';
export const FEED_DRV_NAME = "";


// CSE_BBC1
export const USERNAME2 = ''; //Server 2
export const ACTIVE_KEY2 = '';
export const FEED_GAS = '';
export const FEED_GAS_NAME = "";

