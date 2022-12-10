import localFont from '@next/font/local';
import '../assets/css/global.css';

// Font files can be colocated inside of `app`
const hubotSans = localFont({ src: '../assets/fonts/Hubot-Sans.woff2', variable: '--font-hubot' });
const monaSans = localFont({ src: '../assets/fonts/Mona-Sans.woff2', variable: '--font-mona' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${hubotSans.variable} ${monaSans.variable}`}>
      <head />
      <body>{children}</body>
    </html>
  )
}
