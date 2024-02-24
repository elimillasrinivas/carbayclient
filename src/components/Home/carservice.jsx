import './carservice.css'
import maruthisuziki from '../../assets/carimages/maruthisuziki.png'
import hyundai from '../../assets/carimages/HYUNDAI.jpeg'
import tata from '../../assets/carimages/TATA.jpeg'
import bmw from '../../assets/carimages/BMW.jpeg'
import benz from '../../assets/carimages/BENZ.jpeg'
import ford from '../../assets/carimages/FORD.jpeg'

const Carservice = (()=>{
    return(
        <>
           <div className="car-service-section">
                <p>We proudly represent an assortment of top-tier car brands in our service.</p>
                <div className='cartypes'>
                    <img src={bmw} alt='maruthi-suziki'/>
                    <img src={hyundai} alt='hyundai'/>
                    <img src={tata} alt='hyundai'/>
                    <img src={maruthisuziki} alt='hyundai'/>
                    <img src={benz} alt='hyundai'/>
                    {/* <img src={ford} alt='hyundai'/> */}
                </div>
                <div className='more-cartypes'>
                    <button>More Car brands</button>
                </div>
           </div>
        </>
    )
})
export default Carservice