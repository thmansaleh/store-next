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

<script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
<script>
  window.OneSignalDeferred = window.OneSignalDeferred || [];
  OneSignalDeferred.push(async function(OneSignal) {
    await OneSignal.init({
      appId: "c8cc5746-04de-4bc2-9618-bd1ef36734b3",
      safari_web_id: "web.onesignal.auto.33cdb166-8fda-4ab6-bcd3-b18b9bc1d285",
      notifyButton: {
        enable: true,
      },
    });
  });
</script>

      <body className="font-sans pb-16">
        <ProviderPage children={children}/>
       
        </body>
    </html>
  )
}
