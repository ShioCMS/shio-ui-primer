import { ShSiteData } from '../site/site.data';
import { ShPostTypeData } from './type/postType.data';

export interface ShPostData {
    id: string;
    date: Date;
    title: string;
    position: number;
    shSite: ShSiteData;
    shPostType: ShPostTypeData;
}
