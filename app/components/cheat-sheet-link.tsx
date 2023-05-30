import Link, { LinkProps } from "next/link";

type CardLinkProps = LinkProps & {
  title: string;
};

export function CardLink({ title, ...rest }: CardLinkProps) {
  return (
    <Link
      className="px-4 py-1 rounded border-2 outline outline-4 m-1 bg-slate-800 text-white border-slate-200 outline-slate-800 dark:bg-slate-200 dark:text-black dark:border-slate-800  dark:outline-slate-200"
      {...rest}
    >
      {title}
    </Link>
  );
}
