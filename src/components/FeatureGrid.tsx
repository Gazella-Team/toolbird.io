export default function FeatureGrid() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="w-[96%] mx-auto max-w-[1400px] flex flex-col gap-6 text-gray-800">
                <div className="grid grid-cols-bentoLeft gap-6">
                    <div className="bg-white border border-gray-600/10 rounded-xl">
                        <div className="min-h-[360px] bg-main rounded-t-xl"></div>
                        <div className="p-10 flex flex-col gap-2">
                            <img className="w-32" src="/toolicons/waitlists.svg"></img>
                            <h2 className="text-2xl font-semibold">One place for all tools</h2>
                            <p className="font-medium text-gray-600">Manage all SaaS tools efficiently in one platform</p>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-600/10 rounded-xl">
                        <div className="min-h-[360px] bg-main rounded-t-xl"></div>
                        <div className="p-10 flex flex-col gap-2">
                            <h2 className="text-2xl font-semibold">One place for all tools</h2>
                            <p className="font-medium text-gray-600">Manage all SaaS tools efficiently in one platform</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-bentoRight gap-6">
                    <div className="bg-white border border-gray-600/10 rounded-xl">
                        <div className="min-h-[360px] bg-main rounded-t-xl"></div>
                        <div className="p-10 flex flex-col gap-2">
                            <h2 className="text-2xl font-semibold">One place for all tools</h2>
                            <p className="font-medium text-gray-600">Manage all SaaS tools efficiently in one platform</p>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-600/10 rounded-xl">
                        <div className="min-h-[360px] bg-main rounded-t-xl"></div>
                        <div className="p-10 flex flex-col gap-2">
                            <h2 className="text-2xl font-semibold">One place for all tools</h2>
                            <p className="font-medium text-gray-600">Manage all SaaS tools efficiently in one platform</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-bentoLeft gap-6">
                    <div className="bg-white border border-gray-600/10 rounded-xl">
                        <div className="min-h-[360px] bg-main rounded-t-xl"></div>
                        <div className="p-10 flex flex-col gap-2">
                            <h2 className="text-2xl font-semibold">One place for all tools</h2>
                            <p className="font-medium text-gray-600">Manage all SaaS tools efficiently in one platform</p>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-600/10 rounded-xl">
                        <div className="min-h-[360px] bg-main rounded-t-xl"></div>
                        <div className="p-10 flex flex-col gap-2">
                            <h2 className="text-2xl font-semibold">One place for all tools</h2>
                            <p className="font-medium text-gray-600">Manage all SaaS tools efficiently in one platform</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}