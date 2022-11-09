import React, { useState } from 'react';
import './Otpvarifaction.css';

function Otpvarifacation() {

    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <>

            <div className='flex'>

                <div>
                    <img className='topimges' src='images/img1.jpg' />
                </div>

                <div className='topotpveri'>
                    <h2>OTP VERIFICATION</h2>
                    <h4>VERIFY PHONE</h4>
                </div>

                <div className='texttop'>
                    <p>Code sent to +917417401815</p>
                </div> 

                  <div className='ing'>
                {otp.map((data, index) => {
                        return (
    
                            <input
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                      
                        );
                    })}
                    
                    </div>
                
                <div className='bottomtext'>
                    <p className='bottomtextare'>Did not Recive code ? Request Again</p>

                    <button>Verify OTP</button>
                </div>

            </div>
        </>
    )
}

export default Otpvarifacation