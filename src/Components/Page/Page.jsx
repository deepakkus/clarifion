import React, { useState } from 'react'
import './Page.css';
import Check from './fluent_checkmark.png';
import Truck from './Truck.png';
import Heart from './Heart.png';
import Round from './Round.png';
import Frame from './Frame.jpg';
import norton from './norton.jpg';
import Ellipse from './Ellipse.jpg';
import Tick from './Tick.png';
import star from './star.jpg';
import Group from './Group.png';
import tick from './tick.jpg';
import amex from './amex.png';
import apple from './apple.jpg';
import gpay from './gpay.jpg';
import mastercard from './mastercard.jpg';
import paypal from './paypal.jpg';
import visa from './visa.jpg';
import shop from './shop.jpg';
import Percentage from './Percentage.jpg';
import verify from './verify.jpg';


export default function Page() {

    const [position, setPosition]=useState(0)
    const previous=()=>{
        if(position != 0){
        setPosition(position-300);
        }
        console.log(position)
    }

    const next=()=>{
        setPosition(position+300);
        console.log(position)
    }

    const mystyle = {
        transform: 'translate(position, 0px)'
      };
    return (
        <div className='page-container'>
            <div className='header'>
                <i class="fa-solid fa-chevron-left" onClick={previous}></i>
                <div className='header-div'  >
                    <div className='header-div1'>
                        <img src={Check}></img>
                        <p>30-DAY SATISFACTION GUARANTEE</p>
                    </div>
                    <div className='header-div2'>
                        <img src={Truck}></img>
                        <p>Free delivery on orders over $40.00</p>
                    </div>
                    <div className='header-div3'>
                        <img src={Heart}></img>
                        <p>50.000+ HAPPY CUSTOMERS</p>
                    </div>
                    <div className='header-div4'>
                        <img src={Round}></img>
                        <p>100% Money Back Guarantee</p>
                    </div>
                </div>
                <i class="fa-solid fa-chevron-right" onClick={next}></i>
            </div>
            <div className='bar'>
                <img src='https://s3-alpha-sig.figma.com/img/5bdd/2e8e/ca6d33ae7930758c0396996013437236?Expires=1695600000&Signature=iyU9lYYEtQrnzFi2NuWLuZrt3cPhAuznR6QodlfHa2vpv3~-WTwKdS92foDO5-BlFFB9tpSpuehLCmRDKwTYujRRjqLVn09QQaRSqWgUx3aN7hJCcQLuwfvxCDzXSDDbX11M6zR3qaiUYp4~6OQ3r9YLE3SQIQegtR322ZAXpNyWtm7rWM98ZAJyvyBih0MlStdJ1MvgQVpiQkEPJALj7rAtczd91dXD0E5DJgbNMX~HQSDoaqSpcqual08PG514j5MI0czdPH8ZT0Mc6nzW5sCmDxyLCML8fINf2finlPt6aFRQnDLdZALTB0PcCPqoL8rmW8ehmchK1WpNCM~Jow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' className='bar-img1'></img>
                <div>
                    <img src={Frame} className='bar-img2'></img>
                    <img src={norton} className='bar-img3'></img>
                </div>

            </div>
            <div className='heading'>
                <h1>Wait ! your order in progress.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            </div>
            <div className='progress-bar'>
                <div className='pro-bar-div1'>
                    <div>
                        <img src={Tick} className='correct'></img>
                    </div>
                    <p><span>Step 1 :</span> Cart Review</p>
                </div>
                <div className='pro-bar-div2'>
                    <div>
                        <img src={Tick} className='correct'></img>
                    </div>
                    <p><span>Step 2 :</span> Checkout</p>
                </div>
                <div className='pro-bar-div3'>
                    <div>
                        <p>3</p>
                    </div>
                    <p><span>Step 3 :</span> Special Offer</p>
                </div>
                <div className='pro-bar-div4'>
                    <div>
                        <p>4</p>
                    </div>
                    <p><span>Step 4 :</span> Confirmation</p>
                </div>
            </div>
            <div className='middle-div'>
                <div className='middle-div-first'>
                    <img src='https://s3-alpha-sig.figma.com/img/ae69/c276/4b81b2e6a429f79dc3a06643582245fb?Expires=1695600000&Signature=WYzkeHgqoDRqF4CMklnuJcz0of8B28nGPIDiNfMPKRM2sT14~4R4EO6iutzF49CKfo8ECoanNeRaSTLsB4ZWkzEhH5tazijM8xUzm3xFi09F4uczp18Z5tWpzfiSg~EVHdBoLm7FF3iDq7BwfG-zgF9roJ3WkSLiNF8adX06yTr0jrCxf8d2h6faOj4BoCuOtOHNyyZ8or6djGEnILM-lr1hzYc9qb8~hso6MMpCS45PB4VRsBFNxWL3nYdSROd8IJVL7DLgNOB9IigIeT6jGbFZM-XHNocPD7ZNUDtK~0JPC5NEEuUbXimlV2FyZu3cbnU07gAVswM7xvmrE01cqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' className='big-img'></img>
                    <div className='big-content'>
                        <h1 className='big-con-h1'><span>ONE TIME ONLY </span>special price for 6 extra Clarifion for only<span> $14 each </span>($84.00 total!)</h1>
                        <div className='product'>
                            <img src='https://s3-alpha-sig.figma.com/img/d7dc/d812/be356da38eef349d3173d8e6588e7d74?Expires=1695600000&Signature=TlXSbud4wVyCE~hXKGgtAB0BhrBWKo148DCFdWANrHThgTjtF~8CuWwIweGLHd9FOckutc9sMFVR9mPB5UJUcBiTSxCcInPh-bXb-GzVxUXUOuR8sXTwTzZ1q6DyVz~HpA-z8FEvwEjCI0Rk2wiP3eVBht~gf26cSXXJ1zfHXpToPoEG8g5EmJP19Y65IUzWJcTJ3Xj-1u3YKhccuyG~~uHHZ7YPirMXpJ48Tx~JRT~v480gWadipqwZV7UcrlW0TUrFI6~adk8ekZfKpxlJSjue~ASK-62MdtI8GtoLHycj2hgOOT8IxxpkJL3vkurq-Hf6AVTJB09A2J3WCSr96w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
                            <div className='product-div'>
                                <div className='pro-upper'>
                                    <p className='pro-upper-p'>Clarifion Air Ionizer</p>
                                    <div className='pro-upper-div'>
                                        <p className='pro-upper-p1'>$180</p>
                                        <p className='pro-upper-p2'>$84</p>
                                    </div>
                                </div>
                                <div className='star-area'>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </div>
                                <div className='left'>
                                    <img src={Group}></img>
                                    <p>12 left in Stock</p>
                                </div>
                                <p className='product-div-p'>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
                            </div>
                        </div>
                        <div className='list-area'>
                            <div>
                                <img src={tick}></img>
                                <p>Negative Ion Technology may <span>help with allergens</span></p>
                            </div>
                            <div>
                                <img src={tick}></img>
                                <p>Designed for <span>air rejuvenation</span></p>
                            </div>
                            <div>
                                <img src={tick}></img>
                                <p><span>Perfect for every room</span> in all types of places.</p>
                            </div>
                        </div>
                        <div className='offer-container'>
                            <div>
                                <img src={Percentage}></img>
                                <p>Save <span>53%</span> and get<span> 6 extra Clarifision</span> for only <span>$14 Each.</span></p>
                            </div>
                        </div>
                        <div className='discount-area'>
                            <div className='discount'>
                                <div className='discount-upper'>
                                    <div><p>Yes - Claim my discount</p><i class="fa-solid fa-arrow-right"></i></div>
                                </div>

                                <div className='payment'>
                                    <div className='payment-div'>
                                        <p className='shipping'>Free shipping</p>
                                        <div className='v-bar'></div>
                                        <div className='encryption'>
                                            <p>Secure 256-bit SSL encryption.</p>
                                        </div>
                                        <div className='v-bar'></div>
                                    </div>
                                    <div className='cards'>
                                        <img src={visa}></img>
                                        <img src={shop}></img>
                                        <img src={paypal}></img>
                                        <img src={mastercard}></img>
                                        <img src={gpay}></img>
                                        <img src={apple}></img>
                                        <img src={amex}></img>
                                    </div>
                                </div>
                            </div>
                            <h1>No thanks, I don’t want this.</h1>
                        </div>
                        <div className='last-div'>
                            <img src='https://s3-alpha-sig.figma.com/img/0003/461b/9ab77b5d839615855b972dedd4310061?Expires=1695600000&Signature=neZNDFHwD7A-3Oumtb28X-nkj8RrCAk6gPONs-BqFnVnacOTea3uozusK-w5KbHN2Wa8fEn~dWQcpZpbVrm0vJA04mrECBZ4a8-E18-duveECCWweR1iwdmY1l0ZWbZZkxW0rGjvZXo-ZGPE5gH7dnod49MHEcbqeJQr557Woqt93frcqgOnpgL9cPgzzUDqQ1o88O8FGDf3JYoXZGV1NKoUHFw5AeX9hV0ujUL9rA8Z9tDm6Yt-9qfTp6XabQHd6Ey2Xmyop4fjEEowwFoWo06eAig9mwTMsCDJPhYnXn-sZIyv3Lo47iLlsj9pG8caZyzxbqu0c70~K1QPtRCJ~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
                            <p>If you are not completely thrilled with your Clarifion - We have a <span>30 day satisfaction guarantee.</span> Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
                        </div>
                    </div>
                </div>
                <div className='ratings'>
                    <div className='profile'>
                        <img src='https://s3-alpha-sig.figma.com/img/ab94/948c/bfe5570b6db010c23b8479919f8ba436?Expires=1695600000&Signature=eMcPZpXZdzWDtxFvMCXiwo7zz-HyT2EgDQJI3D6LYbnJOx7niy500EHFJ6eNWr2hUO~yZ3-xD~CqlOVcoM0Ot9RR2eIbUJ4e-RFRfzdsPJSxzuLEypjsoef5g7SkWWV-KjUhj4stA53oSkopj~UZZXUIkwCkHbSAwEWR5tmCJIVdfzrfqSUP2JvLBhboVrdk~z~l2JtKXN~ZxaXqdhM5n-13I6RXX6OxjkhvH5k8-b-i~A3aTaxNX3Ca4wP-Ptw5S0fUVbGn~B-kWoIPJdj3nycNCverbFZ-l-cPo4-MFE6iOhD5FJOol9j36wvVYhiE3u~~rovUdI98~35jQjaILQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
                        <div className='profile-rating'>
                            <div className='profile-rating-upper'>
                                <img src={star}></img>
                                <img src={star}></img>
                                <img src={star}></img>
                                <img src={star}></img>
                                <img src={star}></img>
                            </div>
                            <div className='profile-rating-down'>
                                <p className='profile-name'>Ken T.</p>
                                <div className='verified'>
                                    <img src={verify}></img>
                                    <p>Verified Customer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='description'>“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
                </div>
            </div>
            <div className='footer'>
                <div className='copyright'>
                    <p>Copyright (c) 2023</p>
                    <div></div>
                    <p>Clarifionsupport@clarifion.com</p>
                </div>
                <div className='footer-lastdiv'>
                    <i></i>
                    <p>Secure 256-bit SSL encryption.</p>
                </div>
            </div>
        </div>
    )
}
