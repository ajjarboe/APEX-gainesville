import { SiteChrome } from "@/components/layout/SiteChrome";
import { PageHeader } from "@/components/patterns/PageHeader";
import { pages } from "@/content/pages";
import { site } from "@/content/site";
import { studios } from "@/content/studios";

export function LocationsPage() {
  return (
    <SiteChrome path={pages.locations.path}>
      <PageHeader
        eyebrow="Locations"
        title="Which location?"
        lede="Both Gainesville studios share one schedule. Jax Beach has its own site."
      />

      <section className="band">
        <div className="shell grid-auto">
          {studios.map((studio) => (
            <a key={studio.key} className="card-flat block no-underline" href="/schedule/">
              <h2 className="display-sm">{studio.name}</h2>
              <p className="mt-3 text-foreground-soft">
                {studio.street}
                <br />
                {studio.city}
              </p>
              <p className="mt-4 text-brand">Book on the schedule →</p>
            </a>
          ))}
          <a
            className="card-flat block no-underline"
            href={site.jax.href}
            target="_blank"
            rel="noopener"
          >
            <h2 className="display-sm">{site.jax.label}</h2>
            <p className="mt-3 text-foreground-soft">Open the Jax Beach APEX site.</p>
            <p className="mt-4 text-brand">Visit apexjaxbeach.com →</p>
          </a>
        </div>
      </section>
    </SiteChrome>
  );
}
