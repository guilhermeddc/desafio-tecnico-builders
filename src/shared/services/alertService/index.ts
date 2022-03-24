import {Subject} from 'rxjs';

export type AlertTypes =
  | 'warning'
  | 'success'
  | 'loading'
  | 'error'
  | 'info'
  | undefined;

interface IAlert {
  message: string;
  type: AlertTypes;
  // eslint-disable-next-line
  onClose?: Function;
}

const alertSubject = new Subject<IAlert>();

export const AlertService = alertSubject.asObservable();

export const feedback = (
  message: string,
  type: AlertTypes,
  // eslint-disable-next-line
  onClose?: Function,
) => {
  alertSubject.next({
    message,
    onClose,
    type,
  });
};
