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
import { environment } from 'src/environments/environment';
import { ShPostXPData } from 'src/app/data/post/postxp.data';
import { BreadcrumbData } from 'src/app/data/folder/breadcrumb.data';
import { ShPostData } from '@app/data/post/post.data';

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
    public savePost(shPost: ShPostData): boolean {
        console.log(JSON.stringify(shPost));
        this.httpClient.put(`${environment.apiUrl}/api/v2/post/${shPost.id}`,
            JSON.stringify(shPost))
            .subscribe(
                (val) => {
                    console.log('POST call successful value returned in body',
                        val);
                    return true;
                },
                response => {
                    console.log('POST call in error', response);
                },
                () => {
                    console.log('The POST observable is now completed.');
                });
        return false;

    }
}