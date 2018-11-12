// -- Modules -- //
var appStart = require('./modules/appStart')();
    // userDAO = require('./models/dao/userDAO'),
    messageDAO = require('./models/dao/messageDAO'),
    // userBO = require('./models/bo/userBO'),
    appLib = require('./modules/appLib'),
    $ = require('jquery'),
    moment = require('moment');

var dao = new messageDAO();

// dao.add({id_user: 1, message: 'OK', date: moment()}).then(
//   function(result){
//     appLib.consoleOut('add');
//     appLib.consoleOut(result);

//     dao.get().then(
//       function(result){
//         appLib.consoleOut('get');
//         appLib.consoleOut(result);
//       }
//     );
//   }
// );

// dao.get(3).then(
//   function(result){
//     appLib.consoleOut('get');
//     appLib.consoleOut(result);
//   }
// );

// dao.del(3).then(
//   function(result){
//     appLib.consoleOut('del');
//     appLib.consoleOut(result);

//     dao.get().then(
//       function(result){
//         appLib.consoleOut('get');
//         appLib.consoleOut(result);
//       }
//     );
//   }
// );

dao.upd({id: 4, id_user: 0, message: 'NOM', date: moment()}).then(
  function(result){
    appLib.consoleOut('del');
    appLib.consoleOut(result);

    dao.get().then(
      function(result){
        appLib.consoleOut('get');
        appLib.consoleOut(result);
      }
    );
  }
);