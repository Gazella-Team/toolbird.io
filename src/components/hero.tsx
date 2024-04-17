import Link from "next/link";
import DashboardDisplay from "./dashboarddisplay";
import Features from "./features";
import { Reveal } from "./Animations/Reveal";
import { RevealLight } from "./Animations/RevealLight";
import NiceModal from "@ebay/nice-modal-react";
import JoinWaitlistModal from "./modals/JoinWaitlistModal";

export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="w-[95%] mx-auto max-w-[1400px] bg-slate-50  bg-center bg-cover rounded-3xl min-h-[750px] py-24 text-center flex flex-col items-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-6xl font-semibold text-gray-800 tracking-tight">Build and launch <span className="bg-gradient-to-r from-main via-[#7134eb] via-[#6531cc] via-[#7134eb] to-main text-transparent bg-clip-text">products faster</span></h1>
          <p className="text-lg mx-auto max-w-[800px] text-gray-600">Manage web analytics, cron jobs, monitoring, feature flags, waitlists, client feedback and more within just one platform. ToolBird makes building tech products easier</p>
        </div>
        <div className="flex items-center gap-3 my-10">
          <Link className="bg-main border-[3px] border-main px-6 py-3 text-white rounded-full font-semibold text-sm" href={"/"}>Join Waitlist</Link>
          <Link className="bg-transparent border-[3px] border-main px-6 py-3 text-main rounded-full font-semibold text-sm" href={"/"}>Learn More</Link>
        </div>
      </div>
    </section>
  );
}
