import type { ReactNode } from "react";

/**
 * Use this at the top of every interior page. The home page uses Hero instead.
 * Keep it short so the content shows sooner. Skip the eyebrow when it would only
 * repeat the menu item or page name the visitor just clicked.
 */
export function PageHeader({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section className="band-header band-warm">
      <div className="shell">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className={eyebrow ? "display-lg mt-2" : "display-lg"}>{title}</h1>
        {lede ? <p className="lede mt-3">{lede}</p> : null}
        {children ? <div className="mt-5 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </section>
  );
}
