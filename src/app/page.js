
import KidImage from './assets/KidScreenImg.png'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const MissionStatments = [
  { number: "01", title: "Safeguard Identities", body: "We are dedicated to ensuring the confidentiality, integrity, and availability of identities within government agencies. Our tailored ICAM solutions provide a robust framework for secure access management." },
  { number: "02", title: "Customized Solutions", body: "We believe in the power of customization. By understanding the unique functional and reporting requirements of each agency, we design bespoke ICAM solutions that seamlessly integrate with existing infrastructure, enhancing efficiency and security." },
  { number: "03", title: "Compliance Assurance", body: "We are committed to navigating the complex landscape of government regulations and audit concerns. Our solutions not only meet but exceed compliance standards, ensuring agencies operate with the highest levels of trust and adherence to industry regulations." },
  { number: "04", title: "Continuous Innovation", body: " In the ever-evolving realm of ICAM, we embrace innovation as a cornerstone of our mission. By staying at the forefront of technology, we empower agencies to adapt and thrive in an environment of persistent change and emerging threats." },
  { number: "05", title: "Strategic Partnerships", body: "We foster collaborative partnerships with government agencies, working hand-in-hand to address their unique challenges. Through transparent communication and shared goals, we build lasting relationships founded on trust and mutual success." },
];

export default function Home() {
  return (
    <main className="bg-background items-center">
      <div className=''>
        <div className='flex flex-col h-screen'>
          <Navbar />

          <div className='bg-heroImg bg-center bg-cover flex-1 flex flex-col justify-center'>
            <div className='flex flex-col px-11 w-full lg:w-1/3 glassmorph'>
              <h1 className='herotext mb-6'> Unlock Your Digital Potential with Palyrian </h1>
              <p className='herosecondary mb-6'>We specialize in providing cutting-edge Identity Access Management solutions for the government sector, helping you secure your digital infrastructure and streamline operations.</p>
              <div>
                <Link href="/contact" className='button'>Contact Us</Link>
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
            width={550}
            height={400}
            />
          </div>
        </div>

       {/* our mission statment */}]
       <div className='flex flex-col items-center px-12 mt-24 lg:min-h-[25vh] w-full'>
            <h1 className='primarytext mb-2'>Our Mission</h1>
            <p className='primarysecondary p-3 mb-4'>At Palyrian, our mission is to empower government agencies with cutting-edge Identity, Credential and Access Management (ICAM) solutions, fostering a secure and agile operational landscape. Guided by unwavering commitment to excellence, integrity, and innovation, we strive to:</p>
            <div className='flex flex-wrap justify-center w-full gap-8'>

              {MissionStatments.map((item,index) => {
                return(
                  <div key={index} className='relative bg-[#2D2D2D] w-full md:w-1/4 h-96 flex flex-col py-4 px-6 rounded-md'>
                    <h1 className=" cardnumber self-start">{item?.number}</h1>
                    <div className="absolute p-6 pt-8">
                        <h1 className='primarytext mb-2'>{item?.title}</h1>
                        <p className='primarysecondary'>{item?.body}</p>
                    </div>
                  </div>
                )
              })}

            </div>

       </div>


        <div className='bg-background bg-center flex-1 flex flex-col justify-center pb-10'>
            <div className='flex flex-col lg:flex-row px-11 lg:h-[50vh] lg:items-center'>
              <h1 className='primarytext mb-6 lg:w-1/2'> Unlock Your Digital Potential with Palyrian </h1>
              <div className='lg:w-1/2'>
                <p className='primarysecondary mb-6'>We specialize in providing cutting-edge Identity Access Management solutions for the government sector, helping you secure your digital infrastructure and streamline operations.</p>
                <div>
                  <Link href="/contact" className='button'>Contact Us</Link>
                </div>
              </div>

            </div>
          </div>
          <Footer/>
      </div>
    </main>
  )
}
