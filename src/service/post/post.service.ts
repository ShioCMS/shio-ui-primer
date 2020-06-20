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
import { ShPostXPData } from 'src/data/post/postxp.data';
import { BreadcrumbData } from 'src/data/folder/breadcrumb.data';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ShPostService {

    constructor(private httpClient: HttpClient) { }

    get(id: string): Observable<ShPostXPData> {
        return this.httpClient.get<ShPostXPData>(`${environment.apiUrl}/api/v2/post/xp/${id}`);
    }
    getBreadcrumb(id: string): Observable<BreadcrumbData> {
        return this.httpClient.get<BreadcrumbData>(`${environment.apiUrl}/api/v2/folder/${id}/path`)
    }
}