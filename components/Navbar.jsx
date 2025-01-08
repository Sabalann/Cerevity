import Link from 'next/link';
import BackArrow from './svgs/BackArrow';

export default function Navbar(){
    return (
        <div className='w-full mb-20'>
            <Link href="/">
                <button><BackArrow></BackArrow></button>
            </Link>
        </div>
    );
}