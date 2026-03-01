import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site.config'

export const runtime = 'edge'

export const alt = 'Quentin Portfolio'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#050505',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                }}
            >
                {/* Grille de fond subtile */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'radial-gradient(ellipse at center, rgba(255,255,255,0.05) 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                    }}
                />

                {/* Effets de lueur */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-20%', left: '-10%',
                        width: '1000px', height: '1000px',
                        backgroundColor: 'rgba(10, 92, 54, 0.4)',
                        borderRadius: '50%',
                        filter: 'blur(200px)',
                        zIndex: 0
                    }}></div>
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-20%', right: '-10%',
                        width: '800px', height: '800px',
                        backgroundColor: 'rgba(16, 185, 129, 0.3)',
                        borderRadius: '50%',
                        filter: 'blur(200px)',
                        zIndex: 0
                    }}></div>

                {/* Contenu principal */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
                    <h1 style={{
                        fontSize: 100,
                        color: 'white',
                        fontWeight: 'bold',
                        margin: '0 0 20px 0',
                        textAlign: 'center',
                        display: 'flex',
                        gap: '20px',
                        alignItems: 'center'
                    }}>
                        <span style={{ color: '#34d399' }}>{'<'}</span>
                        {siteConfig.author.split(' ')[0]} {/* Utiliser le prénom "Koffi" ou "Quentin" au besoin */}
                        <span style={{ color: '#34d399' }}>{' />'}</span>
                    </h1>

                    <p style={{
                        fontSize: 45,
                        color: '#a8a29e',
                        textAlign: 'center',
                        margin: 0,
                        maxWidth: '800px'
                    }}>
                        Développeur <span style={{ color: '#34d399', marginLeft: '10px', marginRight: '10px' }}>Full-Stack</span> & UI/UX
                    </p>

                    <p style={{
                        fontSize: 24,
                        color: '#78716c',
                        marginTop: '40px'
                    }}>
                        {siteConfig.url.replace('https://', '')}
                    </p>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
