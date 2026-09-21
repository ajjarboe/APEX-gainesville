import { SiteChrome } from "@/components/layout/SiteChrome";
import { PageHeader } from "@/components/patterns/PageHeader";
import { deepSpace } from "@/content/classes";
import { pages } from "@/content/pages";

export function DeepSpacePage() {
  return (
    <SiteChrome path={pages.deepSpace.path}>
      <PageHeader
        eyebrow={deepSpace.hero.eyebrow}
        title={deepSpace.hero.title}
        lede={deepSpace.hero.lede}
      />

      <section className="band">
        <div className="shell-narrow prose text-foreground-soft">
          {deepSpace.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      {deepSpace.sections.map((section, index) => (
        <section key={section.title} className={index % 2 === 0 ? "band band-warm" : "band"}>
          <div className="shell-narrow">
            <h2 className="display-md">{section.title}</h2>
            <div className="prose mt-6 text-foreground-soft">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="band">
        <div className="shell">
          <h2 className="display-md">{deepSpace.comparison.title}</h2>
          <div className="grid-2 mt-10">
            <div className="card-flat">
              <h3 className="display-sm">{deepSpace.comparison.signature.title}</h3>
              <ul className="mt-6 space-y-3 text-foreground-soft">
                {deepSpace.comparison.signature.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="card-flat">
              <h3 className="display-sm">{deepSpace.comparison.deepSpace.title}</h3>
              <ul className="mt-6 space-y-3 text-foreground-soft">
                {deepSpace.comparison.deepSpace.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a className="btn btn-ghost" href="/the-workout/">
              See Signature classes
            </a>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
