
import { FaGraduationCap } from "react-icons/fa";
import Image1 from "../../assets/images/HomeHero/heroImage1.png";
import Image2 from "../../assets/images/HomeHero/heroImage2.png";
import Slider from "react-slick";

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Unlock Your Potentials With Excellence",
        description:
            "Join thousands of students who have transformed their futures through our innovative learning programs adn expert guidence",
    },
    {
        id: 2,
        img: Image2,
        title: "Learn. Grow. Succeed.",
        description:
            "Empowering students with knowledge, skills, and confidence to achieve academic and career success.",
    },
    // {
    //     id: 3,
    //     img: Image3,
    //     title: "Quality Education for a Brighter Tomorrow",
    //     description:
    //         "We believe in shaping young minds with modern teaching methods and a supportive learning environment.",
    // },
    // {
    //     id: 4,
    //     img: Image1,
    //     title: "Your Journey Towards Success Starts Here",
    //     description:
    //         "Discover personalized programs, dedicated mentors, and resources designed to help you reach your goals.",
    // },
    // {
    //     id: 5,
    //     img: Image2,
    //     title: "Excellence in Education, Innovation in Learning",
    //     description:
    //         "Experience a blend of traditional values and modern teaching strategies that prepare you for the future.",
    // },
];

const HomeHero = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };
    return (
     <div className="">
           <div className=' relative overflow-hidden flex justify-center items-center duration-300'>
            <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 "></div>

          {/* <div className="container min-h-screen flex items-center justify-center"> */}
              <div className="container pt-[80px] dark:bg-slate-950 dark:text-white">
                <Slider {...settings}>
                    {ImageList.map((image) => (
                        <div>
                            <div className="grid grid-col-1 sm:grid-cols-2 gap-2 py-2 px-px">

                                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-left order-2 sm:order-1 relative z-10">
                                    <div className='flex gap-2 items-center px-4 py-1 rounded-full bg-black dark:bg-gray-100 w-max '>
                                        <FaGraduationCap className='text-white dark:text-black size-5' />
                                        <p className=" font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                            Welcome to Our Academy
                                        </p>
                                    </div>
                                    <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-3xl sm:text-4xl lg:text-7xl font-bold'>{image.title}</h1>
                                    <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className="text-sm text-darkpara dark:text-lightpara" >
                                        {image.description}
                                    </p>
                                    <div
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="300"
                                    >

                                        <div className="flex items-center gap-5  flex-wrap">
                                            <button className='common-button'>Explore Our Services</button>
                                            <button className='px-5 py-1.5 rounded-sm text-black dark:text-white outline outline-1 dark:outline-white transition-all hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white' >Contact Us</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='order-1 sm:order-2'>
                                    <div data-aos="zoom-in" data-aos-once="true" className="relative z-10">
                                        <img src={image.img} alt={image.title} className='w-[300px] h-[300px] sm:h-[540px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
          {/* </div> */}

        </div>
     </div>
    )
}

export default HomeHero