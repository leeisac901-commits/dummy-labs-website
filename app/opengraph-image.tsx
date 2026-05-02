import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const runtime = 'nodejs'
export const alt = 'Dummy Labs — AI-Powered Product Studio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const bannerData = await readFile(join(process.cwd(), 'public/brand/dummy-labs-banner.png'))
  const bannerSrc = `data:image/png;base64,${bannerData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#050914',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 32,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bannerSrc}
          alt="Dummy Labs"
          style={{ width: 640, objectFit: 'contain' }}
        />
        <p
          style={{
            fontFamily: 'monospace',
            fontSize: 22,
            color: '#94a3b8',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          One product. Every weekday. In public.
        </p>
      </div>
    ),
    { ...size }
  )
}
