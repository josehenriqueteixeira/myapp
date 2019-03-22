import { User } from '../interfaces/users'
import { Observable } from 'rxjs';
import { ModalController } from 'ionic-angular';
import { UsersDetailsComponent } from '../components/users-details/users-details';

export class UsersMock{
    public users: Array<User> = [
        {
            id: 1,
            name: 'jose henrique',
            username: 'josehteixeira10',
            email: 'josehenrique@quickfast.com',
            phone: '1140634100',
            website: 'teste.com.br',
            company:{
                name: 'quickfast',
                catchPhrase: 'teste',
                bs: 'teste2'
            },
            address:{
                street: 'Rua Piaui',
                city: 'Itapecerica da Serra',
                zipcode: '06852-000',
                suite: 'teste',
                geo:{
                    lat: '-21.53525441',
                    lng: '-23.6598716'
                }
            }
        },
        {
            id: 2,
            name: 'renato teixeira',
            username: 'renatoteixeira',
            email: 'renato@uol.com.br',
            phone: '116941565',
            website: 'teste.com.br',
            company:{
                name: 'teste company',
                catchPhrase: 'teste1',
                bs: 'teste3'
            },
            address:{
                street: 'Rua dois',
                city: 'São Paulo',
                zipcode: '06852-180',
                suite: 'tsuite',
                geo:{
                    lat: '-21.51525441',
                    lng: '-23.65154776'
                }
            }
        },
    ];

    getUsers(): Observable<User[]>{    
        return new Observable<User[]>(observer => {
            observer.next(this.users);
        });
    }

}
    

