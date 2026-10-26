import { SiteChrome } from "@/components/layout/SiteChrome";
import { PageHeader } from "@/components/patterns/PageHeader";
import { pages } from "@/content/pages";
import { site } from "@/content/site";
import { directionsUrl, locationButtons, studios } from "@/content/studios";

export function LocationsPage() {
  return (
    <SiteChrome path={pages.locations.path}>
      <PageHeader
        title="Which location?"
        lede="Both Gainesville studios share one schedule. Jax Beach has its own site."
      />

      <section className="band">
        <div className="shell grid-auto">
          {studios.map((studio) => (
            <div key={studio.key} className="card-flat">
              <h2 className="display-sm">{studio.name}</h2>
              <p className="mt-3 text-foreground-soft">
                {studio.street}
                <br />
                {studio.city}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary" href={studio.schedulePath}>
                  {locationButtons.book}
                </a>
                <a
                  className="btn btn-ghost"
                  href={directionsUrl(studio.mapQuery)}
                  target="_blank"
                  rel="noopener"
                >
                  {locationButtons.directions}
                </a>
              </div>
            </div>
          ))}
          <div className="card-flat">
            <h2 className="display-sm">{site.jax.label}</h2>
            <p className="mt-3 text-foreground-soft">Open the Jax Beach APEX site.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn-primary" href={site.jax.href} target="_blank" rel="noopener">
                {locationButtons.jax}
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
