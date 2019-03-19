import { TestBed } from '@angular/core/testing';
import { UsersService } from './users';
import { UsersMock } from '../mocks/UsersMock';


describe('UsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { 
        provide: UsersService, 
        useClass: UsersMock
      }
    ]
  }));

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });

  it('get users', () => {    
    const service: UsersService = TestBed.get(UsersService);    
    service.getUsers().subscribe(users => {
      expect(users.length).toBe(2);
      expect(users[1].id).toBe(2);
      expect(users[1].name).toContain('renato teixeira');
      expect(users[1].username).toContain('renatoteixeira');
      expect(users[1].email).toContain('renato@uol.com.br');
      expect(users[1].phone).toContain('116941565');
      expect(users[1].website).toContain('teste.com.br');
      expect(users[1].company.name).toContain('teste company');
      expect(users[1].company.catchPhrase).toContain('teste1');
      expect(users[1].company.bs).toContain('teste3');
      expect(users[1].address.street).toContain("Rua dois"); 
      expect(users[1].address.city).toContain("São Paulo"); 
      expect(users[1].address.zipcode).toContain("06852-180"); 
      expect(users[1].address.suite).toContain("tsuite"); 
      expect(users[1].address.geo.lat).toContain("-21.51525441");
      expect(users[1].address.geo.lng).toContain("-23.65154776"); 
    });
  });

  




});

