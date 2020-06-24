import { ShPostData } from './post.data';

export interface ShPostXPData {
    [x: string]: any;
    allowPublish: boolean;
    shPost: ShPostData;
}