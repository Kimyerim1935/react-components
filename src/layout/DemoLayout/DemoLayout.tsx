/** @jsxImportSource @emotion/react */
import { Outlet, useLocation } from 'react-router-dom';

import { FlexBox } from 'components/Base';

import { layoutStyle } from './styles';

const NAME = {
    editor: 'Button Demo',
    faq: 'Accordion Demo',
    search: 'Form Demo',
    register: 'Form Demo'
};

const DemoLayout = () => {
    const { pathname } = useLocation();

    return (
        <div css={layoutStyle.container}>
            <header css={layoutStyle.header}>
                <h1 css={layoutStyle.heading}>{NAME[pathname.split('/demo/')[1] as keyof typeof NAME]}</h1>
            </header>
            <main css={layoutStyle.main}>
                <FlexBox flexDirection="column" customCSS={layoutStyle.contents}>
                    <Outlet />
                </FlexBox>
            </main>
        </div>
    );
};

export default DemoLayout;