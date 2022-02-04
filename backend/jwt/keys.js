const { generateKeyPair } = require('jose/util/generate_key_pair');

(async () => {
  const { publicKey, privateKey } = await generateKeyPair('RS256');
  // https://nodejs.org/api/crypto.html#crypto_class_keyobject
  const publicKeyString = publicKey.export({
    type: 'pkcs1',
    format: 'pem',
  });
  const privateKeyString = privateKey.export({
    type: 'pkcs1',
    format: 'pem',
  });
  console.log(publicKeyString);
  console.log(privateKeyString);
})();