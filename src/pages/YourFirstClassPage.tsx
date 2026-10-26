import { SiteChrome } from "@/components/layout/SiteChrome";
import { Disclose } from "@/components/patterns/Disclose";
import { PageHeader } from "@/components/patterns/PageHeader";
import { headerPhotos } from "@/content/header-photos";
import { firstClass } from "@/content/first-class";
import { pages } from "@/content/pages";
import { RichText } from "@/lib/rich-text";

export function YourFirstClassPage() {
  return (
    <SiteChrome path={pages.yourFirstClass.path}>
      <PageHeader photo={headerPhotos.yourFirstClass} title={firstClass.hero.title} />

      <section className="band-tight">
        <div className="shell flex flex-wrap gap-3">
          <a className="btn btn-primary" href={firstClass.hero.cta.href}>
            {firstClass.hero.cta.label}
          </a>
          <a className="btn btn-primary" href={firstClass.hero.secondary.href}>
            {firstClass.hero.secondary.label}
          </a>
        </div>
      </section>

      <section className="band">
        <div className="shell">
          <div className="outline-frame-solid">
            <h2 className="display-md">{firstClass.tips.title}</h2>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-foreground-soft">
              {firstClass.tips.items.map((item) => (
                <li key={item.text} className={item.emphasis ? "font-bold text-foreground underline" : undefined}>
                  <RichText text={item.text} />
                  {item.sub ? (
                    <ul className="mt-2 space-y-2 pl-5">
                      {item.sub.map((line) => (
                        <li key={line}>
                          <RichText text={line} />
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="band band-warm">
        <div className="shell-narrow">
          <h2 className="display-md">New student questions</h2>
          <div className="mt-8">
            {firstClass.faq.map((item) => (
              <Disclose key={item.question} summary={item.question} paragraphs={item.answer} />
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
