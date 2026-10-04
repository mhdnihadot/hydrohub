import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { photoCredits } from "@/data/credits";

export const metadata = {
  title: "Image credits",
  robots: { index: false },
};

export default function CreditsPage() {
  return (
    <main>
      <PageHeader crumbs={[{ label: "Image credits" }]} title="Image credits" intro="Photos from Wikimedia Commons, used under the licences below." />
      <Container>
        <ul className="mb-24 divide-y divide-line rounded-2xl border border-line text-sm">
          {photoCredits.map((c) => (
            <li key={c.file} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-medium text-ink">{c.file}</span>
              <span className="text-muted">
                {c.license} ·{" "}
                <a href={c.source} target="_blank" rel="noopener noreferrer" className="text-brand underline underline-offset-2">
                  Source
                </a>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}
