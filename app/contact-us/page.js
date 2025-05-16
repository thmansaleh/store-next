'use client'
import Link from 'next/link'
import { useState } from 'react'
import BackArrowBtn from '../components/BackArrowBtn'
import { 
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  MessageSquare,
  Smartphone,
  Facebook,
  Instagram,
  MessageCircleMore
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Here you would typically make an actual API call
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // })
      
      // if (!response.ok) throw new Error('Submission failed')
      
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setSubmitError(error.message || 'Failed to submit form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-10 h-10" />,
      color: 'hover:bg-green-100 hover:border-green-500',
      textColor: 'text-green-500'
    },
    {
      name: 'TikTok',
      icon: <Smartphone className="w-10 h-10" />,
      color: 'hover:bg-gray-100 hover:border-black',
      textColor: 'text-black'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-10 h-10" />,
      color: 'hover:bg-blue-100 hover:border-blue-600',
      textColor: 'text-blue-600'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-10 h-10" />,
      color: 'hover:bg-pink-100 hover:border-pink-500',
      textColor: 'text-pink-500'
    }
  ]

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'العنوان',
      content: 'دبي، الإمارات العربية المتحدة'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'الهاتف',
      content: '+971501455918'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'البريد الإلكتروني',
      content: 'contact@company.com'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'ساعات العمل',
      content: 'الإثنين - الجمعة: ٩ صباحاً - ٥ مساءً<br />السبت - الأحد: مغلق'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <BackArrowBtn />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">تواصل معنا</h1>
          <p className="text-lg text-center text-gray-600 mb-12">نحن هنا للإجابة على جميع استفساراتك</p>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden md:flex">
            {/* Contact Form Section */}
            <div className="p-8 md:w-2/3">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">أرسل لنا رسالة</h2>
              
              {submitSuccess ? (
                <div className="p-6 bg-green-50 rounded-lg border border-green-200 text-green-700 mb-6">
                  <h3 className="font-bold mb-2">تم إرسال رسالتك بنجاح!</h3>
                  <p>سنقوم بالرد عليك في أقرب وقت ممكن.</p>
                  <button 
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-4 text-sm bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitError && (
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200 text-red-700">
                      {submitError}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                        الاسم <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition"
                        placeholder="اسمك الكريم"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                        البريد الإلكتروني <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition"
                        placeholder="بريدك الإلكتروني"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">
                      الموضوع
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition"
                      placeholder="موضوع الرسالة"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                      الرسالة <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition"
                      placeholder="رسالتك"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-lg font-medium transition ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        جاري الإرسال...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        إرسال الرسالة
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            
            {/* Contact Info Section */}
            <div className="bg-gray-800 text-white p-8 md:w-1/3">
              <h2 className="text-2xl font-bold mb-6">معلومات الاتصال</h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1 text-gray-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{item.title}</h3>
                      <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: item.content }} />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium mb-4">تابعنا على</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href="#"
                      className={`p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition ${social.textColor}`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Media Section */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">تواصل معنا على وسائل التواصل الاجتماعي</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href="#"
                  className={`group p-6 rounded-lg border border-gray-200 transition flex flex-col items-center ${social.color}`}
                >
                  <div className={`mb-4 ${social.textColor}`}>
                    {social.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{social.name}</h3>
                  <p className="text-gray-600 text-sm text-center">
                    {social.name === 'WhatsApp' && 'راسلنا على واتساب للاستفسارات السريعة'}
                    {social.name === 'TikTok' && 'شاهد أحدث المحتوى على تيك توك'}
                    {social.name === 'Facebook' && 'تابعنا على فيسبوك للحصول على آخر الأخبار'}
                    {social.name === 'Instagram' && 'تابع صورنا وعروضنا على انستغرام'}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}