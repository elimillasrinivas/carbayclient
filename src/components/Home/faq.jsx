import React, { useState } from 'react';
import './faq.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className='faq-con'>
        <h1 className='head-faq'>FAQ (Frequently asked questions)</h1>
        <div className='faq-sub'>
          <div>
            <h1 className='drop-main' >
              How can I book a car service with Carbay?
            </h1>
            <ArrowDropDownIcon style={{ fontSize: '3.5rem' }} onClick={() => handleToggle(1)}/>

          </div>
          <p className={`drop-content ${expandedIndex === 1 ? 'visible' : 'hidden'}`}>
            Booking a car service with Carbay is easy! You can visit our website or contact our service center to schedule your appointment.
          </p>
        </div>
        <div className='faq-sub'>
          <div>
            <h1 className='drop-main'>
            What are the available payment options for car services with Carbay?
            </h1>
            <ArrowDropDownIcon style={{ fontSize: '3.5rem' }} onClick={() => handleToggle(2)}/>
          </div>
          <p className={`drop-content ${expandedIndex === 2 ? 'visible' : 'hidden'}`}>
          Carbay offers various payment options, making it convenient for our customers. You can choose the method that suits you best.
          </p>
        </div>
        <div className='faq-sub'>
          <div>
            <h1 className='drop-main'>
            Can I track the progress of my car service with Carbay?
            </h1>
            <ArrowDropDownIcon style={{ fontSize: '3.5rem' }} onClick={() => handleToggle(3)}/>
          </div>
          <p className={`drop-content ${expandedIndex === 3 ? 'visible' : 'hidden'}`}>
          Absolutely! Carbay provides a tracking feature, allowing you to stay informed about the progress of your car service.
          </p>
        </div>
        <div className='faq-sub'>
          <div>
            <h1 className='drop-main'>
            How can I contact Carbay's customer service?
            </h1>
            <ArrowDropDownIcon style={{ fontSize: '3.5rem' }} onClick={() => handleToggle(4)}/>
          </div>
          <p className={`drop-content ${expandedIndex === 4 ? 'visible' : 'hidden'}`}>
          You can get in touch with Carbay's customer service team by calling [Customer Service Number] or emailing [Customer Service Email].
          </p>
        </div>
        <div className='faq-sub'>
          <div>
            <h1 className='drop-main'>
            How frequently does car service need to be done with Carbay?
            </h1>
            <ArrowDropDownIcon style={{ fontSize: '3.5rem' }} onClick={() => handleToggle(5)}/>
          </div>
          <p className={`drop-content ${expandedIndex === 5 ? 'visible' : 'hidden'}`}>
          For optimal vehicle performance, we recommend scheduling a car service with Carbay as per the manufacturer's guidelines.
          </p>
        </div>
        <div className='faq-sub'>
          <div>
            <h1 className='drop-main'>
            Does Carbay use genuine parts for car services?
            </h1>
            <ArrowDropDownIcon style={{ fontSize: '3.5rem' }} onClick={() => handleToggle(6)}/>
          </div>
          <p className={`drop-content ${expandedIndex === 6 ? 'visible' : 'hidden'}`}>
             Does Carbay use genuine parts for car services?
          </p>
        </div>
        <div className='faq-sub'>
          <div>
            <h1 className='drop-main'>
            What kinds of car services does Carbay provide?
            </h1>
            <ArrowDropDownIcon style={{ fontSize: '3.5rem' }} onClick={() => handleToggle(7)}/>
          </div>
          <p className={`drop-content ${expandedIndex === 7 ? 'visible' : 'hidden'}`}>
          Carbay provides a wide range of car services, including regular maintenance, repairs, and [additional services you offer].
          </p>
        </div>
        <div className='faq-sub'>
          <div>
            <h1 className='drop-main'>
            Can I claim insurance on car repair at Carbay?
            </h1>
            <ArrowDropDownIcon style={{ fontSize: '3.5rem' }} onClick={() => handleToggle(8)}/>
          </div>
          <p className={`drop-content ${expandedIndex === 8 ? 'visible' : 'hidden'}`}>
           Can I claim insurance on car repair at Carbay?
          </p>
        </div>
        <div className='faq-sub'>
          <div>
            <h1 className='drop-main'>
            What are the charges for service with Carbay?
            </h1>
            <ArrowDropDownIcon style={{ fontSize: '3.5rem' }} onClick={() => handleToggle(9)}/>
          </div>
          <p className={`drop-content ${expandedIndex === 9? 'visible' : 'hidden'}`}>
          Our service charges are transparent and competitive. You can find detailed pricing information on our website or by contacting our service center.
          </p>
        </div>
        <div className='faq-sub'>
          <div>
            <h1 className='drop-main'>
            Does Carbay provide a warranty on its services?
            </h1>
            <ArrowDropDownIcon style={{ fontSize: '3.5rem' }} onClick={() => handleToggle(10)}/>
          </div>
          <p className={`drop-content ${expandedIndex === 10? 'visible' : 'hidden'}`}>
          Yes, Carbay stands by the quality of our services and offers warranties to provide our customers with peace of mind.
          </p>
        </div>
        {/* Add more FAQ items similarly */}
      </div>
    </>
  );
};

export default Faq;
