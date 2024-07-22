import { CircleCheck } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";

export default function CustomTracking() {
    return (
        <section className="pt-32 pb-8">
            <div className="w-[86%] mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="bg-white border paragraph text-center rounded-[25px] border-gray-600/10 shadow-clean">
                    <div className="relative">
                            <img
                                className="h-[270px] w-full object-cover rounded-t-[25px]"
                                src="/showcases/filtering.webp"
                            ></img>
                            <div
                                className="absolute inset-0 h-full rounded-t-[25px]"
                                style={{
                                    background:
                                        'linear-gradient(0deg, rgba(255,255,255,0.8225884103641457) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.7441570378151261) 100%)',
                                }}
                            ></div>
                        </div>
                </div>
                <div style={{ background: 'radial-gradient(circle, rgba(103,27,255,0.06908700980392157) 0%, rgba(255,255,255,0) 50%)', }} className="flex py-24 flex-col gap-6">
                    <div className="flex flex-col gap-3">
                        <p className="font-[Caveat] text-main text-2xl">No website slowdowns</p>
                        <h2 className="text-4xl font-semibold text-gray-800">Our lightweight script don&apos;t compromise on speed</h2>
                    </div>
                    <p className="paragraph text-lg text-gray-600">Get a detailed reporting tab for each client and also all client reporting data in one easy dashboard. No more switching between platforms.</p>
                    <div className="flex flex-col paragraph gap-5">
                        <div className="flex items-center gap-3">
                            <FaCheckCircle size={20} className="text-main" />
                            <p className="text-lg text-gray-600">Less than 4kb</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCheckCircle size={20} className="text-main" />
                            <p className="text-lg text-gray-600">Less than 4kb</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCheckCircle size={20} className="text-main" />
                            <p className="text-lg text-gray-600">Less than 4kb</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}