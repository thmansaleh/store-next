import './globals.css'
import ProviderPage  from './Provider'

export const metadata = {
  title: 'store app',
  description: 'othman saleh abdulhameed',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className="font-sans">
        <ProviderPage children={children}/>
        <div  className="navigation-hidden"></div>
        </body>
    </html>
  )
}
