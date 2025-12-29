'use client'

import { useEffect, useState } from 'react'

const videos = [
  '8_hq4qZGTao',
  '5uHaWiWMO4g',
  'ydonpXZmAMo',
  '3GWJmzqUSmI',
  'NkFdjFZPWBU',
  'MOF1XjfD59k',
  'oBvrdz75xnI',
]

const VISIBLE = 3

export default function VideoCarouselDepth() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % videos.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isPaused])

  function next() {
    setCurrent(prev => (prev + 1) % videos.length)
    setIsPaused(false)
  }

  function prev() {
    setCurrent(prev => (prev === 0 ? videos.length - 1 : prev - 1))
    setIsPaused(false)
  }

  const visibleVideos = Array.from({ length: VISIBLE }).map((_, i) => {
    return videos[(current + i) % videos.length]
  })

  function onClickVideo(index: number) {
    if (index === 1) setIsPaused(true)
  }

  function getThumbnailUrl(id: string) {
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
  }

  function getEmbedUrl(id: string) {
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto py-12">
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 cursor-pointer -translate-y-1/2 z-20 bg-black/60 text-white w-10 h-10 rounded-full"
      >
        ‹
      </button>

      <div className="flex justify-center items-center gap-6">
        {visibleVideos.map((id, i) => {
          const isCenter = i === 1

          return (
            <div
              key={i}
              onClick={() => onClickVideo(i)}
              className="transition-all duration-500 cursor-pointer"
              style={{
                transform: `
                  scale(${getScale(i)})
                  translateY(${getTranslateY(i)}px)
                `,
                opacity: getOpacity(i),
                zIndex: isCenter ? 10 : 1,
              }}
            >
              <div className="w-[220px] h-[390px] bg-black rounded-xl overflow-hidden shadow-2xl flex items-center justify-center">
                {isCenter ? (
                  <iframe
                    src={getEmbedUrl(id)}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={getThumbnailUrl(id)}
                    alt="Thumbnail do vídeo"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          )
        })}
      </div>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 cursor-pointer -translate-y-1/2 z-20 bg-black/60 text-white w-10 h-10 rounded-full"
      >
        ›
      </button>
    </div>
  )
}

/* profundidade */
function getScale(index: number) {
  if (index === 1) return 1
  if (index === 0 || index === 2) return 0.9
  return 0.8
}

function getOpacity(index: number) {
  if (index === 1) return 1
  if (index === 0 || index === 2) return 0.7
  return 0.5
}

function getTranslateY(index: number) {
  if (index === 1) return 0
  if (index === 0 || index === 2) return 15
  return 20
}
