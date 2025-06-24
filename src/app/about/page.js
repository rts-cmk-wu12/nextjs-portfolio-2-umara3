
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
    <Header />
      <div className="flex flex-col  text-center items-center  min-h-screen bg-black text-white pt-5">
        <div className="p-4">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-lg text-white-700 mt-2">
            Hi, I’m Amina, a Danish student at the Center for Medie og Kommunikation (CMK) at Roskilde Tekniske Skole.<br />
            I’m focused on building creative, user-friendly websites and enjoy working on both the visual and technical sides of web development.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
