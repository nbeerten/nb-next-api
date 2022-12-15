import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import indefinite from '@/packages/indefinite';

export const config = {
    runtime: 'experimental-edge',
};

const key = crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(process.env.OG_HMAC_SECRET),
    { name: 'HMAC', hash: { name: 'SHA-1' } },
    false,
    ['sign'],
);

function toHex(arrayBuffer: ArrayBuffer): string {
    return Array.prototype.map
        .call(new Uint8Array(arrayBuffer), (n: any) => n.toString(16).padStart(2, '0'))
        .join('');
};

// Make sure the font exists in the specified path:
const hubotSans = fetch(new URL('@/assets/fonts/Hubot-Sans-ExtraBoldWide-subset.ttf', import.meta.url)).then(
    (res) => res.arrayBuffer(),
);

const monaSans = fetch(new URL('@/assets/fonts/Mona-Sans-SemiBoldWide-subset.ttf', import.meta.url)).then(
    (res) => res.arrayBuffer(),
);

export default async function handler(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const title = searchParams.get('title');
        const pagetype = searchParams.get('pagetype');
        const token = searchParams.get('token');

        const verifyToken = toHex(
            await crypto.subtle.sign(
                'HMAC',
                await key,
                new TextEncoder().encode(JSON.stringify({ title, pagetype })),
            ),
        );

        if (token !== verifyToken) return new Response('Invalid token.', { status: 401 });


        const monaSansData = await monaSans;
        const hubotSansData = await hubotSans;

        const pageTypeData = pagetype.slice(0, 25) || 'page';
        const pageType = indefinite(pageTypeData, { capitalize: true })

        return new ImageResponse(
            (
                <div tw="bg-neutral-900 p-12 h-full w-full flex items-end justify-between flex-col flex-nowrap"
                    style={{
                        backgroundColor: '#171717',
                        backgroundImage: 'radial-gradient(circle at 12.5px 12.5px, #707070 2%, transparent 2%), radial-gradient(circle at 37.5px 37.5px, #404040 2%, transparent 2%)',
                        fontFamily: 'Mona Sans',
                        backgroundSize: '50px 50px',
                    }}>
                    <div id="large-glow" tw="absolute"
                        style={{
                            top: "120%",
                            right: "-60%",
                            borderRadius: "50%",
                            background: `linear-gradient(45deg, #ffdd33 1%, #ffc533 22%, #ffad42 31%, #ff9457 38%, #ff7a6b 44%, #ff6685 50%, #ff57a0 55%, #ff52ba 61%, #e854cf 66%, #bd5fe3 73%, #8268ee 81%, #0072f5 100%)`,
                            opacity: "0.15",
                            width: "800px",
                            height: "800px",
                            transform: "translate(-50%, -50%) rotate(1deg)",
                            zIndex: "-1",
                            filter: "blur(20px)",
                        }}></div>
                    <div id="large-glow-2" tw="absolute"
                        style={{
                            top: "85%",
                            left: "65%",
                            borderRadius: "50%",
                            background: `linear-gradient(45deg, #ffdd33 1%, #ffc533 22%, #ffad42 31%, #ff9457 38%, #ff7a6b 44%, #ff6685 50%, #ff57a0 55%, #ff52ba 61%, #e854cf 66%, #bd5fe3 73%, #8268ee 81%, #0072f5 99%)`,
                            opacity: "0.15",
                            width: "200px",
                            height: "200px",
                            transform: "translate(-50%, -50%) rotate(-5deg)",
                            zIndex: "-1",
                            filter: "blur(15px)",
                        }}></div>
                    <div id="large-glow-3" tw="absolute"
                        style={{
                            top: "10%",
                            left: "0%",
                            borderRadius: "50%",
                            background: `linear-gradient(45deg, #ffdd33 1%, #ffc533 22%, #ffad42 31%, #ff9457 38%, #ff7a6b 44%, #ff6685 50%, #ff57a0 55%, #ff52ba 61%, #e854cf 66%, #bd5fe3 73%, #8268ee 81%, #0072f5 99%)`,
                            opacity: "0.15",
                            width: "900px",
                            height: "900px",
                            transform: "translate(-50%, -50%) rotate(5deg)",
                            zIndex: "-1",
                            filter: "blur(40px)",
                        }}></div>
                    <div id="large-glow-4" tw="absolute"
                        style={{
                            top: "10%",
                            left: "40%",
                            borderRadius: "50%",
                            background: `linear-gradient(45deg, #ffdd33 1%, #ffc533 22%, #ffad42 31%, #ff9457 38%, #ff7a6b 44%, #ff6685 50%, #ff57a0 55%, #ff52ba 61%, #e854cf 66%, #bd5fe3 73%, #8268ee 81%, #0072f5 99%)`,
                            opacity: "0.12",
                            width: "200px",
                            height: "200px",
                            transform: "translate(-50%, -50%) rotate(5deg)",
                            zIndex: "-1",
                            filter: "blur(20px)",
                        }}></div>
                    <div id="large-glow-4" tw="absolute"
                        style={{
                            top: "140%",
                            left: "30%",
                            borderRadius: "50%",
                            background: `linear-gradient(0deg, #ffdd33 1%, #ffc533 22%, #ffad42 31%, #ff9457 38%, #ff7a6b 44%, #ff6685 50%, #ff57a0 55%, #ff52ba 61%, #e854cf 66%, #bd5fe3 73%, #8268ee 81%, #0072f5 99%)`,
                            opacity: "0.10",
                            width: "700px",
                            height: "700px",
                            transform: "translate(-50%, -50%) rotate(5deg)",
                            zIndex: "-1",
                            filter: "blur(20px)",
                        }}></div>
                    <div id="large-glow-5" tw="absolute"
                        style={{
                            top: "10%",
                            left: "90%",
                            borderRadius: "50%",
                            background: `linear-gradient(45deg, #ffdd33 1%, #ffc533 22%, #ffad42 31%, #ff9457 38%, #ff7a6b 44%, #ff6685 50%, #ff57a0 55%, #ff52ba 61%, #e854cf 66%, #bd5fe3 73%, #8268ee 81%, #0072f5 99%)`,
                            opacity: "0.12",
                            width: "500px",
                            height: "500px",
                            transform: "translate(-50%, -50%) rotate(-5deg)",
                            zIndex: "-2",
                            filter: "blur(20px)",
                        }}></div>
                    <div id="main" tw="grow flex items-center justify-center w-full"
                        style={{ fontFamily: 'Hubot Sans', filter: 'drop-shadow(0px 10px 8px #00000014) drop-shadow(0 4px 3px #00000033)' }}>
                        <h1 tw="text-white font-extrabold text-6xl mx-0 tracking-[-1px] leading-[1.2]"
                        >{title}</h1>
                    </div>

                    <div id='bottom' tw="flex items-center justify-between w-full"
                        style={{ filter: 'drop-shadow(0px 10px 8px #00000014) drop-shadow(0 4px 3px #00000033)' }}>
                        <div tw="flex items-start justify-end flex-col">
                            <p tw="text-neutral-400 m-0 mb-3 font-semibold text-5xl">{pageType} on</p>
                            <p tw="text-white m-0 font-semibold text-5xl">nilsbeerten.nl</p>
                        </div>
                        <div tw="flex h-[100px] w-[100px] items-start justify-end flex-col">
                            <svg viewBox="0 0 1024 1024" width="100" height="100" xmlns="http://www.w3.org/2000/svg" style={{ color: "white" }}>
                                <rect fill="#ffffff" width="100%" height="100%" rx="12.5%" />
                                <path
                                    d="m104 745v-410a527 527 0 0 1 24-6q22-5 49-9a536 536 0 0 1 56-6 670 670 0 0 1 39-1 301 301 0 0 1 35 2q18 2 33 6a148 148 0 0 1 16 6 137 137 0 0 1 31 18 115 115 0 0 1 21 21 150 150 0 0 1 22 41 186 186 0 0 1 6 20 318 318 0 0 1 7 42 410 410 0 0 1 2 36v239h-111v-224a415 415 0 0 0-1-29q-3-37-13-56-13-26-55-26-13 0-25 1a419 419 0 0 0-17 2 494 494 0 0 0-8 1v332h-111zm449-13v-593l111-19v212a215 215 0 0 1 25-10 169 169 0 0 1 20-5q22-4 43-4 41 0 73 16 32 16 53 45a194 194 0 0 1 23 42 246 246 0 0 1 9 28 313 313 0 0 1 9 48 403 403 0 0 1 2 42 326 326 0 0 1-4 51 257 257 0 0 1-10 40 205 205 0 0 1-21 45 176 176 0 0 1-18 24 176 176 0 0 1-63 44 203 203 0 0 1-1 0 201 201 0 0 1-49 13 263 263 0 0 1-38 3q-43 0-88-6-45-6-76-16zm111-307v230a179 179 0 0 0 21 3 202 202 0 0 0 5 0 517 517 0 0 0 10 1q5 0 9 0a251 251 0 0 0 5 0 103 103 0 0 0 31-4 81 81 0 0 0 38-25 83 83 0 0 0 14-25q11-28 11-75a293 293 0 0 0-2-34q-4-35-18-57a62 62 0 0 0-45-30 87 87 0 0 0-14-1q-18 0-36 5a163 163 0 0 0-14 5q-9 3-16 7z"
                                    fill="#171717" />
                                <rect x="10%" y="85.5%" width="80%" height="4%" rx="2%" fill="#171717" />
                            </svg>
                        </div>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 600,
                fonts: [
                    {
                        name: 'Hubot Sans',
                        data: hubotSansData,
                        style: 'normal',
                    },
                    {
                        name: 'Mona Sans',
                        data: monaSansData,
                        style: 'normal',
                    },
                ],
            },
        );
    } catch (error: any) {
        console.log(`${error.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}