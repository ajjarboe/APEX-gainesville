import type { ReactNode } from "react";
import { Photo } from "@/components/patterns/Photo";

export type HeaderPhoto = {
  /** Path without the size, e.g. "/img/machine". */
  src: string;
  alt: string;
  /** Widths that exist in public/img, smallest first. */
  widths: number[];
  /** Size of the largest file. */
  width: number;
  height: number;
  /** "upper" keeps more of the top of the photo in view (heads, shoulders). */
  focus?: "upper";
};

/**
 * Use this at the top of every interior page. The home page uses Hero instead.
 * Keep it short so the content shows sooner. Skip the eyebrow when it would only
 * repeat the menu item or page name the visitor just clicked.
 * Pass `photo` to put a darkened studio photo behind the title (about 60% of the
 * height of a full photo banner); leave it out for the plain gray box.
 */
export function PageHeader({
  eyebrow,
  title,
  lede,
  photo,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  photo?: HeaderPhoto;
  children?: ReactNode;
}) {
  const body = (
    <>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1 className={eyebrow ? "display-lg mt-2" : "display-lg"}>{title}</h1>
      {lede ? <p className="lede mt-3">{lede}</p> : null}
      {children ? <div className="mt-5 flex flex-wrap gap-3">{children}</div> : null}
    </>
  );

  if (photo) {
    return (
      <section className="page-photo">
        <Photo
          src={photo.src}
          alt={photo.alt}
          widths={photo.widths}
          width={photo.width}
          height={photo.height}
          sizes="100vw"
          className={photo.focus === "upper" ? "hero-media focus-upper" : "hero-media"}
          priority
        />
        <div className="page-photo-scrim" />
        <div className="shell page-photo-inner">{body}</div>
      </section>
    );
  }

  return (
    <section className="band-header band-warm">
      <div className="shell">{body}</div>
    </section>
  );
}
