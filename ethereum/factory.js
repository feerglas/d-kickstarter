import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x0Aa9b062052Ec6Db8244c3a776dc69C3821a9fFA'
);

export default instance;
