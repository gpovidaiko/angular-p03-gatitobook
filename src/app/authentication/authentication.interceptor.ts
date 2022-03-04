import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

	constructor(private tokenService: TokenService) { }

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		request = this.updateRequest(request);
		return next.handle(request);
	}

	private updateRequest(request: HttpRequest<unknown>): HttpRequest<unknown> {
		const headers = this.updateHeaders(request.headers);
		return request.clone({ headers: headers });
	}

	private updateHeaders(headers: HttpHeaders) {
		return this.setToken(headers);
	}

	private setToken(httpHeaders: HttpHeaders): HttpHeaders {
		if (!this.tokenService.hasToken()) return httpHeaders;

		const token = this.tokenService.getToken();
		return httpHeaders.append('x-access-token', token);
	}

}
