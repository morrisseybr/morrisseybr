import Image from "next/image";

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
        <div>
          <h3>HTML</h3>
          <h3>CSS</h3>
          <h3>JavaScript</h3>
          <h3>TypeScript</h3>
          <h3>React</h3>
          <h3>Next.js</h3>
          <h3>TailwindCSS</h3>
          <h3>Storybook</h3>
          <h3>Mockoon</h3>
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
