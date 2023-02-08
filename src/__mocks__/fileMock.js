const handler = {
  get: (target, name) => typeof name === 'symbol' ?
    () => 'stub-file-option-symbol' :
    `stub-file-option-${name}`
};

const proxyStubFile = new Proxy({}, handler);

module.exports = proxyStubFile;