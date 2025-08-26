import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

export default function MainLayout(){
    return(
        <div className="flex flex-col">
            <header className="navbar bg-base-300">
                <Header />
            </header>
            <main className="bg-red-700">
                <MainContent />
            </main>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                <Footer />
            </footer>
        </div>
    );
}