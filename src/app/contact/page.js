
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
    return (
        <>
        <Header />
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-4xl font-bold text-center mt-10">Contact Me</h1>
        <p className="text-lg text-white text-center mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <form>
            <div className="max-w-md mx-auto mt-8">
                <label className="block mb-2 text-sm font-medium text-white">Name</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded bg-white" placeholder="Your Name" required />
                
                <label className="block mt-4 mb-2 text-sm font-medium text-white">Email</label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded bg-white" placeholder="Your Email" required />
                
                <label className="block mt-4 mb-2 text-sm font-medium text-white">Message</label>
                <textarea className="w-full p-2 border border-gray-300 rounded bg-white" rows="4" placeholder="Your Message" required></textarea>
                
                <button type="submit" className="mt-4 px-6 py-2 bg-green-500 text-white hover:bg-blue-600 rounded">Send Message</button>
            </div>
        </form>
            </div>
            <Footer />
            </>
        )
        }