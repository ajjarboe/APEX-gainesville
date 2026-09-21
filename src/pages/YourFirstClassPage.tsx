import { SiteChrome } from "@/components/layout/SiteChrome";
import { Disclose } from "@/components/patterns/Disclose";
import { PageHeader } from "@/components/patterns/PageHeader";
import { RichText } from "@/lib/rich-text";
import { firstClass } from "@/content/first-class";
import { pages } from "@/content/pages";

export function YourFirstClassPage() {
  return (
    <SiteChrome path={pages.yourFirstClass.path}>
      <PageHeader
        eyebrow={firstClass.hero.eyebrow}
        title={firstClass.hero.title}
        lede={firstClass.hero.lede}
      >
        <a className="btn btn-primary" href={firstClass.hero.cta.href}>
          {firstClass.hero.cta.label}
        </a>
        <a className="btn btn-ghost" href={firstClass.hero.secondary.href}>
          {firstClass.hero.secondary.label}
        </a>
      </PageHeader>

      <section className="band band-tight">
        <div className="shell-narrow">
          <p className="fineprint">
            <RichText text={firstClass.mismatchNote} />
          </p>
        </div>
      </section>

      <section className="band">
        <div className="shell">
          <h2 className="display-md">{firstClass.tips.title}</h2>
          <div className="grid-auto mt-10">
            {firstClass.tips.groups.map((group) => (
              <div key={group.title} className="card-flat">
                <h3 className="display-sm">{group.title}</h3>
                <ul className="mt-4 space-y-3 text-foreground-soft">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
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
