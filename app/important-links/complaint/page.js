import React from 'react'

function page() {
  return (
    <div className="content-entry p-3">
      <h1 className="font-bold text-2xl mb-6">الشكاوى</h1>
      <p className="mb-2">
        <strong>في حال وجود مشكلة أو خطأ في طلبكم، نرجو منكم زيارة الرابط أدناه وتعبئة النموذج، وسيتم حل المشكلة خلال 24 ساعة عمل.</strong>
      </p>
      <p className="mb-2">
        <strong>نعتذر لكم بشدة عمّا حدث، ونسعى دائمًا لتحسين تجربتكم معنا.</strong>
      </p>
      <p>
        لتقديم شكوى، <a href="https://docs.google.com/forms/d/e/1FAIpQLSf9CEmoKl6WTCNCouMA1VRmoG0stFnye0t79PPLRVORHU_Kjw/viewform" target="_blank"><strong>اضغط هنا</strong></a>
      </p>
    </div>
  )
}

export default page
