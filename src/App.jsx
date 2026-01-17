import Present from "./Page/Present";
import Welcome from "./Page/Welcome";
import Skills from "./Page/Skills";
// import { resumeData } from "./views/resumeData";
import { FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function App() {
  return (
  <div className=" min-h-screen bg-black">
    <Present />
    <Welcome />
    <Skills />
  </div>
  )
}
export default App;




































//     <div className="min-h-screen bg-black p-5 md:p-4 font-sans">
//       <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col md:flex-row">
//         {/* Sidebar Left */}
//         <aside className="w-full md:w-1/3 bg-yellow-50 text-black p-8">
//           <div className="text-center mb-10">
//             <div className="w-32 h-32 bg-gray-400 rounded-full mx-auto mb-4 border-4 border-slate-600"></div>
//             <h1 className="text-2xl font-bold">{resumeData.name}</h1>
//           </div>

//           <div className="space-y-4">
//             <h3 className="text-xl font-semibold border-b border-slate-600 pb-2">
//               Contact
//             </h3>
//             <div className="flex items-center gap-3">
//               <FaEnvelope /> {resumeData.contact.email}
//             </div>
//             <div className="flex items-center gap-3">
//               <FaPhoneAlt /> {resumeData.contact.phone}
//             </div>
//             <div className="flex items-center gap-3">
//               <FaGithub /> {resumeData.contact.github}
//             </div>
//           </div>

//           <div className="mt-10">
//             <h3 className="text-xl font-semibold border-b border-slate-600 pb-2 mb-4">
//               Skills
//             </h3>
//             <div className="flex flex-wrap gap-2">
//               {resumeData.skills.map((skill) => (
//                 <span
//                   key={skill}
//                   className="bg-slate-700 px-3 py-1 rounded text-sm"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </aside>

//         {/* Main Content Right */}
//         <main className="w-full md:w-2/3 p-8">
//           <section>
//             <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
//               Experience
//             </h2>
//             <div className="space-y-8">
//               {resumeData.experience.map((exp, index) => (
//                 <div
//                   key={index}
//                   className="relative pl-6 border-l-2 border-blue-500"
//                 >
//                   <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
//                   <span className="text-sm text-gray-500 font-semibold">
//                     {exp.year}
//                   </span>
//                   <h3 className="text-xl font-bold text-slate-700">
//                     {exp.role}
//                   </h3>
//                   <p className="text-blue-600 font-medium">{exp.company}</p>
//                   <p className="text-gray-600 mt-2">{exp.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           <section className="mt-12">
//             <h2 className="text-2xl font-bold text-slate-800 mb-4">
//               Education
//             </h2>
//             <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
//               <h3 className="font-bold">Computer Science</h3>
//               <p>University Name | 2018 - 2022</p>
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// }