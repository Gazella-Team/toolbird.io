import FeatureGrid from "@/components/FeatureGrid";
import Layout from "@/components/Layout";
import DashboardDisplay from "@/components/dashboarddisplay";
import Features from "@/components/features";
import Hero from "@/components/hero";
import { HeroScrollDemo } from "@/components/hero02";
import Mission from "@/components/mission";

export default function Home() {
  return (
    <Layout white={true}>
      <HeroScrollDemo />
    </Layout>
  )
}