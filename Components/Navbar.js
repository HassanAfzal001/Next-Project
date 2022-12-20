import Link from 'next/link'; 

const Navbar = () => {
    return ( <nav>
        <div className="logo">
            <img src='/sign.jpg' width={120} height={77}/>
        </div>
        <Link href='/'>Home</Link>
        <Link href='/about'> About </Link>
        <Link href='/test'> Islamic Listing </Link> 
        <Link href='/Footer'> Contact </Link>
    </nav> );
}
 
export default Navbar;