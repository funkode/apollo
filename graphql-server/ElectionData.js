import { BaseData } from './BaseData';

export class ElectionData extends BaseData {

  constructor(restURL) {
    super(restURL, 'elections');
  }

}