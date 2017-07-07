import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Group} from './group';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GroupService {
    private ApiUrl = 'http://localhost:8080/api/groups';
    private CustomApiUrl = 'http://localhost:8080/group'

    constructor(private http: Http) {
    }

    findAll(): Observable<Group[]> {
        return this.http.get(this.ApiUrl)
            .map((response: Response) => <Group[]> response.json())
            .map((data: any) => {
                return data._embedded.groups as Group[];
            });
    }

    findNumberOfGroups(): Observable<number> {
    return this.http.get(this.ApiUrl)
      .map((response: Response) => <number> response.json())
      .map((data: any) => {
        console.log(data.page.totalElements);
        return data.page.totalElements as number;
      });
  }

    findOne(id: number): Observable<Group> {
        return this.http.get(this.CustomApiUrl + '/view/' + id)
            .map((response: Response) => <Group> response.json());
    }

    save(group: Group): Observable<any> {
        let headers: Headers;
        headers = new Headers({'Content-Type': 'application/json'});
        let options: RequestOptions;
        options = new RequestOptions({headers: headers});
        return this.http.post(this.ApiUrl + '?projection=groupView', group, options);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(this.ApiUrl + '/' + id);
    }
}
