import Image from 'next/image'
import Link from "next/link";
import profileImg from '../../../public/images/profile.png'
const Me = () => {
    return <div>
        ITS ME
        <Image
            src={profileImg} // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144}  // Desired size with correct aspect ratio
            alt="Your Name"
        />
        <div>
            <Link href="/">
                <a> back home</a>
            </Link>
        </div>
    </div>
}
export default Me