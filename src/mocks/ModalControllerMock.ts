import { User } from "../interfaces/users";
import { UsersDetailsComponent } from "../components/users-details/users-details";
import { ModalController } from "ionic-angular";

export class ModalControllerMock {

    create(): Modal {
      let modal: Modal = new Modal;
      return modal;
    };

}

export class Modal {

	public present(): Promise<any> {
		return new Promise((resolve: Function) => {
			resolve();
		});
	}

}

export class ModalPresent{
	selectedUser: User;
	public modalCtrl: ModalController

	openSettings(user: User) {
			this.selectedUser = user;
			let modal = this.modalCtrl.create(UsersDetailsComponent, {
				user_info: this.selectedUser     
			});
			modal.present();
	}
}
