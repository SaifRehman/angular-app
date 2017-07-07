import {Injectable} from '@angular/core';
import {Headers, Http, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {University} from './university.model/university';

@Injectable()
export class UniversityService {
    private ApiUrl = 'http://localhost:8080/api/universities';

    constructor(private http: Http) {
    }

    findAll(): Observable<University[]> {
        return this.http.get(this.ApiUrl)
            .map((response: Response) => <University[]> response.json())
            .map((data: any) => {
                return data._embedded.universities as University[];
            });
    }

    findOne(id: number): Observable<University> {
        return this.http.get(this.ApiUrl + '/' + id + '?projection=universityView')
            .map((response: Response) => <University> response.json());
    }

    save(university: University): Observable<any> {
        let headers: Headers;
        headers = new Headers({'Content-Type': 'application/json'});
        let options: RequestOptions;
        options = new RequestOptions({headers: headers});
        return this.http.post(this.ApiUrl, university, options);
    }
}
