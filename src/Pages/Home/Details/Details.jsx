import service from '../../../assets/home/chef-service.jpg';

const Details = () => {
    return (
        <div className="relative mb-20 mt-10 ">
            {/* Background Image */}
            <img src={service} alt="" className="w-full h-auto" />

            {/* Overlay Box */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-slate-200 bg-opacity-80 p-8 w-3/4 text-center rounded-lg shadow-lg">
                    <h3 className="text-3xl text-black font-bold my-4">Bistro Boss</h3>
                    <p className="w-3/4 mx-auto text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Details;
