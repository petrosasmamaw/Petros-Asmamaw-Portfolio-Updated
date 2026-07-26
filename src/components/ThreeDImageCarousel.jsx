import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';

const EMBEDDED_CSS = `
.cascade-slider_container {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
  height: 190px;
    z-index: 20;
    user-select: none;
    -webkit-user-select: none;
    touch-action: pan-y;
}

.cascade-slider_slides {
    position: relative;
    height: 100%;
}

.cascade-slider_item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) scale(0.3);
    transition: all 1s ease;
    opacity: 0;
    z-index: 1;
    cursor: grab;
}

.cascade-slider_item.now {
    cursor: default;
}

.cascade-slider_item:active {
    cursor: grabbing;
}

.cascade-slider_item.next {
    left: 50%;
    transform: translateY(-50%) translateX(-120%) scale(0.6);
    opacity: 1;
    z-index: 4;
}

.cascade-slider_item.prev {
    left: 50%;
    transform: translateY(-50%) translateX(20%) scale(0.6);
    opacity: 1;
    z-index: 4;
}

.cascade-slider_item.now {
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) scale(1);
    opacity: 1;
    z-index: 5;
}

.cascade-slider_arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    cursor: pointer;
    z-index: 6;
    transform: translate(0, -50%);
    width: 40px;
    height: 40px;
    transition: all 0.3s ease;
}

@media screen and (max-width: 575px) {
    .cascade-slider_arrow-left {
        left: 0;
    }
    .cascade-slider_arrow-right {
        right: 0;
    }
    .cascade-slider_item.next,
    .cascade-slider_item.prev {
        opacity: 0.35;
    }
}

@media screen and (min-width: 576px) {
    .cascade-slider_arrow-left {
        left: -4%;
    }
    .cascade-slider_arrow-right {
        right: -4%;
    }
}

.cascade-slider_slides img {
  max-width: 170px;
    height: auto;
  border-radius: 28px;
    display: block;
    transition: filter 1s ease;
  aspect-ratio: 16 / 10;
    object-fit: cover;
}

.cascade-slider_item:not(.now) img {
    filter: grayscale(0.95);
}

@media screen and (min-width: 414px) {
    .cascade-slider_container {
    height: 220px;
    }
    .cascade-slider_slides img {
    max-width: 210px;
    }
}

@media screen and (min-width: 576px) {
    .cascade-slider_container {
    height: 250px;
    }
    .cascade-slider_slides img {
    max-width: 235px;
    }
}

@media screen and (min-width: 768px) {
    .cascade-slider_item.next {
        transform: translateY(-50%) translateX(-125%) scale(0.6);
    }
    .cascade-slider_item.prev {
        transform: translateY(-50%) translateX(25%) scale(0.6);
    }
    .cascade-slider_slides img {
      max-width: 255px;
    }
}

@media screen and (min-width: 991px) {
    .cascade-slider_item.next {
        transform: translateY(-50%) translateX(-115%) scale(0.55);
        z-index: 4;
    }
    .cascade-slider_item.prev {
        transform: translateY(-50%) translateX(15%) scale(0.55);
        z-index: 4;
    }
    .cascade-slider_item.next2 {
        transform: translateY(-50%) translateX(-150%) scale(0.37);
        z-index: 1;
    }
    .cascade-slider_item.prev2 {
        transform: translateY(-50%) translateX(50%) scale(0.37);
        z-index: 2;
    }
    .cascade-slider_slides img {
      max-width: 285px;
    }
    .cascade-slider_container {
      height: 300px;
    }
}

@media screen and (min-width: 1100px) {
    .cascade-slider_item.next {
        transform: translateY(-50%) translateX(-130%) scale(0.55);
    }
    .cascade-slider_item.prev {
        transform: translateY(-50%) translateX(30%) scale(0.55);
    }
    .cascade-slider_item.next2 {
        transform: translateY(-50%) translateX(-180%) scale(0.37);
    }
    .cascade-slider_item.prev2 {
        transform: translateY(-50%) translateX(80%) scale(0.37);
    }
    .cascade-slider_slides img {
      max-width: 320px;
    }

    .cascade-slider_container {
      height: 320px;
    }
}
`;

