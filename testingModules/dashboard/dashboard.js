import { SideBar } from '../layouts/sidebar.js';
import { Header } from '../layouts/header.js';
import { Users } from '../components/users.js';
import { Issues } from '../components/issues.js';

class DashBoard{

    loadDashBoard(){

    
    const sideBar = new SideBar();
    sideBar.loadSideBar();

    const header = new Header();
    header.loadHeader();

    const users = new Users();
    const issues = new Issues();
    console.log('Dashboard component is loaded');

    }

}

export { DashBoard }