import './globals.css'
import Footer from './components/Footer'
import { Work_Sans, Arimo } from 'next/font/google'
import Header from './components/Header'




const font =  Arimo({ 
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial']
})

export const metadata = {
  title: 'Sigmund Fur-oyd',
  description: 'Research website for Sigmund Fur-oyd',
}

export default function RootLayout({ children }) {


const links = [
  { name: "Home", href: "/" },
  {
    name: "Our Team",
    sublinks: [
      { name: "Principle Investigator", href: "/principle" },
      { name: "Team", href: "/team" },
      { name: "Join", href: "/join" }
    ]
  },
  {
    name: "Our Approach",
    sublinks: [
      { name: "Values", href: "/values" },
      { name: "Code of Conduct", href: "/codeofconduct" }
    ]
  },
  {
    name: "Research",
    sublinks: [
      { name: "Program Areas", href: "/research" },
      { name: "Participate", href: "/participate" },
      { name: "Publications", href: "/publications" }
    ]
  },
  { name: "Contact", href: "/contact" },
];


  return (
    <html lang="en" className={font.className}>
      <body className={`${font.className} body`}>
      <Header siteName={metadata.title} links={links}/>
      {children}
      <Footer siteName={metadata.title} links={links}/>
      </body>
    </html>
  )
}
