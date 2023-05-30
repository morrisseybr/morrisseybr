import Image from "next/image";
import Link from "next/link";
import { CardLink } from "./components/cheat-sheet-link";

export default function Home() {
  return (
    <>
      <main className="h-96 flex items-center">
        <div className="flex-1 flex flex-col gap-2">
          <span className="display-1">Hi folks 🤪</span>
          <h1>This is my dev blog, Wellcome!</h1>
          <div>
            <p>
              Here I pretend to document my knowledge and experiences as a
              software developer.
            </p>
            <p>
              This blog itself already is a kind of test case, when I will try
              my best to make a good structure and apply all my skills.
            </p>
          </div>
        </div>
        <div className="flex-1"></div>
      </main>
      <section>
        <h2>Cheat Sheets</h2>
        <p>There is some of my cheat sheets that I create when studing.</p>
        <div className="flex gap-2">
          <CardLink href="/cheat-sheets/html" title="HTML" />
          <CardLink href="/cheat-sheets/html" title="CSS" />
          <CardLink href="/cheat-sheets/html" title="JavaScript" />
          <CardLink href="/cheat-sheets/html" title="TypeScript" />
          <CardLink href="/cheat-sheets/html" title="React" />
          <CardLink href="/cheat-sheets/html" title="Next.js" />
          <CardLink href="/cheat-sheets/html" title="TailwindCSS" />
          <CardLink href="/cheat-sheets/html" title="Storybook" />
          <CardLink href="/cheat-sheets/html" title="Mockoon" />
        </div>
      </section>
      <section>
        <h2>Arquitecture</h2>
      </section>
      <section>
        <h2>Design Patterns</h2>
      </section>
      <section>
        <h2>Layout design</h2>
      </section>
    </>
  );
}
