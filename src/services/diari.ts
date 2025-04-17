import { DiaryEntry,newDiaryEntry,NonSensitiveInfo } from '../types';
import diaryData from './diaris.json';

const diaries : DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = () : DiaryEntry[] => diaries;

export const findById = (id : number): NonSensitiveInfo | undefined => {
    const entry = diaries.find(d =>d.id === id);
    if(entry){
        const {comment ,  ...rest} = entry
        return rest;
    } 
   return undefined
}


export const getEntryConInfoSensible = () : NonSensitiveInfo[]=> {
    return diaries.map(({id,date,weather,visibility}) => {
        return{
            id,
            date,
            weather,
            visibility
        }
    })
}

export const addDiary = (newDiaryEntry : newDiaryEntry) : DiaryEntry => {
    const newDiary = {
        id: Math.max(...diaries.map(d => d.id )) +1,
        ...newDiaryEntry
    }
    diaries.push(newDiary);
    return newDiary;
};

  