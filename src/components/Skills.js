import skillimage1 from "../assets/img/1.svg";
import skillimage2 from "../assets/img/2.svg";
import skillimage3 from "../assets/img/3.svg";
import skillimage4 from "../assets/img/4.svg";
import skillimage5 from "../assets/img/5.svg";
import skillimage6 from "../assets/img/6.svg";
import skillimage7 from "../assets/img/7.svg";
import skillimage8 from "../assets/img/8.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I am a quick learner, always eager to pick up new skills and adapt to new challenges.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={skillimage1} alt="Image" />
                                <h5>G Suite</h5>
                            </div>
                            <div className="item">
                                <img src={skillimage2} alt="Image" />
                                <h5>Solidwork</h5>
                            </div>
                            <div className="item">
                                <img src={skillimage3} alt="Image" />
                                <h5>Matlab</h5>
                            </div>
                            <div className="item">
                                <img src={skillimage4} alt="Image" />
                                <h5>PLC</h5>
                            </div>
                            <div className="item">
                                <img src={skillimage5} alt="Image" />
                                <h5>PCB Design</h5>
                            </div>
                            <div className="item">
                                <img src={skillimage6} alt="Image" />
                                <h5>Python/ C/ C++</h5>
                            </div>
                            <div className="item">
                                <img src={skillimage7} alt="Image" />
                                <h5>OpenCV/ Tensorflow</h5>
                            </div>
                            <div className="item">
                                <img src={skillimage8} alt="Image" />
                                <h5>LangChain/LangGraph</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
