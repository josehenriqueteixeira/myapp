import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

describe('MyApp', () => {
    let component: MyApp;
    let fixture: ComponentFixture<MyApp>;
    let platformSpy, platformReadySpy, statusBarSpy, splashScreenSpy;
    
    beforeEach(async(() => {
        statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
        splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
        platformReadySpy = Promise.resolve();
        platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });

        TestBed.configureTestingModule({
            declarations:[ MyApp ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                {
                    provide: Platform,
                    useValue: platformSpy
                },
                {
                    provide: StatusBar, 
                    useValue: statusBarSpy
                },
                {
                    provide: SplashScreen,
                    useValue: splashScreenSpy
                }
            ],
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MyApp);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', async () => {
        const fixture = TestBed.createComponent(MyApp);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should initialize the app', async () => {
        TestBed.createComponent(MyApp);
        expect(platformSpy.ready).toHaveBeenCalled();
        await platformReadySpy;
        expect(statusBarSpy.styleDefault).toHaveBeenCalled();
        expect(splashScreenSpy.hide).toHaveBeenCalled();
      });

      it('should have menu labels', async () => {
        const fixture = await TestBed.createComponent(MyApp);
        await fixture.detectChanges();
        const app = fixture.nativeElement;
        const menuItems = app.querySelectorAll('button');
        expect(menuItems.length).toEqual(4);
        expect(menuItems[0].textContent).toContain('Home');
        expect(menuItems[1].textContent).toContain('List');
        expect(menuItems[2].textContent).toContain('Users');
        expect(menuItems[3].textContent).toContain('UsersAvatar');
      });

});