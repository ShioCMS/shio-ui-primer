/*
 * Copyright (C) 2016-2020 the original author or authors. 
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SiteData } from '../site/site.service';
import { ShPostData } from '../shPost/shPost.service';



export interface BreadcrumbData {
    id: string;
    name: string;
}

export interface ShFolderData {
    id: string;
    date: Date;
    name: string;
    position: number;
}

export interface ShObjectData {
    breadcrumb: BreadcrumbData[];
    folderpath: string;
    shFolders: ShFolderData[];
    shPosts: ShPostData[];
    shSite: SiteData;
}

@Injectable({
    providedIn: 'root'
})
export class ShObject {

    private SERVER_URL = "http://localhost:2710";
    constructor(private httpClient: HttpClient) { }

    public fetchData() {
        return this.httpClient.get(`${this.SERVER_URL}/products`);
    }

    query(): Observable<ShObjectData[]> {
        return this.httpClient.get<ShObjectData[]>(`${this.SERVER_URL}/api/v2/object`);
    }
    get(id: string): Observable<ShObjectData> {
        return this.httpClient.get<ShObjectData>(`${this.SERVER_URL}/api/v2/object/${id}/list`);
    }
}