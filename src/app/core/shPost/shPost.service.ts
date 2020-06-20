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
import { BreadcrumbData } from '../shObject/shObject.service';


export interface ShPostData {
    id: string;
    date: Date;
    title: string;
    position: number;
}

export interface ShPostXPData {
    allowPublish: boolean;
    shPost: ShPostData;
}

@Injectable({
    providedIn: 'root'
})
export class ShPost {

    private SERVER_URL = "http://localhost:2710";
    constructor(private httpClient: HttpClient) { }

    public fetchData() {
        return this.httpClient.get(`${this.SERVER_URL}/products`);
    }

    get(id: string): Observable<ShPostXPData> {
        return this.httpClient.get<ShPostXPData>(`${this.SERVER_URL}/api/v2/post/xp/${id}`);
    }
    getBreadcrumb(id: string): Observable<BreadcrumbData> {
        return this.httpClient.get<BreadcrumbData>(`${this.SERVER_URL}/api/v2/folder/${id}/path`)
    }
}