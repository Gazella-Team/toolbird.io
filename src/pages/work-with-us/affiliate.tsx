import DefaultHero from "@/components/DefaultHero";
import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import PricingTable from "@/components/pricingtable";

export default function Affiliate() {
    return (
        <Layout white={true}>
            <DefaultHero heading="Become an affiliate" description="Manage web analytics, cron jobs, monitoring, feature flags, waitlists, client feedback and more within just one platform. ToolBird makes building tech products easier" />
        </Layout>
    )
}