import Accordion from 'components/molecules/Accordion';
import AccordionPanel from 'components/molecules/AccordionPanel';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Design System/Atoms/Accordion/AccordionPanel',
    component: AccordionPanel,
    tags: ['autodocs'],
    argTypes: {
        children: {
            type: { name: 'string', required: true },
            control: 'text',
            description: '텍스트 | 컴포넌트',
            table: {
                category: 'required',
                type: { summary: 'string | React.ReactNode' }
            }
        },
        index: {
            type: { name: 'string', required: true },
            control: 'number',
            description: 'Accordion 번호 (아이디 및 aria에 사용)',
            table: {
                category: 'required',
                type: { summary: 'number' }
            }
        },
        customCSS: {
            control: { type: 'object' },
            description: 'Custom CSS',
            table: {
                category: 'style',
                defaultValue: { summary: '{}' },
                type: { summary: 'CSSInterpolation' }
            }
        }
    }
} satisfies Meta<typeof AccordionPanel>;

export default meta;
type Story = StoryObj<typeof AccordionPanel>;

export const Default: Story = {
    render: (args) => {
        return (
            <Accordion isExpanded>
                <AccordionPanel {...args}>{args.children}</AccordionPanel>
            </Accordion>
        );
    },
    args: {
        children: 'Apple',
        index: 1,
        customCSS: {}
    }
};
