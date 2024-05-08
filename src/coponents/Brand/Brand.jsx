import brand from '../../assets/Rectangle_36.png'
import brand1 from '../../assets/Rectangle_38.png'
import brand2 from '../../assets/Rectangle_41.png'
import brand3 from '../../assets/Rectangle_43.png'
import brand4 from '../../assets/Rectangle_44.png'
import brand5 from '../../assets/Rectangle_45.png'
const Brand = () => {
    return (
        <div>
            <div className='bg-[#EBD96B] mt-10'>
                <div className=" grid md:grid-cols-6 items-center py-4 max-w-7xl mx-auto">
                    <img src={brand} alt="" />
                    <img src={brand1} alt="" />
                    <img src={brand2} alt="" />
                    <img src={brand3} alt="" />
                    <img src={brand4} alt="" />
                    <img src={brand5} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Brand;