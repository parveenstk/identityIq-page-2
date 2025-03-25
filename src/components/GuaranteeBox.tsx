import { GauranteeBox } from "../data/helper"
import Text2 from "./Text2";

function GuaranteeBox({ className }: { className?: string; }) {
    return (
        <div className={`${className}`} >
            <section className="bg-[#ffefb1] p-4 sm:p-8 rounded-lg border-2 border-yellow-300 shadow-xl">
                <div className="flex flex-col items-center sm:items-start">
                    <img src="./images/iq.webp" alt="box-image" className="w-55 sm:w-70 mb-2 sm:mb-6" />
                    <Text2 innerClassName="text-[24px] text-center sm:text-left font-bold sm:leading-[1.9rem] leading-[1.7rem]" margin={false} content={GauranteeBox} />
                    <button className="py-2 px-6 bg-red-600 text-white text-2xl cursor-pointer font-semibold rounded-lg mt-3 w-fit">Get Started Today</button>
                </div>
            </section>
        </div>
    )
}

export default GuaranteeBox