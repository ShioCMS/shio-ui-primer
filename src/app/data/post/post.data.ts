import { ShSiteData } from '../site/site.data';
import { ShPostTypeData } from './type/postType.data';
import { ShPostAttrData } from './postAttr.data';

export interface ShPostData {
    id: string;
    date: Date;
    title: string;
    position: number;
    shSite: ShSiteData;
    shPostType: ShPostTypeData;
    shPostAttrs: ShPostAttrData[];
}
