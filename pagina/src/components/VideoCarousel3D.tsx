'use client'

import { useEffect, useState } from 'react'

const videos = [
  'https://youtube.com/shorts/8_hq4qZGTao?si=XOMh-Nh3DAHC1weY',
  'https://youtube.com/shorts/5uHaWiWMO4g?si=0YWXIRoYQUuQroS6',
  'https://youtube.com/shorts/5uHaWiWMO4g?si=QN00yCIrqwv9IEIx',
  'https://youtube.com/shorts/ydonpXZmAMo?si=Pdy05S8RL1cWgtrd',
  'https://youtube.com/shorts/3GWJmzqUSmI?si=3gNYtXIIEU9s-SYf',
  'https://youtube.com/shorts/NkFdjFZPWBU?si=qhAeRRh99DtnMB4u',
  'https://youtube.com/shorts/MOF1XjfD59k?si=bWvCregiNZlTY6hU',
  'https://youtube.com/shorts/oBvrdz75xnI?si=BxeH6rxwpAKvd4Xx',
]

export default function VideoCarousel3D() {
  const [angle, setAngle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 0.25) // velocidade do giro
    }, 30)

    return () => clearInterval(interval)
  }, [])

  const radius = 500
  const step = 360 / videos.length

  return (
    <div className="relative w-full h-[450px] flex items-center justify-center overflow-hidden">
      <div
        className="relative w-[300px] h-[300px]"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateY(${angle}deg)`,
        }}
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className="absolute w-[180px] mx-auto h-[320px]  shadow-2xl "
            style={{
              transform: `rotateY(${index * step}deg) translateZ(${radius}px)`,
            }}
          >
            <iframe
              src={toEmbed(video)}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function toEmbed(url: string) {
  if (url.includes('/shorts/')) {
    const id = url.split('/shorts/')[1].split('?')[0]
    return `https://www.youtube.com/embed/${id}?mute=1&controls=0`
  }
  return url
}
