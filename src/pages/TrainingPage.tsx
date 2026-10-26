import { SiteChrome } from "@/components/layout/SiteChrome";
import { PageHeader } from "@/components/patterns/PageHeader";
import { headerPhotos } from "@/content/header-photos";
import { PersonCard } from "@/components/patterns/PersonCard";
import { teacherTraining } from "@/content/education";
import { pages } from "@/content/pages";

export function TrainingPage() {
  return (
    <SiteChrome path={pages.training.path}>
      <PageHeader photo={headerPhotos.training} title={teacherTraining.hero.title} />

      <section className="band">
        <div className="shell-narrow text-center">
          <p className="lede mx-auto">{teacherTraining.hero.lede}</p>
          <a className="btn btn-primary mt-8" href={teacherTraining.contact.href}>
            {teacherTraining.contact.label}
          </a>
        </div>
      </section>

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
                round
              />
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
