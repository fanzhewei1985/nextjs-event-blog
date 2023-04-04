import Link from "next/link";
import Image from "next/image";


const Header = () => {
    return (
        <div>
            <header>
                <div className='topNav'>
                    <Image src={'/img/next.svg'} width={100} height={100} />
                    <nav>
                <Link href='/'>Home</Link>
                <Link href='/events'>Events</Link>
                <Link href='/about-us'>About Us</Link>
                    </nav>
                </div>
                <h1>My First Next App</h1>
            </header>
        </div>
    );
};

export default Header;