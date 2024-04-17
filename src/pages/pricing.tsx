import DefaultHero from "@/components/DefaultHero";
import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import PricingTable from "@/components/pricingtable";

export default function Pricing() {
    return (
        <Layout white={true}>
            <DefaultHero heading="Flexible pricing" description="Manage web analytics, cron jobs, monitoring, feature flags, waitlists, client feedback and more within just one platform. ToolBird makes building tech products easier" />
            <div className="mt-[-250px]">
                <PricingTable />
            </div>
        </Layout>
    )
}