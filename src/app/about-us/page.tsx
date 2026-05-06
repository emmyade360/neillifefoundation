import Image from "next/image";

export default function Page() {
  return (
    <div className="page-shell">
      <div className="relative w-full overflow-hidden rounded-[0.75rem]">
        <Image
          src="/images/EV_NYFF_10.jpeg"
          alt="Members of Neil Life Foundation"
          width={1146}
          height={350}
          className="h-[12.5rem] w-full object-cover md:h-[21.875rem]"
          priority
        />
      </div>

      <section className="relative z-10 mx-auto mt-[-2rem] w-full max-w-[43.75rem] rounded-[0.75rem] bg-white px-[1rem] py-[1.25rem] text-blue-950 shadow-md md:ml-[7rem] md:mt-[-3rem] md:px-[2rem] md:py-[1.5rem]">
        <div className="space-y-[1rem] md:space-y-[1.5rem]">
          <h1 className="text-[1.5rem] font-bold md:text-[2.25rem]">About Us</h1>
          <h2 className="text-[1.125rem] font-semibold leading-[1.75rem] md:text-[1.25rem] md:leading-[2rem]">
            Neil Life Foundation is a non-profit movement of hope, dignity, and opportunity for women, youth, and
            persons with disabilities.
          </h2>
          <p className="text-[0.9375rem] leading-[1.625rem] md:text-[1rem] md:leading-[2rem]">
            Since our founding, we have created safe spaces where every voice is heard and every participant is
            recognized as a leader in their own community.
          </p>
          <p className="text-[0.9375rem] leading-[1.625rem] md:text-[1rem] md:leading-[2rem]">
            Through trainings, stakeholder dialogues, and practical advocacy, we continue to equip communities with
            tools for inclusive development, climate resilience, and social justice.
          </p>
          <p className="text-[0.9375rem] leading-[1.625rem] md:text-[1rem] md:leading-[2rem]">
            Our mission is to transform barriers into bridges by ensuring that women and girls with disabilities have
            equal access to education, livelihoods, policy participation, and protection.
          </p>
        </div>

        <div className="mt-[1.25rem] space-y-[1rem] md:mt-[1.5rem] md:space-y-[1.5rem]">
          <h3 className="text-[1.125rem] font-semibold md:text-[1.25rem]">Vision</h3>
          <p className="text-[0.9375rem] leading-[1.625rem] md:text-[1rem] md:leading-[2rem]">
            A world where women and youth with disabilities thrive with equal access and opportunities without
            discrimination or barriers.
          </p>
        </div>

        <div className="mt-[1.25rem] space-y-[1rem] md:mt-[1.5rem] md:space-y-[1.5rem]">
          <h3 className="text-[1.125rem] font-semibold md:text-[1.25rem]">Mission</h3>
          <p className="text-[0.9375rem] leading-[1.625rem] md:text-[1rem] md:leading-[2rem]">
            To empower women and youth with disabilities through inclusive education, advocacy, and accessible
            resources, promoting equal participation in governance, employment, and health.
          </p>
          <ul className="list-disc space-y-[0.5rem] pl-[2rem] text-[0.9375rem] md:text-[1rem]">
            <li>Governance and politics</li>
            <li>Employment</li>
            <li>Sexual and reproductive health</li>
          </ul>
        </div>

        <div className="mt-[1.25rem] space-y-[1rem] md:mt-[1.5rem] md:space-y-[1.5rem]">
          <h3 className="text-[1.125rem] font-semibold md:text-[1.25rem]">Our Team</h3>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/executive-assistant.jpg"
                  alt="Executive Director Ekwo Faith Owoloyi"
                  width={112}
                  height={112}
                  loading="lazy"
                  className="h-20 w-20 rounded-full object-cover md:h-24 md:w-24"
                />
                <p>
                  <span className="block text-[1rem] font-semibold md:text-[1.125rem]">Ekwo Faith Owoloyi</span>
                  <span className="block text-[0.875rem] text-slate-700 md:text-[1rem]">Executive Director</span>
                </p>
              </div>
            </article>

            <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/account-officer.jpg"
                  alt="Account Officer Dung Agnes Iyop"
                  width={112}
                  height={112}
                  loading="lazy"
                  className="h-20 w-20 rounded-full object-cover md:h-24 md:w-24"
                />
                <p>
                  <span className="block text-[1rem] font-semibold md:text-[1.125rem]">Dung Agnes Iyop</span>
                  <span className="block text-[0.875rem] text-slate-700 md:text-[1rem]">Account Officer</span>
                </p>
              </div>
            </article>

            <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/program-officer.jpg"
                  alt="Program Manager Solomon Ijauka"
                  width={112}
                  height={112}
                  loading="lazy"
                  className="h-20 w-20 rounded-full object-cover md:h-24 md:w-24"
                />
                <p>
                  <span className="block text-[1rem] font-semibold md:text-[1.125rem]">Solomon Ijauka</span>
                  <span className="block text-[0.875rem] text-slate-700 md:text-[1rem]">Program Manager</span>
                </p>
              </div>
            </article>

            <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/monitoring-evaluation-officer.jpg"
                  alt="Monitoring Officer Esther Christopher"
                  width={112}
                  height={112}
                  loading="lazy"
                  className="h-20 w-20 rounded-full object-cover md:h-24 md:w-24"
                />
                <p>
                  <span className="block text-[1rem] font-semibold md:text-[1.125rem]">Esther Christopher</span>
                  <span className="block text-[0.875rem] text-slate-700 md:text-[1rem]">Monitoring Officer</span>
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