const getSlideClasses = (index, activeIndex, total, visibleCount) => {
  const diff = index - activeIndex;
  if (diff === 0) return 'now';
  if (diff === 1 || diff === -total + 1) return 'next';
  if (visibleCount === 5 && (diff === 2 || diff === -total + 2)) return 'next2';
  if (diff === -1 || diff === total - 1) return 'prev';
  if (visibleCount === 5 && (diff === -2 || diff === total - 2)) return 'prev2';
  return '';
};

export default function ThreeDImageCarousel({
  slides,
  itemCount = 5,
  autoplay = true,
  delay = 3,
  pauseOnHover = true,
  className = '',
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const autoplayIntervalRef = useRef(null);
  const total = slides.length;
  const swipeThreshold = 50;

  const navigate = useCallback(
    (direction) => {
      setActiveIndex((current) => {
        if (direction === 'next') return (current + 1) % total;
        return (current - 1 + total) % total;
      });
    },
    [total]
  );

  const stopAutoplay = useCallback(() => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (autoplay && total > 1) {
      stopAutoplay();
      autoplayIntervalRef.current = window.setInterval(() => {
        navigate('next');
      }, delay * 1000);
    }
  }, [autoplay, delay, navigate, stopAutoplay, total]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  const handleStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    stopAutoplay();
  };

  const handleEnd = (clientX) => {
    if (!isDragging) return;
    const distance = clientX - startX;

    if (Math.abs(distance) > swipeThreshold) {
      if (distance < 0) navigate('next');
      else navigate('prev');
    }

    setIsDragging(false);
    setStartX(0);
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) stopAutoplay();
  };

  const handleMouseLeave = (e) => {
    if (isDragging) handleEnd(e.clientX);
    if (autoplay && pauseOnHover) startAutoplay();
  };

  if (!slides || total === 0) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: EMBEDDED_CSS }} />

      <div
        className={`cascade-slider_container ${className} bg-transparent`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseUp={(e) => {
          handleEnd(e.clientX);
          startAutoplay();
        }}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          handleEnd(e.changedTouches[0].clientX);
          startAutoplay();
        }}
      >
        <div className="cascade-slider_slides">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`cascade-slider_item ${getSlideClasses(index, activeIndex, total, itemCount)}`}
              data-slide-number={index}
            >
              <a href={slide.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={slide.src}
                  alt={slide.alt || `Slide ${index + 1}`}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `https://placehold.co/350x350/4F46E5/ffffff?text=Slide%20${index + 1}`;
                  }}
                />
              </a>
            </div>
          ))}
        </div>

        {total > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              className="cascade-slider_arrow cascade-slider_arrow-left cursor-pointer rounded-full bg-slate-900/50 dark:bg-black/40 text-white p-1.5 sm:p-2 hover:bg-slate-900/70 dark:hover:bg-black/60 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                navigate('prev');
              }}
              data-action="prev"
            >
              <ArrowLeftCircle size={28} />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              className="cascade-slider_arrow cascade-slider_arrow-right cursor-pointer rounded-full bg-slate-900/50 dark:bg-black/40 text-white p-1.5 sm:p-2 hover:bg-slate-900/70 dark:hover:bg-black/60 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                navigate('next');
              }}
              data-action="next"
            >
              <ArrowRightCircle size={28} />
            </button>
          </>
        )}
      </div>
    </>
  );
}

ThreeDImageCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
  itemCount: PropTypes.oneOf([3, 5]),
  autoplay: PropTypes.bool,
  delay: PropTypes.number,
  pauseOnHover: PropTypes.bool,
  className: PropTypes.string,
};
