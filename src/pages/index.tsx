import { RevealLight } from "@/components/Animations/RevealLight";
import Layout from "@/components/Layout";
import MainHero from "@/components/Ui/MainHero";
import Comparison from "@/components/comparison";

export default function Home() {
  return (
    <Layout mode="">
      <MainHero heading="The all-in-one toolbox for your tech startup" paragraph="ToolBird offers you all the tools your tech startup needs to start, scale and run, in one platform only. Say goodbye to the dissatisfaction of having several expensive tool-subscriptions on countless platforms. Say hi to ToolBird" />
      <section>
        <RevealLight delayTime={0.2}>
          <div className="w-[90%] mx-auto max-w-[1200px] mt-[-400px]">
            <img className="w-full border-[1px] rounded-[14px]" src="/showcases/waitlists.svg"></img>
          </div>
        </RevealLight>
      </section>
      <Comparison />
    </Layout>
  );
}
