import { BreadcrumbData } from '../folder/breadcrumb.data';
import { ShFolderData } from '../folder/folder.data';
import { ShPostData } from '../post/post.data';
import { ShSiteData } from '../site/site.data';

export interface ShObjectData {
    breadcrumb: BreadcrumbData[];
    folderpath: string;
    shFolders: ShFolderData[];
    shPosts: ShPostData[];
    shSite: ShSiteData;
}