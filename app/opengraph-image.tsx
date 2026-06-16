import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'Dummy Labs — Build anyway.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#FAFAF7',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontFamily: 'serif',
            fontSize: 22,
            color: '#1A1A1A',
            letterSpacing: '-0.01em',
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              background: '#0A1124',
            }}
          />
          Dummy Labs
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
          }}
        >
          <div
            style={{
              fontFamily: 'serif',
              fontSize: 192,
              lineHeight: 0.95,
              letterSpacing: '-0.035em',
              color: '#1A1A1A',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Build</span>
            <span style={{ fontStyle: 'italic' }}>anyway.</span>
          </div>

          <div
            style={{
              fontFamily: 'sans-serif',
              fontSize: 22,
              color: '#6B6B6B',
              letterSpacing: '-0.005em',
              maxWidth: 720,
              lineHeight: 1.5,
            }}
          >
            A community and media project for non-technical professionals using AI
            to do real work. By one of them.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'sans-serif',
            fontSize: 14,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#6B6B6B',
          }}
        >
          <span>dummy-labs.com</span>
          <span>2026</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
