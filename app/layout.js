import './globals.css'
import ProviderPage  from './Provider'
import NavigationBar from "@/app/components/NavigationBar"
import FullScreen from "./FullScreen"
export const metadata = {
  title: 'store app',
  description: 'app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className="font-sans pb-16">
<FullScreen/>
        <ProviderPage children={children}/>
       
        </body>
    </html>
  )
}
