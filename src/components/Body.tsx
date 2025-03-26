import { boxContent, ExtraContent, paragraph, srcData, withOutAura } from "../data/helper"
import ExtraText from "./ExtraText"
import FAQs from "./FAQs"
import Logo from "./Logo"
import Paragraph from "./Paragraph"
import Review from "./Review"
import Sources from "./Sources"
import Suggestion from "./Suggestion"
import Table from "./Table"
import Text from "./Text"
import Yellowbox from "./Yellowbox"
import GuaranteeBox from "./GuaranteeBox"
import Image from "./Image"

function Body({ className }: { className?: string }) {
    return (
        <div className={` ${className}`}>
            <Yellowbox content={boxContent[0]} />
            <Text className="mb-2 sm:mb-8" data={paragraph[0]} />
            <Text data={paragraph[1]} />
            <p className="text-center sm:text-left text-lg leading-5 sm:leading-7 sm:text-xl sm:my-2">The basics aren’t enough anymore.<br /> That’s why you need…</p>
            <p className="text-3xl sm:text-3xl text-center sm:text-left font-bold mb-2 sm:pb-7">8 Identity Theft Secrets <span className="block sm:inline">No One Is Telling You</span></p>
            <Paragraph />
            <Yellowbox content={boxContent[1]} />
            <ExtraText content={ExtraContent.content1} />
            <ExtraText content={ExtraContent.content2} />
            <Image src={srcData[0]} className="w-full pb-8 flex justify-center items-center" innerClassName="w-[50%]" />
            <ExtraText content={ExtraContent.content3} />
            <ExtraText content={ExtraContent.content4} />
            <ExtraText content={ExtraContent.content5} />
            <ExtraText content={ExtraContent.content6} />
            <ExtraText content={ExtraContent.content7} />
            <ExtraText content={ExtraContent.content8} />
            <ExtraText content={ExtraContent.content9} />
            <ExtraText content={ExtraContent.content10} />
            <ExtraText content={ExtraContent.content11} />
            <ExtraText content={ExtraContent.content12} />
            <Table />
            <Image src={srcData[1]} className="sm:pt-5 w-max-full" />
            <ExtraText content={withOutAura} />
            <Suggestion />
            <GuaranteeBox />
            <Review />
            <Logo />
            <GuaranteeBox className="my-6" />
            <FAQs />
            <GuaranteeBox className="my-6" />
            <Sources />
        </div>
    )
}

export default Body