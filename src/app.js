// -- Modules -- //
var appStart = require('./modules/appStart')();
    // userDAO = require('./models/dao/userDAO'),
    var messageDAO = require('./models/dao/messageDAO');
    // userBO = require('./models/bo/userBO'),
    var appModule = require('./modules/appModule');
    var $ = require('jquery');
    var authenticationRoute = require('./routes/authenticationRoute');

var dao = new messageDAO();

// dao.add({id_user: 1, message: 'OK', date: moment()}).then(
//   function(result){
//     appModule.consoleOut('add');
//     appModule.consoleOut(result);

//     dao.get().then(
//       function(result){
//         appModule.consoleOut('get');
//         appModule.consoleOut(result);
//       }
//     );
//   }
// );

// dao.get(3).then(
//   function(result){
//     appModule.consoleOut('get');
//     appModule.consoleOut(result);
//   }
// );

// dao.del(3).then(
//   function(result){
//     appModule.consoleOut('del');
//     appModule.consoleOut(result);

//     dao.get().then(
//       function(result){
//         appModule.consoleOut('get');
//         appModule.consoleOut(result);
//       }
//     );
//   }
// );

// global.$appModule.consoleOut('Je fonctionne bien');

// dao.upd({id: 4, id_user: 0, message: 'NOM', date: moment()}).then(
//   function(result){
//     appModule.consoleOut('del');
//     appModule.consoleOut(result);

//     dao.get().then(
//       function(result){
//         appModule.consoleOut('get');
//         appModule.consoleOut(result);
//       }
//     );
//   }
// );

// -- Defini routes -- //
// app.use('/authenticationRoute', authenticationRoute);

var value = 'POKA';
value = global.$appModule.convert.toEncryptAES(value);

console.log('toEncryptAES, POKA: ' + value);

value = global.$appModule.convert.toDencryptAES(value);

console.log('toDencryptAES, POKA: ' + value);