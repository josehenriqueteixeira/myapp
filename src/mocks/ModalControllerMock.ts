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

	public onDidDismiss() {
		return new Promise((resolve: Function) => {
			resolve();
		});
	}

}