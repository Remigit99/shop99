import { Link } from "react-router-dom"
import HeroBg from "../../assets/images/hero_endframe.png"
import AppLogo from "../../assets/icons/apple_logo.svg"
import ArrowRight from "../../assets/icons/arrow-right.svg"
import CArrowRight from "../../assets/icons/chevron_right.svg"

const Hero = () => {
    return (
        <section>
            <div className="container grid grid-cols-1 md:grid-cols-5 mx-auto py-6 gap-6">
                <div
                    className="flex flex-col gap-2.5 col-span-1">
                    <Link to="/" className="flex justify-between items-center">
                        <p>Women's Fashion</p>
                        <img src={CArrowRight} alt="Chevron_arrow_right" />
                    </Link>

                    <Link to="/" className="flex justify-between items-center">
                        <p>Men's Fashion</p>
                        <img src={CArrowRight} alt="Chevron_arrow_right" />
                    </Link>

                    <Link to="/" className="flex justify-between items-center">
                        <p>Kid's Fashion</p>
                    </Link>

                    <Link to="/" className="flex justify-between items-center">
                        <p>Electronics</p>
                        <img src={CArrowRight} alt="Chevron_arrow_right" />
                    </Link>

                    <Link to="/" className="flex justify-between items-center">
                        <p>Home & Lifestyle</p>
                    </Link>

                    <Link to="/" className="flex justify-between items-center">
                        <p>Medicine</p>
                    </Link>

                    <Link to="/" className="flex justify-between items-center">
                        <p>Sports & Outdoor</p>
                    </Link>

                    <Link to="/" className="flex justify-between items-center">
                        <p>Baby's & Toys</p>
                    </Link>

                    <Link to="/" className="flex justify-between items-center">
                        <p>Groceries & Pets</p>
                    </Link>

                    <Link to="/" className="flex justify-between items-center">
                        <p>Health & Beauty</p>
                        <img src={CArrowRight} alt="Chevron_arrow_right" />
                    </Link>

                </div>
                <div className="bg-black col-span-1 md:col-span-4  text-white flex justify-between items-center">
                    <div className="hidden pl-6">
                        <div className="" >
                            <div className="flex gap-2 items-center">
                                <img src={AppLogo} alt="App_Logo" />
                                <p className="text-gray-300">iPhone 14 Series</p>
                            </div>
                            <h2 className="text-5xl font-bold py-10 leading-16">
                                Up to 12% <br />
                                off Voucher

                            </h2>


                        </div>

                        <div>
                            <Link to="/" className="text-white">
                                <p className="underline">Shop Now</p>
                                <img src={ArrowRight} alt="arrow_right" className="text-white" />
                            </Link>
                        </div>
                    </div>
                    <img src={HeroBg} alt="Hero Bg"
                        className="h-[350px] w-7/10"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero