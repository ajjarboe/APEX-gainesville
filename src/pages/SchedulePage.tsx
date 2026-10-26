import { SiteChrome } from "@/components/layout/SiteChrome";
import { BookingFrame } from "@/components/patterns/BookingFrame";
import { PageHeader } from "@/components/patterns/PageHeader";
import { headerPhotos } from "@/content/header-photos";
import { scheduleSrc } from "@/content/checkout";
import { pages } from "@/content/pages";
import { studios } from "@/content/studios";

export function SchedulePage() {
  return (
    <SiteChrome path={pages.schedule.path}>
      <PageHeader photo={headerPhotos.schedule} title="Book at Northwest & Southwest" />

      <section className="band band-tight">
        <div className="shell">
          <h2 className="display-md">Need help?</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {studios.map((studio) => (
              <a key={studio.key} className="btn btn-primary" href={`tel:${studio.phoneRaw}`}>
                Call {studio.key === "northwest" ? "NW" : "SW"}
              </a>
            ))}
          </div>
          <div className="mt-8">
            <BookingFrame src={scheduleSrc()} title="APEX Gainesville class schedule" priority />
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
