import { SiteChrome } from "@/components/layout/SiteChrome";
import { NetlifyForm } from "@/components/patterns/NetlifyForm";
import { PageHeader } from "@/components/patterns/PageHeader";
import { honeypot, subscribeForm } from "@/content/membership-forms";
import { infoSessions } from "@/content/education";
import { pages } from "@/content/pages";

export function InfoSessionsPage() {
  return (
    <SiteChrome path={pages.infoSessions.path}>
      <PageHeader
        eyebrow={infoSessions.hero.eyebrow}
        title={infoSessions.hero.title}
        lede={infoSessions.hero.lede}
      />

      <section className="band">
        <div className="shell-narrow">
          <p className="eyebrow">Available dates</p>
          <p className="display-sm mt-3">{infoSessions.dates}</p>
          <p className="mt-6 text-foreground-soft">{infoSessions.note}</p>

          <NetlifyForm
            name={subscribeForm.name}
            honeypot={honeypot}
            action={subscribeForm.thanks}
            className="rform mt-10"
          >
            {subscribeForm.fields.map((field) => (
              <div key={field.name} className="rfield">
                <label htmlFor={field.id}>
                  {field.label}
                  <span aria-hidden="true"> *</span>
                </label>
                <input
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  required
                  autoComplete={field.autocomplete}
                />
              </div>
            ))}
            <button className="btn btn-primary w-full" type="submit">
              Sign up for an info session
            </button>
          </NetlifyForm>
        </div>
      </section>
    </SiteChrome>
  );
}
