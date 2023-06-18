import React from 'react';

import FlexBox from '@atoms/FlexBox';

import { CSSInterpolation } from '@emotion/serialize';

type ToggleButtonGroupType = {
    children: React.ReactNode;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    customCSS?: CSSInterpolation;
};

/**
 *  [UI Component] Toggle Button Group Component
 *  @param children 컴포넌트
 *  @param value 선택된 Toggle Button 값
 *  @param onChange Change Event Handler
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function ToggleButtonGroup({ children, value, onChange, customCSS = {} }: ToggleButtonGroupType) {
    return (
        <FlexBox role="radiogroup" customCSS={customCSS}>
            {React.Children.toArray(children).map((child) =>
                React.cloneElement(child as React.ReactElement, { currentValue: value, onChange })
            )}
        </FlexBox>
    );
}
