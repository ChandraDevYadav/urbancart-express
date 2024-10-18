import Image from "next/image";

export default function MoreProduct(){
    return(
        <div className='grid grid-cols-6'>
            <div>
                <Image src='/MP1.png' width='300' height='300' className='object-cover w-full h-auto'/>
            </div>
            <div>
                <Image src='/MP2.png' width='300' height='300' className='object-cover w-full h-auto'/>
            </div>
            <div>
                <Image src='/MP3.png' width='300' height='300' className='object-cover w-full h-auto'/>
            </div>
            <div>
                <Image src='/MP4.png' width='300' height='300' className='object-cover w-full h-auto'/>
            </div>
            <div>
                <Image src='/MP5.png' width='300' height='300' className='object-cover w-full h-auto'/>
            </div>
            <div>
                <Image src='/MP6.png' width='300' height='300' className='object-cover w-full h-auto'/>
            </div>
        </div>
    )
}