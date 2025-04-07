// import React, { useState, useEffect } from 'react';
// import { Mail, Phone, MapPin, Send, Sparkles, MessageSquare, User, AtSign, FileText } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });
//   const [isVisible, setIsVisible] = useState(false);
//   const [sending, setSending] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.1 }
//     );

//     const section = document.getElementById('contact');
//     if (section) observer.observe(section);

//     return () => {
//       if (section) observer.unobserve(section);
//     };
//   }, []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSending(true);
//     // Simulate sending
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     setSending(false);
//     console.log(formData);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <section id="contact" className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(5)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute opacity-5 dark:opacity-10 animate-float"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animation: `float ${15 + i * 2}s infinite`,
//               animationDelay: `${i * 1.5}s`
//             }}
//           >
//             <MessageSquare size={30 + i * 10} />
//           </div>
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className={`text-center mb-12 transform transition-all duration-1000 ${
//           isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
//         }`}>
//           <h2 className="text-4xl font-bold mb-4">
//             Let's{' '}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
//               Connect
//             </span>
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Have a project in mind or just want to chat? I'd love to hear from you.
//           </p>
//         </div>
        
//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <div className={`transform transition-all duration-1000 delay-300 ${
//             isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
//           }`}>
//             <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
//               <h3 className="text-2xl font-bold mb-6 flex items-center">
//                 <Sparkles className="w-6 h-6 mr-2 text-blue-500" />
//                 Get in Touch
//               </h3>
              
//               <div className="space-y-6">
//                 <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transform hover:scale-105 transition-transform duration-300">
//                   <Mail className="w-6 h-6 text-blue-500 mr-4" />
//                   <div>
//                     <h4 className="font-medium">Email</h4>
//                     <span className="text-gray-600 dark:text-gray-400">rishuraj2711@example.com</span>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transform hover:scale-105 transition-transform duration-300">
//                   <Phone className="w-6 h-6 text-purple-500 mr-4" />
//                   <div>
//                     <h4 className="font-medium">Phone</h4>
//                     <span className="text-gray-600 dark:text-gray-400">+91</span>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transform hover:scale-105 transition-transform duration-300">
//                   <MapPin className="w-6 h-6 text-green-500 mr-4" />
//                   <div>
//                     <h4 className="font-medium">Location</h4>
//                     <span className="text-gray-600 dark:text-gray-400">Greater Noida, Up</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Contact Form */}
//           <div className={`transform transition-all duration-1000 delay-500 ${
//             isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
//           }`}>
//             <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl space-y-6">
//               <div className="relative">
//                 <label htmlFor="name" className="flex items-center text-sm font-medium mb-2">
//                   <User className="w-4 h-4 mr-2" />
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 transition-all duration-300"
//                   placeholder="Your name"
//                 />
//               </div>
              
//               <div className="relative">
//                 <label htmlFor="email" className="flex items-center text-sm font-medium mb-2">
//                   <AtSign className="w-4 h-4 mr-2" />
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 transition-all duration-300"
//                   placeholder="your.email@example.com"
//                 />
//               </div>
              
//               <div className="relative">
//                 <label htmlFor="subject" className="flex items-center text-sm font-medium mb-2">
//                   <FileText className="w-4 h-4 mr-2" />
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 transition-all duration-300"
//                   placeholder="What's this about?"
//                 />
//               </div>
              
//               <div className="relative">
//                 <label htmlFor="message" className="flex items-center text-sm font-medium mb-2">
//                   <MessageSquare className="w-4 h-4 mr-2" />
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={4}
//                   className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 transition-all duration-300 resize-none"
//                   placeholder="Your message here..."
//                 />
//               </div>
              
//               <button
//                 type="submit"
//                 disabled={sending}
//                 className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium flex items-center justify-center space-x-2 transform hover:scale-105 transition-all duration-300 ${
//                   sending ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg'
//                 }`}
//               >
//                 <span>{sending ? 'Sending...' : 'Send Message'}</span>
//                 <Send className={`w-4 h-4 ${sending ? 'animate-ping' : 'animate-bounce'}`} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useState, useEffect } from 'react';
import { Phone, MapPin, MessageCircle, Mail, Github, Linkedin, FileText } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5 dark:opacity-10 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${15 + i * 2}s infinite`,
              animationDelay: `${i * 1.5}s`
            }}
          >
            <MessageCircle size={30 + i * 10} />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl font-bold mb-4">
            Let's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Connect
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Reach out directly through your preferred method - I'm always open to chat!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* WhatsApp Contact */}
          <a
            href="https://wa.me/918409661003"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <MessageCircle className="w-8 h-8 text-green-500 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">WhatsApp Chat</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Start a conversation instantly</p>
              </div>
            </div>
          </a>

          {/* Phone Call */}
          <a
            href="tel:+911234567890" 
            className={`p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <Phone className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone Call</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">+91 8409661003</p>
              </div>
            </div>
          </a>

          {/* Email */}
          <a
            href="rishuraj1127@gmail.com"
            className={`p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                <Mail className="w-8 h-8 text-purple-500 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">rishuraj1127@gmail.com</p>
              </div>
            </div>
          </a>

          {/* Location */}
          <div
            className={`p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                <MapPin className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Greater Noida, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className={`flex justify-center space-x-6 mt-12 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        } transition-all duration-700`}>
         
          <a
           href="/Rishu_Raj_Resume.pdf"
           download="Rishu_Raj_Resume.pdf" 
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <FileText className="w-6 h-6 text-green-600 dark:text-green-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;