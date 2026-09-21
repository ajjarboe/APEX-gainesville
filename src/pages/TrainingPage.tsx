import { SiteChrome } from "@/components/layout/SiteChrome";
import { PageHeader } from "@/components/patterns/PageHeader";
import { PersonCard } from "@/components/patterns/PersonCard";
import { teacherTraining } from "@/content/education";
import { pages } from "@/content/pages";

export function TrainingPage() {
  return (
    <SiteChrome path={pages.training.path}>
      <PageHeader
        eyebrow={teacherTraining.hero.eyebrow}
        title={teacherTraining.hero.title}
        lede={teacherTraining.hero.lede}
      >
        <a className="btn btn-primary" href={teacherTraining.contact.href}>
          {teacherTraining.contact.label}
        </a>
        <a className="btn btn-ghost" href="/info-sessions/">
          Info sessions
        </a>
      </PageHeader>

      <section className="band">
        <div className="shell">
          <h2 className="display-md">APEX Faculty</h2>
          <div className="grid-auto mt-10">
            {teacherTraining.faculty.map((person) => (
              <PersonCard
                key={person.name}
                person={{
                  name: person.name,
                  role: person.role,
                  photo: person.photo,
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
