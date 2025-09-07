// import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useManu from "../../../hooks/useMenu";


const Popular = () => {
    const [menu] = useManu();
    const popular = menu.filter(item => item.category === 'popular');

    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems);
    //         })
    // }

    //     , [])


    return (
        <section className="mb-12">
            <SectionTitle
                subHeading="Check it out"
                heading="From Our Menu"
            />

            <div className="grid md:grid-cols-2 gap-10">
                {popular.map(item => <MenuItem
                    key={item._id}
                    item={item}>
                </MenuItem>)}
            </div>
           <div className="flex justify-center">
             <button className="btn btn-outline text-center text-white border-0 border-b-4 mt-4">View full manu</button>
           </div>
                

        </section>
    );
};

export default Popular;