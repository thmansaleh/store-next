'use client'
import Link from 'next/link';
import { useState } from 'react';
import BackArrowBtn from '../components/BackArrowBtn';
// import { FaWhatsapp, FaTiktok, FaFacebook, FaInstagram, FaBars } from 'react-icons/fa';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة الكود الخاص بإرسال النموذج
    console.log({ name, email, subject, message });
    alert('تم إرسال الرسالة بنجاح!');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className=" bg-gray-100 font-sans" >
   <BackArrowBtn/>


      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">تواصل معنا</h1>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden md:flex">
            <div className="p-8 md:w-2/3">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">أرسل لنا رسالة</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">الاسم</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent" 
                      placeholder="اسمك الكريم" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">البريد الإلكتروني</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent" 
                      placeholder="بريدك الإلكتروني" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">الموضوع</label>
                  <input 
                    type="text" 
                    id="subject" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent" 
                    placeholder="موضوع الرسالة" 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">الرسالة</label>
                  <textarea 
                    id="message" 
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent" 
                    placeholder="رسالتك" 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition duration-200"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>
            
            <div className="bg-gray-600 text-white p-8 md:w-1/3">
              <h2 className="text-2xl font-bold mb-6">معلومات الاتصال</h2>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">العنوان</h3>
                <p className="text-blue-100">دبي<br />الامارات العربية المتحدة</p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">الهاتف</h3>
                <p className="text-blue-100">+971501455918</p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">البريد الإلكتروني</h3>
                <p className="text-blue-100">contact@company.com</p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">ساعات العمل</h3>
                <p className="text-blue-100">الإثنين - الجمعة: ٩ صباحاً - ٥ مساءً<br />السبت - الأحد: مغلق</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">تابعنا على</h3>
                <div className="flex mt-3 space-x-4">
                  <Link href="#" className="text-white hover:text-blue-200 ml-4">
                    {/* <FaWhatsapp className="text-2xl" /> */}
                    <svg className="text-2xl w-8 h-8"  stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>

                  </Link>
                  <Link href="#" className="text-white hover:text-blue-200 ml-4">
                    {/* <FaTiktok className="text-2xl" /> */}
                    <svg className="text-2xl w-8 h-8"  stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path></svg>

                  </Link>
                  <Link href="#" className="text-white hover:text-blue-200 ml-4">
                    {/* <FaFacebook className="text-2xl" /> */}
                    <svg stroke="currentColor" className="text-2xl w-8 h-8"  fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>

                  </Link>
                  <Link href="#" className="text-white hover:text-blue-200">
                    {/* <FaInstagram className="text-2xl" /> */}
                    <svg className="text-2xl w-8 h-8"  stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>

                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">تواصل معنا على وسائل التواصل الاجتماعي</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <Link href="#" className="group p-4 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition duration-300">
                <div className="flex justify-center mb-4">
                  {/* <FaWhatsapp className="text-4xl text-green-500" /> */}
                  <svg className="w-20 h20 text-green-500" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>

                </div>
                <h3 className="font-bold text-gray-800 mb-2">واتساب</h3>
                <p className="text-gray-600 text-sm">راسلنا على واتساب للاستفسارات السريعة</p>
              </Link>
              
              <Link href="#" className="group p-4 rounded-lg border border-gray-200 hover:border-black hover:bg-gray-50 transition duration-300">
                <div className="flex justify-center mb-4">
                  {/* <FaTiktok className="text-4xl text-black" /> */}
                  <svg className="w-20 h20 text-black" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path></svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">تيك توك</h3>
                <p className="text-gray-600 text-sm">شاهد أحدث المحتوى على تيك توك</p>
              </Link>
              
              <Link href="#" className="group p-4 rounded-lg border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition duration-300">
                <div className="flex justify-center mb-4">
                  {/* <FaFacebook className="text-4xl text-blue-600" /> */}
                  <svg stroke="currentColor" className="w-20 h20 text-blue-600" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">فيسبوك</h3>
                <p className="text-gray-600 text-sm">تابعنا على فيسبوك للحصول على آخر الأخبار</p>
              </Link>
              
              <Link href="#" className="group p-4 rounded-lg border border-gray-200 hover:border-pink-500 hover:bg-pink-50 transition duration-300">
                <div className="flex justify-center mb-4">
                  {/* <FaInstagram className="text-4xl text-pink-500" /> */}
                  <svg className="w-20 h20 text-pink-500" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">انستغرام</h3>
                <p className="text-gray-600 text-sm">تابع صورنا وعروضنا على انستغرام</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
}