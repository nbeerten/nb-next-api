import { NextRequest } from "next/server";

export default function Head(req: NextRequest) {
    return (
        <>
            <title>Nils Beerten</title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

            <meta name="og:title" content="Vercel Edge Network" />
            <meta name="og:description" content="Vercel Edge Network" />
            <meta
            name="og:image"
            content={
                // Because OG images must have a absolute URL, we use the
                // `VERCEL_URL` environment variable to get the deployment’s URL.
                // More info:
                // https://vercel.com/docs/concepts/projects/environment-variables
                `${
                process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
                }/api/og?title=Next Infastructure&pagetype=A seperate backend`
            }
            />
        </>
    )
}
