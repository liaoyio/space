import React from 'react';

export default function page() {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden">
      <div
        style={{
          position: 'relative',
          width: '1200px',
          height: '720px',
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
            zIndex: 999,
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
                  background: 'linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%)',
                  fontSize: '16px',
                  fontWeight: 600,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                www.liaoyi.space
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
