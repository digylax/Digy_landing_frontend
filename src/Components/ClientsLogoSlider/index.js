import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import clientLogo1 from "../../assets/images/home/client-logo/placeholders/1-allopneus.svg";
// import clientLogo2 from "../../assets/images/home/client-logo/placeholders/2-zedcrest.svg";
// import clientLogo3 from "../../assets/images/home/client-logo/placeholders/3-paydek.svg";
// import clientLogo4 from "../../assets/images/home/client-logo/placeholders/4-spicejet.svg";
// import clientLogo5 from "../../assets/images/home/client-logo/placeholders/5-netflix.svg";
// import clientLogo6 from "../../assets/images/home/client-logo/placeholders/6-tata-play.svg";
// import clientLogo7 from "../../assets/images/home/client-logo/placeholders/7-loreal.svg";
// import clientLogo8 from "../../assets/images/home/client-logo/placeholders/8-farmkart.svg";

import clientLogo1 from "../../assets/images/home/client-logo/1-paytm.png";
import clientLogo2 from "../../assets/images/home/client-logo/2-autotex.png";
import clientLogo3 from "../../assets/images/home/client-logo/3-mclaren.png";
import clientLogo4 from "../../assets/images/home/client-logo/4-gsk-paramedical.png";
import clientLogo5 from "../../assets/images/home/client-logo/5-kals-group.png";
import clientLogo6 from "../../assets/images/home/client-logo/6-fosters-lager.png";
import clientLogo7 from "../../assets/images/home/client-logo/7-hdfc.png";
import clientLogo8 from "../../assets/images/home/client-logo/8-quess-corp.png";
import clientLogo9 from "../../assets/images/home/client-logo/9-brigade.png";
import clientLogo10 from "../../assets/images/home/client-logo/10-tneb.png";

const ClientsLogoSlider = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        centerMode: true,
        centerPadding: '120px',
        className: "client-slider center",
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return ( 
        <Slider {...settings}>
            <div className="px-3 px-xl-4 mx-xxl-3">
                <img className="mx-auto" src={clientLogo1} alt="clientLogo-1" />
            </div>
            <div className="px-3 px-xl-4 mx-xxl-3">
                <img className="mx-auto" src={clientLogo2} alt="clientLogo-2" />
            </div>
            <div className="px-3 px-xl-4 mx-xxl-3">
                <img className="mx-auto" src={clientLogo3} alt="clientLogo-3" />
            </div>
            <div className="px-3 px-xl-4 mx-xxl-3">
                <img className="mx-auto" src={clientLogo4} alt="clientLogo-4" />
            </div>
            <div className="px-3 px-xl-4 mx-xxl-3">
                <img className="mx-auto" src={clientLogo5} alt="clientLogo-5" />
            </div>
            <div className="px-3 px-xl-4 mx-xxl-3">
                <img className="mx-auto" src={clientLogo6} alt="clientLogo-6" />
            </div>
            <div className="px-3 px-xl-4 mx-xxl-3">
                <img className="mx-auto" src={clientLogo7} alt="clientLogo-7" />
            </div>
            <div className="px-3 px-xl-4 mx-xxl-3">
                <img className="mx-auto" src={clientLogo8} alt="clientLogo-8" />
            </div>
            <div className="px-3 px-xl-4 mx-xxl-3">
                <img className="mx-auto" src={clientLogo9} alt="clientLogo-9" />
            </div>
            <div className="px-3 px-xl-4 mx-xxl-3">
                <img className="mx-auto" src={clientLogo10} alt="clientLogo-10" />
            </div>
        </Slider>
     );
}
 
export default ClientsLogoSlider;