import './globals.css'
import ProviderPage  from './Provider'
export const metadata = {
  title: 'store app',
  description: 'app',
}

import Head from 'next/head';
export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </Head>
      <body className="font-sans pb-16">
        <ProviderPage children={children}/>

       
        </body>
    </html>
  )
}
