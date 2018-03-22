const args = process.argv.slice(2);
const nodeLib = require('./node');
const node = new nodeLib.Node({
  publicKey: args[0],
  privateKey: args[1],
  bootstrapIpMap: { '1': 'localhost' }
});
setTimeout(() => {
  node
    .sendMessage({ recipient: 1, type: 'bla', payload: 'hello' }, 3, 1000)
    .then(status => {
      console.log(status ? 'woohoo' : ':(');
    })
    .catch(console.error);
}, 2000);
