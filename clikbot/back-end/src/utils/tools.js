"use strict";
exports.__esModule = true;
/**
 *  Use this to generate a more likely valid user agent. It makes sure it has the Whatsapp part and replaces any windows or linux os info with mac.
 * @param useragent Your custom user agent
 * @param v The whatsapp version from the debug info. This is optional. default is 0.4.315
 */
exports.smartUserAgent = function (useragent, v) {
    if (v === void 0) { v = '0.4.315'; }
    useragent = useragent.replace(useragent.match(/\(([^()]*)\)/g).find(function (x) { return x.toLowerCase().includes('linux') || x.toLowerCase().includes('windows'); }), '(Macintosh; Intel Mac OS X 10_15_2)');
    if (!useragent.includes('WhatsApp'))
        return "WhatsApp/" + v + " " + useragent;
    return useragent.replace(useragent.match(/WhatsApp\/([.\d])*/g)[0].match(/[.\d]*/g).find(function (x) { return x; }), v);
};
exports.gerarId = function () {
    var tam = 6;
    var id = Math.ceil(Math.random() * Math.pow(10, tam)); //Cria um número aleatório do tamanho definido em tam.
    return id;
};
