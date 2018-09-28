import { BaseData } from './BaseData';

export class BallotData extends BaseData {

  constructor(restURL) {
    super(restURL, 'ballots');
  }

}