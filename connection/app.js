const contract = require('truffle-contract');
const Web3 = require('web3')
const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
const metacoin_artifact = require('../build/contracts/MetaCoin.json');
var MetaCoin = contract(metacoin_artifact);

module.exports = {
  
  start: function (callback) {
    var self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    MetaCoin.setProvider(self.web3.currentProvider);

    // Get the initial account balance so it can be displayed.
    self.web3.eth.getAccounts(function (err, accs) {
      if (err != null) {
        console.log("There was an error fetching your accounts.");
        return;
      }

      if (accs.length == 0) {
        console.log("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }
      self.accounts = accs;
      self.account = self.accounts[2];

      callback(self.accounts);
    });
  },
  refreshBalance: function (account, callback) {
    var self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    MetaCoin.setProvider(self.web3.currentProvider);

    var meta;
    MetaCoin.deployed().then(function (instance) {
      meta = instance;
      // var temp=web3.eth.getBalance(account);
      // console.log(temp);
      return meta.getBalance.call(account, { from: account });;
    }).then(function (value) {
      callback(value.valueOf());
    }).catch(function (e) {
      console.log(e);
      callback("Error 404");
    });
  },
  getAccountsBalance: function () {

  },
  sendCoin: function (amount, sender, receiver, callback) {
     
    var self = this;
    
    // Bootstrap the MetaCoin abstraction for Use.
    MetaCoin.setProvider(self.web3.currentProvider);
    var temp = web3.eth.getBalance(sender);
    var meta;
    MetaCoin.deployed().then(function (instance) {
      meta = instance;
      temp.then(function(result) {
        
      if(result>=(amount*1000000000000000000))
      {
        web3.eth.sendTransaction({
          from: sender,
          to: receiver,
          value: amount*1000000000000000000
        }).then(function () {
          self.refreshBalance(sender, function (answer) {
            callback(answer);
          });
        }).catch(function (e) {
          console.log(e);
          callback("ERROR 404");
        });
      }
      else
      {
        console.log("Sorry, you don't have enough credit");
      }
     });
      
    }
    )
  }
}
//return meta.sendCoin(receiver, amount, {from: sender, to: receiver});
