import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <>
        <div className="w-full h-[100vh] grid place-content-center polkadot text-white">
            <div className="glass p-12 flex items-center flex-col">
                <div className="flex flex-row gap-16">
                    <div className="flex flex-col">
                        <p className="text-3xl font-extrabold font-display text-neutral-400">A secondary seperate</p>
                        <p className="text-3xl font-extrabold font-display">website/backend</p>
                        <p className="text-lg flex flex-row gap-2 font-medium">Hosts: 
                            <Link href="/api/og?title=Generating%20Opengraph%20thumbnails%20and%20images%20from%20HTML%20and%20CSS%20without%20using%20a%20browser%20instance&pagetype=A%20non-existant%20page" className="bg-neutral-900 px-1 hover:bg-neutral-800 rounded-md">nb-og</Link>
                        </p>
                        <div className="grow"></div>
                        <Link className="bg-neutral-900 px-6 py-3 hover:bg-neutral-800 flex items-center gap-2 rounded-md text-xl w-min"
                            href="https://github.com/nbeerten/nb-next-api">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                            </svg>
                            Github
                        </Link>
                    </div>
                    <div>
                        <Image src="/favicon.svg" width={200} height={200} alt="Logo of site" className="w-48 h-48"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
