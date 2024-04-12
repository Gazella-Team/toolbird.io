import NiceModal from "@ebay/nice-modal-react";
import Link from "next/link";
import { useRouter } from "next/router";
import JoinWaitlistModal from "../modals/JoinWaitlistModal";
import Flyout from "./Flyout";

export default function Navbar({ white }: { white: boolean }) {
  const router = useRouter();
  const path = router.pathname;
  return white ? (
    <nav className="h-[80px] flex items-center bg-transparent">
      <div className="w-[95%] mx-auto max-w-[1400px] flex items-center justify-between text-gray-800">
        <div className="w-[50%] flex items-center justify-start">
          <Link href={"/"}>
            <img className="w-[120px]" src="/logos/logogray.svg"></img>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-8">
          <Flyout triggerName="Tools" heading="Every tool needed" links={[{name:"Waitlists", href:"/", description: "Create and share your waitlist with 2 clicks"}, {name:"Waitlists", href:"/", description: "Create and share your waitlist with 2 clicks"}, {name:"Waitlists", href:"/", description: "Create and share your waitlist with 2 clicks"}, {name:"Waitlists", href:"/", description: "Create and share your waitlist with 2 clicks"}]} />
          <Link className="text-[15px] font-semibold leading-6 text-gray-800" href={"/pricing"}>Pricing</Link>
          <Flyout triggerName="Company" heading="Every tool needed" links={[{name:"Waitlists", href:"/", description: "Create and share your waitlist with 2 clicks"}, {name:"Waitlists", href:"/", description: "Create and share your waitlist with 2 clicks"}, {name:"Waitlists", href:"/", description: "Create and share your waitlist with 2 clicks"}, {name:"Waitlists", href:"/", description: "Create and share your waitlist with 2 clicks"}]} />
          <Flyout triggerName="Learning" heading="Every tool needed" links={[{name:"Waitlists", href:"/", description: "Create and share your waitlist with 2 clicks"}, {name:"Waitlists", href:"/", description: "Create and share your waitlist with 2 clicks"}, {name:"Waitlists", href:"/", description: "Create and share your waitlist with 2 clicks"}, {name:"Waitlists", href:"/", description: "Create and share your waitlist with 2 clicks"}]} />
        </div>
        <div className="w-[50%] flex items-center justify-end gap-5 font-medium">
          <Link className="hidden sm:flex" target="_blank" href={"https://app.toolbird.io/auth/login"}>
            Log in
          </Link>
          <button
            onClick={() => NiceModal.show(JoinWaitlistModal)}
            className="bg-main border-[3px] border-main text-white px-6 py-1 rounded-full"
          >
            Join waitlist
          </button>
        </div>
      </div>
    </nav>
  ) : (
    <nav className="h-[90px] flex items-center bg-main">
      <div className="w-[96%] mx-auto flex items-center justify-between text-white">
        <div className="w-[20%] flex items-center justify-start">
          <Link href={"/"}>
            <img
              className="w-28"
              src={
                path === "/guides"
                  ? "/logos/guideslogogray.svg"
                  : "/logos/logogray.svg"
              }
            ></img>
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center gap-7">
          <Link href={"/about"}>Our story</Link>
          <Link href={"/"}>Community</Link>
          <Link href={"/"}>Contact</Link>
        </div>
        <div className="w-[20%] flex items-center justify-end gap-5">
          <Link target="_blank" href={"https://app.toolbird.io/auth/login"}>
            Log in
          </Link>
          <button
            onClick={() => NiceModal.show(JoinWaitlistModal)}
            className="bg-white border-[3px] border-main text-main px-6 py-2 rounded-full"
          >
            Join waitlist
          </button>
        </div>
      </div>
    </nav>
  );
}
