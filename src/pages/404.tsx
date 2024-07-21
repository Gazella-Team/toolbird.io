import Layout from "@/components/Layout";
import Link from "next/link";

export default function PageNotFound() {
    return (
        <Layout noCta={true}>
            <section className="py-32">
                <div className="w-[86%] flex flex-col gap-4 mx-auto max-w-6xl text-center paragraph">
                    <h2 className="font-semibold text-gray-800 text-6xl">404</h2>
                    <p className="text-gray-600">Page not found. Go back <span><Link className="underline text-main" href={"/"}>Home</Link></span></p>
                </div>
            </section>
        </Layout>
    )
}