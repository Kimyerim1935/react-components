import { ArrowNextFilled, ArrowPreviousFilled, ChevronLeftFilled, ChevronRightFilled } from '@fluentui/react-icons';

import PaginationButton from './PaginationButton';
import PaginationIconButton from './PaginationIconButton';

type PaginationListType = {
    showFirstButton?: boolean;
    showLastButton?: boolean;
    page: number;
    blockNum: number;
    pageLimit: number;
    totalCount: number;
    onChange: (page: number, newBlockNum: number) => void;
    handleFirstClick: () => void;
    handlePrevClick: () => void;
    handleNextClick: () => void;
    handleLastClick: () => void;
};

export default function PaginationList(props: PaginationListType) {
    const {
        showFirstButton,
        showLastButton,
        page,
        blockNum,
        pageLimit,
        totalCount,
        onChange,
        handleFirstClick,
        handlePrevClick,
        handleNextClick,
        handleLastClick
    } = props;

    return (
        <ul className="flex flex-wrap items-center gap-1.25">
            {showFirstButton && (
                <li className="flex h-8 w-8 items-center justify-center">
                    <PaginationIconButton
                        icon={<ArrowPreviousFilled />}
                        isDisabled={page === 1}
                        onClick={handleFirstClick}
                        aria-label="처음으로 이동"
                    />
                </li>
            )}
            <li className="flex h-8 w-8 items-center justify-center">
                <PaginationIconButton
                    icon={<ChevronLeftFilled />}
                    isDisabled={page === 1}
                    onClick={handlePrevClick}
                    aria-label="이전으로 이동"
                />
            </li>
            {/* TODO: Array 구현 로직 수정 */}
            {Array(pageLimit)
                .fill(page)
                .map((_, idx) => idx + (blockNum - 1) * pageLimit)
                .map((el, index) =>
                    el + 1 > totalCount ? null : (
                        <li key={el} role="presentation" className="flex h-8 w-8 items-center justify-center">
                            <PaginationButton
                                pageNum={el + 1}
                                isSelected={page === el + 1}
                                onClick={() => onChange(index + 1, blockNum)}
                            />
                        </li>
                    )
                )}
            <li className="flex h-8 w-8 items-center justify-center">
                <PaginationIconButton
                    icon={<ChevronRightFilled />}
                    isDisabled={page === totalCount}
                    onClick={handleNextClick}
                    aria-label="다음으로 이동"
                />
            </li>
            {showLastButton && (
                <li className="flex h-8 w-8 items-center justify-center">
                    <PaginationIconButton
                        icon={<ArrowNextFilled />}
                        isDisabled={page === totalCount}
                        onClick={handleLastClick}
                        aria-label="마지막으로 이동"
                    />
                </li>
            )}
        </ul>
    );
}
