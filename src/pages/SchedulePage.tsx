import { SiteChrome } from "@/components/layout/SiteChrome";
import { BookingFrame } from "@/components/patterns/BookingFrame";
import { PageHeader } from "@/components/patterns/PageHeader";
import { scheduleSrc } from "@/content/checkout";
import { pages } from "@/content/pages";
import { site } from "@/content/site";
import { studios } from "@/content/studios";

export function SchedulePage() {
  return (
    <SiteChrome path={pages.schedule.path}>
      <PageHeader
        eyebrow="Schedule"
        title="Northwest & Southwest"
        lede="One calendar for both Gainesville studios. Pick the class, then confirm which location in the app."
      >
        {studios.map((studio) => (
          <a key={studio.key} className="btn btn-ghost" href={`tel:${studio.phoneRaw}`}>
            {studio.key === "northwest" ? "NW" : "SW"} {studio.phoneDisplay}
          </a>
        ))}
      </PageHeader>

      <section className="band band-tight">
        <div className="shell">
          <p className="text-right text-sm text-muted">{site.app.androidNote}</p>
          <div className="mt-6">
            <BookingFrame src={scheduleSrc()} title="APEX Gainesville class schedule" priority />
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
