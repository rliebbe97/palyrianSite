import PalyrianLogo from './assets/PalyrianLogo.svg'
import Placeholder from './assets/PlaceholderImage.png'
import KidImage from './assets/KidScreenImg.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col bg-background items-center">
      <div className=''>
        <div className='flex flex-col h-screen'>
          <nav className='bg-background p-4 h-16'>
            <Link href="/">
              <Image 
              src={PalyrianLogo}
              height={28}
              width={28}
              />
            </Link>

          </nav>
          <div className='bg-heroImg bg-center bg-cover flex-1 flex flex-col justify-center'>
            <div className='flex flex-col px-11 w-full lg:w-1/3'>
              <h1 className='primarytext mb-6'> Unlock Your Digital Potential with Palyrian </h1>
              <p className='primarysecondary mb-6'>We specialize in providing cutting-edge Identity Access Management solutions for the government sector, helping you secure your digital infrastructure and streamline operations.</p>
              <div>
                <Link href="/" className='button'>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>

        <div className='px-11 mt-24 lg:flex lg:h-[50vh] lg:items-center'>
          <div className='lg:w-1/2'>
          <h1 className='primarytext mb-6'> Unlock Your Digital Potential with Palyrian </h1>
          <p className='primarysecondary mb-6'>We specialize in providing cutting-edge Identity Access Management solutions for the government sector, helping you secure your digital infrastructure and streamline operations.</p>
          </div>
          <div className='lg:w-1/2 h-full lg:flex lg:items-center lg:justify-center'>
            <Image 
            src={KidImage}
            width={500}
            height={400}
            />
          </div>
        </div>

        <div className='bg-background bg-center flex-1 flex flex-col justify-center mt-24 pb-10'>
            <div className='flex flex-col lg:flex-row px-11 lg:h-[50vh] lg:items-center'>
              <h1 className='primarytext mb-6 lg: w-1/2'> Unlock Your Digital Potential with Palyrian </h1>
              <div className='lg:w-1/2'>
                <p className='primarysecondary mb-6'>We specialize in providing cutting-edge Identity Access Management solutions for the government sector, helping you secure your digital infrastructure and streamline operations.</p>
                <div>
                  <Link href="/" className='button'>Contact Us</Link>
                </div>
              </div>

            </div>
          </div>

          <div className='px-8'>
            <div  className='bg-font w-full h-[1px]'/>
            <p className='primarysecondary mt-4'>© 2023 Palyrian. All rights reserved.</p>
          </div>
      </div>
    </main>
  )
}
