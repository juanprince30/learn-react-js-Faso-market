import Like from "../Like";

export default function Product(){
    return(
        <div className="card bg-base-100 shadow-md w-full sm:w-70">
            
            <figure className="h-48 w-full overflow-hidden">
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Product"
                className="h-full w-full object-cover"
                />
            </figure>

            
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>

                <div className="flex items-center justify-between w-full">
                
                <div className="flex flex-col items-start gap-2">
                    <Like/>
                    <p className="text-primary font-bold">$99.99</p>
                </div>

                
                <button className="btn btn-primary flex items-center gap-2">
                    Ajouter au Panier
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 
                        0 1 0-7.5 0v4.5m11.356-1.993 
                        1.263 12c.07.665-.45 1.243-1.119 
                        1.243H4.25a1.125 1.125 0 0 
                        1-1.12-1.243l1.264-12A1.125 
                        1.125 0 0 1 5.513 7.5h12.974c.576 
                        0 1.059.435 1.119 1.007ZM8.625 
                        10.5a.375.375 0 1 1-.75 0 
                        .375.375 0 0 1 .75 0Zm7.5 
                        0a.375.375 0 1 1-.75 0 
                        .375.375 0 0 1 .75 0Z"
                    />
                    </svg>
                </button>
                </div>
            </div>
        </div>

    );
}