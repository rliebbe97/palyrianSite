import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ["400", "500", "700", "900"] })

export const metadata = {
  title: 'Palyrian: ICAM Cybersecurity Consulting',
  description: 'Expert ICAM Cybersecurity Consulting: Elevate Your Security Posture with Advanced Identity, Credential, and Access Management Solutions. Tailored Strategies, Cutting-Edge Tech, and Proven Expertise to Secure Your Digital Assets.',
  keywords: ['ICAM', 'Cybersecurity', 'Palyrian', 'Consulting'],
  openGraph: {
    title: 'Palyrian: ICAM Cybersecurity Consulting',
    description: 'Expert ICAM Cybersecurity Consulting: Elevate Your Security Posture with Advanced Identity, Credential, and Access Management Solutions. Tailored Strategies, Cutting-Edge Tech, and Proven Expertise to Secure Your Digital Assets.',
    siteName:'Palyrian',
    local: 'en_US',
    type: 'website',
    images: '/FingerPrintHeroImg.png'
  },
  robots: {
    googleBot: {
      index: true,
    }
  },
  twitter: {
    title: 'Palyrian: ICAM Cybersecurity Consulting',
    description: 'Expert ICAM Cybersecurity Conslting: Elevate Your Security Posture with Advanced Identity, Credential, and Access Management Solutions. Tailored Strategies, Cutting-Edge Tech, and Proven Expertise to Secure Your Digital Assets.',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
