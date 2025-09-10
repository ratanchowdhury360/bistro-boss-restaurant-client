

const FoodCard = ({item}) => {
     const {name, recipe, image, price} = item;
     const handleAddToCart = food => {
            console.log(food);
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