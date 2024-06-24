"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@celo";
exports.ids = ["vendor-chunks/@celo"];
exports.modules = {

/***/ "(ssr)/./node_modules/@celo/utils/lib/ecies.js":
/*!***********************************************!*\
  !*** ./node_modules/@celo/utils/lib/ecies.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/**\n * ECIES encrypt/decrypt with Ethereum keys\n * A Typescript implementation of geth/crypto/ecies/ecies.go\n * Modified from https://github.com/LimelabsTech/eth-ecies/blob/master/index.js\n * At commit c858cbd021e9a99d8afa629de33c8c30d923b3e5.\n */\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ECIES = exports.Decrypt = exports.Encrypt = exports.AES128DecryptAndHMAC = exports.AES128Decrypt = exports.AES128EncryptAndHMAC = exports.AES128Encrypt = exports.IV_LENGTH = void 0;\nvar crypto_1 = __webpack_require__(/*! crypto */ \"crypto\");\nexports.IV_LENGTH = 16;\n/**\n * Increments big endian uint32\n *\n * @param {Buffer} ctr 32 bit unsigned big endian integer to increment.\n * @returns Incremented counter.\n */\nvar IncCounter = function (ctr) {\n    for (var i = ctr.length - 1; i >= 0; i--) {\n        ctr[i]++;\n        if (ctr[i] !== 0) {\n            return ctr;\n        }\n    }\n    return ctr;\n};\n/**\n * NIST 8000-56C Rev 1 One Step KDF with the following parameters:\n * - H(x) is SHA-256(x)\n * - Fixed info is null\n *\n * TODO:\n * - Implement proper ceiling on reps.\n *\n * @param {Buffer} px Input keying material to derive key from.\n * @param {number} kdLen Length of output in bytes\n * @returns {Buffer} Output keying material of length kdLen bytes.\n */\nvar ConcatKDF = function (px, kdLen) {\n    var blockSize = 32;\n    var reps = ((kdLen + 7) * 8) / (blockSize * 8);\n    var counter = Buffer.from('00000001', 'hex');\n    var k = Buffer.from('00', 'hex');\n    for (var i = 0; i <= reps; i++) {\n        var hash = (0, crypto_1.createHash)('sha256');\n        hash.update(counter);\n        hash.update(px);\n        k = Buffer.concat([k, hash.digest()]);\n        counter = IncCounter(counter);\n    }\n    return k.slice(1, kdLen + 1);\n};\n/**\n * AES-128 CTR encrypt\n * @param {Buffer} encryptionKey\n * @param {Buffer} iv\n * @param {Buffer} plaintext\n * @returns {Buffer} ciphertext\n */\nfunction AES128Encrypt(encryptionKey, iv, plaintext) {\n    var cipher = (0, crypto_1.createCipheriv)('aes-128-ctr', encryptionKey, iv);\n    var firstChunk = cipher.update(plaintext);\n    var secondChunk = cipher.final();\n    return Buffer.concat([iv, firstChunk, secondChunk]);\n}\nexports.AES128Encrypt = AES128Encrypt;\n/**\n * AES-128 CTR encrypt with message authentication\n * @param {Buffer} encryptionKey\n * @param {Buffer} macKey\n * @param {Buffer} plaintext\n * @returns {Buffer} ciphertext\n */\nfunction AES128EncryptAndHMAC(encryptionKey, macKey, plaintext) {\n    var iv = (0, crypto_1.randomBytes)(exports.IV_LENGTH);\n    var dataToMac = AES128Encrypt(encryptionKey, iv, plaintext);\n    var mac = (0, crypto_1.createHmac)('sha256', macKey).update(dataToMac).digest();\n    return Buffer.concat([dataToMac, mac]);\n}\nexports.AES128EncryptAndHMAC = AES128EncryptAndHMAC;\n/**\n * AES-128 CTR decrypt\n * @param {Buffer} encryptionKey\n * @param {Buffer} iv\n * @param {Buffer} ciphertext\n * @returns {Buffer} plaintext\n */\nfunction AES128Decrypt(encryptionKey, iv, ciphertext) {\n    var cipher = (0, crypto_1.createDecipheriv)('aes-128-ctr', encryptionKey, iv);\n    var firstChunk = cipher.update(ciphertext);\n    var secondChunk = cipher.final();\n    return Buffer.concat([firstChunk, secondChunk]);\n}\nexports.AES128Decrypt = AES128Decrypt;\n/**\n * AES-128 CTR decrypt with message authentication\n * @param {Buffer} encryptionKey\n * @param {Buffer} macKey\n * @param {Buffer} ciphertext\n * @returns {Buffer} plaintext\n */\nfunction AES128DecryptAndHMAC(encryptionKey, macKey, ciphertext) {\n    var iv = ciphertext.slice(0, exports.IV_LENGTH);\n    var message = ciphertext.slice(exports.IV_LENGTH, ciphertext.length - 32);\n    var mac = ciphertext.slice(ciphertext.length - 32, ciphertext.length);\n    var dataToMac = Buffer.concat([iv, message]);\n    var computedMac = (0, crypto_1.createHmac)('sha256', macKey).update(dataToMac).digest();\n    if (!mac.equals(computedMac)) {\n        throw new Error('MAC mismatch');\n    }\n    return AES128Decrypt(encryptionKey, iv, message);\n}\nexports.AES128DecryptAndHMAC = AES128DecryptAndHMAC;\n/**\n * ECIES encrypt\n * @param {Buffer} pubKeyTo Ethereum pub key, 64 bytes.\n * @param {Buffer} plaintext Plaintext to be encrypted.\n * @returns {Buffer} Encrypted message, serialized, 113+ bytes\n */\nfunction Encrypt(pubKeyTo, plaintext) {\n    // NOTE: elliptic is disabled elsewhere in this library to prevent\n    // accidental signing of truncated messages.\n    // tslint:disable-next-line:import-blacklist\n    var EC = (__webpack_require__(/*! elliptic */ \"(ssr)/./node_modules/elliptic/lib/elliptic.js\").ec);\n    var ec = new EC('secp256k1');\n    var ephemPrivKey = ec.keyFromPrivate((0, crypto_1.randomBytes)(32));\n    var ephemPubKey = ephemPrivKey.getPublic(false, 'hex');\n    var ephemPubKeyEncoded = Buffer.from(ephemPubKey, 'hex');\n    var px = ephemPrivKey.derive(ec.keyFromPublic(Buffer.concat([Buffer.from([0x04]), pubKeyTo])).getPublic());\n    var hash = ConcatKDF(px.toArrayLike(Buffer), 32);\n    var encryptionKey = hash.slice(0, 16);\n    var macKey = (0, crypto_1.createHash)('sha256').update(hash.slice(16)).digest();\n    var message = AES128EncryptAndHMAC(encryptionKey, macKey, plaintext);\n    var serializedCiphertext = Buffer.concat([\n        ephemPubKeyEncoded,\n        message, // iv + ciphertext + mac (min 48 bytes)\n    ]);\n    return serializedCiphertext;\n}\nexports.Encrypt = Encrypt;\n/**\n * ECIES decrypt\n * @param {Buffer} privKey Ethereum private key, 32 bytes.\n * @param {Buffer} encrypted Encrypted message, serialized, 113+ bytes\n * @returns {Buffer} plaintext\n */\nfunction Decrypt(privKey, encrypted) {\n    // Read iv, ephemPubKey, mac, ciphertext from encrypted message\n    var ephemPubKeyEncoded = encrypted.slice(0, 65);\n    var symmetricEncrypted = encrypted.slice(65);\n    // NOTE: elliptic is disabled elsewhere in this library to prevent\n    // accidental signing of truncated messages.\n    // tslint:disable-next-line:import-blacklist\n    var EC = (__webpack_require__(/*! elliptic */ \"(ssr)/./node_modules/elliptic/lib/elliptic.js\").ec);\n    var ec = new EC('secp256k1');\n    var ephemPubKey = ec.keyFromPublic(ephemPubKeyEncoded).getPublic();\n    var px = ec.keyFromPrivate(privKey).derive(ephemPubKey);\n    var hash = ConcatKDF(px.toBuffer(), 32);\n    // km, ke\n    var encryptionKey = hash.slice(0, 16);\n    var macKey = (0, crypto_1.createHash)('sha256').update(hash.slice(16)).digest();\n    return AES128DecryptAndHMAC(encryptionKey, macKey, symmetricEncrypted);\n}\nexports.Decrypt = Decrypt;\nexports.ECIES = {\n    Encrypt: Encrypt,\n    Decrypt: Decrypt,\n    AES128EncryptAndHMAC: AES128EncryptAndHMAC,\n    AES128DecryptAndHMAC: AES128DecryptAndHMAC,\n};\n//# sourceMappingURL=ecies.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQGNlbG8vdXRpbHMvbGliL2VjaWVzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGFBQWEsR0FBRyxlQUFlLEdBQUcsZUFBZSxHQUFHLDRCQUE0QixHQUFHLHFCQUFxQixHQUFHLDRCQUE0QixHQUFHLHFCQUFxQixHQUFHLGlCQUFpQjtBQUNuTCxlQUFlLG1CQUFPLENBQUMsc0JBQVE7QUFDL0IsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsUUFBUTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlGQUFzQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlGQUFzQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ByZWdlbi1leGFtcGxlLy4vbm9kZV9tb2R1bGVzL0BjZWxvL3V0aWxzL2xpYi9lY2llcy5qcz9hMTE3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRUNJRVMgZW5jcnlwdC9kZWNyeXB0IHdpdGggRXRoZXJldW0ga2V5c1xuICogQSBUeXBlc2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIGdldGgvY3J5cHRvL2VjaWVzL2VjaWVzLmdvXG4gKiBNb2RpZmllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9MaW1lbGFic1RlY2gvZXRoLWVjaWVzL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG4gKiBBdCBjb21taXQgYzg1OGNiZDAyMWU5YTk5ZDhhZmE2MjlkZTMzYzhjMzBkOTIzYjNlNS5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FQ0lFUyA9IGV4cG9ydHMuRGVjcnlwdCA9IGV4cG9ydHMuRW5jcnlwdCA9IGV4cG9ydHMuQUVTMTI4RGVjcnlwdEFuZEhNQUMgPSBleHBvcnRzLkFFUzEyOERlY3J5cHQgPSBleHBvcnRzLkFFUzEyOEVuY3J5cHRBbmRITUFDID0gZXhwb3J0cy5BRVMxMjhFbmNyeXB0ID0gZXhwb3J0cy5JVl9MRU5HVEggPSB2b2lkIDA7XG52YXIgY3J5cHRvXzEgPSByZXF1aXJlKFwiY3J5cHRvXCIpO1xuZXhwb3J0cy5JVl9MRU5HVEggPSAxNjtcbi8qKlxuICogSW5jcmVtZW50cyBiaWcgZW5kaWFuIHVpbnQzMlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBjdHIgMzIgYml0IHVuc2lnbmVkIGJpZyBlbmRpYW4gaW50ZWdlciB0byBpbmNyZW1lbnQuXG4gKiBAcmV0dXJucyBJbmNyZW1lbnRlZCBjb3VudGVyLlxuICovXG52YXIgSW5jQ291bnRlciA9IGZ1bmN0aW9uIChjdHIpIHtcbiAgICBmb3IgKHZhciBpID0gY3RyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGN0cltpXSsrO1xuICAgICAgICBpZiAoY3RyW2ldICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gY3RyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdHI7XG59O1xuLyoqXG4gKiBOSVNUIDgwMDAtNTZDIFJldiAxIE9uZSBTdGVwIEtERiB3aXRoIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcbiAqIC0gSCh4KSBpcyBTSEEtMjU2KHgpXG4gKiAtIEZpeGVkIGluZm8gaXMgbnVsbFxuICpcbiAqIFRPRE86XG4gKiAtIEltcGxlbWVudCBwcm9wZXIgY2VpbGluZyBvbiByZXBzLlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBweCBJbnB1dCBrZXlpbmcgbWF0ZXJpYWwgdG8gZGVyaXZlIGtleSBmcm9tLlxuICogQHBhcmFtIHtudW1iZXJ9IGtkTGVuIExlbmd0aCBvZiBvdXRwdXQgaW4gYnl0ZXNcbiAqIEByZXR1cm5zIHtCdWZmZXJ9IE91dHB1dCBrZXlpbmcgbWF0ZXJpYWwgb2YgbGVuZ3RoIGtkTGVuIGJ5dGVzLlxuICovXG52YXIgQ29uY2F0S0RGID0gZnVuY3Rpb24gKHB4LCBrZExlbikge1xuICAgIHZhciBibG9ja1NpemUgPSAzMjtcbiAgICB2YXIgcmVwcyA9ICgoa2RMZW4gKyA3KSAqIDgpIC8gKGJsb2NrU2l6ZSAqIDgpO1xuICAgIHZhciBjb3VudGVyID0gQnVmZmVyLmZyb20oJzAwMDAwMDAxJywgJ2hleCcpO1xuICAgIHZhciBrID0gQnVmZmVyLmZyb20oJzAwJywgJ2hleCcpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IHJlcHM7IGkrKykge1xuICAgICAgICB2YXIgaGFzaCA9ICgwLCBjcnlwdG9fMS5jcmVhdGVIYXNoKSgnc2hhMjU2Jyk7XG4gICAgICAgIGhhc2gudXBkYXRlKGNvdW50ZXIpO1xuICAgICAgICBoYXNoLnVwZGF0ZShweCk7XG4gICAgICAgIGsgPSBCdWZmZXIuY29uY2F0KFtrLCBoYXNoLmRpZ2VzdCgpXSk7XG4gICAgICAgIGNvdW50ZXIgPSBJbmNDb3VudGVyKGNvdW50ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gay5zbGljZSgxLCBrZExlbiArIDEpO1xufTtcbi8qKlxuICogQUVTLTEyOCBDVFIgZW5jcnlwdFxuICogQHBhcmFtIHtCdWZmZXJ9IGVuY3J5cHRpb25LZXlcbiAqIEBwYXJhbSB7QnVmZmVyfSBpdlxuICogQHBhcmFtIHtCdWZmZXJ9IHBsYWludGV4dFxuICogQHJldHVybnMge0J1ZmZlcn0gY2lwaGVydGV4dFxuICovXG5mdW5jdGlvbiBBRVMxMjhFbmNyeXB0KGVuY3J5cHRpb25LZXksIGl2LCBwbGFpbnRleHQpIHtcbiAgICB2YXIgY2lwaGVyID0gKDAsIGNyeXB0b18xLmNyZWF0ZUNpcGhlcml2KSgnYWVzLTEyOC1jdHInLCBlbmNyeXB0aW9uS2V5LCBpdik7XG4gICAgdmFyIGZpcnN0Q2h1bmsgPSBjaXBoZXIudXBkYXRlKHBsYWludGV4dCk7XG4gICAgdmFyIHNlY29uZENodW5rID0gY2lwaGVyLmZpbmFsKCk7XG4gICAgcmV0dXJuIEJ1ZmZlci5jb25jYXQoW2l2LCBmaXJzdENodW5rLCBzZWNvbmRDaHVua10pO1xufVxuZXhwb3J0cy5BRVMxMjhFbmNyeXB0ID0gQUVTMTI4RW5jcnlwdDtcbi8qKlxuICogQUVTLTEyOCBDVFIgZW5jcnlwdCB3aXRoIG1lc3NhZ2UgYXV0aGVudGljYXRpb25cbiAqIEBwYXJhbSB7QnVmZmVyfSBlbmNyeXB0aW9uS2V5XG4gKiBAcGFyYW0ge0J1ZmZlcn0gbWFjS2V5XG4gKiBAcGFyYW0ge0J1ZmZlcn0gcGxhaW50ZXh0XG4gKiBAcmV0dXJucyB7QnVmZmVyfSBjaXBoZXJ0ZXh0XG4gKi9cbmZ1bmN0aW9uIEFFUzEyOEVuY3J5cHRBbmRITUFDKGVuY3J5cHRpb25LZXksIG1hY0tleSwgcGxhaW50ZXh0KSB7XG4gICAgdmFyIGl2ID0gKDAsIGNyeXB0b18xLnJhbmRvbUJ5dGVzKShleHBvcnRzLklWX0xFTkdUSCk7XG4gICAgdmFyIGRhdGFUb01hYyA9IEFFUzEyOEVuY3J5cHQoZW5jcnlwdGlvbktleSwgaXYsIHBsYWludGV4dCk7XG4gICAgdmFyIG1hYyA9ICgwLCBjcnlwdG9fMS5jcmVhdGVIbWFjKSgnc2hhMjU2JywgbWFjS2V5KS51cGRhdGUoZGF0YVRvTWFjKS5kaWdlc3QoKTtcbiAgICByZXR1cm4gQnVmZmVyLmNvbmNhdChbZGF0YVRvTWFjLCBtYWNdKTtcbn1cbmV4cG9ydHMuQUVTMTI4RW5jcnlwdEFuZEhNQUMgPSBBRVMxMjhFbmNyeXB0QW5kSE1BQztcbi8qKlxuICogQUVTLTEyOCBDVFIgZGVjcnlwdFxuICogQHBhcmFtIHtCdWZmZXJ9IGVuY3J5cHRpb25LZXlcbiAqIEBwYXJhbSB7QnVmZmVyfSBpdlxuICogQHBhcmFtIHtCdWZmZXJ9IGNpcGhlcnRleHRcbiAqIEByZXR1cm5zIHtCdWZmZXJ9IHBsYWludGV4dFxuICovXG5mdW5jdGlvbiBBRVMxMjhEZWNyeXB0KGVuY3J5cHRpb25LZXksIGl2LCBjaXBoZXJ0ZXh0KSB7XG4gICAgdmFyIGNpcGhlciA9ICgwLCBjcnlwdG9fMS5jcmVhdGVEZWNpcGhlcml2KSgnYWVzLTEyOC1jdHInLCBlbmNyeXB0aW9uS2V5LCBpdik7XG4gICAgdmFyIGZpcnN0Q2h1bmsgPSBjaXBoZXIudXBkYXRlKGNpcGhlcnRleHQpO1xuICAgIHZhciBzZWNvbmRDaHVuayA9IGNpcGhlci5maW5hbCgpO1xuICAgIHJldHVybiBCdWZmZXIuY29uY2F0KFtmaXJzdENodW5rLCBzZWNvbmRDaHVua10pO1xufVxuZXhwb3J0cy5BRVMxMjhEZWNyeXB0ID0gQUVTMTI4RGVjcnlwdDtcbi8qKlxuICogQUVTLTEyOCBDVFIgZGVjcnlwdCB3aXRoIG1lc3NhZ2UgYXV0aGVudGljYXRpb25cbiAqIEBwYXJhbSB7QnVmZmVyfSBlbmNyeXB0aW9uS2V5XG4gKiBAcGFyYW0ge0J1ZmZlcn0gbWFjS2V5XG4gKiBAcGFyYW0ge0J1ZmZlcn0gY2lwaGVydGV4dFxuICogQHJldHVybnMge0J1ZmZlcn0gcGxhaW50ZXh0XG4gKi9cbmZ1bmN0aW9uIEFFUzEyOERlY3J5cHRBbmRITUFDKGVuY3J5cHRpb25LZXksIG1hY0tleSwgY2lwaGVydGV4dCkge1xuICAgIHZhciBpdiA9IGNpcGhlcnRleHQuc2xpY2UoMCwgZXhwb3J0cy5JVl9MRU5HVEgpO1xuICAgIHZhciBtZXNzYWdlID0gY2lwaGVydGV4dC5zbGljZShleHBvcnRzLklWX0xFTkdUSCwgY2lwaGVydGV4dC5sZW5ndGggLSAzMik7XG4gICAgdmFyIG1hYyA9IGNpcGhlcnRleHQuc2xpY2UoY2lwaGVydGV4dC5sZW5ndGggLSAzMiwgY2lwaGVydGV4dC5sZW5ndGgpO1xuICAgIHZhciBkYXRhVG9NYWMgPSBCdWZmZXIuY29uY2F0KFtpdiwgbWVzc2FnZV0pO1xuICAgIHZhciBjb21wdXRlZE1hYyA9ICgwLCBjcnlwdG9fMS5jcmVhdGVIbWFjKSgnc2hhMjU2JywgbWFjS2V5KS51cGRhdGUoZGF0YVRvTWFjKS5kaWdlc3QoKTtcbiAgICBpZiAoIW1hYy5lcXVhbHMoY29tcHV0ZWRNYWMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTUFDIG1pc21hdGNoJyk7XG4gICAgfVxuICAgIHJldHVybiBBRVMxMjhEZWNyeXB0KGVuY3J5cHRpb25LZXksIGl2LCBtZXNzYWdlKTtcbn1cbmV4cG9ydHMuQUVTMTI4RGVjcnlwdEFuZEhNQUMgPSBBRVMxMjhEZWNyeXB0QW5kSE1BQztcbi8qKlxuICogRUNJRVMgZW5jcnlwdFxuICogQHBhcmFtIHtCdWZmZXJ9IHB1YktleVRvIEV0aGVyZXVtIHB1YiBrZXksIDY0IGJ5dGVzLlxuICogQHBhcmFtIHtCdWZmZXJ9IHBsYWludGV4dCBQbGFpbnRleHQgdG8gYmUgZW5jcnlwdGVkLlxuICogQHJldHVybnMge0J1ZmZlcn0gRW5jcnlwdGVkIG1lc3NhZ2UsIHNlcmlhbGl6ZWQsIDExMysgYnl0ZXNcbiAqL1xuZnVuY3Rpb24gRW5jcnlwdChwdWJLZXlUbywgcGxhaW50ZXh0KSB7XG4gICAgLy8gTk9URTogZWxsaXB0aWMgaXMgZGlzYWJsZWQgZWxzZXdoZXJlIGluIHRoaXMgbGlicmFyeSB0byBwcmV2ZW50XG4gICAgLy8gYWNjaWRlbnRhbCBzaWduaW5nIG9mIHRydW5jYXRlZCBtZXNzYWdlcy5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6aW1wb3J0LWJsYWNrbGlzdFxuICAgIHZhciBFQyA9IHJlcXVpcmUoJ2VsbGlwdGljJykuZWM7XG4gICAgdmFyIGVjID0gbmV3IEVDKCdzZWNwMjU2azEnKTtcbiAgICB2YXIgZXBoZW1Qcml2S2V5ID0gZWMua2V5RnJvbVByaXZhdGUoKDAsIGNyeXB0b18xLnJhbmRvbUJ5dGVzKSgzMikpO1xuICAgIHZhciBlcGhlbVB1YktleSA9IGVwaGVtUHJpdktleS5nZXRQdWJsaWMoZmFsc2UsICdoZXgnKTtcbiAgICB2YXIgZXBoZW1QdWJLZXlFbmNvZGVkID0gQnVmZmVyLmZyb20oZXBoZW1QdWJLZXksICdoZXgnKTtcbiAgICB2YXIgcHggPSBlcGhlbVByaXZLZXkuZGVyaXZlKGVjLmtleUZyb21QdWJsaWMoQnVmZmVyLmNvbmNhdChbQnVmZmVyLmZyb20oWzB4MDRdKSwgcHViS2V5VG9dKSkuZ2V0UHVibGljKCkpO1xuICAgIHZhciBoYXNoID0gQ29uY2F0S0RGKHB4LnRvQXJyYXlMaWtlKEJ1ZmZlciksIDMyKTtcbiAgICB2YXIgZW5jcnlwdGlvbktleSA9IGhhc2guc2xpY2UoMCwgMTYpO1xuICAgIHZhciBtYWNLZXkgPSAoMCwgY3J5cHRvXzEuY3JlYXRlSGFzaCkoJ3NoYTI1NicpLnVwZGF0ZShoYXNoLnNsaWNlKDE2KSkuZGlnZXN0KCk7XG4gICAgdmFyIG1lc3NhZ2UgPSBBRVMxMjhFbmNyeXB0QW5kSE1BQyhlbmNyeXB0aW9uS2V5LCBtYWNLZXksIHBsYWludGV4dCk7XG4gICAgdmFyIHNlcmlhbGl6ZWRDaXBoZXJ0ZXh0ID0gQnVmZmVyLmNvbmNhdChbXG4gICAgICAgIGVwaGVtUHViS2V5RW5jb2RlZCxcbiAgICAgICAgbWVzc2FnZSwgLy8gaXYgKyBjaXBoZXJ0ZXh0ICsgbWFjIChtaW4gNDggYnl0ZXMpXG4gICAgXSk7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZWRDaXBoZXJ0ZXh0O1xufVxuZXhwb3J0cy5FbmNyeXB0ID0gRW5jcnlwdDtcbi8qKlxuICogRUNJRVMgZGVjcnlwdFxuICogQHBhcmFtIHtCdWZmZXJ9IHByaXZLZXkgRXRoZXJldW0gcHJpdmF0ZSBrZXksIDMyIGJ5dGVzLlxuICogQHBhcmFtIHtCdWZmZXJ9IGVuY3J5cHRlZCBFbmNyeXB0ZWQgbWVzc2FnZSwgc2VyaWFsaXplZCwgMTEzKyBieXRlc1xuICogQHJldHVybnMge0J1ZmZlcn0gcGxhaW50ZXh0XG4gKi9cbmZ1bmN0aW9uIERlY3J5cHQocHJpdktleSwgZW5jcnlwdGVkKSB7XG4gICAgLy8gUmVhZCBpdiwgZXBoZW1QdWJLZXksIG1hYywgY2lwaGVydGV4dCBmcm9tIGVuY3J5cHRlZCBtZXNzYWdlXG4gICAgdmFyIGVwaGVtUHViS2V5RW5jb2RlZCA9IGVuY3J5cHRlZC5zbGljZSgwLCA2NSk7XG4gICAgdmFyIHN5bW1ldHJpY0VuY3J5cHRlZCA9IGVuY3J5cHRlZC5zbGljZSg2NSk7XG4gICAgLy8gTk9URTogZWxsaXB0aWMgaXMgZGlzYWJsZWQgZWxzZXdoZXJlIGluIHRoaXMgbGlicmFyeSB0byBwcmV2ZW50XG4gICAgLy8gYWNjaWRlbnRhbCBzaWduaW5nIG9mIHRydW5jYXRlZCBtZXNzYWdlcy5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6aW1wb3J0LWJsYWNrbGlzdFxuICAgIHZhciBFQyA9IHJlcXVpcmUoJ2VsbGlwdGljJykuZWM7XG4gICAgdmFyIGVjID0gbmV3IEVDKCdzZWNwMjU2azEnKTtcbiAgICB2YXIgZXBoZW1QdWJLZXkgPSBlYy5rZXlGcm9tUHVibGljKGVwaGVtUHViS2V5RW5jb2RlZCkuZ2V0UHVibGljKCk7XG4gICAgdmFyIHB4ID0gZWMua2V5RnJvbVByaXZhdGUocHJpdktleSkuZGVyaXZlKGVwaGVtUHViS2V5KTtcbiAgICB2YXIgaGFzaCA9IENvbmNhdEtERihweC50b0J1ZmZlcigpLCAzMik7XG4gICAgLy8ga20sIGtlXG4gICAgdmFyIGVuY3J5cHRpb25LZXkgPSBoYXNoLnNsaWNlKDAsIDE2KTtcbiAgICB2YXIgbWFjS2V5ID0gKDAsIGNyeXB0b18xLmNyZWF0ZUhhc2gpKCdzaGEyNTYnKS51cGRhdGUoaGFzaC5zbGljZSgxNikpLmRpZ2VzdCgpO1xuICAgIHJldHVybiBBRVMxMjhEZWNyeXB0QW5kSE1BQyhlbmNyeXB0aW9uS2V5LCBtYWNLZXksIHN5bW1ldHJpY0VuY3J5cHRlZCk7XG59XG5leHBvcnRzLkRlY3J5cHQgPSBEZWNyeXB0O1xuZXhwb3J0cy5FQ0lFUyA9IHtcbiAgICBFbmNyeXB0OiBFbmNyeXB0LFxuICAgIERlY3J5cHQ6IERlY3J5cHQsXG4gICAgQUVTMTI4RW5jcnlwdEFuZEhNQUM6IEFFUzEyOEVuY3J5cHRBbmRITUFDLFxuICAgIEFFUzEyOERlY3J5cHRBbmRITUFDOiBBRVMxMjhEZWNyeXB0QW5kSE1BQyxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lY2llcy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@celo/utils/lib/ecies.js\n");

/***/ })

};
;