import './globals.css'
import ProviderPage  from './Provider'
import NavigationBar from "@/app/components/NavigationBar"
export const metadata = {
  title: 'store app',
  description: 'app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className="font-sans pb-16">
        <ProviderPage children={children}/>
       
        </body>
    </html>
  )
}
