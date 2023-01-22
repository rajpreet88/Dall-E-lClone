import { surpriseMePrompts } from '../constants';
import Filesaver from 'file-saver';

export const getRandomPrompt = (prompt) => {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if (randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;

}

//downloading image to local 
export const downloadImage = async (_id, photo) => {
    Filesaver.saveAs(photo, `download.${_id}.jpg`)
}