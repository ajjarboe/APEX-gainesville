import { footer } from "@/content/footer";
import { honeypot, subscribeForm } from "@/content/membership-forms";
import { site } from "@/content/site";
import { studios } from "@/content/studios";
import { NetlifyForm } from "@/components/patterns/NetlifyForm";

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="shell">
        <div className="foot-grid">
          {studios.map((studio) => (
            <div key={studio.key}>
              <h4>{studio.name}</h4>
              <div className="foot-links">
                <span>
                  {studio.street}
                  <br />
                  {studio.city}
                </span>
                <a href={`tel:${studio.phoneRaw}`}>Call or text {studio.phoneDisplay}</a>
                <a href={studio.schedulePath}>See the schedule</a>
              </div>
            </div>
          ))}

          {footer.columns.map((column) => (
            <div key={column.heading}>
              <h4>{column.heading}</h4>
              <div className="foot-links">
                {column.links.map((link) => (
                  <a
                    key={`${column.heading}-${link.href}-${link.label}`}
                    href={link.href}
                    {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h4>{subscribeForm.title}</h4>
            <p className="mb-4 text-sm text-on-dark-soft">{subscribeForm.lede}</p>
            <NetlifyForm
              name={subscribeForm.name}
              honeypot={honeypot}
              action={subscribeForm.thanks}
              className="foot-subscribe"
            >
              <div className="flex flex-col gap-2">
                {subscribeForm.fields.map((field) => (
                  <input
                    key={field.name}
                    id={`foot-${field.id}`}
                    name={field.name}
                    type={field.type}
                    required
                    autoComplete={field.autocomplete}
                    placeholder={field.label}
                    aria-label={field.label}
                  />
                ))}
                <button className="btn btn-ghost" type="submit">
                  {subscribeForm.submit}
                </button>
              </div>
            </NetlifyForm>
          </div>
        </div>

        <div className="foot-bottom">
          <span>
            © {new Date().getFullYear()} {site.brand}
          </span>
          <div className="flex flex-wrap items-center gap-5">
            <a href={site.sister.href} target="_blank" rel="noopener">
              {site.sister.label}
            </a>
            <a href={site.social.instagram} target="_blank" rel="noopener">
              Instagram
            </a>
            <a href={site.social.facebook} target="_blank" rel="noopener">
              Facebook
            </a>
            <a href={site.social.spotify} target="_blank" rel="noopener">
              Spotify
            </a>
            {footer.legal.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
