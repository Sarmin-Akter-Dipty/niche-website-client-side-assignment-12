
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebaseinit";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";


initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false)


    const auth = getAuth();


    const registerUser = (email, password, name, location, history) => {
        setIsLoading(true)
        console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
                const destination = location?.state?.from || '/';
                history.replace(destination);
                const newUser = { email, displayName: name, }
                setUser(newUser)

                //save user to the database
                saveUser(email, name, 'POST')

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {
                    console.log(error.message);
                });

                // history.replace('/')



            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error.message)




            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('')
            })
            .catch((error) => {
                console.log(error.message);

                setAuthError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            });
    }
    //observer user state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)


            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unSubscribe
    }, [])

    useEffect(() => {
        fetch(`https://boiling-escarpment-36459.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user?.email])


    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => {
                setIsLoading(false)
            });
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://boiling-escarpment-36459.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        logOut,
        loginUser,


    }

}
export default useFirebase;
