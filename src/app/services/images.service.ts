import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
	private readonly host: string = 'http://localhost:8090'

	private readonly httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'image/png'
		}),
		responseType: 'blob' as 'json' // wtf?? https://stackoverflow.com/questions/50798592/angular-6-how-to-set-response-type-as-text-while-making-http-call
	}

	constructor(private http: HttpClient) { }

	getVoronoiImage(type: string, lines: boolean, sites: Number, dist: string, c1: string, c2: string):Observable<any> {
		return this.http.get<any>(
			`${this.host}/${type}?lines=${lines?'t':'f'}&sites=${sites}&distance=${dist}&color1=${c1}&color2=${c2}`,
			this.httpOptions
		)
	}

	getFractalImage(type: string, splits: Number) {
		return this.http.get<any>(
			`${this.host}/${type}?splits=${splits}`,
			this.httpOptions
		)
	}

	getStainglassImage(type: string, lines: boolean, sites: Number, dist: string, img: any): Observable<any> {
		return this.http.post<any>(
			`${this.host}/${type}?lines=${lines?'t':'f'}&sites=${sites}&distance=${dist}`,
			img,
			this.httpOptions
		)
	}
}
