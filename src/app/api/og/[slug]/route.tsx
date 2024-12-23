import { ImageResponse } from 'next/og';
import { readFileSync } from 'node:fs';
import client from '~/tina/__generated__/client';


const font = readFileSync('./src/app/api/og/[slug]/Geist-Bold.ttf');
const fontBold = readFileSync('./src/app/api/og/[slug]/Geist-Bold.ttf');

interface Context {
  params: Promise<{ slug?: string }>;
}

// http://localhost:3000/api/og/red-book

const DefaultOGImageElement = (<div
  style={{
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    overflow: 'hidden',
    display: 'flex',
    backgroundImage:
      'linear-gradient(to right,rgba(255, 255, 255, 0.1) 1px,transparent 1px),linear-gradient(to bottom,rgba(255, 255, 255, 0.1) 1px,transparent 1px)',
    backgroundSize: '180px 180px',
  }}
>
  <div
    style={{
      position: 'absolute',
      top: '-400px',
      left: '-400px',
      width: '800px',
      height: '800px',
      borderRadius: '100%',
      backgroundColor: '#000',
      fontFamily: 'Geist',
      boxShadow: 'inset 0px 4px 132px rgba(255, 255, 255, 0.25)',
    }}
  ></div>
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        <img
          width="128"
          height="128"
          src={`https://github.com/liaoyio.png`}
          style={{
            borderRadius: 128,
            border: '2px rgba(255, 255, 255, 0.1)',
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            background:
              'linear-gradient( 90deg, #008CFF 0%, #A900FF 46%, #FFB43C 77%, #FFFFFF 100% )',
            fontSize: '60px',
            fontWeight: 700,

            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Liaoyi&apos;s Digital Garden
        </h1>
        <span style={{ fontSize: '60px', paddingBottom: '12px', marginLeft: '4px' }}>🪴</span>

      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            background: 'linear-gradient(90deg, #FFFFFF 0%,rgba(255, 255, 255, 0.2) 30%,rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.2) 100%)',
            fontSize: '18px',
            fontWeight: 600,
            backgroundClip: 'text',
            fontFamily: 'Geist',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          www.liaoyi.space
        </div>
      </div>
    </div>
  </div>
</div>)

const DefaultOGImage = new ImageResponse(DefaultOGImageElement, {
  width: 1200,
  height: 600,
  emoji: 'fluent',

  fonts: [
    {
      name: 'Geist',
      data: font,
      weight: 400,
    },
    {
      name: 'Geist',
      data: fontBold,
      weight: 600,
    },
  ],
});

export async function GET(_: Request, { params }: Context) {
  const slug = (await params).slug;
  if (!slug) {
    return DefaultOGImage
  }

  try {
    const res = await client.queries.post({ relativePath: `${slug}.mdx` });
    if (res.data) {

      return new ImageResponse((<div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          backgroundColor: '#000',
          overflow: 'hidden',
          display: 'flex',
          backgroundImage:
            'linear-gradient(to right,rgba(255, 255, 255, 0.1) 1px,transparent 1px),linear-gradient(to bottom,rgba(255, 255, 255, 0.1) 1px,transparent 1px)',
          backgroundSize: '180px 180px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-400px',
            left: '-400px',
            width: '800px',
            height: '800px',
            borderRadius: '100%',
            backgroundColor: '#000',
            fontFamily: 'Geist',
            boxShadow: 'inset 0px 4px 132px rgba(255, 255, 255, 0.25)',
          }}
        ></div>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyItems: 'center',
              }}
            >
              <img
                width="128"
                height="128"
                src={`https://github.com/liaoyio.png`}
                style={{
                  borderRadius: 128,
                  border: '2px rgba(255, 255, 255, 0.1)',
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                width: '64%',
              }}
            >
              <h1
                style={{
                  background:
                    'linear-gradient( 90deg, #008CFF 0%, #A900FF 46%, #FFB43C 77%, #FFFFFF 100% )',
                  fontSize: '40px',
                  fontWeight: 700,

                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {res.data.post.title}
              </h1>


            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  background: 'linear-gradient(90deg, #FFFFFF 0%,rgba(255, 255, 255, 0.2) 30%,rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.2) 100%)',
                  fontSize: '18px',
                  fontWeight: 600,
                  backgroundClip: 'text',
                  fontFamily: 'Geist',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                www.liaoyi.space
              </div>
            </div>
          </div>
        </div>
      </div>), {
        width: 1200,
        height: 600,
        emoji: 'fluent',
        fonts: [
          {
            name: 'Geist',
            data: font,
            weight: 400,
          },
          {
            name: 'Geist',
            data: fontBold,
            weight: 600,
          },
        ],
      })
    }
  } catch (error) {
    return DefaultOGImage
  }
}


