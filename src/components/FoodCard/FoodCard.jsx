import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";



const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const handleAddToCart = food => {
           // console.log(food , user.email);
        if (user && user.email) {
            //todo : send cart item to the database
        }
        else {
            Swal.fire({
                title: "You are not logged In",
                text: "Please login to add the card",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login now!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // navigate('/login');
                    navigate('/login', { state: { from: location } });

                }
            });
        }
    }

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>

                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className="bg-slate-900 absolute right-0 mr-7 mt-7" >${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="btn btn-outline text-white bg-slate-600 border-0 border-b-4 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;