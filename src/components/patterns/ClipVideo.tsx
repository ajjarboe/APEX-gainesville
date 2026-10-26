import { useEffect, useRef, useState } from "react";
import { Photo } from "@/components/patterns/Photo";

/** Use this when a short, silent clip sits inside a page (not the hero), like
 *  the machine video on /the-machine/. It loops muted, keeps play/pause controls,
 *  and pauses when it scrolls off screen. People who asked the page not to move
 *  see the still instead. `poster` is a Photo stem; its widths must exist. */
export function ClipVideo({
  src,
  poster,
  posterWidths,
  width,
  height,
  alt,
}: {
  src: string;
  poster: string;
  posterWidths: number[];
  width: number;
  height: number;
  alt: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [motion, setMotion] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setMotion(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !motion) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      el.pause();
    };
  }, [motion]);

  if (!motion) {
    return (
      <Photo
        src={poster}
        alt={alt}
        widths={posterWidths}
        sizes="(min-width: 768px) 720px, 100vw"
        width={width}
        height={height}
        className="media-wide"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className="media-wide"
      src={src}
      poster={`${poster}-${posterWidths.at(-1)}.jpg`}
      width={width}
      height={height}
      muted
      loop
      playsInline
      controls
      preload="metadata"
      disablePictureInPicture
      aria-label={alt}
    />
  );
}
