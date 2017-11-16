# angular-crypto-pro

Angular-сервис для **[crypto-pro](https://github.com/vgoma/crypto-pro)**

### Установка

Через npm:

```
npm install --save angular-crypto-pro
```

### Документация

**angular-crypto-pro** является просто оберткой над **[crypto-pro](https://github.com/vgoma/crypto-pro) методом call()**

Нужен он только для связи с сервисом ```$q```, который работает с жизненным циклом Angular

### Пример использования

Все точно так же как в **[crypto-pro](https://github.com/vgoma/crypto-pro)**, только подключайте в виде сервиса:
```JavaScript
angular
    .module('your-app', ['angular-crypto-pro'])
    .controller('CryptoProDemoController', (CryptoPro) => {
        CryptoPro.call('getCertsList')
            .then((certList) => {
                console.log(certList);
            })
    });
```
