'use client'

import { QRCode } from 'react-qrcode-logo'

export default function Home() {
  return (
    <>
      <p>QR Code with logo</p>
      <QRCode
        value='https://github.com/gcoro/react-qrcode-logo'
        logoImage={'/title.png'}
        logoHeight={30}
        logoWidth={50}
        logoOpacity={0.8}
        removeQrCodeBehindLogo
        qrStyle='dots'
        bgColor='#f9f9f9'
        fgColor='#E17835'
      />
    </>
  )
}
