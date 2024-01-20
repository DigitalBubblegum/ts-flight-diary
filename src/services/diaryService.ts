import diaries from '../../data/diaries';

import { DiaryEntry,NonSenitiveDiaryEntry } from '../types'; 

const getEntries = ():DiaryEntry[] =>{
    return diaries;
};

const getNonSensitiveEntries = (): NonSenitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

const addDiary = () => {
    return null;
};
export default {
    getEntries,
    addDiary,
    getNonSensitiveEntries
};