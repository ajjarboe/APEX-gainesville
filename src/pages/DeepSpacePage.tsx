import { SiteChrome } from "@/components/layout/SiteChrome";
import { PageHeader } from "@/components/patterns/PageHeader";
import { deepSpace } from "@/content/classes";
import { pages } from "@/content/pages";

export function DeepSpacePage() {
  return (
    <SiteChrome path={pages.deepSpace.path}>
      <PageHeader title={deepSpace.hero.title} lede={deepSpace.hero.lede} />

      <section className="band">
        <div className="shell-narrow">
          <h2 className="display-md">{deepSpace.experience.title}</h2>
          <div className="prose mt-6 text-foreground-soft">
            {deepSpace.experience.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {deepSpace.sections.map((section) => (
        <section key={section.title} className="band band-warm">
          <div className="shell-narrow">
            <h2 className="display-md">{section.title}</h2>
            <div className="prose mt-6 text-foreground-soft">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <a className="btn btn-primary mt-8" href={deepSpace.cta.href}>
              {deepSpace.cta.label}
            </a>
          </div>
        </section>
      ))}
    </SiteChrome>
  );
}
