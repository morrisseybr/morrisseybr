import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";

type CheatSheetProps = {
  id: string;
  title: string;
  description: string;
  code?: string;
};

export default function CheatSheet({
  id,
  title,
  description,
  code,
}: CheatSheetProps) {
  return (
    <div className="w-96">
      <Accordion type="single" collapsible>
        <AccordionItem value={id}>
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>
            <p>{description}</p>
            {code && (
              <pre>
                <code>{code}</code>
              </pre>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
