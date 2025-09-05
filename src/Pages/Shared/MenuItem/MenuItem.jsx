
const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="flex gap-4">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[120px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}------------------</h3>
                <p>{recipe}</p>
            </div>
            <div>
                <p className="text-yellow-500">${price}</p>
            </div>
        </div>
        
    );
};

export default MenuItem;