import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';

import featuredImg1 from '../../../assets/home/featured.jpg';



const Featured = () => {
    return (
        <div className="  my-20 text-white  " style={{
             backgroundImage: `url(${featuredImg1})`,
             backgroundAttachment: 'fixed'
             }} >
            <SectionTitle subHeading={"Check it out"} heading={"Featured Item"}> </SectionTitle>

            <div className="md:flex gap-10 items-center bg-slate-500 bg-opacity-60 px-36 py-20 pb-20 pt-12"  >
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>Nov 15 ,2025</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet
                        eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus dolor purus non.
                    </p>
                    <button className="btn btn-outline text-white border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>

    );
};

export default Featured;