import styles from '../styles/Home.module.css'
import Link from "next/link";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            //router.go(-1);  ==> go one step back
            router.push('/');   // Redirect towards homepage

        },3000)    //3000 ms = 3s
    }, [])
    // Array is dependency array, on which useEffect will depends
    //Function and array are params of useEffect function.

    return (  
        <div className = 'not-found'>
            <h1> Astagfar! </h1>
            <h2> That page can't be found on our server, Mazrat!</h2>
            <p> Wapis jao aur apna kaam karo! <Link href='/' className={styles.btn}> Home Page</Link></p>
        </div>
        
    );
}
 
export default NotFound;