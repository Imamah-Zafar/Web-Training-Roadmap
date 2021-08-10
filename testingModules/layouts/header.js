import { UserProfile } from '../components/user-profile.js';
class Header{

    loadHeader(){

        const userProfile = new UserProfile();
        userProfile.loadUserProfile();

        console.log("Header is loaded");

    }
}

export { Header };