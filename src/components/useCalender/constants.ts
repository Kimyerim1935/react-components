import { v4 as uuid } from 'uuid';

export const CALENDER_DUMMY_DATA = [
    {
        idx: uuid(),
        startDate: '2024-01-22',
        endDate: '2024-01-22',
        color: 'bg-pastel-01',
        isAllDay: false,
        title: '공부하기',
        description: '열심히 공부하기'
    },
    {
        idx: uuid(),
        startDate: '2024-01-13',
        endDate: '2024-01-18',
        color: 'bg-pastel-02',
        isAllDay: true,
        title: '병원',
        description: '건강검진 받기'
    },
    {
        idx: uuid(),
        startDate: '2024-01-13',
        endDate: '2024-01-13',
        color: 'bg-pastel-03',
        isAllDay: false,
        title: '과제',
        description: '캘린더 만들기'
    },
    {
        idx: uuid(),
        startDate: '2024-02-10',
        endDate: '2024-02-19',
        color: 'bg-pastel-04',
        isAllDay: true,
        title: '학교',
        description: '수강신청하기'
    },
    {
        idx: uuid(),
        startDate: '2024-02-01',
        endDate: '2024-02-01',
        color: 'bg-pastel-05',
        isAllDay: false,
        title: '2월 테스트',
        description: '테스트'
    },
    {
        idx: uuid(),
        startDate: '2024-01-01',
        endDate: '2024-01-01',
        color: 'bg-pastel-06',
        isAllDay: true,
        title: '1월 테스트',
        description: '테스트'
    }
];
