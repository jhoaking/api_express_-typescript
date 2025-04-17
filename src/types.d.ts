
import { Weather,Visibility } from "./enums"


export interface DiaryEntry {
    id : number,
    date : string,
    weather : Weather,
    visibility : Visibility,
    comment : string
}



export type NonSensitiveInfo = Omit<DiaryEntry , 'comment'>

export type newDiaryEntry = Omit<DiaryEntry,'id'>