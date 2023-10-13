import './globals.css'
import ProviderPage  from './Provider'
import Navigation from './components/navigation/Navigation'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <ProviderPage children={children}/>
        <Navigation/>
        </body>
    </html>
  )
}
