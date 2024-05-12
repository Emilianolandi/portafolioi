import Image from "next/image";
import { TypeAnimation } from "react-type-animation";


const Introduction = () =>{
    return(
<div className='z-20 w-full bg-darkBg/60'>
    <div className='z-20 grid items-center h-full p-6 py-20 md:grid-cols-2'>
        <Image src= "/home-4.png" priority width={600} height={600} alt="profile"/>
    </div>

</div>

    );
}
export default Introduction