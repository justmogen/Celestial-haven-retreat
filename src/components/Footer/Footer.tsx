import Link from "next/link"
import { BsFillSendFill, BsTelephoneOutbound, BsTwitterX } from "react-icons/bs"

const Footer = () => {
    return (
        <footer className="mt-16">
            <div className="container mx-auto px-4">
                <Link href='/' className="font-black text-tertiary-dark">
                    Hotel
                </Link>
                <h4 className="font-semibold text-[40px] py-6">Contact</h4>
                <div className="flex flex-wrap gap-16 items-center justify-between">
                    <div className="flex-1">
                        <p>Location: Menengai Craters R5</p>
                        <div className="flex items-center py-4">
                            <BsFillSendFill />
                            <p className="pl-2">Email:justmogen@gmail.com </p>
                        </div>

                        <div className="flex items-center">
                            <BsTelephoneOutbound />
                            <p className="pl-2"> +254-708-184-850 </p>
                        </div>

                        <div className="flex items-center pt-4">
                            <BsTwitterX />
                            <p className="pl-2"> justmogen </p>
                        </div>
                    </div>
                    <div className="flex-1 md:text-right">
                        <p className="pb-4">About</p>
                        <p className="pb-4">Our Privacy Policy</p>
                        <p className="pb-4">Terms of Service</p>
                        <p> Customer Support</p>
                    </div>
                    <div className="flex-1 md:text-right">
                        <p className="pb-4">Dining Experience</p>
                        <p className="pb-4">Fitness & Wellness</p>
                        <p className="pb-4">Safari Tours</p>
                        <p>Events</p>

                    </div>
                </div>
            </div>
            <div className="bg-secondary h-5 md:h-[70px] mt-16 w-full bottom-0 left-0"></div>
        </footer>
    )
}il

export default Footer
