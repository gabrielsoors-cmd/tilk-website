import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F5EFE6',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(59, 79, 168, 0.12)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -140,
            left: -100,
            width: 420,
            height: 420,
            borderRadius: '50%',
            background: 'rgba(59, 79, 168, 0.08)',
          }}
        />
        <div
          style={{
            fontSize: 140,
            fontWeight: 600,
            color: '#3B4FA8',
            fontFamily: 'serif',
            letterSpacing: '-2px',
          }}
        >
          Tilk
        </div>
        <div
          style={{
            fontSize: 38,
            color: '#374151',
            marginTop: 20,
            fontFamily: 'sans-serif',
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          AI-anteckningar byggda för svenska företag
        </div>
      </div>
    ),
    { ...size }
  )
}
