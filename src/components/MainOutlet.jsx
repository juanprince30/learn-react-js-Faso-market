import Carrousel from "./Carrousel";
import MainContent from "./MainContent";

export default function MainOutlet(){
    return(
        <>
            <Carrousel />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <MainContent />
            </div>
        </>
    )
}