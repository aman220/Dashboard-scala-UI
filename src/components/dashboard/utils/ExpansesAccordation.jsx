import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const ExpensesAccordion = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          Why Track Expenses?
        </AccordionHeader>
        <AccordionBody>
          Tracking expenses helps you understand where your money is going, allowing you to identify areas where you can cut back and save more.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          How to Start Tracking Expenses?
        </AccordionHeader>
        <AccordionBody>
          Start by categorizing your expenses (e.g., groceries, utilities, entertainment) and using apps or spreadsheets to record them regularly. Setting a budget can also be helpful.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Tips for Increasing Savings
        </AccordionHeader>
        <AccordionBody>
          To increase savings, consider automating transfers to a savings account, cutting unnecessary expenses, and finding ways to increase your income through side hustles or investments.
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default ExpensesAccordion;
