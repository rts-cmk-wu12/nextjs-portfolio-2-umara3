import Image from "next/image";

import Header from "./components/Header";
 import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      
       <Header />
     
        <div className="flex  items-center justify-center min-h-screen bg-black text-white">
        <div className="  p-4">
        <h1 className="text-4xl font-bold">Amina</h1>
        
        <p className="text-lg text-white-700">Hi, I’m Amina, a Danish student at the Center for Medie og Kommunikation (CMK) at Roskilde<br /> Tekniske Skole.
             I’m focused on building creative, user-friendly websites and enjoy working on both <br /> the visual and technical sides of web development.</p>
        
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white  hover:bg-green-600">Get in Touch</button>
        </div>
        <div className="mt-8">
            <img src="/amina.png" alt="Amina" className="w-90 h-90 rounded-full shadow-lg" />
        </div>
        </div>
            
       
      <Footer />

    </main>
  );
}
