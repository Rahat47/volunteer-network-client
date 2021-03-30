import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";

firebase.initializeApp(firebaseConfig);

export const fbaseGoogleSignin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
        const result = await firebase.auth().signInWithPopup(provider)
        const user = result.user
        const token = result.credential.accessToken
        return { user, token }
    } catch (error) {
        throw new Error(error.message)
    }
}

export const fbaseFacebookSignIn = async () => {
    const provider = new firebase.auth.FacebookAuthProvider();

    try {
        const result = await firebase.auth().signInWithPopup(provider)
        const user = result.user
        const token = result.credential.accessToken
        return { user, token }
    } catch (error) {
        throw new Error(error.message)
    }
}