import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function ProductDetail(){
    const {product_id}=useParams()
    const [loading, setLoading]=useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    const fetchproduct=() =>{
        setLoading(true)
        axios.get("https://fakestoreapi.com/products/"+ product_id)
        .then((response) => {
            setData(response.data)
            console.log(response.data)
        })
        .catch((error) => setError(error))
        .finally()
        setLoading(false)
    }

    useEffect(
        fetchproduct,
    )

    if(loading){
        return(
            <span className="loading loading-dots loading-xl"></span>
        )
    }

    if(error){
        return(
            <div className="bg-red-700">
                <h1 className="">
                    Erreur lors du Chargement des donnees
                </h1>
            </div>
        )
    }

    if(data){
        return(
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    
                    <div className="lg:w-1/2 w-full">
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="p-4">
                        <img
                            src={data.image}
                            alt="Produit"
                            className="rounded-xl object-contain h-80 w-full"
                        />
                        </figure>
                    </div>
                    </div>

                    <div className="lg:w-1/2 w-full flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
                        <p className="text-gray-600 mb-6">
                        {data.description}
                        </p>

                        <p className="text-2xl font-bold text-primary mb-6">{Math.floor(data.price *655)} FCFA</p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <select className="select select-bordered w-full sm:w-40">
                            <option disabled selected>
                            Taille
                            </option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                        </select>
                        <select className="select select-bordered w-full sm:w-40">
                            <option disabled selected>
                            Couleur
                            </option>
                            <option>Rouge</option>
                            <option>Noir</option>
                            <option>Bleu</option>
                        </select>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                        <button className="btn btn-primary w-full sm:w-auto">
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

                    <div className="mt-10">
                        <h2 className="text-xl font-semibold mb-4">Avis Clients</h2>
                        <div className="space-y-3">
                        <div className="p-4 border rounded-lg">
                            <p className="font-semibold">Jean Dupont</p>
                            <p className="text-gray-600">
                            Très bon produit, qualité au top
                            </p>
                        </div>
                        <div className="p-4 border rounded-lg">
                            <p className="font-semibold">Marie Claire</p>
                            <p className="text-gray-600">
                            Livraison rapide et produit conforme
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }


}