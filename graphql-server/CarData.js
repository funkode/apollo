import { BaseData } from './BaseData';

export class CarData extends BaseData {

  constructor(restURL) {
    super(restURL, 'cars');
  }

}