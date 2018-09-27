import { BaseData } from './BaseData';

export class VoterData extends BaseData {

  constructor(restURL) {
    super(restURL, 'voters');
  }

}