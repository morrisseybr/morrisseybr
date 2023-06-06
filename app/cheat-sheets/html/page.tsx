import CheatSheet from "../components/cheat-sheet";

export default function Html() {
  return (
    <>
      <main className="mb-4">
        <h1 className="display-2">HTML</h1>
        <p>
          Normally, when I study HTML, I like to render and see each tag in
          groups to understand its functionalities. Here is how I do it.
        </p>
      </main>
      <section className="flex flex-col gap-4">
        <h2 className="font-bold uppercase">Basic tags</h2>
        <div className="flex flex-col gap-2">
          <CheatSheet
            id="div"
            title="Div"
            description="The <code>div</code> tag defines a block that can be used to group
          or layout other HTML elements."
          />
          <div className="w-96 p-4 border border-slate-200 rounded-md bg-slate-800">
            <h3>Span</h3>
            <hr className="my-2" />
            <p>
              The <code>span</code> tag defines a inline container that can be
              used to show text or other HTML elements.
            </p>
          </div>
          <div className="w-96 p-4 border border-slate-200 rounded-md bg-slate-800">
            <h3>Button</h3>
            <hr className="my-2" />
            <p>
              The <code>button</code> tag defines a clickable button.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
