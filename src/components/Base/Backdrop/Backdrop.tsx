/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { backdropStyle } from './styles';

type BackdropType = {
    id: string;
    children: ReactNode;
    onClose: () => void;
};

/**
 *  [Base Component] Backdrop Component
 *  @param id DOM id
 *  @param children 컴포넌트
 *  @param onClose Click Away Handler
 *  @returns React.ReactPortal
 */
export default function Backdrop(props: BackdropType) {
    const { id, children, onClose } = props;

    return createPortal(
        <div
            css={backdropStyle}
            role="presentation"
            onClick={onClose}
            onKeyDown={(e) => {
                if (e.code === 'Escape') {
                    onClose();
                }
            }}
        >
            {children}
        </div>,
        document.getElementById(id) as HTMLElement
    );
}