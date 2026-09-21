import { SiteChrome } from "@/components/layout/SiteChrome";
import { PageHeader } from "@/components/patterns/PageHeader";
import { theMachine } from "@/content/classes";
import { pages } from "@/content/pages";

export function TheMachinePage() {
  return (
    <SiteChrome path={pages.theMachine.path}>
      <PageHeader
        eyebrow={theMachine.hero.eyebrow}
        title={theMachine.hero.title}
        lede={theMachine.hero.lede}
      />

      <section className="band">
        <div className="shell-narrow prose text-foreground-soft">
          {theMachine.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="band band-warm">
        <div className="shell-narrow text-center">
          <h2 className="display-md">Ready to try it?</h2>
          <a className="btn btn-primary mt-8" href="/schedule/">
            Book a class
          </a>
        </div>
      </section>
    </SiteChrome>
  );
}
