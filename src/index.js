import * as angular from 'angular';
import CryptoPro from 'crypto-pro';

class CryptoProService {
	constructor($q) {
		this.call = (...args) => {
			return $q((resolve, reject) => {
				CryptoPro.call(...args).then(resolve, reject);
			});
		}
	}
}
CryptoProService.$inject = ['$q'];

const module = angular
	.module("angular-crypto-pro", [])
	.service("CryptoPro", CryptoProService);

export default module.name;