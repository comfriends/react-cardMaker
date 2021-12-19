import {getAuth, GoogleAuthProvider,GithubAuthProvider, signInWithPopup } from 'firebase/auth';

class AuthService {
    constructor() {
        this.firebaseAuth = getAuth();
        this.googleProvider = new GoogleAuthProvider();
        this.githubProvider = new GithubAuthProvider();
    }
    login(providerName) {
        const authProvider = this.getProvider(providerName);
        console.log(this.firebaseAuth)
        return signInWithPopup(this.firebaseAuth, authProvider);
    }
    logout() {
        this.firebaseAuth.signOut();
    }
    onAuthChange(){}
    getProvider(providerName){
        switch (providerName){
            case 'Google' :
                return this.googleProvider;
            case 'Github' :
                return this.githubProvider;
            default :
                throw new Error(`not supported provider:${providerName}`);
        }

    }
}

export default AuthService;