import { ShHistoryData } from './history.data';

export interface ShHistoryGroupData {
    groupByDay: unknown;
    day: Date;
    histories: ShHistoryData[];
}