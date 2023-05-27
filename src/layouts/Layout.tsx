/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import Block from 'components/atoms/Block';
import BlockWrapper from 'components/atoms/BlockWrapper';
import PaginationExample from 'layouts/PaginationExample';
import PopOverExample from 'layouts/PopOverExample';
import SelectExample from 'layouts/SelectExample';
import TextFieldExample from 'layouts/TextFieldExample';

import ButtonExample from './ButtonExample';
import IconButtonExample from './IconButtonExample';

import { css } from '@emotion/react';

const COMPONENT_LIST = ['Button', 'IconButton', 'Pagination', 'PopOver', 'Select', 'TextField'];

const layoutStyle = css({ maxWidth: 1200, margin: '0 auto', padding: '20px 0' });

const componentStyle = css({ marginTop: 20, display: 'flex' });

export default function Layout() {
    const [selected, setSelected] = useState(COMPONENT_LIST[0]);

    const handleClick = (e: string) => setSelected(e);

    return (
        <div css={layoutStyle}>
            <BlockWrapper>
                {COMPONENT_LIST.map((el: string) => (
                    <Block key={el} onClick={handleClick} name={el} selected={selected}>
                        {el}
                    </Block>
                ))}
            </BlockWrapper>
            <div css={componentStyle}>
                {selected === 'Button' && <ButtonExample />}
                {selected === 'IconButton' && <IconButtonExample />}
                {selected === 'Pagination' && <PaginationExample />}
                {selected === 'PopOver' && <PopOverExample />}
                {selected === 'Select' && <SelectExample />}
                {selected === 'TextField' && <TextFieldExample />}
            </div>
        </div>
    );
}