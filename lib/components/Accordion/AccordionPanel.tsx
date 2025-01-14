import { HTMLAttributes, ReactNode } from 'react';

import { useAccordion } from '@components/useAccordion';

import { joinClassNames } from '@utils/format';

export interface AccordionPanelType extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function AccordionPanel(props: AccordionPanelType) {
  const { children, className, ...rest } = props;
  const { accordionId, isExpanded } = useAccordion();

  return (
    <div
      {...rest}
      aria-labelledby={`accordion-panel-${accordionId}`}
      id={`panel-${accordionId}`}
      role="region"
      className={joinClassNames(
        'invisible -mt-px h-0 w-full bg-white p-0 text-14 *:text-14 *:leading-normal',
        isExpanded && 'visible h-auto rounded-b border border-gray-100 p-5',
        className && className,
      )}
    >
      {children}
    </div>
  );
}
