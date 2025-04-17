import { DiaryEntry } from '../types';
import diaryData from './diaris.json';

const diaries : DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = ()  => diaries;

export const addEntry = () => null;