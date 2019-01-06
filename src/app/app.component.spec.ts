import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing'
import { By } from '@angular/platform-browser'
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavbarComponent } from './avanzadas/navbar/navbar.component';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				NavbarComponent
			], 
			imports: [
				RouterTestingModule.withRoutes([])
			], 
			schemas: [
				NO_ERRORS_SCHEMA
			]
		}).compileComponents();
	}));
	
	it('should create the Pruebas', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));
	
	it(`should have as title 'Pruebas'`, async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('Pruebas');
	}));

	it('Debe de tener un router-outlet', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const debugElement = fixture.debugElement
		.query(By.directive(RouterOutlet));
		expect(debugElement).not.toBeNull();
	});



});
