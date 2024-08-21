import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
 export type FAQ = {
    qn: string;
    ans: string;
  };
  export default function CustomAccordian({faqs}:{faqs:FAQ[]}) {
    return (
      <Accordion type="single" collapsible className="w-full">
        {faqs && faqs.map((item,i)=>{
          return (
            <AccordionItem key={i} value={i.toString()}>
            <AccordionTrigger>{item.qn}</AccordionTrigger>
            <AccordionContent>
              {item.ans}
            </AccordionContent>
          </AccordionItem>
          )
        })}
       
      </Accordion>
    )
  }
  