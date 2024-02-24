import './home.css'
// images
import mainimg from '../../assets/Images/landing-image.png'
import whycarbay from './images/whycarbay.png'
import Workshop from './workshop'
// service images
import generalservice from '../../assets/serviceimages/general-service.png'
import dentandpaint from '../../assets/serviceimages/denting-painting.png'
import acelectrical from '../../assets/serviceimages/ac-electrical.png'
import battery from '../../assets/serviceimages/battery.png'
import insurance from '../../assets/serviceimages/insurance.png'
import ppfceramic from '../../assets/serviceimages/accident-repair-general-helth-checkup.png'
import doorstep from '../../assets/serviceimages/doorstep.png'
import bookservice from '../../assets/serviceimages/bookservice.png'
import viamail from '../../assets/serviceimages/via-sms-email.png'
import freedropoff from '../../assets/serviceimages/free-dropoff.png'
import cashlessclaims from '../../assets/serviceimages/cashless-i-claims.png'
import genuineparts from '../../assets/serviceimages/genuine-parts.png'
import skilledmechanics from '../../assets/serviceimages/skilled-mechanics.png'
import free from '../../assets/serviceimages/free.png'
import saveonbills from '../../assets/serviceimages/save-on-bills.png'
// workshop images

import workshap1 from '../../assets/Images/car-work-2.jpg'
import Carservice from './carservice'
import Header from '../../pages/Header/header'
import Faq from './faq'

const Home =(()=>{
    return(
        <>
           <Header/>
           <div className='home-section'>
            <div className="home-con">
                    <div className="home-content">
                        <p>Where Every Journey Begins: Your Ultimate Car Service Destination!</p>
                    </div>
                    <div className="home-image">
                    <img src={mainimg} alt='main-img'/>
                    </div>
            </div> 
                <div className='home-services'>
                    <div className='service-head'>
                        <h1>Car Services for to You</h1>
                        <p>Your ride's care, our expertise, both tailored true, Car services aplenty, all just for you!</p>
                    </div>
                    <div className='service-types-home'>
                        <div className='service-sub'>
                              <img src={generalservice} alt=''/>
                              <p>General service</p>
                        </div>
                        <div className='service-sub'>
                              <img src={dentandpaint} alt='Denting and painting'/>
                              <p>Denting and painting</p>
                        </div>
                        <div className='service-sub'>
                              <img src={acelectrical} alt='Ac and electrical repairs'/>
                              <p>Ac and electrical repairs</p>
                        </div>
                        <div className='service-sub'>
                              <img src={ppfceramic} alt='Paint protection film and ceramic coating'/>
                              <p>PPF and ceramic coating</p>
                        </div>
                        <div className='service-sub'>
                              <img src={battery} alt='Battery replacement'/>
                              <p>Battery replacement</p>
                        </div>
                        <div className='service-sub'>
                              <img src={generalservice} alt='General car health check up/others'/>
                              <p>General car health check up/others</p>
                        </div>
                        <div className='service-sub'>
                              <img src={generalservice} alt='Tyres services'/>
                              <p>Tyres services</p>
                        </div>
                        <div className='service-sub'>
                              <img src={insurance} alt='Insurance claims'/>
                              <p>Insurance claims</p>
                        </div>
                        <div className='service-sub'>
                              <img src={doorstep} alt='Door step servicess'/>
                              <p>Door step services</p>
                        </div>
                          
                    </div>
                </div>
                    {/* why car-bay */}
                    <div className='why-carbay'>
                        <div className='why-carbay-content'>
                               <h1>Why CARBAY ?</h1>
                               <p>Choosing Car Bay for your car service means opting for unparalleled expertise, convenience, and dedicated care. Our team of seasoned professionals is committed to providing top-notch service, ensuring your vehicle receives the attention it deserves. With a blend of cutting-edge technology and a customer-centric approach, we prioritize your satisfaction, making your car care experience seamless and reliable. Trust Car Bay for quality service that exceeds expectations, leaving your vehicle in the best hands possible.</p>
                        </div>
                        <div className='why-carby-image'>
                               <h1>Why CARBAY ?</h1>
                               <img src={whycarbay} alt='whycarbay-image'/>
                        </div> 
                    </div>
                    {/* how does it works */}
                     <div className='how-it-works'>
                          <div className='how-it-works-head'>
                            <h1>How does it work ?</h1>
                          </div>
                          <div className='how-it-works-main'>
                              <div className='how-it-works-sub'>
                                    <img src={bookservice} alt=''/>
                                    <p>BOOK SERVICE</p>
                              </div>
                              <div className='how-it-works-sub'>
                                    <img src={doorstep} alt=''/>
                                    <p>FREE PICKUP</p>
                              </div>
                              <div className='how-it-works-sub'>
                                    <img src={viamail} alt=''/>
                                    <p>VIA SMS / E-MAIL</p>
                              </div>
                              <div className='how-it-works-sub'>
                                    <img src={freedropoff} alt=''/>
                                    <p>FREE DROP - OFF</p>
                              </div>          
                          </div>
                          
                          
                     </div>
                     {/* Advantages of carbay */}
                     <div className='advantages'>
                        <div className='advantages-head'>
                            <h1>Advantages of CARBAY</h1>
                        </div>
                        <div className='advantages-types'>
                              <div className='advantages-types-sub'>
                                    <img src={cashlessclaims} alt=''/>
                                    <p>CASHLESS INSURANCE CLAIM</p>
                              </div> 
                              <div className='advantages-types-sub'>
                                    <img src={genuineparts} alt=''/>
                                    <p>GENUINE OEM SPARE PARTS</p>
                              </div> 
                              <div className='advantages-types-sub'>
                                    <img src={skilledmechanics} alt=''/>
                                    <p>SKILLED MECHANICS</p>
                              </div> 
                              <div className='advantages-types-sub'>
                                    <img src={free} alt=''/>
                                    <p>PICKUP & DROP</p>
                              </div> 
                              <div className='advantages-types-sub'>
                                    <img src={saveonbills} alt=''/>
                                    <p>UPTO SAVE ON BILLS</p>
                              </div> 
                        </div>
                     </div>

                     {/* carservice home */}
                 <div className='home-service-main'>
                         <Carservice/>
                 </div>
                 {/* faq home */}
                 <div className='faq-home'>
                        <Faq/>
                 </div>

                <div className='workshop-home'>
                   <h1>About our Workshop</h1>
                   <p>Our work shop and team members</p>
                     <Workshop/>
                </div>
           </div>
            
        </>
    )
})
export default Home