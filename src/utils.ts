import { newDiaryEntry} from "./types";
import { Weather,Visibility } from "./enums";

const parseComment = (commentRequest : any): string =>{
    if(!isString( commentRequest)){
        throw new Error("Incorrect missing comment");
    }
    return commentRequest;
}


const parseDate = (dateRequest : any) : string =>{
    if(!isString(dateRequest) || isDate(dateRequest)){
        throw new Error("incorrect missing date");
    }
    return  dateRequest;
}

const parseWeather = (weatherRequest: any):Weather =>{
    if(!isString(weatherRequest) || !isWeather(weatherRequest)){
        throw new Error("incorrect missing weather");
    }
    return weatherRequest
}

const parseVisibility = (visibilityRequest : any) :Visibility =>{
    if(!isString(visibilityRequest) || !isVisibility(visibilityRequest)){
        throw new Error("incorrect missing visibiity");
    }
    return visibilityRequest
}





const isVisibility = (param : any) : boolean =>{
    return Object.values(Visibility).includes(param)
}

const isWeather = (param : any ) : boolean =>{
    return Object.values(Weather).includes(param)
}

const isString = (string : String) : boolean => {
    return typeof string === "string"
}

const isDate = (date : string) : boolean =>{
    return Boolean(Date.parse(date))
}


const toNewDiaryEntry = (object : any) : newDiaryEntry =>{

    const newEntry : newDiaryEntry ={
        comment : parseComment(object.comment),
        date : parseDate(object.date),
        weather : parseWeather(object.weather),
        visibility : parseVisibility(object.visibility)
    }
    return newEntry;
}


export default toNewDiaryEntry