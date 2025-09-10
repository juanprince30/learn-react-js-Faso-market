import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

export default function MainLayout(){
    return(
        <div className="flex flex-col min-h-screen">
            <header className="w-full bg-base-300 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Header />
                </div>
            </header>
            <main className="flex-1 w-full bg-red-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <MainContent />
                </div>
            </main>
            <footer className="w-full bg-base-300 text-base-content p-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
                <Footer />
                </div>
            </footer>
        </div>
    );
}