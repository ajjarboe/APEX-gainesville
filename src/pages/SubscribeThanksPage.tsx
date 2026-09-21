import { SiteChrome } from "@/components/layout/SiteChrome";
import { PageHeader } from "@/components/patterns/PageHeader";
import { pages } from "@/content/pages";

export function SubscribeThanksPage() {
  return (
    <SiteChrome path={pages.subscribeThanks.path} sticky={false}>
      <PageHeader
        eyebrow="You're in"
        title="Thanks for joining the list"
        lede="We'll email you about class drops, events, and teacher training news."
      />

      <section className="band">
        <div className="shell-narrow">
          <a className="btn btn-primary" href="/">
            Back to the site
          </a>
        </div>
      </section>
    </SiteChrome>
  );
}
