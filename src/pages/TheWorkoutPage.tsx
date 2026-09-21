import { SiteChrome } from "@/components/layout/SiteChrome";
import { Disclose } from "@/components/patterns/Disclose";
import { PageHeader } from "@/components/patterns/PageHeader";
import { classesIntro, classStyles } from "@/content/classes";
import { pages } from "@/content/pages";

export function TheWorkoutPage() {
  return (
    <SiteChrome path={pages.theWorkout.path}>
      <PageHeader eyebrow="Classes" title="APEX Signature Pilates" lede={classesIntro[0]} />

      <section className="band">
        <div className="shell-narrow">
          <p className="text-foreground-soft">{classesIntro[1]}</p>
          <div className="mt-10">
            {classStyles.map((style) => (
              <Disclose
                key={style.name}
                summary={style.name}
                paragraphs={[style.summary, style.detail]}
                meta={[style.temp, style.lengths]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="band band-warm">
        <div className="shell-narrow text-center">
          <h2 className="display-md">Looking for something more fluid?</h2>
          <p className="lede mx-auto mt-5">
            Deep Space is our contemporary Pilates format — breath-to-movement, mobility-focused, and
            still a full-body challenge.
          </p>
          <a className="btn btn-primary mt-8" href="/deep-space-pilates/">
            Explore Deep Space
          </a>
        </div>
      </section>
    </SiteChrome>
  );
}
