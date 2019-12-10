module.exports = function (bot) {
    function ev(msg, cb) {
        bot.translate(msg).then((result) => {
            var langs = {
                'auto': 'Automatic',
                'af': 'Afrikaans',
                'sq': 'Albanian',
                'am': 'Amharic',
                'ar': 'Arabic',
                'hy': 'Armenian',
                'az': 'Azerbaijani',
                'eu': 'Basque',
                'be': 'Belarusian',
                'bn': 'Bengali',
                'bs': 'Bosnian',
                'bg': 'Bulgarian',
                'ca': 'Catalan',
                'ceb': 'Cebuano',
                'ny': 'Chichewa',
                'zh-cn': 'Chinese Simplified',
                'zh-tw': 'Chinese Traditional',
                'co': 'Corsican',
                'hr': 'Croatian',
                'cs': 'Czech',
                'da': 'Danish',
                'nl': 'Dutch',
                'en': 'English',
                'eo': 'Esperanto',
                'et': 'Estonian',
                'tl': 'Filipino',
                'fi': 'Finnish',
                'fr': 'French',
                'fy': 'Frisian',
                'gl': 'Galician',
                'ka': 'Georgian',
                'de': 'German',
                'el': 'Greek',
                'gu': 'Gujarati',
                'ht': 'Haitian Creole',
                'ha': 'Hausa',
                'haw': 'Hawaiian',
                'iw': 'Hebrew',
                'hi': 'Hindi',
                'hmn': 'Hmong',
                'hu': 'Hungarian',
                'is': 'Icelandic',
                'ig': 'Igbo',
                'id': 'Indonesian',
                'ga': 'Irish',
                'it': 'Italian',
                'ja': 'Japanese',
                'jw': 'Javanese',
                'kn': 'Kannada',
                'kk': 'Kazakh',
                'km': 'Khmer',
                'ko': 'Korean',
                'ku': 'Kurdish (Kurmanji)',
                'ky': 'Kyrgyz',
                'lo': 'Lao',
                'la': 'Latin',
                'lv': 'Latvian',
                'lt': 'Lithuanian',
                'lb': 'Luxembourgish',
                'mk': 'Macedonian',
                'mg': 'Malagasy',
                'ms': 'Malay',
                'ml': 'Malayalam',
                'mt': 'Maltese',
                'mi': 'Maori',
                'mr': 'Marathi',
                'mn': 'Mongolian',
                'my': 'Myanmar (Burmese)',
                'ne': 'Nepali',
                'no': 'Norwegian',
                'ps': 'Pashto',
                'fa': 'Persian',
                'pl': 'Polish',
                'pt': 'Portuguese',
                'ma': 'Punjabi',
                'ro': 'Romanian',
                'ru': 'Russian',
                'sm': 'Samoan',
                'gd': 'Scots Gaelic',
                'sr': 'Serbian',
                'st': 'Sesotho',
                'sn': 'Shona',
                'sd': 'Sindhi',
                'si': 'Sinhala',
                'sk': 'Slovak',
                'sl': 'Slovenian',
                'so': 'Somali',
                'es': 'Spanish',
                'su': 'Sundanese',
                'sw': 'Swahili',
                'sv': 'Swedish',
                'tg': 'Tajik',
                'ta': 'Tamil',
                'te': 'Telugu',
                'th': 'Thai',
                'tr': 'Turkish',
                'uk': 'Ukrainian',
                'ur': 'Urdu',
                'uz': 'Uzbek',
                'vi': 'Vietnamese',
                'cy': 'Welsh',
                'xh': 'Xhosa',
                'yi': 'Yiddish',
                'yo': 'Yoruba',
                'zu': 'Zulu'
            };
            msg.directreply(
                result.text + '\n' +
                '·from ' + langs[result.from.language.iso.toLowerCase()] +
                (result.from.text.didYouMean || result.from.text.autoCorrected ? '\n·with a correction: ' + new DOMParser().parseFromString('<p1>'+result.from.text.value+'</p1>','text/xml').firstChild.innerHTML.replace(/<[^\/>]*>/g, '[').replace(/<[\/][^>]*>/g, ']') : '')
            );
        });
    }

    bot.addCommand({
        name: 'translate',
        fun: ev,

        permissions: {
            del: 'NONE',
            use: 'ALL'
        },
        description: 'Languages Translator.',
        async: true,
        multilines: true
    });

    //libs
    function translate() {
        return (function (e) {
            var t = {};

            function r(n) {
                if (t[n]) return t[n].exports;
                var o = t[n] = {i: n, l: !1, exports: {}};
                return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
            }

            r.m = e, r.c = t, r.d = function (e, t, n) {
                r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
            }, r.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
            }, r.t = function (e, t) {
                if (1 & t && (e = r(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) {
                    return e[t]
                }.bind(null, o));
                return n
            }, r.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return r.d(t, "a", t), t
            }, r.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, r.p = "", r(r.s = "./src/index.js");
            return r("./src/index.js");
        })(
            {
            "./node_modules/@sindresorhus/is/dist/index.js": function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                const n = "undefined" == typeof URL ? r("./node_modules/url/url.js").URL : URL,
                    o = Object.prototype.toString, s = e => t => typeof t === e,
                    i = e => !c.nullOrUndefined(e) && !c.nullOrUndefined(e.constructor) && c.function_(e.constructor.isBuffer) && e.constructor.isBuffer(e),
                    a = e => {
                        const t = o.call(e).slice(8, -1);
                        return t || null
                    }, u = e => t => a(t) === e;

                function c(e) {
                    switch (e) {
                        case null:
                            return "null";
                        case!0:
                        case!1:
                            return "boolean"
                    }
                    switch (typeof e) {
                        case"undefined":
                            return "undefined";
                        case"string":
                            return "string";
                        case"number":
                            return "number";
                        case"symbol":
                            return "symbol"
                    }
                    if (c.function_(e)) return "Function";
                    if (c.observable(e)) return "Observable";
                    if (Array.isArray(e)) return "Array";
                    if (i(e)) return "Buffer";
                    const t = a(e);
                    if (t) return t;
                    if (e instanceof String || e instanceof Boolean || e instanceof Number) throw new TypeError("Please don't use object wrappers for primitive types");
                    return "Object"
                }

                !function (e) {
                    const t = e => "object" == typeof e;
                    e.undefined = s("undefined"), e.string = s("string"), e.number = s("number"), e.function_ = s("function"), e.null_ = e => null === e, e.class_ = t => e.function_(t) && t.toString().startsWith("class "), e.boolean = e => !0 === e || !1 === e, e.symbol = s("symbol"), e.numericString = t => e.string(t) && t.length > 0 && !Number.isNaN(Number(t)), e.array = Array.isArray, e.buffer = i, e.nullOrUndefined = t => e.null_(t) || e.undefined(t), e.object = r => !e.nullOrUndefined(r) && (e.function_(r) || t(r)), e.iterable = t => !e.nullOrUndefined(t) && e.function_(t[Symbol.iterator]), e.asyncIterable = t => !e.nullOrUndefined(t) && e.function_(t[Symbol.asyncIterator]), e.generator = t => e.iterable(t) && e.function_(t.next) && e.function_(t.throw), e.nativePromise = e => u("Promise")(e);
                    e.promise = r => e.nativePromise(r) || (r => !e.null_(r) && t(r) && e.function_(r.then) && e.function_(r.catch))(r), e.generatorFunction = u("GeneratorFunction"), e.asyncFunction = u("AsyncFunction"), e.boundFunction = t => e.function_(t) && !t.hasOwnProperty("prototype"), e.regExp = u("RegExp"), e.date = u("Date"), e.error = u("Error"), e.map = e => u("Map")(e), e.set = e => u("Set")(e), e.weakMap = e => u("WeakMap")(e), e.weakSet = e => u("WeakSet")(e), e.int8Array = u("Int8Array"), e.uint8Array = u("Uint8Array"), e.uint8ClampedArray = u("Uint8ClampedArray"), e.int16Array = u("Int16Array"), e.uint16Array = u("Uint16Array"), e.int32Array = u("Int32Array"), e.uint32Array = u("Uint32Array"), e.float32Array = u("Float32Array"), e.float64Array = u("Float64Array"), e.arrayBuffer = u("ArrayBuffer"), e.sharedArrayBuffer = u("SharedArrayBuffer"), e.dataView = u("DataView"), e.directInstanceOf = (e, t) => Object.getPrototypeOf(e) === t.prototype, e.urlInstance = e => u("URL")(e), e.urlString = t => {
                        if (!e.string(t)) return !1;
                        try {
                            return new n(t), !0
                        } catch (e) {
                            return !1
                        }
                    }, e.truthy = e => Boolean(e), e.falsy = e => !e, e.nan = e => Number.isNaN(e);
                    const r = new Set(["undefined", "string", "number", "boolean", "symbol"]);
                    e.primitive = t => e.null_(t) || r.has(typeof t), e.integer = e => Number.isInteger(e), e.safeInteger = e => Number.isSafeInteger(e), e.plainObject = e => {
                        let t;
                        return "Object" === a(e) && (t = Object.getPrototypeOf(e), null === t || t === Object.getPrototypeOf({}))
                    };
                    const o = new Set(["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"]);
                    e.typedArray = e => {
                        const t = a(e);
                        return null !== t && o.has(t)
                    };
                    e.arrayLike = t => !e.nullOrUndefined(t) && !e.function_(t) && (t => e.safeInteger(t) && t > -1)(t.length), e.inRange = (t, r) => {
                        if (e.number(r)) return t >= Math.min(0, r) && t <= Math.max(r, 0);
                        if (e.array(r) && 2 === r.length) return t >= Math.min(...r) && t <= Math.max(...r);
                        throw new TypeError(`Invalid range: ${JSON.stringify(r)}`)
                    };
                    const c = ["innerHTML", "ownerDocument", "style", "attributes", "nodeValue"];
                    e.domElement = t => e.object(t) && 1 === t.nodeType && e.string(t.nodeName) && !e.plainObject(t) && c.every(e => e in t), e.observable = e => !!e && (!(!e[Symbol.observable] || e !== e[Symbol.observable]()) || !(!e["@@observable"] || e !== e["@@observable"]())), e.nodeStream = r => !e.nullOrUndefined(r) && t(r) && e.function_(r.pipe) && !e.observable(r), e.infinite = e => e === 1 / 0 || e === -1 / 0;
                    const l = t => r => e.integer(r) && Math.abs(r % 2) === t;
                    e.even = l(0), e.odd = l(1);
                    e.emptyArray = t => e.array(t) && 0 === t.length, e.nonEmptyArray = t => e.array(t) && t.length > 0, e.emptyString = t => e.string(t) && 0 === t.length, e.nonEmptyString = t => e.string(t) && t.length > 0, e.emptyStringOrWhitespace = t => e.emptyString(t) || (t => e.string(t) && !1 === /\S/.test(t))(t), e.emptyObject = t => e.object(t) && !e.map(t) && !e.set(t) && 0 === Object.keys(t).length, e.nonEmptyObject = t => e.object(t) && !e.map(t) && !e.set(t) && Object.keys(t).length > 0, e.emptySet = t => e.set(t) && 0 === t.size, e.nonEmptySet = t => e.set(t) && t.size > 0, e.emptyMap = t => e.map(t) && 0 === t.size, e.nonEmptyMap = t => e.map(t) && t.size > 0;
                    const d = (t, r, n) => {
                        if (!1 === e.function_(r)) throw new TypeError(`Invalid predicate: ${JSON.stringify(r)}`);
                        if (0 === n.length) throw new TypeError("Invalid number of values");
                        return t.call(n, r)
                    };
                    e.any = (e, ...t) => d(Array.prototype.some, e, t), e.all = (e, ...t) => d(Array.prototype.every, e, t)
                }(c || (c = {})), Object.defineProperties(c, {
                    class: {value: c.class_},
                    function: {value: c.function_},
                    null: {value: c.null_}
                }), t.default = c, e.exports = c, e.exports.default = c
            }, "./node_modules/@szmarczak/http-timer/source/index.js": function (e, t, r) {
                "use strict";
                const n = r("./node_modules/defer-to-connect/dist/index.js");
                e.exports = e => {
                    const t = {
                        start: Date.now(),
                        socket: null,
                        lookup: null,
                        connect: null,
                        upload: null,
                        response: null,
                        end: null,
                        error: null,
                        phases: {
                            wait: null,
                            dns: null,
                            tcp: null,
                            request: null,
                            firstByte: null,
                            download: null,
                            total: null
                        }
                    }, r = e => {
                        const r = e.emit.bind(e);
                        e.emit = (n, ...o) => ("error" === n && (t.error = Date.now(), t.phases.total = t.error - t.start, e.emit = r), r(n, ...o))
                    };
                    let o = !1;
                    const s = () => {
                        t.upload = Date.now(), t.phases.request = t.upload - t.connect
                    };
                    return r(e), e.once("socket", e => {
                        t.socket = Date.now(), t.phases.wait = t.socket - t.start;
                        const r = () => {
                            t.lookup = Date.now(), t.phases.dns = t.lookup - t.socket
                        };
                        e.once("lookup", r), n(e, () => {
                            t.connect = Date.now(), null === t.lookup && (e.removeListener("lookup", r), t.lookup = t.connect, t.phases.dns = t.lookup - t.socket), t.phases.tcp = t.connect - t.lookup, o && !t.upload && s()
                        })
                    }), e.once("finish", () => {
                        o = !0, t.connect && s()
                    }), e.once("response", e => {
                        t.response = Date.now(), t.phases.firstByte = t.response - t.upload, r(e), e.once("end", () => {
                            t.end = Date.now(), t.phases.download = t.end - t.response, t.phases.total = t.end - t.start
                        })
                    }), t
                }
            }, "./node_modules/base64-js/index.js": function (e, t, r) {
                "use strict";
                t.byteLength = function (e) {
                    var t = c(e), r = t[0], n = t[1];
                    return 3 * (r + n) / 4 - n
                }, t.toByteArray = function (e) {
                    var t, r, n = c(e), i = n[0], a = n[1], u = new s(function (e, t, r) {
                        return 3 * (t + r) / 4 - r
                    }(0, i, a)), l = 0, d = a > 0 ? i - 4 : i;
                    for (r = 0; r < d; r += 4) t = o[e.charCodeAt(r)] << 18 | o[e.charCodeAt(r + 1)] << 12 | o[e.charCodeAt(r + 2)] << 6 | o[e.charCodeAt(r + 3)], u[l++] = t >> 16 & 255, u[l++] = t >> 8 & 255, u[l++] = 255 & t;
                    2 === a && (t = o[e.charCodeAt(r)] << 2 | o[e.charCodeAt(r + 1)] >> 4, u[l++] = 255 & t);
                    1 === a && (t = o[e.charCodeAt(r)] << 10 | o[e.charCodeAt(r + 1)] << 4 | o[e.charCodeAt(r + 2)] >> 2, u[l++] = t >> 8 & 255, u[l++] = 255 & t);
                    return u
                }, t.fromByteArray = function (e) {
                    for (var t, r = e.length, o = r % 3, s = [], i = 0, a = r - o; i < a; i += 16383) s.push(l(e, i, i + 16383 > a ? a : i + 16383));
                    1 === o ? (t = e[r - 1], s.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === o && (t = (e[r - 2] << 8) + e[r - 1], s.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
                    return s.join("")
                };
                for (var n = [], o = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = i.length; a < u; ++a) n[a] = i[a], o[i.charCodeAt(a)] = a;

                function c(e) {
                    var t = e.length;
                    if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                    var r = e.indexOf("=");
                    return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4]
                }

                function l(e, t, r) {
                    for (var o, s, i = [], a = t; a < r; a += 3) o = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), i.push(n[(s = o) >> 18 & 63] + n[s >> 12 & 63] + n[s >> 6 & 63] + n[63 & s]);
                    return i.join("")
                }

                o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
            }, "./node_modules/buffer/index.js": function (e, t, r) {
                "use strict";
                (function (e) {
                    var n = r("./node_modules/base64-js/index.js"), o = r("./node_modules/ieee754/index.js"),
                        s = r("./node_modules/isarray/index.js");

                    function i() {
                        return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                    }

                    function a(e, t) {
                        if (i() < t) throw new RangeError("Invalid typed array length");
                        return u.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = u.prototype : (null === e && (e = new u(t)), e.length = t), e
                    }

                    function u(e, t, r) {
                        if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(e, t, r);
                        if ("number" == typeof e) {
                            if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                            return d(this, e)
                        }
                        return c(this, e, t, r)
                    }

                    function c(e, t, r, n) {
                        if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, r, n) {
                            if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
                            if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                            t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
                            u.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = u.prototype : e = h(e, t);
                            return e
                        }(e, t, r, n) : "string" == typeof t ? function (e, t, r) {
                            "string" == typeof r && "" !== r || (r = "utf8");
                            if (!u.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                            var n = 0 | p(t, r), o = (e = a(e, n)).write(t, r);
                            o !== n && (e = e.slice(0, o));
                            return e
                        }(e, t, r) : function (e, t) {
                            if (u.isBuffer(t)) {
                                var r = 0 | f(t.length);
                                return 0 === (e = a(e, r)).length ? e : (t.copy(e, 0, 0, r), e)
                            }
                            if (t) {
                                if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (n = t.length) != n ? a(e, 0) : h(e, t);
                                if ("Buffer" === t.type && s(t.data)) return h(e, t.data)
                            }
                            var n;
                            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                        }(e, t)
                    }

                    function l(e) {
                        if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                        if (e < 0) throw new RangeError('"size" argument must not be negative')
                    }

                    function d(e, t) {
                        if (l(t), e = a(e, t < 0 ? 0 : 0 | f(t)), !u.TYPED_ARRAY_SUPPORT) for (var r = 0; r < t; ++r) e[r] = 0;
                        return e
                    }

                    function h(e, t) {
                        var r = t.length < 0 ? 0 : 0 | f(t.length);
                        e = a(e, r);
                        for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
                        return e
                    }

                    function f(e) {
                        if (e >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
                        return 0 | e
                    }

                    function p(e, t) {
                        if (u.isBuffer(e)) return e.length;
                        if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                        "string" != typeof e && (e = "" + e);
                        var r = e.length;
                        if (0 === r) return 0;
                        for (var n = !1; ;) switch (t) {
                            case"ascii":
                            case"latin1":
                            case"binary":
                                return r;
                            case"utf8":
                            case"utf-8":
                            case void 0:
                                return D(e).length;
                            case"ucs2":
                            case"ucs-2":
                            case"utf16le":
                            case"utf-16le":
                                return 2 * r;
                            case"hex":
                                return r >>> 1;
                            case"base64":
                                return z(e).length;
                            default:
                                if (n) return D(e).length;
                                t = ("" + t).toLowerCase(), n = !0
                        }
                    }

                    function m(e, t, r) {
                        var n = !1;
                        if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                        if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                        if ((r >>>= 0) <= (t >>>= 0)) return "";
                        for (e || (e = "utf8"); ;) switch (e) {
                            case"hex":
                                return R(this, t, r);
                            case"utf8":
                            case"utf-8":
                                return T(this, t, r);
                            case"ascii":
                                return k(this, t, r);
                            case"latin1":
                            case"binary":
                                return A(this, t, r);
                            case"base64":
                                return S(this, t, r);
                            case"ucs2":
                            case"ucs-2":
                            case"utf16le":
                            case"utf-16le":
                                return C(this, t, r);
                            default:
                                if (n) throw new TypeError("Unknown encoding: " + e);
                                e = (e + "").toLowerCase(), n = !0
                        }
                    }

                    function g(e, t, r) {
                        var n = e[t];
                        e[t] = e[r], e[r] = n
                    }

                    function y(e, t, r, n, o) {
                        if (0 === e.length) return -1;
                        if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = o ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                            if (o) return -1;
                            r = e.length - 1
                        } else if (r < 0) {
                            if (!o) return -1;
                            r = 0
                        }
                        if ("string" == typeof t && (t = u.from(t, n)), u.isBuffer(t)) return 0 === t.length ? -1 : b(e, t, r, n, o);
                        if ("number" == typeof t) return t &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : b(e, [t], r, n, o);
                        throw new TypeError("val must be string, number or Buffer")
                    }

                    function b(e, t, r, n, o) {
                        var s, i = 1, a = e.length, u = t.length;
                        if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                            if (e.length < 2 || t.length < 2) return -1;
                            i = 2, a /= 2, u /= 2, r /= 2
                        }

                        function c(e, t) {
                            return 1 === i ? e[t] : e.readUInt16BE(t * i)
                        }

                        if (o) {
                            var l = -1;
                            for (s = r; s < a; s++) if (c(e, s) === c(t, -1 === l ? 0 : s - l)) {
                                if (-1 === l && (l = s), s - l + 1 === u) return l * i
                            } else -1 !== l && (s -= s - l), l = -1
                        } else for (r + u > a && (r = a - u), s = r; s >= 0; s--) {
                            for (var d = !0, h = 0; h < u; h++) if (c(e, s + h) !== c(t, h)) {
                                d = !1;
                                break
                            }
                            if (d) return s
                        }
                        return -1
                    }

                    function _(e, t, r, n) {
                        r = Number(r) || 0;
                        var o = e.length - r;
                        n ? (n = Number(n)) > o && (n = o) : n = o;
                        var s = t.length;
                        if (s % 2 != 0) throw new TypeError("Invalid hex string");
                        n > s / 2 && (n = s / 2);
                        for (var i = 0; i < n; ++i) {
                            var a = parseInt(t.substr(2 * i, 2), 16);
                            if (isNaN(a)) return i;
                            e[r + i] = a
                        }
                        return i
                    }

                    function w(e, t, r, n) {
                        return F(D(t, e.length - r), e, r, n)
                    }

                    function v(e, t, r, n) {
                        return F(function (e) {
                            for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                            return t
                        }(t), e, r, n)
                    }

                    function j(e, t, r, n) {
                        return v(e, t, r, n)
                    }

                    function x(e, t, r, n) {
                        return F(z(t), e, r, n)
                    }

                    function E(e, t, r, n) {
                        return F(function (e, t) {
                            for (var r, n, o, s = [], i = 0; i < e.length && !((t -= 2) < 0); ++i) r = e.charCodeAt(i), n = r >> 8, o = r % 256, s.push(o), s.push(n);
                            return s
                        }(t, e.length - r), e, r, n)
                    }

                    function S(e, t, r) {
                        return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r))
                    }

                    function T(e, t, r) {
                        r = Math.min(e.length, r);
                        for (var n = [], o = t; o < r;) {
                            var s, i, a, u, c = e[o], l = null, d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                            if (o + d <= r) switch (d) {
                                case 1:
                                    c < 128 && (l = c);
                                    break;
                                case 2:
                                    128 == (192 & (s = e[o + 1])) && (u = (31 & c) << 6 | 63 & s) > 127 && (l = u);
                                    break;
                                case 3:
                                    s = e[o + 1], i = e[o + 2], 128 == (192 & s) && 128 == (192 & i) && (u = (15 & c) << 12 | (63 & s) << 6 | 63 & i) > 2047 && (u < 55296 || u > 57343) && (l = u);
                                    break;
                                case 4:
                                    s = e[o + 1], i = e[o + 2], a = e[o + 3], 128 == (192 & s) && 128 == (192 & i) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & s) << 12 | (63 & i) << 6 | 63 & a) > 65535 && u < 1114112 && (l = u)
                            }
                            null === l ? (l = 65533, d = 1) : l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), n.push(l), o += d
                        }
                        return function (e) {
                            var t = e.length;
                            if (t <= O) return String.fromCharCode.apply(String, e);
                            var r = "", n = 0;
                            for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += O));
                            return r
                        }(n)
                    }

                    t.Buffer = u, t.SlowBuffer = function (e) {
                        +e != e && (e = 0);
                        return u.alloc(+e)
                    }, t.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () {
                        try {
                            var e = new Uint8Array(1);
                            return e.__proto__ = {
                                __proto__: Uint8Array.prototype, foo: function () {
                                    return 42
                                }
                            }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                        } catch (e) {
                            return !1
                        }
                    }(), t.kMaxLength = i(), u.poolSize = 8192, u._augment = function (e) {
                        return e.__proto__ = u.prototype, e
                    }, u.from = function (e, t, r) {
                        return c(null, e, t, r)
                    }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
                        value: null,
                        configurable: !0
                    })), u.alloc = function (e, t, r) {
                        return function (e, t, r, n) {
                            return l(t), t <= 0 ? a(e, t) : void 0 !== r ? "string" == typeof n ? a(e, t).fill(r, n) : a(e, t).fill(r) : a(e, t)
                        }(null, e, t, r)
                    }, u.allocUnsafe = function (e) {
                        return d(null, e)
                    }, u.allocUnsafeSlow = function (e) {
                        return d(null, e)
                    }, u.isBuffer = function (e) {
                        return !(null == e || !e._isBuffer)
                    }, u.compare = function (e, t) {
                        if (!u.isBuffer(e) || !u.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                        if (e === t) return 0;
                        for (var r = e.length, n = t.length, o = 0, s = Math.min(r, n); o < s; ++o) if (e[o] !== t[o]) {
                            r = e[o], n = t[o];
                            break
                        }
                        return r < n ? -1 : n < r ? 1 : 0
                    }, u.isEncoding = function (e) {
                        switch (String(e).toLowerCase()) {
                            case"hex":
                            case"utf8":
                            case"utf-8":
                            case"ascii":
                            case"latin1":
                            case"binary":
                            case"base64":
                            case"ucs2":
                            case"ucs-2":
                            case"utf16le":
                            case"utf-16le":
                                return !0;
                            default:
                                return !1
                        }
                    }, u.concat = function (e, t) {
                        if (!s(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === e.length) return u.alloc(0);
                        var r;
                        if (void 0 === t) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
                        var n = u.allocUnsafe(t), o = 0;
                        for (r = 0; r < e.length; ++r) {
                            var i = e[r];
                            if (!u.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
                            i.copy(n, o), o += i.length
                        }
                        return n
                    }, u.byteLength = p, u.prototype._isBuffer = !0, u.prototype.swap16 = function () {
                        var e = this.length;
                        if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                        for (var t = 0; t < e; t += 2) g(this, t, t + 1);
                        return this
                    }, u.prototype.swap32 = function () {
                        var e = this.length;
                        if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                        for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
                        return this
                    }, u.prototype.swap64 = function () {
                        var e = this.length;
                        if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                        for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
                        return this
                    }, u.prototype.toString = function () {
                        var e = 0 | this.length;
                        return 0 === e ? "" : 0 === arguments.length ? T(this, 0, e) : m.apply(this, arguments)
                    }, u.prototype.equals = function (e) {
                        if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                        return this === e || 0 === u.compare(this, e)
                    }, u.prototype.inspect = function () {
                        var e = "", r = t.INSPECT_MAX_BYTES;
                        return this.length > 0 && (e = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (e += " ... ")), "<Buffer " + e + ">"
                    }, u.prototype.compare = function (e, t, r, n, o) {
                        if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                        if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), t < 0 || r > e.length || n < 0 || o > this.length) throw new RangeError("out of range index");
                        if (n >= o && t >= r) return 0;
                        if (n >= o) return -1;
                        if (t >= r) return 1;
                        if (this === e) return 0;
                        for (var s = (o >>>= 0) - (n >>>= 0), i = (r >>>= 0) - (t >>>= 0), a = Math.min(s, i), c = this.slice(n, o), l = e.slice(t, r), d = 0; d < a; ++d) if (c[d] !== l[d]) {
                            s = c[d], i = l[d];
                            break
                        }
                        return s < i ? -1 : i < s ? 1 : 0
                    }, u.prototype.includes = function (e, t, r) {
                        return -1 !== this.indexOf(e, t, r)
                    }, u.prototype.indexOf = function (e, t, r) {
                        return y(this, e, t, r, !0)
                    }, u.prototype.lastIndexOf = function (e, t, r) {
                        return y(this, e, t, r, !1)
                    }, u.prototype.write = function (e, t, r, n) {
                        if (void 0 === t) n = "utf8", r = this.length, t = 0; else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0; else {
                            if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            t |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                        }
                        var o = this.length - t;
                        if ((void 0 === r || r > o) && (r = o), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                        n || (n = "utf8");
                        for (var s = !1; ;) switch (n) {
                            case"hex":
                                return _(this, e, t, r);
                            case"utf8":
                            case"utf-8":
                                return w(this, e, t, r);
                            case"ascii":
                                return v(this, e, t, r);
                            case"latin1":
                            case"binary":
                                return j(this, e, t, r);
                            case"base64":
                                return x(this, e, t, r);
                            case"ucs2":
                            case"ucs-2":
                            case"utf16le":
                            case"utf-16le":
                                return E(this, e, t, r);
                            default:
                                if (s) throw new TypeError("Unknown encoding: " + n);
                                n = ("" + n).toLowerCase(), s = !0
                        }
                    }, u.prototype.toJSON = function () {
                        return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
                    };
                    var O = 4096;

                    function k(e, t, r) {
                        var n = "";
                        r = Math.min(e.length, r);
                        for (var o = t; o < r; ++o) n += String.fromCharCode(127 & e[o]);
                        return n
                    }

                    function A(e, t, r) {
                        var n = "";
                        r = Math.min(e.length, r);
                        for (var o = t; o < r; ++o) n += String.fromCharCode(e[o]);
                        return n
                    }

                    function R(e, t, r) {
                        var n = e.length;
                        (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                        for (var o = "", s = t; s < r; ++s) o += H(e[s]);
                        return o
                    }

                    function C(e, t, r) {
                        for (var n = e.slice(t, r), o = "", s = 0; s < n.length; s += 2) o += String.fromCharCode(n[s] + 256 * n[s + 1]);
                        return o
                    }

                    function P(e, t, r) {
                        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                        if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
                    }

                    function M(e, t, r, n, o, s) {
                        if (!u.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                        if (t > o || t < s) throw new RangeError('"value" argument is out of bounds');
                        if (r + n > e.length) throw new RangeError("Index out of range")
                    }

                    function L(e, t, r, n) {
                        t < 0 && (t = 65535 + t + 1);
                        for (var o = 0, s = Math.min(e.length - r, 2); o < s; ++o) e[r + o] = (t & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o)
                    }

                    function U(e, t, r, n) {
                        t < 0 && (t = 4294967295 + t + 1);
                        for (var o = 0, s = Math.min(e.length - r, 4); o < s; ++o) e[r + o] = t >>> 8 * (n ? o : 3 - o) & 255
                    }

                    function I(e, t, r, n, o, s) {
                        if (r + n > e.length) throw new RangeError("Index out of range");
                        if (r < 0) throw new RangeError("Index out of range")
                    }

                    function q(e, t, r, n, s) {
                        return s || I(e, 0, r, 4), o.write(e, t, r, n, 23, 4), r + 4
                    }

                    function B(e, t, r, n, s) {
                        return s || I(e, 0, r, 8), o.write(e, t, r, n, 52, 8), r + 8
                    }

                    u.prototype.slice = function (e, t) {
                        var r, n = this.length;
                        if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), u.TYPED_ARRAY_SUPPORT) (r = this.subarray(e, t)).__proto__ = u.prototype; else {
                            var o = t - e;
                            r = new u(o, void 0);
                            for (var s = 0; s < o; ++s) r[s] = this[s + e]
                        }
                        return r
                    }, u.prototype.readUIntLE = function (e, t, r) {
                        e |= 0, t |= 0, r || P(e, t, this.length);
                        for (var n = this[e], o = 1, s = 0; ++s < t && (o *= 256);) n += this[e + s] * o;
                        return n
                    }, u.prototype.readUIntBE = function (e, t, r) {
                        e |= 0, t |= 0, r || P(e, t, this.length);
                        for (var n = this[e + --t], o = 1; t > 0 && (o *= 256);) n += this[e + --t] * o;
                        return n
                    }, u.prototype.readUInt8 = function (e, t) {
                        return t || P(e, 1, this.length), this[e]
                    }, u.prototype.readUInt16LE = function (e, t) {
                        return t || P(e, 2, this.length), this[e] | this[e + 1] << 8
                    }, u.prototype.readUInt16BE = function (e, t) {
                        return t || P(e, 2, this.length), this[e] << 8 | this[e + 1]
                    }, u.prototype.readUInt32LE = function (e, t) {
                        return t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                    }, u.prototype.readUInt32BE = function (e, t) {
                        return t || P(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                    }, u.prototype.readIntLE = function (e, t, r) {
                        e |= 0, t |= 0, r || P(e, t, this.length);
                        for (var n = this[e], o = 1, s = 0; ++s < t && (o *= 256);) n += this[e + s] * o;
                        return n >= (o *= 128) && (n -= Math.pow(2, 8 * t)), n
                    }, u.prototype.readIntBE = function (e, t, r) {
                        e |= 0, t |= 0, r || P(e, t, this.length);
                        for (var n = t, o = 1, s = this[e + --n]; n > 0 && (o *= 256);) s += this[e + --n] * o;
                        return s >= (o *= 128) && (s -= Math.pow(2, 8 * t)), s
                    }, u.prototype.readInt8 = function (e, t) {
                        return t || P(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                    }, u.prototype.readInt16LE = function (e, t) {
                        t || P(e, 2, this.length);
                        var r = this[e] | this[e + 1] << 8;
                        return 32768 & r ? 4294901760 | r : r
                    }, u.prototype.readInt16BE = function (e, t) {
                        t || P(e, 2, this.length);
                        var r = this[e + 1] | this[e] << 8;
                        return 32768 & r ? 4294901760 | r : r
                    }, u.prototype.readInt32LE = function (e, t) {
                        return t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                    }, u.prototype.readInt32BE = function (e, t) {
                        return t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                    }, u.prototype.readFloatLE = function (e, t) {
                        return t || P(e, 4, this.length), o.read(this, e, !0, 23, 4)
                    }, u.prototype.readFloatBE = function (e, t) {
                        return t || P(e, 4, this.length), o.read(this, e, !1, 23, 4)
                    }, u.prototype.readDoubleLE = function (e, t) {
                        return t || P(e, 8, this.length), o.read(this, e, !0, 52, 8)
                    }, u.prototype.readDoubleBE = function (e, t) {
                        return t || P(e, 8, this.length), o.read(this, e, !1, 52, 8)
                    }, u.prototype.writeUIntLE = function (e, t, r, n) {
                        (e = +e, t |= 0, r |= 0, n) || M(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                        var o = 1, s = 0;
                        for (this[t] = 255 & e; ++s < r && (o *= 256);) this[t + s] = e / o & 255;
                        return t + r
                    }, u.prototype.writeUIntBE = function (e, t, r, n) {
                        (e = +e, t |= 0, r |= 0, n) || M(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                        var o = r - 1, s = 1;
                        for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) this[t + o] = e / s & 255;
                        return t + r
                    }, u.prototype.writeUInt8 = function (e, t, r) {
                        return e = +e, t |= 0, r || M(this, e, t, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
                    }, u.prototype.writeUInt16LE = function (e, t, r) {
                        return e = +e, t |= 0, r || M(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : L(this, e, t, !0), t + 2
                    }, u.prototype.writeUInt16BE = function (e, t, r) {
                        return e = +e, t |= 0, r || M(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : L(this, e, t, !1), t + 2
                    }, u.prototype.writeUInt32LE = function (e, t, r) {
                        return e = +e, t |= 0, r || M(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : U(this, e, t, !0), t + 4
                    }, u.prototype.writeUInt32BE = function (e, t, r) {
                        return e = +e, t |= 0, r || M(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : U(this, e, t, !1), t + 4
                    }, u.prototype.writeIntLE = function (e, t, r, n) {
                        if (e = +e, t |= 0, !n) {
                            var o = Math.pow(2, 8 * r - 1);
                            M(this, e, t, r, o - 1, -o)
                        }
                        var s = 0, i = 1, a = 0;
                        for (this[t] = 255 & e; ++s < r && (i *= 256);) e < 0 && 0 === a && 0 !== this[t + s - 1] && (a = 1), this[t + s] = (e / i >> 0) - a & 255;
                        return t + r
                    }, u.prototype.writeIntBE = function (e, t, r, n) {
                        if (e = +e, t |= 0, !n) {
                            var o = Math.pow(2, 8 * r - 1);
                            M(this, e, t, r, o - 1, -o)
                        }
                        var s = r - 1, i = 1, a = 0;
                        for (this[t + s] = 255 & e; --s >= 0 && (i *= 256);) e < 0 && 0 === a && 0 !== this[t + s + 1] && (a = 1), this[t + s] = (e / i >> 0) - a & 255;
                        return t + r
                    }, u.prototype.writeInt8 = function (e, t, r) {
                        return e = +e, t |= 0, r || M(this, e, t, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                    }, u.prototype.writeInt16LE = function (e, t, r) {
                        return e = +e, t |= 0, r || M(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : L(this, e, t, !0), t + 2
                    }, u.prototype.writeInt16BE = function (e, t, r) {
                        return e = +e, t |= 0, r || M(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : L(this, e, t, !1), t + 2
                    }, u.prototype.writeInt32LE = function (e, t, r) {
                        return e = +e, t |= 0, r || M(this, e, t, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : U(this, e, t, !0), t + 4
                    }, u.prototype.writeInt32BE = function (e, t, r) {
                        return e = +e, t |= 0, r || M(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : U(this, e, t, !1), t + 4
                    }, u.prototype.writeFloatLE = function (e, t, r) {
                        return q(this, e, t, !0, r)
                    }, u.prototype.writeFloatBE = function (e, t, r) {
                        return q(this, e, t, !1, r)
                    }, u.prototype.writeDoubleLE = function (e, t, r) {
                        return B(this, e, t, !0, r)
                    }, u.prototype.writeDoubleBE = function (e, t, r) {
                        return B(this, e, t, !1, r)
                    }, u.prototype.copy = function (e, t, r, n) {
                        if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
                        if (0 === e.length || 0 === this.length) return 0;
                        if (t < 0) throw new RangeError("targetStart out of bounds");
                        if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
                        if (n < 0) throw new RangeError("sourceEnd out of bounds");
                        n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                        var o, s = n - r;
                        if (this === e && r < t && t < n) for (o = s - 1; o >= 0; --o) e[o + t] = this[o + r]; else if (s < 1e3 || !u.TYPED_ARRAY_SUPPORT) for (o = 0; o < s; ++o) e[o + t] = this[o + r]; else Uint8Array.prototype.set.call(e, this.subarray(r, r + s), t);
                        return s
                    }, u.prototype.fill = function (e, t, r, n) {
                        if ("string" == typeof e) {
                            if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === e.length) {
                                var o = e.charCodeAt(0);
                                o < 256 && (e = o)
                            }
                            if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                            if ("string" == typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
                        } else "number" == typeof e && (e &= 255);
                        if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
                        if (r <= t) return this;
                        var s;
                        if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e) for (s = t; s < r; ++s) this[s] = e; else {
                            var i = u.isBuffer(e) ? e : D(new u(e, n).toString()), a = i.length;
                            for (s = 0; s < r - t; ++s) this[s + t] = i[s % a]
                        }
                        return this
                    };
                    var N = /[^+\/0-9A-Za-z-_]/g;

                    function H(e) {
                        return e < 16 ? "0" + e.toString(16) : e.toString(16)
                    }

                    function D(e, t) {
                        var r;
                        t = t || 1 / 0;
                        for (var n = e.length, o = null, s = [], i = 0; i < n; ++i) {
                            if ((r = e.charCodeAt(i)) > 55295 && r < 57344) {
                                if (!o) {
                                    if (r > 56319) {
                                        (t -= 3) > -1 && s.push(239, 191, 189);
                                        continue
                                    }
                                    if (i + 1 === n) {
                                        (t -= 3) > -1 && s.push(239, 191, 189);
                                        continue
                                    }
                                    o = r;
                                    continue
                                }
                                if (r < 56320) {
                                    (t -= 3) > -1 && s.push(239, 191, 189), o = r;
                                    continue
                                }
                                r = 65536 + (o - 55296 << 10 | r - 56320)
                            } else o && (t -= 3) > -1 && s.push(239, 191, 189);
                            if (o = null, r < 128) {
                                if ((t -= 1) < 0) break;
                                s.push(r)
                            } else if (r < 2048) {
                                if ((t -= 2) < 0) break;
                                s.push(r >> 6 | 192, 63 & r | 128)
                            } else if (r < 65536) {
                                if ((t -= 3) < 0) break;
                                s.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                            } else {
                                if (!(r < 1114112)) throw new Error("Invalid code point");
                                if ((t -= 4) < 0) break;
                                s.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                            }
                        }
                        return s
                    }

                    function z(e) {
                        return n.toByteArray(function (e) {
                            if ((e = function (e) {
                                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                            }(e).replace(N, "")).length < 2) return "";
                            for (; e.length % 4 != 0;) e += "=";
                            return e
                        }(e))
                    }

                    function F(e, t, r, n) {
                        for (var o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o) t[o + r] = e[o];
                        return o
                    }
                }).call(this, r("./node_modules/webpack/buildin/global.js"))
            }, "./node_modules/builtin-status-codes/browser.js": function (e, t) {
                e.exports = {
                    100: "Continue",
                    101: "Switching Protocols",
                    102: "Processing",
                    200: "OK",
                    201: "Created",
                    202: "Accepted",
                    203: "Non-Authoritative Information",
                    204: "No Content",
                    205: "Reset Content",
                    206: "Partial Content",
                    207: "Multi-Status",
                    208: "Already Reported",
                    226: "IM Used",
                    300: "Multiple Choices",
                    301: "Moved Permanently",
                    302: "Found",
                    303: "See Other",
                    304: "Not Modified",
                    305: "Use Proxy",
                    307: "Temporary Redirect",
                    308: "Permanent Redirect",
                    400: "Bad Request",
                    401: "Unauthorized",
                    402: "Payment Required",
                    403: "Forbidden",
                    404: "Not Found",
                    405: "Method Not Allowed",
                    406: "Not Acceptable",
                    407: "Proxy Authentication Required",
                    408: "Request Timeout",
                    409: "Conflict",
                    410: "Gone",
                    411: "Length Required",
                    412: "Precondition Failed",
                    413: "Payload Too Large",
                    414: "URI Too Long",
                    415: "Unsupported Media Type",
                    416: "Range Not Satisfiable",
                    417: "Expectation Failed",
                    418: "I'm a teapot",
                    421: "Misdirected Request",
                    422: "Unprocessable Entity",
                    423: "Locked",
                    424: "Failed Dependency",
                    425: "Unordered Collection",
                    426: "Upgrade Required",
                    428: "Precondition Required",
                    429: "Too Many Requests",
                    431: "Request Header Fields Too Large",
                    451: "Unavailable For Legal Reasons",
                    500: "Internal Server Error",
                    501: "Not Implemented",
                    502: "Bad Gateway",
                    503: "Service Unavailable",
                    504: "Gateway Timeout",
                    505: "HTTP Version Not Supported",
                    506: "Variant Also Negotiates",
                    507: "Insufficient Storage",
                    508: "Loop Detected",
                    509: "Bandwidth Limit Exceeded",
                    510: "Not Extended",
                    511: "Network Authentication Required"
                }
            }, "./node_modules/cacheable-request/node_modules/get-stream/buffer-stream.js": function (e, t, r) {
                "use strict";
                (function (t) {
                    const {PassThrough: n} = r("./node_modules/stream-browserify/index.js");
                    e.exports = e => {
                        e = {...e};
                        const {array: r} = e;
                        let {encoding: o} = e;
                        const s = "buffer" === o;
                        let i = !1;
                        r ? i = !(o || s) : o = o || "utf8", s && (o = null);
                        const a = new n({objectMode: i});
                        o && a.setEncoding(o);
                        let u = 0;
                        const c = [];
                        return a.on("data", e => {
                            c.push(e), i ? u = c.length : u += e.length
                        }), a.getBufferedValue = () => r ? c : s ? t.concat(c, u) : c.join(""), a.getBufferedLength = () => u, a
                    }
                }).call(this, r("./node_modules/buffer/index.js").Buffer)
            }, "./node_modules/cacheable-request/node_modules/get-stream/index.js": function (e, t, r) {
                "use strict";
                const n = r("./node_modules/pump/index.js"),
                    o = r("./node_modules/cacheable-request/node_modules/get-stream/buffer-stream.js");

                class s extends Error {
                    constructor() {
                        super("maxBuffer exceeded"), this.name = "MaxBufferError"
                    }
                }

                async function i(e, t) {
                    if (!e) return Promise.reject(new Error("Expected a stream"));
                    t = {maxBuffer: 1 / 0, ...t};
                    const {maxBuffer: r} = t;
                    let i;
                    return await new Promise((a, u) => {
                        const c = e => {
                            e && (e.bufferedData = i.getBufferedValue()), u(e)
                        };
                        i = n(e, o(t), e => {
                            e ? c(e) : a()
                        }), i.on("data", () => {
                            i.getBufferedLength() > r && c(new s)
                        })
                    }), i.getBufferedValue()
                }

                e.exports = i, e.exports.default = i, e.exports.buffer = (e, t) => i(e, {
                    ...t,
                    encoding: "buffer"
                }), e.exports.array = (e, t) => i(e, {...t, array: !0}), e.exports.MaxBufferError = s
            }, "./node_modules/cacheable-request/node_modules/lowercase-keys/index.js": function (e, t, r) {
                "use strict";
                e.exports = e => {
                    const t = {};
                    for (const [r, n]of Object.entries(e)) t[r.toLowerCase()] = n;
                    return t
                }
            }, "./node_modules/cacheable-request/src/index.js": function (e, t, r) {
                "use strict";
                const n = r("./node_modules/events/events.js"), o = r("./node_modules/url/url.js"),
                    s = r("./node_modules/normalize-url/index.js"),
                    i = r("./node_modules/cacheable-request/node_modules/get-stream/index.js"),
                    a = r("./node_modules/http-cache-semantics/index.js"),
                    u = r("./node_modules/responselike/src/index.js"),
                    c = r("./node_modules/cacheable-request/node_modules/lowercase-keys/index.js"),
                    l = r("./node_modules/clone-response/src/index.js"), d = r("./node_modules/keyv/src/index.js");

                class h {
                    constructor(e, t) {
                        if ("function" != typeof e) throw new TypeError("Parameter `request` must be a function");
                        return this.cache = new d({
                            uri: "string" == typeof t && t,
                            store: "string" != typeof t && t,
                            namespace: "cacheable-request"
                        }), this.createCacheableRequest(e)
                    }

                    createCacheableRequest(e) {
                        return (t, r) => {
                            let d;
                            if ("string" == typeof t) d = p(o.parse(t)), t = {}; else if (t instanceof o.URL) d = p(o.parse(t.toString())), t = {}; else {
                                const [e, ...r] = (t.path || "").split("?"), n = r.length > 0 ? `?${r.join("?")}` : "";
                                d = p({...t, pathname: e, search: n})
                            }
                            (t = {
                                headers: {},
                                method: "GET",
                                cache: !0,
                                strictTtl: !1,
                                automaticFailover: !1, ...t, ...f(d)
                            }).headers = c(t.headers);
                            const m = new n,
                                g = s(o.format(d), {stripWWW: !1, removeTrailingSlash: !1, stripAuthentication: !1}),
                                y = `${t.method}:${g}`;
                            let b = !1, _ = !1;
                            const w = t => {
                                _ = !0;
                                let n, o = !1;
                                const s = new Promise(e => {
                                    n = () => {
                                        o || (o = !0, e())
                                    }
                                }), c = e => {
                                    if (b && !t.forceRefresh) {
                                        e.status = e.statusCode;
                                        const r = a.fromObject(b.cachePolicy).revalidatedPolicy(t, e);
                                        if (!r.modified) {
                                            const t = r.policy.responseHeaders();
                                            (e = new u(b.statusCode, t, b.body, b.url)).cachePolicy = r.policy, e.fromCache = !0
                                        }
                                    }
                                    let n;
                                    e.fromCache || (e.cachePolicy = new a(t, e, t), e.fromCache = !1), t.cache && e.cachePolicy.storable() ? (n = l(e), (async () => {
                                        try {
                                            const r = i.buffer(e);
                                            if (await Promise.race([s, new Promise(t => e.once("end", t))]), o) return;
                                            const n = await r, a = {
                                                cachePolicy: e.cachePolicy.toObject(),
                                                url: e.url,
                                                statusCode: e.fromCache ? b.statusCode : e.statusCode,
                                                body: n
                                            };
                                            let u = t.strictTtl ? e.cachePolicy.timeToLive() : void 0;
                                            t.maxTtl && (u = u ? Math.min(u, t.maxTtl) : t.maxTtl), await this.cache.set(y, a, u)
                                        } catch (e) {
                                            m.emit("error", new h.CacheError(e))
                                        }
                                    })()) : t.cache && b && (async () => {
                                        try {
                                            await this.cache.delete(y)
                                        } catch (e) {
                                            m.emit("error", new h.CacheError(e))
                                        }
                                    })(), m.emit("response", n || e), "function" == typeof r && r(n || e)
                                };
                                try {
                                    const r = e(t, c);
                                    r.once("error", n), r.once("abort", n), m.emit("request", r)
                                } catch (e) {
                                    m.emit("error", new h.RequestError(e))
                                }
                            };
                            return (async () => {
                                const e = async e => {
                                    await Promise.resolve();
                                    const t = e.cache ? await this.cache.get(y) : void 0;
                                    if (void 0 === t) return w(e);
                                    const n = a.fromObject(t.cachePolicy);
                                    if (n.satisfiesWithoutRevalidation(e) && !e.forceRefresh) {
                                        const e = n.responseHeaders(), o = new u(t.statusCode, e, t.body, t.url);
                                        o.cachePolicy = n, o.fromCache = !0, m.emit("response", o), "function" == typeof r && r(o)
                                    } else b = t, e.headers = n.revalidationHeaders(e), w(e)
                                }, n = e => m.emit("error", new h.CacheError(e));
                                this.cache.once("error", n), m.on("response", () => this.cache.removeListener("error", n));
                                try {
                                    await e(t)
                                } catch (e) {
                                    t.automaticFailover && !_ && w(t), m.emit("error", new h.CacheError(e))
                                }
                            })(), m
                        }
                    }
                }

                function f(e) {
                    const t = {...e};
                    return t.path = `${e.pathname || "/"}${e.search || ""}`, delete t.pathname, delete t.search, t
                }

                function p(e) {
                    return {
                        protocol: e.protocol,
                        auth: e.auth,
                        hostname: e.hostname || e.host || "localhost",
                        port: e.port,
                        pathname: e.pathname,
                        search: e.search
                    }
                }

                h.RequestError = class extends Error {
                    constructor(e) {
                        super(e.message), this.name = "RequestError", Object.assign(this, e)
                    }
                }, h.CacheError = class extends Error {
                    constructor(e) {
                        super(e.message), this.name = "CacheError", Object.assign(this, e)
                    }
                }, e.exports = h
            }, "./node_modules/clone-response/src/index.js": function (e, t, r) {
                "use strict";
                const n = r("./node_modules/stream-browserify/index.js").PassThrough,
                    o = r("./node_modules/mimic-response/index.js");
                e.exports = e => {
                    if (!e || !e.pipe) throw new TypeError("Parameter `response` must be a response stream.");
                    const t = new n;
                    return o(e, t), e.pipe(t)
                }
            }, "./node_modules/core-util-is/lib/util.js": function (e, t, r) {
                (function (e) {
                    function r(e) {
                        return Object.prototype.toString.call(e)
                    }

                    t.isArray = function (e) {
                        return Array.isArray ? Array.isArray(e) : "[object Array]" === r(e)
                    }, t.isBoolean = function (e) {
                        return "boolean" == typeof e
                    }, t.isNull = function (e) {
                        return null === e
                    }, t.isNullOrUndefined = function (e) {
                        return null == e
                    }, t.isNumber = function (e) {
                        return "number" == typeof e
                    }, t.isString = function (e) {
                        return "string" == typeof e
                    }, t.isSymbol = function (e) {
                        return "symbol" == typeof e
                    }, t.isUndefined = function (e) {
                        return void 0 === e
                    }, t.isRegExp = function (e) {
                        return "[object RegExp]" === r(e)
                    }, t.isObject = function (e) {
                        return "object" == typeof e && null !== e
                    }, t.isDate = function (e) {
                        return "[object Date]" === r(e)
                    }, t.isError = function (e) {
                        return "[object Error]" === r(e) || e instanceof Error
                    }, t.isFunction = function (e) {
                        return "function" == typeof e
                    }, t.isPrimitive = function (e) {
                        return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
                    }, t.isBuffer = e.isBuffer
                }).call(this, r("./node_modules/buffer/index.js").Buffer)
            }, "./node_modules/defer-to-connect/dist/index.js": function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                const n = r("./node_modules/tls/index.js"), o = (e, t) => {
                    let r;
                    if ("function" == typeof t) {
                        r = {connect: t}
                    } else r = t;
                    const o = "function" == typeof r.connect, s = "function" == typeof r.secureConnect,
                        i = "function" == typeof r.close, a = () => {
                            o && r.connect(), e instanceof n.TLSSocket && s && (e.authorized ? r.secureConnect() : e.once("secureConnect", r.secureConnect)), i && e.once("close", r.close)
                        };
                    e.writable && !e.connecting ? a() : e.connecting ? e.once("connect", a) : e.destroyed && i && r.close(e._hadError)
                };
                t.default = o, e.exports = o, e.exports.default = o
            }, "./node_modules/duplexer3/index.js": function (e, t, r) {
                "use strict";
                var n = r("./node_modules/stream-browserify/index.js");

                function o(e, t, r) {
                    void 0 === r && (r = t, t = e, e = null), n.Duplex.call(this, e), "function" != typeof r.read && (r = new n.Readable(e).wrap(r)), this._writable = t, this._readable = r, this._waiting = !1;
                    var o = this;
                    t.once("finish", (function () {
                        o.end()
                    })), this.once("finish", (function () {
                        t.end()
                    })), r.on("readable", (function () {
                        o._waiting && (o._waiting = !1, o._read())
                    })), r.once("end", (function () {
                        o.push(null)
                    })), e && void 0 !== e.bubbleErrors && !e.bubbleErrors || (t.on("error", (function (e) {
                        o.emit("error", e)
                    })), r.on("error", (function (e) {
                        o.emit("error", e)
                    })))
                }

                o.prototype = Object.create(n.Duplex.prototype, {constructor: {value: o}}), o.prototype._write = function (e, t, r) {
                    this._writable.write(e, t, r)
                }, o.prototype._read = function () {
                    for (var e, t = 0; null !== (e = this._readable.read());) this.push(e), t++;
                    0 === t && (this._waiting = !0)
                }, e.exports = function (e, t, r) {
                    return new o(e, t, r)
                }, e.exports.DuplexWrapper = o
            }, "./node_modules/end-of-stream/index.js": function (e, t, r) {
                (function (t) {
                    var n = r("./node_modules/once/once.js"), o = function () {
                    }, s = function (e, r, i) {
                        if ("function" == typeof r) return s(e, null, r);
                        r || (r = {}), i = n(i || o);
                        var a = e._writableState, u = e._readableState,
                            c = r.readable || !1 !== r.readable && e.readable,
                            l = r.writable || !1 !== r.writable && e.writable, d = !1, h = function () {
                                e.writable || f()
                            }, f = function () {
                                l = !1, c || i.call(e)
                            }, p = function () {
                                c = !1, l || i.call(e)
                            }, m = function (t) {
                                i.call(e, t ? new Error("exited with error code: " + t) : null)
                            }, g = function (t) {
                                i.call(e, t)
                            }, y = function () {
                                t.nextTick(b)
                            }, b = function () {
                                if (!d) return (!c || u && u.ended && !u.destroyed) && (!l || a && a.ended && !a.destroyed) ? void 0 : i.call(e, new Error("premature close"))
                            }, _ = function () {
                                e.req.on("finish", f)
                            };
                        return !function (e) {
                            return e.setHeader && "function" == typeof e.abort
                        }(e) ? l && !a && (e.on("end", h), e.on("close", h)) : (e.on("complete", f), e.on("abort", y), e.req ? _() : e.on("request", _)), function (e) {
                            return e.stdio && Array.isArray(e.stdio) && 3 === e.stdio.length
                        }(e) && e.on("exit", m), e.on("end", p), e.on("finish", f), !1 !== r.error && e.on("error", g), e.on("close", y), function () {
                            d = !0, e.removeListener("complete", f), e.removeListener("abort", y), e.removeListener("request", _), e.req && e.req.removeListener("finish", f), e.removeListener("end", h), e.removeListener("close", h), e.removeListener("finish", f), e.removeListener("exit", m), e.removeListener("end", p), e.removeListener("error", g), e.removeListener("close", y)
                        }
                    };
                    e.exports = s
                }).call(this, r("./node_modules/process/browser.js"))
            }, "./node_modules/events/events.js": function (e, t, r) {
                "use strict";
                var n, o = "object" == typeof Reflect ? Reflect : null,
                    s = o && "function" == typeof o.apply ? o.apply : function (e, t, r) {
                        return Function.prototype.apply.call(e, t, r)
                    };
                n = o && "function" == typeof o.ownKeys ? o.ownKeys : Object.getOwnPropertySymbols ? function (e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
                } : function (e) {
                    return Object.getOwnPropertyNames(e)
                };
                var i = Number.isNaN || function (e) {
                    return e != e
                };

                function a() {
                    a.init.call(this)
                }

                e.exports = a, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
                var u = 10;

                function c(e) {
                    return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners
                }

                function l(e, t, r, n) {
                    var o, s, i, a;
                    if ("function" != typeof r) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof r);
                    if (void 0 === (s = e._events) ? (s = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== s.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), s = e._events), i = s[t]), void 0 === i) i = s[t] = r, ++e._eventsCount; else if ("function" == typeof i ? i = s[t] = n ? [r, i] : [i, r] : n ? i.unshift(r) : i.push(r), (o = c(e)) > 0 && i.length > o && !i.warned) {
                        i.warned = !0;
                        var u = new Error("Possible EventEmitter memory leak detected. " + i.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                        u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = i.length, a = u, console && console.warn && console.warn(a)
                    }
                    return e
                }

                function d() {
                    for (var e = [], t = 0; t < arguments.length; t++) e.push(arguments[t]);
                    this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, s(this.listener, this.target, e))
                }

                function h(e, t, r) {
                    var n = {fired: !1, wrapFn: void 0, target: e, type: t, listener: r}, o = d.bind(n);
                    return o.listener = r, n.wrapFn = o, o
                }

                function f(e, t, r) {
                    var n = e._events;
                    if (void 0 === n) return [];
                    var o = n[t];
                    return void 0 === o ? [] : "function" == typeof o ? r ? [o.listener || o] : [o] : r ? function (e) {
                        for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
                        return t
                    }(o) : m(o, o.length)
                }

                function p(e) {
                    var t = this._events;
                    if (void 0 !== t) {
                        var r = t[e];
                        if ("function" == typeof r) return 1;
                        if (void 0 !== r) return r.length
                    }
                    return 0
                }

                function m(e, t) {
                    for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
                    return r
                }

                Object.defineProperty(a, "defaultMaxListeners", {
                    enumerable: !0, get: function () {
                        return u
                    }, set: function (e) {
                        if ("number" != typeof e || e < 0 || i(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                        u = e
                    }
                }), a.init = function () {
                    void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
                }, a.prototype.setMaxListeners = function (e) {
                    if ("number" != typeof e || e < 0 || i(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                    return this._maxListeners = e, this
                }, a.prototype.getMaxListeners = function () {
                    return c(this)
                }, a.prototype.emit = function (e) {
                    for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
                    var n = "error" === e, o = this._events;
                    if (void 0 !== o) n = n && void 0 === o.error; else if (!n) return !1;
                    if (n) {
                        var i;
                        if (t.length > 0 && (i = t[0]), i instanceof Error) throw i;
                        var a = new Error("Unhandled error." + (i ? " (" + i.message + ")" : ""));
                        throw a.context = i, a
                    }
                    var u = o[e];
                    if (void 0 === u) return !1;
                    if ("function" == typeof u) s(u, this, t); else {
                        var c = u.length, l = m(u, c);
                        for (r = 0; r < c; ++r) s(l[r], this, t)
                    }
                    return !0
                }, a.prototype.addListener = function (e, t) {
                    return l(this, e, t, !1)
                }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function (e, t) {
                    return l(this, e, t, !0)
                }, a.prototype.once = function (e, t) {
                    if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
                    return this.on(e, h(this, e, t)), this
                }, a.prototype.prependOnceListener = function (e, t) {
                    if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
                    return this.prependListener(e, h(this, e, t)), this
                }, a.prototype.removeListener = function (e, t) {
                    var r, n, o, s, i;
                    if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
                    if (void 0 === (n = this._events)) return this;
                    if (void 0 === (r = n[e])) return this;
                    if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[e], n.removeListener && this.emit("removeListener", e, r.listener || t)); else if ("function" != typeof r) {
                        for (o = -1, s = r.length - 1; s >= 0; s--) if (r[s] === t || r[s].listener === t) {
                            i = r[s].listener, o = s;
                            break
                        }
                        if (o < 0) return this;
                        0 === o ? r.shift() : function (e, t) {
                            for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                            e.pop()
                        }(r, o), 1 === r.length && (n[e] = r[0]), void 0 !== n.removeListener && this.emit("removeListener", e, i || t)
                    }
                    return this
                }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function (e) {
                    var t, r, n;
                    if (void 0 === (r = this._events)) return this;
                    if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this;
                    if (0 === arguments.length) {
                        var o, s = Object.keys(r);
                        for (n = 0; n < s.length; ++n) "removeListener" !== (o = s[n]) && this.removeAllListeners(o);
                        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                    }
                    if ("function" == typeof(t = r[e])) this.removeListener(e, t); else if (void 0 !== t) for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
                    return this
                }, a.prototype.listeners = function (e) {
                    return f(this, e, !0)
                }, a.prototype.rawListeners = function (e) {
                    return f(this, e, !1)
                }, a.listenerCount = function (e, t) {
                    return "function" == typeof e.listenerCount ? e.listenerCount(t) : p.call(e, t)
                }, a.prototype.listenerCount = p, a.prototype.eventNames = function () {
                    return this._eventsCount > 0 ? n(this._events) : []
                }
            }, "./node_modules/get-stream/buffer-stream.js": function (e, t, r) {
                "use strict";
                (function (t) {
                    const {PassThrough: n} = r("./node_modules/stream-browserify/index.js");
                    e.exports = e => {
                        e = Object.assign({}, e);
                        const {array: r} = e;
                        let {encoding: o} = e;
                        const s = "buffer" === o;
                        let i = !1;
                        r ? i = !(o || s) : o = o || "utf8", s && (o = null);
                        let a = 0;
                        const u = [], c = new n({objectMode: i});
                        return o && c.setEncoding(o), c.on("data", e => {
                            u.push(e), i ? a = u.length : a += e.length
                        }), c.getBufferedValue = () => r ? u : s ? t.concat(u, a) : u.join(""), c.getBufferedLength = () => a, c
                    }
                }).call(this, r("./node_modules/buffer/index.js").Buffer)
            }, "./node_modules/get-stream/index.js": function (e, t, r) {
                "use strict";
                const n = r("./node_modules/pump/index.js"), o = r("./node_modules/get-stream/buffer-stream.js");

                class s extends Error {
                    constructor() {
                        super("maxBuffer exceeded"), this.name = "MaxBufferError"
                    }
                }

                function i(e, t) {
                    if (!e) return Promise.reject(new Error("Expected a stream"));
                    t = Object.assign({maxBuffer: 1 / 0}, t);
                    const {maxBuffer: r} = t;
                    let i;
                    return new Promise((a, u) => {
                        const c = e => {
                            e && (e.bufferedData = i.getBufferedValue()), u(e)
                        };
                        i = n(e, o(t), e => {
                            e ? c(e) : a()
                        }), i.on("data", () => {
                            i.getBufferedLength() > r && c(new s)
                        })
                    }).then(() => i.getBufferedValue())
                }

                e.exports = i, e.exports.buffer = (e, t) => i(e, Object.assign({}, t, {encoding: "buffer"})), e.exports.array = (e, t) => i(e, Object.assign({}, t, {array: !0})), e.exports.MaxBufferError = s
            }, "./node_modules/got/package.json": function (e) {
                e.exports = JSON.parse('{"_from":"got@^9.2.2","_id":"got@9.6.0","_inBundle":false,"_integrity":"sha512-R7eWptXuGYxwijs0eV+v3o6+XH1IqVK8dJOEecQfTmkncw9AV4dcw/Dhxi8MdlqPthxxpZyizMzyg8RTmEsG+Q==","_location":"/got","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"got@^9.2.2","name":"got","escapedName":"got","rawSpec":"^9.2.2","saveSpec":null,"fetchSpec":"^9.2.2"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/got/-/got-9.6.0.tgz","_shasum":"edf45e7d67f99545705de1f7bbeeeb121765ed85","_spec":"got@^9.2.2","_where":"H:\\\\IDE\\\\projects\\\\js\\\\google-translate-api-1.1.0","ava":{"concurrency":4},"browser":{"decompress-response":false,"electron":false},"bugs":{"url":"https://github.com/sindresorhus/got/issues"},"bundleDependencies":false,"dependencies":{"@sindresorhus/is":"^0.14.0","@szmarczak/http-timer":"^1.1.2","cacheable-request":"^6.0.0","decompress-response":"^3.3.0","duplexer3":"^0.1.4","get-stream":"^4.1.0","lowercase-keys":"^1.0.1","mimic-response":"^1.0.1","p-cancelable":"^1.0.0","to-readable-stream":"^1.0.0","url-parse-lax":"^3.0.0"},"deprecated":false,"description":"Simplified HTTP requests","devDependencies":{"ava":"^1.1.0","coveralls":"^3.0.0","delay":"^4.1.0","form-data":"^2.3.3","get-port":"^4.0.0","np":"^3.1.0","nyc":"^13.1.0","p-event":"^2.1.0","pem":"^1.13.2","proxyquire":"^2.0.1","sinon":"^7.2.2","slow-stream":"0.0.4","tempfile":"^2.0.0","tempy":"^0.2.1","tough-cookie":"^3.0.0","xo":"^0.24.0"},"engines":{"node":">=8.6"},"files":["source"],"homepage":"https://github.com/sindresorhus/got#readme","keywords":["http","https","get","got","url","uri","request","util","utility","simple","curl","wget","fetch","net","network","electron"],"license":"MIT","main":"source","name":"got","repository":{"type":"git","url":"git+https://github.com/sindresorhus/got.git"},"scripts":{"release":"np","test":"xo && nyc ava"},"version":"9.6.0"}')
            }, "./node_modules/got/source sync recursive": function (e, t) {
                function r(e) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }

                r.keys = function () {
                    return []
                }, r.resolve = r, e.exports = r, r.id = "./node_modules/got/source sync recursive"
            }, "./node_modules/got/source/as-promise.js": function (e, t, r) {
                "use strict";
                const n = r("./node_modules/events/events.js"), o = r("./node_modules/get-stream/index.js"),
                    s = r("./node_modules/@sindresorhus/is/dist/index.js"),
                    i = r("./node_modules/p-cancelable/index.js"),
                    a = r("./node_modules/got/source/request-as-event-emitter.js"), {HTTPError: u, ParseError: c, ReadError: l} = r("./node_modules/got/source/errors.js"), {options: d} = r("./node_modules/got/source/merge.js"), {reNormalize: h} = r("./node_modules/got/source/normalize-arguments.js"),
                    f = e => {
                        const t = new n, r = new i((r, n, i) => {
                            const p = a(e);
                            i(p.abort), p.on("response", async i => {
                                t.emit("response", i);
                                const a = s.null(e.encoding) ? o.buffer(i) : o(i, e);
                                let m;
                                try {
                                    m = await a
                                } catch (t) {
                                    return void n(new l(t, e))
                                }
                                const g = e.followRedirect ? 299 : 399;
                                i.body = m;
                                try {
                                    for (const [t, r]of Object.entries(e.hooks.afterResponse)) i = await r(i, r => ((r = h(d(e, {
                                        ...r,
                                        retry: 0,
                                        throwHttpErrors: !1
                                    }))).hooks.afterResponse = e.hooks.afterResponse.slice(0, t), f(r)))
                                } catch (e) {
                                    return void n(e)
                                }
                                const {statusCode: y} = i;
                                if (e.json && i.body) try {
                                    i.body = JSON.parse(i.body)
                                } catch (t) {
                                    if (y >= 200 && y < 300) {
                                        const r = new c(t, y, e, m);
                                        return Object.defineProperty(r, "response", {value: i}), void n(r)
                                    }
                                }
                                if (304 !== y && (y < 200 || y > g)) {
                                    const t = new u(i, e);
                                    if (Object.defineProperty(t, "response", {value: i}), !1 === p.retry(t)) {
                                        if (e.throwHttpErrors) return void n(t);
                                        r(i)
                                    }
                                } else r(i)
                            }), p.once("error", n), ["request", "redirect", "uploadProgress", "downloadProgress"].forEach(e => p.on(e, (...r) => t.emit(e, ...r)))
                        });
                        return r.on = (e, n) => (t.on(e, n), r), r
                    };
                e.exports = f
            }, "./node_modules/got/source/as-stream.js": function (e, t, r) {
                "use strict";
                const {PassThrough: n} = r("./node_modules/stream-browserify/index.js"),
                    o = r("./node_modules/duplexer3/index.js"),
                    s = r("./node_modules/got/source/request-as-event-emitter.js"), {HTTPError: i, ReadError: a} = r("./node_modules/got/source/errors.js");
                e.exports = e => {
                    const t = new n, r = new n, u = o(t, r), c = new Set;
                    let l = !1;
                    e.retry.retries = () => 0, e.body && (u.write = () => {
                        throw new Error("Got's stream is not writable when the `body` option is used")
                    });
                    const d = s(e, t);
                    u._destroy = d.abort, d.on("response", t => {
                        const {statusCode: n} = t;
                        if (t.on("error", t => {
                            u.emit("error", new a(t, e))
                        }), e.throwHttpErrors && 304 !== n && (n < 200 || n > 299)) u.emit("error", new i(t, e), null, t); else {
                            l = !0, t.pipe(r);
                            for (const r of c) if (!r.headersSent) {
                                for (const [n, o]of Object.entries(t.headers)) {
                                    (!e.decompress || "content-encoding" !== n) && r.setHeader(n, o)
                                }
                                r.statusCode = t.statusCode
                            }
                            u.emit("response", t)
                        }
                    }), ["error", "request", "redirect", "uploadProgress", "downloadProgress"].forEach(e => d.on(e, (...t) => u.emit(e, ...t)));
                    const h = u.pipe.bind(u), f = u.unpipe.bind(u);
                    return u.pipe = (e, t) => {
                        if (l) throw new Error("Failed to pipe. The response has been emitted already.");
                        const r = h(e, t);
                        return Reflect.has(e, "setHeader") && c.add(e), r
                    }, u.unpipe = e => (c.delete(e), f(e)), u
                }
            }, "./node_modules/got/source/create.js": function (e, t, r) {
                "use strict";
                const n = r("./node_modules/got/source/errors.js"), o = r("./node_modules/got/source/as-stream.js"),
                    s = r("./node_modules/got/source/as-promise.js"),
                    i = r("./node_modules/got/source/normalize-arguments.js"),
                    a = r("./node_modules/got/source/merge.js"),
                    u = r("./node_modules/got/source/utils/deep-freeze.js"), c = e => e.stream ? o(e) : s(e),
                    l = ["get", "post", "put", "patch", "head", "delete"], d = e => {
                        function t(t, r) {
                            try {
                                return e.handler(i(t, r, e), c)
                            } catch (e) {
                                if (r && r.stream) throw e;
                                return Promise.reject(e)
                            }
                        }

                        e = a({}, e), i.preNormalize(e.options), e.handler || (e.handler = (e, t) => t(e)), t.create = d, t.extend = t => {
                            let r;
                            return t && Reflect.has(t, "mutableDefaults") ? (r = t.mutableDefaults, delete t.mutableDefaults) : r = e.mutableDefaults, d({
                                options: a.options(e.options, t),
                                handler: e.handler,
                                mutableDefaults: r
                            })
                        }, t.mergeInstances = (...e) => d(a.instances(e)), t.stream = (e, r) => t(e, {...r, stream: !0});
                        for (const e of l) t[e] = (r, n) => t(r, {
                            ...n,
                            method: e
                        }), t.stream[e] = (r, n) => t.stream(r, {...n, method: e});
                        return Object.assign(t, {
                            ...n,
                            mergeOptions: a.options
                        }), Object.defineProperty(t, "defaults", {
                            value: e.mutableDefaults ? e : u(e),
                            writable: e.mutableDefaults,
                            configurable: e.mutableDefaults,
                            enumerable: !0
                        }), t
                    };
                e.exports = d
            }, "./node_modules/got/source/errors.js": function (e, t, r) {
                "use strict";
                const n = r("./node_modules/url/url.js"), o = r("./node_modules/stream-http/index.js"),
                    s = r("./node_modules/p-cancelable/index.js"),
                    i = r("./node_modules/@sindresorhus/is/dist/index.js");

                class a extends Error {
                    constructor(e, t, r) {
                        super(e), Error.captureStackTrace(this, this.constructor), this.name = "GotError", i.undefined(t.code) || (this.code = t.code), Object.assign(this, {
                            host: r.host,
                            hostname: r.hostname,
                            method: r.method,
                            path: r.path,
                            socketPath: r.socketPath,
                            protocol: r.protocol,
                            url: r.href,
                            gotOptions: r
                        })
                    }
                }

                e.exports.GotError = a, e.exports.CacheError = class extends a {
                    constructor(e, t) {
                        super(e.message, e, t), this.name = "CacheError"
                    }
                }, e.exports.RequestError = class extends a {
                    constructor(e, t) {
                        super(e.message, e, t), this.name = "RequestError"
                    }
                }, e.exports.ReadError = class extends a {
                    constructor(e, t) {
                        super(e.message, e, t), this.name = "ReadError"
                    }
                }, e.exports.ParseError = class extends a {
                    constructor(e, t, r, s) {
                        super(`${e.message} in "${n.format(r)}": \n${s.slice(0, 77)}...`, e, r), this.name = "ParseError", this.statusCode = t, this.statusMessage = o.STATUS_CODES[this.statusCode]
                    }
                }, e.exports.HTTPError = class extends a {
                    constructor(e, t) {
                        const {statusCode: r} = e;
                        let {statusMessage: n} = e;
                        n = n ? n.replace(/\r?\n/g, " ").trim() : o.STATUS_CODES[r], super(`Response code ${r} (${n})`, {}, t), this.name = "HTTPError", this.statusCode = r, this.statusMessage = n, this.headers = e.headers, this.body = e.body
                    }
                }, e.exports.MaxRedirectsError = class extends a {
                    constructor(e, t, r) {
                        super("Redirected 10 times. Aborting.", {}, r), this.name = "MaxRedirectsError", this.statusCode = e, this.statusMessage = o.STATUS_CODES[this.statusCode], this.redirectUrls = t
                    }
                }, e.exports.UnsupportedProtocolError = class extends a {
                    constructor(e) {
                        super(`Unsupported protocol "${e.protocol}"`, {}, e), this.name = "UnsupportedProtocolError"
                    }
                }, e.exports.TimeoutError = class extends a {
                    constructor(e, t) {
                        super(e.message, {code: "ETIMEDOUT"}, t), this.name = "TimeoutError", this.event = e.event
                    }
                }, e.exports.CancelError = s.CancelError
            }, "./node_modules/got/source/get-response.js": function (e, t, r) {
                "use strict";
                const n = r(3), o = r("./node_modules/@sindresorhus/is/dist/index.js"),
                    s = r("./node_modules/mimic-response/index.js"), i = r("./node_modules/got/source/progress.js");
                e.exports = (e, t, r) => {
                    const a = Number(e.headers["content-length"]) || null, u = i.download(e, r, a);
                    s(e, u);
                    const c = !0 === t.decompress && o.function(n) && "HEAD" !== t.method ? n(u) : u;
                    !t.decompress && ["gzip", "deflate"].includes(e.headers["content-encoding"]) && (t.encoding = null), r.emit("response", c), r.emit("downloadProgress", {
                        percent: 0,
                        transferred: 0,
                        total: a
                    }), e.pipe(u)
                }
            }, "./node_modules/got/source/index.js": function (e, t, r) {
                "use strict";
                const n = r("./node_modules/got/package.json"), o = r("./node_modules/got/source/create.js")({
                    options: {
                        retry: {
                            retries: 2,
                            methods: ["GET", "PUT", "HEAD", "DELETE", "OPTIONS", "TRACE"],
                            statusCodes: [408, 413, 429, 500, 502, 503, 504],
                            errorCodes: ["ETIMEDOUT", "ECONNRESET", "EADDRINUSE", "ECONNREFUSED", "EPIPE", "ENOTFOUND", "ENETUNREACH", "EAI_AGAIN"]
                        },
                        headers: {"user-agent": `${n.name}/${n.version} (https://github.com/sindresorhus/got)`},
                        hooks: {beforeRequest: [], beforeRedirect: [], beforeRetry: [], afterResponse: []},
                        decompress: !0,
                        throwHttpErrors: !0,
                        followRedirect: !0,
                        stream: !1,
                        form: !1,
                        json: !1,
                        cache: !1,
                        useElectronNet: !1
                    }, mutableDefaults: !1
                });
                e.exports = o
            }, "./node_modules/got/source/known-hook-events.js": function (e, t, r) {
                "use strict";
                e.exports = ["beforeError", "init", "beforeRequest", "beforeRedirect", "beforeRetry", "afterResponse"]
            }, "./node_modules/got/source/merge.js": function (e, t, r) {
                "use strict";
                const {URL: n} = r("./node_modules/url/url.js"), o = r("./node_modules/@sindresorhus/is/dist/index.js"),
                    s = r("./node_modules/got/source/known-hook-events.js"), i = (e, ...t) => {
                        for (const r of t) for (const [t, s]of Object.entries(r)) {
                            if (o.undefined(s)) continue;
                            const r = e[t];
                            o.urlInstance(r) && (o.urlInstance(s) || o.string(s)) ? e[t] = new n(s, r) : o.plainObject(s) ? o.plainObject(r) ? e[t] = i({}, r, s) : e[t] = i({}, s) : o.array(s) ? e[t] = i([], s) : e[t] = s
                        }
                        return e
                    }, a = (...e) => {
                        e = e.map(e => e || {});
                        const t = i({}, ...e), r = {};
                        for (const e of s) r[e] = [];
                        for (const t of e) if (t.hooks) for (const e of s) r[e] = r[e].concat(t.hooks[e]);
                        return t.hooks = r, t
                    };
                e.exports = i, e.exports.options = a, e.exports.instances = (e, t) => {
                    const r = e.map(e => e.defaults.handler), n = e.length - 1;
                    return {
                        methods: t, options: a(...e.map(e => e.defaults.options)), handler: (e, t) => {
                            let o = -1;
                            const s = e => r[++o](e, o === n ? t : s);
                            return s(e)
                        }
                    }
                }
            }, "./node_modules/got/source/normalize-arguments.js": function (e, t, r) {
                "use strict";
                const {URL: n, URLSearchParams: o} = r("./node_modules/url/url.js"), s = r("./node_modules/url/url.js"),
                    i = r("./node_modules/@sindresorhus/is/dist/index.js"),
                    a = r("./node_modules/url-parse-lax/index.js"), u = r("./node_modules/lowercase-keys/index.js"),
                    c = r("./node_modules/got/source/utils/url-to-options.js"),
                    l = r("./node_modules/got/source/utils/is-form-data.js"),
                    d = r("./node_modules/got/source/merge.js"),
                    h = r("./node_modules/got/source/known-hook-events.js"), f = new Set([413, 429, 503]),
                    p = (e, t) => {
                        if (i.nullOrUndefined(e.headers) ? e.headers = {} : e.headers = u(e.headers), e.baseUrl && !e.baseUrl.toString().endsWith("/") && (e.baseUrl += "/"), e.stream && (e.json = !1), i.nullOrUndefined(e.hooks)) e.hooks = {}; else if (!i.object(e.hooks)) throw new TypeError(`Parameter \`hooks\` must be an object, not ${i(e.hooks)}`);
                        for (const r of h) i.nullOrUndefined(e.hooks[r]) && (e.hooks[r] = t ? [...t.hooks[r]] : []);
                        i.number(e.timeout) ? e.gotTimeout = {request: e.timeout} : i.object(e.timeout) && (e.gotTimeout = e.timeout), delete e.timeout;
                        const {retry: r} = e;
                        return e.retry = {
                            retries: 0,
                            methods: [],
                            statusCodes: [],
                            errorCodes: []
                        }, i.nonEmptyObject(t) && !1 !== r && (e.retry = {...t.retry}), !1 !== r && (i.number(r) ? e.retry.retries = r : e.retry = {...e.retry, ...r}), e.gotTimeout && (e.retry.maxRetryAfter = Math.min(...[e.gotTimeout.request, e.gotTimeout.connection].filter(e => !i.nullOrUndefined(e)))), i.array(e.retry.methods) && (e.retry.methods = new Set(e.retry.methods.map(e => e.toUpperCase()))), i.array(e.retry.statusCodes) && (e.retry.statusCodes = new Set(e.retry.statusCodes)), i.array(e.retry.errorCodes) && (e.retry.errorCodes = new Set(e.retry.errorCodes)), e
                    }, m = (e, t, r) => {
                        if (i.plainObject(e) && (e = (t = {...e, ...t}).url || {}, delete t.url), t = r ? d({}, r.options, t ? p(t, r.options) : {}) : d({}, p(t)), !i.string(e) && !i.object(e)) throw new TypeError(`Parameter \`url\` must be a string or object, not ${i(e)}`);
                        i.string(e) ? t.baseUrl ? (e.toString().startsWith("/") && (e = e.toString().slice(1)), e = c(new n(e, t.baseUrl))) : (e = e.replace(/^unix:/, "http://$&"), e = a(e)) : "URL" === i(e) && (e = c(e)), t = d({path: ""}, e, {protocol: e.protocol || "https:"}, t);
                        for (const e of t.hooks.init) {
                            const r = e(t);
                            if (i.promise(r)) throw new TypeError("The `init` hook must be a synchronous function")
                        }
                        const {baseUrl: s} = t;
                        Object.defineProperty(t, "baseUrl", {
                            set: () => {
                                throw new Error("Failed to set baseUrl. Options are normalized already.")
                            }, get: () => s
                        });
                        const {query: u} = t;
                        if ((i.nonEmptyString(u) || i.nonEmptyObject(u) || u instanceof o) && (i.string(u) || (t.query = new o(u).toString()), t.path = `${t.path.split("?")[0]}?${t.query}`, delete t.query), "unix" === t.hostname) {
                            const e = /(.+?):(.+)/.exec(t.path);
                            if (e) {
                                const [, r, n] = e;
                                t = {...t, socketPath: r, path: n, host: null}
                            }
                        }
                        const {headers: h} = t;
                        for (const [e, t]of Object.entries(h)) i.nullOrUndefined(t) && delete h[e];
                        t.json && i.undefined(h.accept) && (h.accept = "application/json"), t.decompress && i.undefined(h["accept-encoding"]) && (h["accept-encoding"] = "gzip, deflate");
                        const {body: m} = t;
                        if (i.nullOrUndefined(m)) t.method = t.method ? t.method.toUpperCase() : "GET"; else {
                            const e = i.object(m) && !i.buffer(m) && !i.nodeStream(m);
                            if (!(i.nodeStream(m) || i.string(m) || i.buffer(m) || t.form || t.json)) throw new TypeError("The `body` option must be a stream.Readable, string or Buffer");
                            if (t.json && !e && !i.array(m)) throw new TypeError("The `body` option must be an Object or Array when the `json` option is used");
                            if (t.form && !e) throw new TypeError("The `body` option must be an Object when the `form` option is used");
                            l(m) ? h["content-type"] = h["content-type"] || `multipart/form-data; boundary=${m.getBoundary()}` : t.form ? (h["content-type"] = h["content-type"] || "application/x-www-form-urlencoded", t.body = new o(m).toString()) : t.json && (h["content-type"] = h["content-type"] || "application/json", t.body = JSON.stringify(m)), t.method = t.method ? t.method.toUpperCase() : "POST"
                        }
                        if (!i.function(t.retry.retries)) {
                            const {retries: e} = t.retry;
                            t.retry.retries = (r, n) => {
                                if (r > e) return 0;
                                if (!(n && t.retry.errorCodes.has(n.code) || t.retry.methods.has(n.method) && t.retry.statusCodes.has(n.statusCode))) return 0;
                                if (Reflect.has(n, "headers") && Reflect.has(n.headers, "retry-after") && f.has(n.statusCode)) {
                                    let e = Number(n.headers["retry-after"]);
                                    return i.nan(e) ? e = Date.parse(n.headers["retry-after"]) - Date.now() : e *= 1e3, e > t.retry.maxRetryAfter ? 0 : e
                                }
                                if (413 === n.statusCode) return 0;
                                return 2 ** (r - 1) * 1e3 + 100 * Math.random()
                            }
                        }
                        return t
                    };
                e.exports = m, e.exports.preNormalize = p, e.exports.reNormalize = e => m(s.format(e), e)
            }, "./node_modules/got/source/progress.js": function (e, t, r) {
                "use strict";
                (function (t) {
                    const {Transform: n} = r("./node_modules/stream-browserify/index.js");
                    e.exports = {
                        download(e, t, r) {
                            let o = 0;
                            return new n({
                                transform(e, n, s) {
                                    o += e.length;
                                    const i = r ? o / r : 0;
                                    i < 1 && t.emit("downloadProgress", {
                                        percent: i,
                                        transferred: o,
                                        total: r
                                    }), s(null, e)
                                }, flush(e) {
                                    t.emit("downloadProgress", {percent: 1, transferred: o, total: r}), e()
                                }
                            })
                        }, upload(e, r, n) {
                            let o, s = 0;
                            r.emit("uploadProgress", {percent: 0, transferred: 0, total: n}), e.once("error", () => {
                                clearInterval(o)
                            }), e.once("response", () => {
                                clearInterval(o), r.emit("uploadProgress", {percent: 1, transferred: s, total: n})
                            }), e.once("socket", i => {
                                const a = () => {
                                    o = setInterval(() => {
                                        const o = s, a = e._header ? t.byteLength(e._header) : 0;
                                        s = i.bytesWritten - a, s !== o && s !== n && r.emit("uploadProgress", {
                                            percent: n ? s / n : 0,
                                            transferred: s,
                                            total: n
                                        })
                                    }, 150)
                                };
                                i.connecting ? i.once("connect", a) : i.writable && a()
                            })
                        }
                    }
                }).call(this, r("./node_modules/buffer/index.js").Buffer)
            }, "./node_modules/got/source/request-as-event-emitter.js": function (e, t, r) {
                "use strict";
                (function (t, n, o) {
                    const {URL: s} = r("./node_modules/url/url.js"), i = r("./node_modules/util/util.js"),
                        a = r("./node_modules/events/events.js"), u = r("./node_modules/stream-http/index.js"),
                        c = r("./node_modules/https-browserify/index.js"), l = r("./node_modules/url/url.js"),
                        d = r("./node_modules/cacheable-request/src/index.js"),
                        h = r("./node_modules/to-readable-stream/index.js"),
                        f = r("./node_modules/@sindresorhus/is/dist/index.js"),
                        p = r("./node_modules/@szmarczak/http-timer/source/index.js"),
                        m = r("./node_modules/got/source/utils/timed-out.js"),
                        g = r("./node_modules/got/source/utils/get-body-size.js"),
                        y = r("./node_modules/got/source/get-response.js"),
                        b = r("./node_modules/got/source/progress.js"), {CacheError: _, UnsupportedProtocolError: w, MaxRedirectsError: v, RequestError: j, TimeoutError: x} = r("./node_modules/got/source/errors.js"),
                        E = r("./node_modules/got/source/utils/url-to-options.js"),
                        S = new Set([300, 301, 302, 303, 304, 305, 307, 308]), T = new Set([300, 303, 307, 308]);
                    e.exports = (e, O) => {
                        const k = new a, A = [];
                        let R, C, P, M, L = 0, U = !1;
                        const I = e.cookieJar ? i.promisify(e.cookieJar.setCookie.bind(e.cookieJar)) : null,
                            q = e.cookieJar ? i.promisify(e.cookieJar.getCookieString.bind(e.cookieJar)) : null,
                            B = f.object(e.agent) ? e.agent : null, N = async t => {
                                try {
                                    for (const r of e.hooks.beforeError) t = await r(t);
                                    k.emit("error", t)
                                } catch (e) {
                                    k.emit("error", e)
                                }
                            }, H = async e => {
                                const o = P || C;
                                if ("http:" !== e.protocol && "https:" !== e.protocol) throw new w(e);
                                let i, a;
                                if (decodeURI(o), i = f.function(e.request) ? {request: e.request} : "https:" === e.protocol ? c : u, B) {
                                    const t = "https:" === e.protocol ? "https" : "http";
                                    e.agent = B[t] || e.agent
                                }
                                if (e.useElectronNet && t.versions.electron) {
                                    const e = (0, {x: r("./node_modules/got/source sync recursive")}["yx".slice(1)])("electron");
                                    i = e.net || e.remote.net
                                }
                                if (e.cookieJar) {
                                    const t = await q(o, {});
                                    f.nonEmptyString(t) && (e.headers.cookie = t)
                                }
                                const l = async t => {
                                    try {
                                        e.useElectronNet && (t = new Proxy(t, {
                                            get: (e, t) => {
                                                if ("trailers" === t || "rawTrailers" === t) return [];
                                                const r = e[t];
                                                return f.function(r) ? r.bind(e) : r
                                            }
                                        }));
                                        const {statusCode: r} = t;
                                        t.url = o, t.requestUrl = C, t.retryCount = L, t.timings = a, t.redirectUrls = A, t.request = {gotOptions: e};
                                        const i = t.headers["set-cookie"];
                                        if (e.cookieJar && i && await Promise.all(i.map(e => I(e, t.url))), e.followRedirect && "location" in t.headers && (T.has(r) || S.has(r) && ("GET" === e.method || "HEAD" === e.method))) {
                                            if (t.resume(), 303 === r && (e.method = "GET"), A.length >= 10) throw new v(r, A, e);
                                            const i = n.from(t.headers.location, "binary").toString(), a = new s(i, o);
                                            P = a.toString(), A.push(P);
                                            const u = {...e, ...E(a)};
                                            for (const t of e.hooks.beforeRedirect) await t(u);
                                            return k.emit("redirect", t, u), void await H(u)
                                        }
                                        y(t, e, k)
                                    } catch (e) {
                                        N(e)
                                    }
                                }, h = t => {
                                    if (U) return t.once("error", () => {
                                    }), void t.abort();
                                    R = t, t.once("error", r => {
                                        t.aborted || (r = r instanceof m.TimeoutError ? new x(r, e) : new j(r, e), !1 === k.retry(r) && N(r))
                                    }), a = p(t), b.upload(t, k, M), e.gotTimeout && m(t, e.gotTimeout, e), k.emit("request", t);
                                    const r = () => {
                                        t.emit("upload-complete")
                                    };
                                    try {
                                        f.nodeStream(e.body) ? (e.body.once("end", r), e.body.pipe(t), e.body = void 0) : e.body ? t.end(e.body, r) : !O || "POST" !== e.method && "PUT" !== e.method && "PATCH" !== e.method ? t.end(r) : (O.once("end", r), O.pipe(t))
                                    } catch (t) {
                                        N(new j(t, e))
                                    }
                                };
                                if (e.cache) {
                                    const t = new d(i.request, e.cache)(e, l);
                                    t.once("error", t => {
                                        t instanceof d.RequestError ? N(new j(t, e)) : N(new _(t, e))
                                    }), t.once("request", h)
                                } else try {
                                    h(i.request(e, l))
                                } catch (t) {
                                    N(new j(t, e))
                                }
                            };
                        return k.retry = t => {
                            let r;
                            try {
                                r = e.retry.retries(++L, t)
                            } catch (e) {
                                return void N(e)
                            }
                            if (r) {
                                return setTimeout(async e => {
                                    try {
                                        for (const r of e.hooks.beforeRetry) await r(e, t, L);
                                        await H(e)
                                    } catch (e) {
                                        N(e)
                                    }
                                }, r, {...e, forceRefresh: !0}), !0
                            }
                            return !1
                        }, k.abort = () => {
                            R ? (R.once("error", () => {
                            }), R.abort()) : U = !0
                        }, o(async () => {
                            try {
                                const {body: t} = e;
                                f.buffer(t) ? (e.body = h(t), M = t.length) : M = await g(e), f.undefined(e.headers["content-length"]) && f.undefined(e.headers["transfer-encoding"]) && (M > 0 || "PUT" === e.method) && !f.null(M) && (e.headers["content-length"] = M);
                                for (const t of e.hooks.beforeRequest) await t(e);
                                C = e.href || new s(e.path, l.format(e)).toString(), await H(e)
                            } catch (e) {
                                N(e)
                            }
                        }), k
                    }
                }).call(this, r("./node_modules/process/browser.js"), r("./node_modules/buffer/index.js").Buffer, r("./node_modules/timers-browserify/main.js").setImmediate)
            }, "./node_modules/got/source/utils/deep-freeze.js": function (e, t, r) {
                "use strict";
                const n = r("./node_modules/@sindresorhus/is/dist/index.js");
                e.exports = function e(t) {
                    for (const [r, o]of Object.entries(t)) (n.plainObject(o) || n.array(o)) && e(t[r]);
                    return Object.freeze(t)
                }
            }, "./node_modules/got/source/utils/get-body-size.js": function (e, t, r) {
                "use strict";
                (function (t) {
                    const n = r("./node_modules/node-libs-browser/mock/empty.js"), o = r("./node_modules/util/util.js"),
                        s = r("./node_modules/@sindresorhus/is/dist/index.js"),
                        i = r("./node_modules/got/source/utils/is-form-data.js");
                    e.exports = async e => {
                        const {body: r} = e;
                        if (e.headers["content-length"]) return Number(e.headers["content-length"]);
                        if (!r && !e.stream) return 0;
                        if (s.string(r)) return t.byteLength(r);
                        if (i(r)) return o.promisify(r.getLength.bind(r))();
                        if (r instanceof n.ReadStream) {
                            const {size: e} = await o.promisify(n.stat)(r.path);
                            return e
                        }
                        return null
                    }
                }).call(this, r("./node_modules/buffer/index.js").Buffer)
            }, "./node_modules/got/source/utils/is-form-data.js": function (e, t, r) {
                "use strict";
                const n = r("./node_modules/@sindresorhus/is/dist/index.js");
                e.exports = e => n.nodeStream(e) && n.function(e.getBoundary)
            }, "./node_modules/got/source/utils/timed-out.js": function (e, t, r) {
                "use strict";
                (function (t, n) {
                    const o = r("./node_modules/net/index.js");

                    class s extends Error {
                        constructor(e, t) {
                            super(`Timeout awaiting '${t}' for ${e}ms`), this.name = "TimeoutError", this.code = "ETIMEDOUT", this.event = t
                        }
                    }

                    const i = Symbol("reentry"), a = () => {
                    };
                    e.exports = (e, r, u) => {
                        if (e[i]) return;
                        e[i] = !0;
                        let c = !1;
                        const l = (e, r, ...o) => {
                            if (c) return a;
                            let s;
                            const i = setTimeout(() => {
                                s = t(r, e, ...o), s.unref && s.unref()
                            }, e);
                            i.unref && i.unref();
                            const u = () => {
                                clearTimeout(i), n(s)
                            };
                            return p.push(u), u
                        }, {host: d, hostname: h} = u, f = (t, r) => {
                            e.emit("error", new s(t, r)), e.once("error", () => {
                            }), e.abort()
                        }, p = [], m = () => {
                            c = !0, p.forEach(e => e())
                        };
                        if (e.once("error", m), e.once("response", e => {
                            e.once("end", m)
                        }), void 0 !== r.request && l(r.request, f, "request"), void 0 !== r.socket) {
                            const t = () => {
                                f(r.socket, "socket")
                            };
                            e.setTimeout(r.socket, t), p.push(() => e.removeListener("timeout", t))
                        }
                        void 0 === r.lookup || e.socketPath || o.isIP(h || d) || e.once("socket", e => {
                            if (e.connecting) {
                                const t = l(r.lookup, f, "lookup");
                                e.once("lookup", t)
                            }
                        }), void 0 !== r.connect && e.once("socket", t => {
                            if (t.connecting) {
                                const n = () => l(r.connect, f, "connect");
                                e.socketPath || o.isIP(h || d) ? t.once("connect", n()) : t.once("lookup", e => {
                                    null === e && t.once("connect", n())
                                })
                            }
                        }), void 0 !== r.secureConnect && "https:" === u.protocol && e.once("socket", e => {
                            e.connecting && e.once("connect", () => {
                                const t = l(r.secureConnect, f, "secureConnect");
                                e.once("secureConnect", t)
                            })
                        }), void 0 !== r.send && e.once("socket", t => {
                            const n = () => l(r.send, f, "send");
                            t.connecting ? t.once("connect", () => {
                                e.once("upload-complete", n())
                            }) : e.once("upload-complete", n())
                        }), void 0 !== r.response && e.once("upload-complete", () => {
                            const t = l(r.response, f, "response");
                            e.once("response", t)
                        })
                    }, e.exports.TimeoutError = s
                }).call(this, r("./node_modules/timers-browserify/main.js").setImmediate, r("./node_modules/timers-browserify/main.js").clearImmediate)
            }, "./node_modules/got/source/utils/url-to-options.js": function (e, t, r) {
                "use strict";
                const n = r("./node_modules/@sindresorhus/is/dist/index.js");
                e.exports = e => {
                    const t = {
                        protocol: e.protocol,
                        hostname: e.hostname.startsWith("[") ? e.hostname.slice(1, -1) : e.hostname,
                        hash: e.hash,
                        search: e.search,
                        pathname: e.pathname,
                        href: e.href
                    };
                    return n.string(e.port) && e.port.length > 0 && (t.port = Number(e.port)), (e.username || e.password) && (t.auth = `${e.username}:${e.password}`), t.path = n.null(e.search) ? e.pathname : `${e.pathname}${e.search}`, t
                }
            }, "./node_modules/http-cache-semantics/index.js": function (e, t, r) {
                "use strict";
                const n = [200, 203, 204, 206, 300, 301, 404, 405, 410, 414, 501],
                    o = [200, 203, 204, 300, 301, 302, 303, 307, 308, 404, 405, 410, 414, 501], s = {
                        date: !0,
                        connection: !0,
                        "keep-alive": !0,
                        "proxy-authenticate": !0,
                        "proxy-authorization": !0,
                        te: !0,
                        trailer: !0,
                        "transfer-encoding": !0,
                        upgrade: !0
                    }, i = {"content-length": !0, "content-encoding": !0, "transfer-encoding": !0, "content-range": !0};

                function a(e) {
                    const t = {};
                    if (!e) return t;
                    const r = e.trim().split(/\s*,\s*/);
                    for (const e of r) {
                        const [r, n] = e.split(/\s*=\s*/, 2);
                        t[r] = void 0 === n || n.replace(/^"|"$/g, "")
                    }
                    return t
                }

                function u(e) {
                    let t = [];
                    for (const r in e) {
                        const n = e[r];
                        t.push(!0 === n ? r : r + "=" + n)
                    }
                    if (t.length) return t.join(", ")
                }

                e.exports = class {
                    constructor(e, t, {shared: r, cacheHeuristic: n, immutableMinTimeToLive: o, ignoreCargoCult: s, trustServerDate: i, _fromObject: c} = {}) {
                        if (c) this._fromObject(c); else {
                            if (!t || !t.headers) throw Error("Response headers missing");
                            this._assertRequestHasHeaders(e), this._responseTime = this.now(), this._isShared = !1 !== r, this._trustServerDate = void 0 === i || i, this._cacheHeuristic = void 0 !== n ? n : .1, this._immutableMinTtl = void 0 !== o ? o : 864e5, this._status = "status" in t ? t.status : 200, this._resHeaders = t.headers, this._rescc = a(t.headers["cache-control"]), this._method = "method" in e ? e.method : "GET", this._url = e.url, this._host = e.headers.host, this._noAuthorization = !e.headers.authorization, this._reqHeaders = t.headers.vary ? e.headers : null, this._reqcc = a(e.headers["cache-control"]), s && "pre-check" in this._rescc && "post-check" in this._rescc && (delete this._rescc["pre-check"], delete this._rescc["post-check"], delete this._rescc["no-cache"], delete this._rescc["no-store"], delete this._rescc["must-revalidate"], this._resHeaders = Object.assign({}, this._resHeaders, {"cache-control": u(this._rescc)}), delete this._resHeaders.expires, delete this._resHeaders.pragma), null == t.headers["cache-control"] && /no-cache/.test(t.headers.pragma) && (this._rescc["no-cache"] = !0)
                        }
                    }

                    now() {
                        return Date.now()
                    }

                    storable() {
                        return !(this._reqcc["no-store"] || !("GET" === this._method || "HEAD" === this._method || "POST" === this._method && this._hasExplicitExpiration()) || -1 === o.indexOf(this._status) || this._rescc["no-store"] || this._isShared && this._rescc.private || this._isShared && !this._noAuthorization && !this._allowsStoringAuthenticated() || !(this._resHeaders.expires || this._rescc.public || this._rescc["max-age"] || this._rescc["s-maxage"] || -1 !== n.indexOf(this._status)))
                    }

                    _hasExplicitExpiration() {
                        return this._isShared && this._rescc["s-maxage"] || this._rescc["max-age"] || this._resHeaders.expires
                    }

                    _assertRequestHasHeaders(e) {
                        if (!e || !e.headers) throw Error("Request headers missing")
                    }

                    satisfiesWithoutRevalidation(e) {
                        this._assertRequestHasHeaders(e);
                        const t = a(e.headers["cache-control"]);
                        if (t["no-cache"] || /no-cache/.test(e.headers.pragma)) return !1;
                        if (t["max-age"] && this.age() > t["max-age"]) return !1;
                        if (t["min-fresh"] && this.timeToLive() < 1e3 * t["min-fresh"]) return !1;
                        if (this.stale()) {
                            if (!(t["max-stale"] && !this._rescc["must-revalidate"] && (!0 === t["max-stale"] || t["max-stale"] > this.age() - this.maxAge()))) return !1
                        }
                        return this._requestMatches(e, !1)
                    }

                    _requestMatches(e, t) {
                        return (!this._url || this._url === e.url) && this._host === e.headers.host && (!e.method || this._method === e.method || t && "HEAD" === e.method) && this._varyMatches(e)
                    }

                    _allowsStoringAuthenticated() {
                        return this._rescc["must-revalidate"] || this._rescc.public || this._rescc["s-maxage"]
                    }

                    _varyMatches(e) {
                        if (!this._resHeaders.vary) return !0;
                        if ("*" === this._resHeaders.vary) return !1;
                        const t = this._resHeaders.vary.trim().toLowerCase().split(/\s*,\s*/);
                        for (const r of t) if (e.headers[r] !== this._reqHeaders[r]) return !1;
                        return !0
                    }

                    _copyWithoutHopByHopHeaders(e) {
                        const t = {};
                        for (const r in e) s[r] || (t[r] = e[r]);
                        if (e.connection) {
                            const r = e.connection.trim().split(/\s*,\s*/);
                            for (const e of r) delete t[e]
                        }
                        if (t.warning) {
                            const e = t.warning.split(/,/).filter(e => !/^\s*1[0-9][0-9]/.test(e));
                            e.length ? t.warning = e.join(",").trim() : delete t.warning
                        }
                        return t
                    }

                    responseHeaders() {
                        const e = this._copyWithoutHopByHopHeaders(this._resHeaders), t = this.age();
                        return t > 86400 && !this._hasExplicitExpiration() && this.maxAge() > 86400 && (e.warning = (e.warning ? `${e.warning}, ` : "") + '113 - "rfc7234 5.5.4"'), e.age = `${Math.round(t)}`, e.date = new Date(this.now()).toUTCString(), e
                    }

                    date() {
                        return this._trustServerDate ? this._serverDate() : this._responseTime
                    }

                    _serverDate() {
                        const e = Date.parse(this._resHeaders.date);
                        if (isFinite(e)) {
                            const t = 288e5;
                            if (Math.abs(this._responseTime - e) < t) return e
                        }
                        return this._responseTime
                    }

                    age() {
                        let e = Math.max(0, (this._responseTime - this.date()) / 1e3);
                        if (this._resHeaders.age) {
                            let t = this._ageValue();
                            t > e && (e = t)
                        }
                        return e + (this.now() - this._responseTime) / 1e3
                    }

                    _ageValue() {
                        const e = parseInt(this._resHeaders.age);
                        return isFinite(e) ? e : 0
                    }

                    maxAge() {
                        if (!this.storable() || this._rescc["no-cache"]) return 0;
                        if (this._isShared && this._resHeaders["set-cookie"] && !this._rescc.public && !this._rescc.immutable) return 0;
                        if ("*" === this._resHeaders.vary) return 0;
                        if (this._isShared) {
                            if (this._rescc["proxy-revalidate"]) return 0;
                            if (this._rescc["s-maxage"]) return parseInt(this._rescc["s-maxage"], 10)
                        }
                        if (this._rescc["max-age"]) return parseInt(this._rescc["max-age"], 10);
                        const e = this._rescc.immutable ? this._immutableMinTtl : 0, t = this._serverDate();
                        if (this._resHeaders.expires) {
                            const r = Date.parse(this._resHeaders.expires);
                            return Number.isNaN(r) || r < t ? 0 : Math.max(e, (r - t) / 1e3)
                        }
                        if (this._resHeaders["last-modified"]) {
                            const r = Date.parse(this._resHeaders["last-modified"]);
                            if (isFinite(r) && t > r) return Math.max(e, (t - r) / 1e3 * this._cacheHeuristic)
                        }
                        return e
                    }

                    timeToLive() {
                        return 1e3 * Math.max(0, this.maxAge() - this.age())
                    }

                    stale() {
                        return this.maxAge() <= this.age()
                    }

                    static fromObject(e) {
                        return new this(void 0, void 0, {_fromObject: e})
                    }

                    _fromObject(e) {
                        if (this._responseTime) throw Error("Reinitialized");
                        if (!e || 1 !== e.v) throw Error("Invalid serialization");
                        this._responseTime = e.t, this._isShared = e.sh, this._cacheHeuristic = e.ch, this._immutableMinTtl = void 0 !== e.imm ? e.imm : 864e5, this._status = e.st, this._resHeaders = e.resh, this._rescc = e.rescc, this._method = e.m, this._url = e.u, this._host = e.h, this._noAuthorization = e.a, this._reqHeaders = e.reqh, this._reqcc = e.reqcc
                    }

                    toObject() {
                        return {
                            v: 1,
                            t: this._responseTime,
                            sh: this._isShared,
                            ch: this._cacheHeuristic,
                            imm: this._immutableMinTtl,
                            st: this._status,
                            resh: this._resHeaders,
                            rescc: this._rescc,
                            m: this._method,
                            u: this._url,
                            h: this._host,
                            a: this._noAuthorization,
                            reqh: this._reqHeaders,
                            reqcc: this._reqcc
                        }
                    }

                    revalidationHeaders(e) {
                        this._assertRequestHasHeaders(e);
                        const t = this._copyWithoutHopByHopHeaders(e.headers);
                        if (delete t["if-range"], !this._requestMatches(e, !0) || !this.storable()) return delete t["if-none-match"], delete t["if-modified-since"], t;
                        if (this._resHeaders.etag && (t["if-none-match"] = t["if-none-match"] ? `${t["if-none-match"]}, ${this._resHeaders.etag}` : this._resHeaders.etag), t["accept-ranges"] || t["if-match"] || t["if-unmodified-since"] || this._method && "GET" != this._method) {
                            if (delete t["if-modified-since"], t["if-none-match"]) {
                                const e = t["if-none-match"].split(/,/).filter(e => !/^\s*W\//.test(e));
                                e.length ? t["if-none-match"] = e.join(",").trim() : delete t["if-none-match"]
                            }
                        } else this._resHeaders["last-modified"] && !t["if-modified-since"] && (t["if-modified-since"] = this._resHeaders["last-modified"]);
                        return t
                    }

                    revalidatedPolicy(e, t) {
                        if (this._assertRequestHasHeaders(e), !t || !t.headers) throw Error("Response headers missing");
                        let r = !1;
                        if (void 0 !== t.status && 304 != t.status ? r = !1 : t.headers.etag && !/^\s*W\//.test(t.headers.etag) ? r = this._resHeaders.etag && this._resHeaders.etag.replace(/^\s*W\//, "") === t.headers.etag : this._resHeaders.etag && t.headers.etag ? r = this._resHeaders.etag.replace(/^\s*W\//, "") === t.headers.etag.replace(/^\s*W\//, "") : this._resHeaders["last-modified"] ? r = this._resHeaders["last-modified"] === t.headers["last-modified"] : this._resHeaders.etag || this._resHeaders["last-modified"] || t.headers.etag || t.headers["last-modified"] || (r = !0), !r) return {
                            policy: new this.constructor(e, t),
                            modified: 304 != t.status,
                            matches: !1
                        };
                        const n = {};
                        for (const e in this._resHeaders) n[e] = e in t.headers && !i[e] ? t.headers[e] : this._resHeaders[e];
                        const o = Object.assign({}, t, {status: this._status, method: this._method, headers: n});
                        return {
                            policy: new this.constructor(e, o, {
                                shared: this._isShared,
                                cacheHeuristic: this._cacheHeuristic,
                                immutableMinTimeToLive: this._immutableMinTtl,
                                trustServerDate: this._trustServerDate
                            }), modified: !1, matches: !0
                        }
                    }
                }
            }, "./node_modules/https-browserify/index.js": function (e, t, r) {
                var n = r("./node_modules/stream-http/index.js"), o = r("./node_modules/url/url.js"), s = e.exports;
                for (var i in n) n.hasOwnProperty(i) && (s[i] = n[i]);

                function a(e) {
                    if ("string" == typeof e && (e = o.parse(e)), e.protocol || (e.protocol = "https:"), "https:" !== e.protocol) throw new Error('Protocol "' + e.protocol + '" not supported. Expected "https:"');
                    return e
                }

                s.request = function (e, t) {
                    return e = a(e), n.request.call(this, e, t)
                }, s.get = function (e, t) {
                    return e = a(e), n.get.call(this, e, t)
                }
            }, "./node_modules/ieee754/index.js": function (e, t) {
                t.read = function (e, t, r, n, o) {
                    var s, i, a = 8 * o - n - 1, u = (1 << a) - 1, c = u >> 1, l = -7, d = r ? o - 1 : 0,
                        h = r ? -1 : 1, f = e[t + d];
                    for (d += h, s = f & (1 << -l) - 1, f >>= -l, l += a; l > 0; s = 256 * s + e[t + d], d += h, l -= 8) ;
                    for (i = s & (1 << -l) - 1, s >>= -l, l += n; l > 0; i = 256 * i + e[t + d], d += h, l -= 8) ;
                    if (0 === s) s = 1 - c; else {
                        if (s === u) return i ? NaN : 1 / 0 * (f ? -1 : 1);
                        i += Math.pow(2, n), s -= c
                    }
                    return (f ? -1 : 1) * i * Math.pow(2, s - n)
                }, t.write = function (e, t, r, n, o, s) {
                    var i, a, u, c = 8 * s - o - 1, l = (1 << c) - 1, d = l >> 1,
                        h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = n ? 0 : s - 1, p = n ? 1 : -1,
                        m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, i = l) : (i = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -i)) < 1 && (i--, u *= 2), (t += i + d >= 1 ? h / u : h * Math.pow(2, 1 - d)) * u >= 2 && (i++, u /= 2), i + d >= l ? (a = 0, i = l) : i + d >= 1 ? (a = (t * u - 1) * Math.pow(2, o), i += d) : (a = t * Math.pow(2, d - 1) * Math.pow(2, o), i = 0)); o >= 8; e[r + f] = 255 & a, f += p, a /= 256, o -= 8) ;
                    for (i = i << o | a, c += o; c > 0; e[r + f] = 255 & i, f += p, i /= 256, c -= 8) ;
                    e[r + f - p] |= 128 * m
                }
            }, "./node_modules/inherits/inherits_browser.js": function (e, t) {
                "function" == typeof Object.create ? e.exports = function (e, t) {
                    t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }))
                } : e.exports = function (e, t) {
                    if (t) {
                        e.super_ = t;
                        var r = function () {
                        };
                        r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                    }
                }
            }, "./node_modules/isarray/index.js": function (e, t) {
                var r = {}.toString;
                e.exports = Array.isArray || function (e) {
                    return "[object Array]" == r.call(e)
                }
            }, "./node_modules/json-buffer/index.js": function (e, t, r) {
                (function (e) {
                    t.stringify = function t(r) {
                        if (void 0 === r) return r;
                        if (r && e.isBuffer(r)) return JSON.stringify(":base64:" + r.toString("base64"));
                        if (r && r.toJSON && (r = r.toJSON()), r && "object" == typeof r) {
                            var n = "", o = Array.isArray(r);
                            n = o ? "[" : "{";
                            var s = !0;
                            for (var i in r) {
                                var a = "function" == typeof r[i] || !o && void 0 === r[i];
                                Object.hasOwnProperty.call(r, i) && !a && (s || (n += ","), s = !1, o ? null == r[i] ? n += "null" : n += t(r[i]) : void 0 !== r[i] && (n += t(i) + ":" + t(r[i])))
                            }
                            return n += o ? "]" : "}"
                        }
                        return "string" == typeof r ? JSON.stringify(/^:/.test(r) ? ":" + r : r) : void 0 === r ? "null" : JSON.stringify(r)
                    }, t.parse = function (t) {
                        return JSON.parse(t, (function (t, r) {
                            return "string" == typeof r ? /^:base64:/.test(r) ? new e(r.substring(8), "base64") : /^:/.test(r) ? r.substring(1) : r : r
                        }))
                    }
                }).call(this, r("./node_modules/buffer/index.js").Buffer)
            }, "./node_modules/keyv/src sync recursive": function (e, t) {
                function r(e) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }

                r.keys = function () {
                    return []
                }, r.resolve = r, e.exports = r, r.id = "./node_modules/keyv/src sync recursive"
            }, "./node_modules/keyv/src/index.js": function (e, t, r) {
                "use strict";
                const n = r("./node_modules/events/events.js"), o = r("./node_modules/json-buffer/index.js"), s = e => {
                    const t = {
                        redis: "@keyv/redis",
                        mongodb: "@keyv/mongo",
                        mongo: "@keyv/mongo",
                        sqlite: "@keyv/sqlite",
                        postgresql: "@keyv/postgres",
                        postgres: "@keyv/postgres",
                        mysql: "@keyv/mysql"
                    };
                    if (e.adapter || e.uri) {
                        const n = e.adapter || /^[^:]*/.exec(e.uri)[0];
                        return new (r("./node_modules/keyv/src sync recursive")(t[n]))(e)
                    }
                    return new Map
                };
                e.exports = class extends n {
                    constructor(e, t) {
                        if (super(), this.opts = Object.assign({
                            namespace: "keyv",
                            serialize: o.stringify,
                            deserialize: o.parse
                        }, "string" == typeof e ? {uri: e} : e, t), !this.opts.store) {
                            const e = Object.assign({}, this.opts);
                            this.opts.store = s(e)
                        }
                        "function" == typeof this.opts.store.on && this.opts.store.on("error", e => this.emit("error", e)), this.opts.store.namespace = this.opts.namespace
                    }

                    _getKeyPrefix(e) {
                        return `${this.opts.namespace}:${e}`
                    }

                    get(e) {
                        e = this._getKeyPrefix(e);
                        const t = this.opts.store;
                        return Promise.resolve().then(() => t.get(e)).then(t => {
                            if (void 0 !== (t = "string" == typeof t ? this.opts.deserialize(t) : t)) {
                                if (!("number" == typeof t.expires && Date.now() > t.expires)) return t.value;
                                this.delete(e)
                            }
                        })
                    }

                    set(e, t, r) {
                        e = this._getKeyPrefix(e), void 0 === r && (r = this.opts.ttl), 0 === r && (r = void 0);
                        const n = this.opts.store;
                        return Promise.resolve().then(() => {
                            const o = "number" == typeof r ? Date.now() + r : null;
                            return t = {value: t, expires: o}, n.set(e, this.opts.serialize(t), r)
                        }).then(() => !0)
                    }

                    delete(e) {
                        e = this._getKeyPrefix(e);
                        const t = this.opts.store;
                        return Promise.resolve().then(() => t.delete(e))
                    }

                    clear() {
                        const e = this.opts.store;
                        return Promise.resolve().then(() => e.clear())
                    }
                }
            }, "./node_modules/lowercase-keys/index.js": function (e, t, r) {
                "use strict";
                e.exports = function (e) {
                    for (var t = {}, r = Object.keys(Object(e)), n = 0; n < r.length; n++) t[r[n].toLowerCase()] = e[r[n]];
                    return t
                }
            }, "./node_modules/mimic-response/index.js": function (e, t, r) {
                "use strict";
                const n = ["destroy", "setTimeout", "socket", "headers", "trailers", "rawHeaders", "statusCode", "httpVersion", "httpVersionMinor", "httpVersionMajor", "rawTrailers", "statusMessage"];
                e.exports = (e, t) => {
                    const r = new Set(Object.keys(e).concat(n));
                    for (const n of r) n in t || (t[n] = "function" == typeof e[n] ? e[n].bind(e) : e[n])
                }
            }, "./node_modules/net/index.js": function (e, t, r) {
                (function (e) {
                    var t = r("./node_modules/net/index.js");
                    for (k in t) e[k] = t[k]
                }).call(this, r("./node_modules/webpack/buildin/global.js"))
            }, "./node_modules/node-libs-browser/mock/empty.js": function (e, t) {
            }, "./node_modules/node-libs-browser/node_modules/punycode/punycode.js": function (e, t, r) {
                (function (e, n) {
                    var o;
                    !function (s) {
                        t && t.nodeType, e && e.nodeType;
                        var i = "object" == typeof n && n;
                        i.global !== i && i.window !== i && i.self;
                        var a, u = 2147483647, c = 36, l = 1, d = 26, h = 38, f = 700, p = 72, m = 128, g = "-",
                            y = /^xn--/, b = /[^\x20-\x7E]/, _ = /[\x2E\u3002\uFF0E\uFF61]/g, w = {
                                overflow: "Overflow: input needs wider integers to process",
                                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                                "invalid-input": "Invalid input"
                            }, v = c - l, j = Math.floor, x = String.fromCharCode;

                        function E(e) {
                            throw new RangeError(w[e])
                        }

                        function S(e, t) {
                            for (var r = e.length, n = []; r--;) n[r] = t(e[r]);
                            return n
                        }

                        function T(e, t) {
                            var r = e.split("@"), n = "";
                            return r.length > 1 && (n = r[0] + "@", e = r[1]), n + S((e = e.replace(_, ".")).split("."), t).join(".")
                        }

                        function O(e) {
                            for (var t, r, n = [], o = 0, s = e.length; o < s;) (t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < s ? 56320 == (64512 & (r = e.charCodeAt(o++))) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t), o--) : n.push(t);
                            return n
                        }

                        function k(e) {
                            return S(e, (function (e) {
                                var t = "";
                                return e > 65535 && (t += x((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += x(e)
                            })).join("")
                        }

                        function A(e, t) {
                            return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                        }

                        function R(e, t, r) {
                            var n = 0;
                            for (e = r ? j(e / f) : e >> 1, e += j(e / t); e > v * d >> 1; n += c) e = j(e / v);
                            return j(n + (v + 1) * e / (e + h))
                        }

                        function C(e) {
                            var t, r, n, o, s, i, a, h, f, y, b, _ = [], w = e.length, v = 0, x = m, S = p;
                            for ((r = e.lastIndexOf(g)) < 0 && (r = 0), n = 0; n < r; ++n) e.charCodeAt(n) >= 128 && E("not-basic"), _.push(e.charCodeAt(n));
                            for (o = r > 0 ? r + 1 : 0; o < w;) {
                                for (s = v, i = 1, a = c; o >= w && E("invalid-input"), ((h = (b = e.charCodeAt(o++)) - 48 < 10 ? b - 22 : b - 65 < 26 ? b - 65 : b - 97 < 26 ? b - 97 : c) >= c || h > j((u - v) / i)) && E("overflow"), v += h * i, !(h < (f = a <= S ? l : a >= S + d ? d : a - S)); a += c) i > j(u / (y = c - f)) && E("overflow"), i *= y;
                                S = R(v - s, t = _.length + 1, 0 == s), j(v / t) > u - x && E("overflow"), x += j(v / t), v %= t, _.splice(v++, 0, x)
                            }
                            return k(_)
                        }

                        function P(e) {
                            var t, r, n, o, s, i, a, h, f, y, b, _, w, v, S, T = [];
                            for (_ = (e = O(e)).length, t = m, r = 0, s = p, i = 0; i < _; ++i) (b = e[i]) < 128 && T.push(x(b));
                            for (n = o = T.length, o && T.push(g); n < _;) {
                                for (a = u, i = 0; i < _; ++i) (b = e[i]) >= t && b < a && (a = b);
                                for (a - t > j((u - r) / (w = n + 1)) && E("overflow"), r += (a - t) * w, t = a, i = 0; i < _; ++i) if ((b = e[i]) < t && ++r > u && E("overflow"), b == t) {
                                    for (h = r, f = c; !(h < (y = f <= s ? l : f >= s + d ? d : f - s)); f += c) S = h - y, v = c - y, T.push(x(A(y + S % v, 0))), h = j(S / v);
                                    T.push(x(A(h, 0))), s = R(r, w, n == o), r = 0, ++n
                                }
                                ++r, ++t
                            }
                            return T.join("")
                        }

                        a = {
                            version: "1.4.1",
                            ucs2: {decode: O, encode: k},
                            decode: C,
                            encode: P,
                            toASCII: function (e) {
                                return T(e, (function (e) {
                                    return b.test(e) ? "xn--" + P(e) : e
                                }))
                            },
                            toUnicode: function (e) {
                                return T(e, (function (e) {
                                    return y.test(e) ? C(e.slice(4).toLowerCase()) : e
                                }))
                            }
                        }, void 0 === (o = function () {
                            return a
                        }.call(t, r, t, e)) || (e.exports = o)
                    }()
                }).call(this, r("./node_modules/webpack/buildin/module.js")(e), r("./node_modules/webpack/buildin/global.js"))
            }, "./node_modules/normalize-url/index.js": function (e, t, r) {
                "use strict";
                const n = "undefined" == typeof URL ? r("./node_modules/url/url.js").URL : URL,
                    o = (e, t) => t.some(t => t instanceof RegExp ? t.test(e) : t === e), s = (e, t) => {
                        if (t = {
                            defaultProtocol: "http:",
                            normalizeProtocol: !0,
                            forceHttp: !1,
                            forceHttps: !1,
                            stripAuthentication: !0,
                            stripHash: !1,
                            stripWWW: !0,
                            removeQueryParameters: [/^utm_\w+/i],
                            removeTrailingSlash: !0,
                            removeDirectoryIndex: !1,
                            sortQueryParameters: !0, ...t
                        }, Reflect.has(t, "normalizeHttps")) throw new Error("options.normalizeHttps is renamed to options.forceHttp");
                        if (Reflect.has(t, "normalizeHttp")) throw new Error("options.normalizeHttp is renamed to options.forceHttps");
                        if (Reflect.has(t, "stripFragment")) throw new Error("options.stripFragment is renamed to options.stripHash");
                        if (e = e.trim(), /^data:/i.test(e)) return ((e, {stripHash: t}) => {
                            const r = e.match(/^data:(.*?),(.*?)(?:#(.*))?$/);
                            if (!r) throw new Error(`Invalid URL: ${e}`);
                            const n = r[1].split(";"), o = r[2], s = t ? "" : r[3];
                            let i = !1;
                            "base64" === n[n.length - 1] && (n.pop(), i = !0);
                            const a = (n.shift() || "").toLowerCase(), u = [...n.map(e => {
                                let [t, r = ""] = e.split("=").map(e => e.trim());
                                return "charset" === t && (r = r.toLowerCase(), "us-ascii" === r) ? "" : `${t}${r ? `=${r}` : ""}`
                            }).filter(Boolean)];
                            return i && u.push("base64"), (0 !== u.length || a && "text/plain" !== a) && u.unshift(a), `data:${u.join(";")},${i ? o.trim() : o}${s ? `#${s}` : ""}`
                        })(e, t);
                        const r = e.startsWith("//");
                        !r && /^\.*\//.test(e) || (e = e.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, t.defaultProtocol));
                        const s = new n(e);
                        if (t.forceHttp && t.forceHttps) throw new Error("The `forceHttp` and `forceHttps` options cannot be used together");
                        if (t.forceHttp && "https:" === s.protocol && (s.protocol = "http:"), t.forceHttps && "http:" === s.protocol && (s.protocol = "https:"), t.stripAuthentication && (s.username = "", s.password = ""), t.stripHash && (s.hash = ""), s.pathname && (s.pathname = s.pathname.replace(/((?!:).|^)\/{2,}/g, (e, t) => /^(?!\/)/g.test(t) ? `${t}/` : "/")), s.pathname && (s.pathname = decodeURI(s.pathname)), !0 === t.removeDirectoryIndex && (t.removeDirectoryIndex = [/^index\.[a-z]+$/]), Array.isArray(t.removeDirectoryIndex) && t.removeDirectoryIndex.length > 0) {
                            let e = s.pathname.split("/");
                            const r = e[e.length - 1];
                            o(r, t.removeDirectoryIndex) && (e = e.slice(0, e.length - 1), s.pathname = e.slice(1).join("/") + "/")
                        }
                        if (s.hostname && (s.hostname = s.hostname.replace(/\.$/, ""), t.stripWWW && /^www\.([a-z\-\d]{2,63})\.([a-z.]{2,5})$/.test(s.hostname) && (s.hostname = s.hostname.replace(/^www\./, ""))), Array.isArray(t.removeQueryParameters)) for (const e of[...s.searchParams.keys()]) o(e, t.removeQueryParameters) && s.searchParams.delete(e);
                        return t.sortQueryParameters && s.searchParams.sort(), t.removeTrailingSlash && (s.pathname = s.pathname.replace(/\/$/, "")), e = s.toString(), !t.removeTrailingSlash && "/" !== s.pathname || "" !== s.hash || (e = e.replace(/\/$/, "")), r && !t.normalizeProtocol && (e = e.replace(/^http:\/\//, "//")), t.stripProtocol && (e = e.replace(/^(?:https?:)?\/\//, "")), e
                    };
                e.exports = s, e.exports.default = s
            }, "./node_modules/once/once.js": function (e, t, r) {
                var n = r("./node_modules/wrappy/wrappy.js");

                function o(e) {
                    var t = function () {
                        return t.called ? t.value : (t.called = !0, t.value = e.apply(this, arguments))
                    };
                    return t.called = !1, t
                }

                function s(e) {
                    var t = function () {
                        if (t.called) throw new Error(t.onceError);
                        return t.called = !0, t.value = e.apply(this, arguments)
                    }, r = e.name || "Function wrapped with `once`";
                    return t.onceError = r + " shouldn't be called more than once", t.called = !1, t
                }

                e.exports = n(o), e.exports.strict = n(s), o.proto = o((function () {
                    Object.defineProperty(Function.prototype, "once", {
                        value: function () {
                            return o(this)
                        }, configurable: !0
                    }), Object.defineProperty(Function.prototype, "onceStrict", {
                        value: function () {
                            return s(this)
                        }, configurable: !0
                    })
                }))
            }, "./node_modules/p-cancelable/index.js": function (e, t, r) {
                "use strict";

                class n extends Error {
                    constructor(e) {
                        super(e || "Promise was canceled"), this.name = "CancelError"
                    }

                    get isCanceled() {
                        return !0
                    }
                }

                class o {
                    static fn(e) {
                        return (...t) => new o((r, n, o) => {
                            t.push(o), e(...t).then(r, n)
                        })
                    }

                    constructor(e) {
                        this._cancelHandlers = [], this._isPending = !0, this._isCanceled = !1, this._rejectOnCancel = !0, this._promise = new Promise((t, r) => {
                            this._reject = r;
                            const n = e => {
                                this._cancelHandlers.push(e)
                            };
                            return Object.defineProperties(n, {
                                shouldReject: {
                                    get: () => this._rejectOnCancel,
                                    set: e => {
                                        this._rejectOnCancel = e
                                    }
                                }
                            }), e(e => {
                                this._isPending = !1, t(e)
                            }, e => {
                                this._isPending = !1, r(e)
                            }, n)
                        })
                    }

                    then(e, t) {
                        return this._promise.then(e, t)
                    }

                    catch(e) {
                        return this._promise.catch(e)
                    }

                    finally(e) {
                        return this._promise.finally(e)
                    }

                    cancel(e) {
                        if (this._isPending && !this._isCanceled) {
                            if (this._cancelHandlers.length > 0) try {
                                for (const e of this._cancelHandlers) e()
                            } catch (e) {
                                this._reject(e)
                            }
                            this._isCanceled = !0, this._rejectOnCancel && this._reject(new n(e))
                        }
                    }

                    get isCanceled() {
                        return this._isCanceled
                    }
                }

                Object.setPrototypeOf(o.prototype, Promise.prototype), e.exports = o, e.exports.default = o, e.exports.CancelError = n
            }, "./node_modules/prepend-http/index.js": function (e, t, r) {
                "use strict";
                e.exports = (e, t) => {
                    if ("string" != typeof e) throw new TypeError(`Expected \`url\` to be of type \`string\`, got \`${typeof e}\``);
                    return e = e.trim(), t = Object.assign({https: !1}, t), /^\.*\/|^(?!localhost)\w+:/.test(e) ? e : e.replace(/^(?!(?:\w+:)?\/\/)/, t.https ? "https://" : "http://")
                }
            }, "./node_modules/process-nextick-args/index.js": function (e, t, r) {
                "use strict";
                (function (t) {
                    void 0 === t || !t.version || 0 === t.version.indexOf("v0.") || 0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8.") ? e.exports = {
                        nextTick: function (e, r, n, o) {
                            if ("function" != typeof e) throw new TypeError('"callback" argument must be a function');
                            var s, i, a = arguments.length;
                            switch (a) {
                                case 0:
                                case 1:
                                    return t.nextTick(e);
                                case 2:
                                    return t.nextTick((function () {
                                        e.call(null, r)
                                    }));
                                case 3:
                                    return t.nextTick((function () {
                                        e.call(null, r, n)
                                    }));
                                case 4:
                                    return t.nextTick((function () {
                                        e.call(null, r, n, o)
                                    }));
                                default:
                                    for (s = new Array(a - 1), i = 0; i < s.length;) s[i++] = arguments[i];
                                    return t.nextTick((function () {
                                        e.apply(null, s)
                                    }))
                            }
                        }
                    } : e.exports = t
                }).call(this, r("./node_modules/process/browser.js"))
            }, "./node_modules/process/browser.js": function (e, t) {
                var r, n, o = e.exports = {};

                function s() {
                    throw new Error("setTimeout has not been defined")
                }

                function i() {
                    throw new Error("clearTimeout has not been defined")
                }

                function a(e) {
                    if (r === setTimeout) return setTimeout(e, 0);
                    if ((r === s || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
                    try {
                        return r(e, 0)
                    } catch (t) {
                        try {
                            return r.call(null, e, 0)
                        } catch (t) {
                            return r.call(this, e, 0)
                        }
                    }
                }

                !function () {
                    try {
                        r = "function" == typeof setTimeout ? setTimeout : s
                    } catch (e) {
                        r = s
                    }
                    try {
                        n = "function" == typeof clearTimeout ? clearTimeout : i
                    } catch (e) {
                        n = i
                    }
                }();
                var u, c = [], l = !1, d = -1;

                function h() {
                    l && u && (l = !1, u.length ? c = u.concat(c) : d = -1, c.length && f())
                }

                function f() {
                    if (!l) {
                        var e = a(h);
                        l = !0;
                        for (var t = c.length; t;) {
                            for (u = c, c = []; ++d < t;) u && u[d].run();
                            d = -1, t = c.length
                        }
                        u = null, l = !1, function (e) {
                            if (n === clearTimeout) return clearTimeout(e);
                            if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                            try {
                                n(e)
                            } catch (t) {
                                try {
                                    return n.call(null, e)
                                } catch (t) {
                                    return n.call(this, e)
                                }
                            }
                        }(e)
                    }
                }

                function p(e, t) {
                    this.fun = e, this.array = t
                }

                function m() {
                }

                o.nextTick = function (e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    c.push(new p(e, t)), 1 !== c.length || l || a(f)
                }, p.prototype.run = function () {
                    this.fun.apply(null, this.array)
                }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function (e) {
                    return []
                }, o.binding = function (e) {
                    throw new Error("process.binding is not supported")
                }, o.cwd = function () {
                    return "/"
                }, o.chdir = function (e) {
                    throw new Error("process.chdir is not supported")
                }, o.umask = function () {
                    return 0
                }
            }, "./node_modules/pump/index.js": function (e, t, r) {
                (function (t) {
                    var n = r("./node_modules/once/once.js"), o = r("./node_modules/end-of-stream/index.js"), s = r(2),
                        i = function () {
                        }, a = /^v?\.0/.test(t.version), u = function (e) {
                            return "function" == typeof e
                        }, c = function (e, t, r, c) {
                            c = n(c);
                            var l = !1;
                            e.on("close", (function () {
                                l = !0
                            })), o(e, {readable: t, writable: r}, (function (e) {
                                if (e) return c(e);
                                l = !0, c()
                            }));
                            var d = !1;
                            return function (t) {
                                if (!l && !d) return d = !0, function (e) {
                                    return !!a && (!!s && ((e instanceof (s.ReadStream || i) || e instanceof (s.WriteStream || i)) && u(e.close)))
                                }(e) ? e.close(i) : function (e) {
                                    return e.setHeader && u(e.abort)
                                }(e) ? e.abort() : u(e.destroy) ? e.destroy() : void c(t || new Error("stream was destroyed"))
                            }
                        }, l = function (e) {
                            e()
                        }, d = function (e, t) {
                            return e.pipe(t)
                        };
                    e.exports = function () {
                        var e, t = Array.prototype.slice.call(arguments), r = u(t[t.length - 1] || i) && t.pop() || i;
                        if (Array.isArray(t[0]) && (t = t[0]), t.length < 2) throw new Error("pump requires two streams per minimum");
                        var n = t.map((function (o, s) {
                            var i = s < t.length - 1;
                            return c(o, i, s > 0, (function (t) {
                                e || (e = t), t && n.forEach(l), i || (n.forEach(l), r(e))
                            }))
                        }));
                        return t.reduce(d)
                    }
                }).call(this, r("./node_modules/process/browser.js"))
            }, "./node_modules/querystring-es3/decode.js": function (e, t, r) {
                "use strict";

                function n(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }

                e.exports = function (e, t, r, s) {
                    t = t || "&", r = r || "=";
                    var i = {};
                    if ("string" != typeof e || 0 === e.length) return i;
                    var a = /\+/g;
                    e = e.split(t);
                    var u = 1e3;
                    s && "number" == typeof s.maxKeys && (u = s.maxKeys);
                    var c = e.length;
                    u > 0 && c > u && (c = u);
                    for (var l = 0; l < c; ++l) {
                        var d, h, f, p, m = e[l].replace(a, "%20"), g = m.indexOf(r);
                        g >= 0 ? (d = m.substr(0, g), h = m.substr(g + 1)) : (d = m, h = ""), f = decodeURIComponent(d), p = decodeURIComponent(h), n(i, f) ? o(i[f]) ? i[f].push(p) : i[f] = [i[f], p] : i[f] = p
                    }
                    return i
                };
                var o = Array.isArray || function (e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }
            }, "./node_modules/querystring-es3/encode.js": function (e, t, r) {
                "use strict";
                var n = function (e) {
                    switch (typeof e) {
                        case"string":
                            return e;
                        case"boolean":
                            return e ? "true" : "false";
                        case"number":
                            return isFinite(e) ? e : "";
                        default:
                            return ""
                    }
                };
                e.exports = function (e, t, r, a) {
                    return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? s(i(e), (function (i) {
                        var a = encodeURIComponent(n(i)) + r;
                        return o(e[i]) ? s(e[i], (function (e) {
                            return a + encodeURIComponent(n(e))
                        })).join(t) : a + encodeURIComponent(n(e[i]))
                    })).join(t) : a ? encodeURIComponent(n(a)) + r + encodeURIComponent(n(e)) : ""
                };
                var o = Array.isArray || function (e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                };

                function s(e, t) {
                    if (e.map) return e.map(t);
                    for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
                    return r
                }

                var i = Object.keys || function (e) {
                    var t = [];
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                    return t
                }
            }, "./node_modules/querystring-es3/index.js": function (e, t, r) {
                "use strict";
                t.decode = t.parse = r("./node_modules/querystring-es3/decode.js"), t.encode = t.stringify = r("./node_modules/querystring-es3/encode.js")
            }, "./node_modules/readable-stream/duplex-browser.js": function (e, t, r) {
                e.exports = r("./node_modules/readable-stream/lib/_stream_duplex.js")
            }, "./node_modules/readable-stream/lib/_stream_duplex.js": function (e, t, r) {
                "use strict";
                var n = r("./node_modules/process-nextick-args/index.js"), o = Object.keys || function (e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t
                };
                e.exports = d;
                var s = r("./node_modules/core-util-is/lib/util.js");
                s.inherits = r("./node_modules/inherits/inherits_browser.js");
                var i = r("./node_modules/readable-stream/lib/_stream_readable.js"),
                    a = r("./node_modules/readable-stream/lib/_stream_writable.js");
                s.inherits(d, i);
                for (var u = o(a.prototype), c = 0; c < u.length; c++) {
                    var l = u[c];
                    d.prototype[l] || (d.prototype[l] = a.prototype[l])
                }

                function d(e) {
                    if (!(this instanceof d)) return new d(e);
                    i.call(this, e), a.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", h)
                }

                function h() {
                    this.allowHalfOpen || this._writableState.ended || n.nextTick(f, this)
                }

                function f(e) {
                    e.end()
                }

                Object.defineProperty(d.prototype, "writableHighWaterMark", {
                    enumerable: !1, get: function () {
                        return this._writableState.highWaterMark
                    }
                }), Object.defineProperty(d.prototype, "destroyed", {
                    get: function () {
                        return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
                    }, set: function (e) {
                        void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
                    }
                }), d.prototype._destroy = function (e, t) {
                    this.push(null), this.end(), n.nextTick(t, e)
                }
            }, "./node_modules/readable-stream/lib/_stream_passthrough.js": function (e, t, r) {
                "use strict";
                e.exports = s;
                var n = r("./node_modules/readable-stream/lib/_stream_transform.js"),
                    o = r("./node_modules/core-util-is/lib/util.js");

                function s(e) {
                    if (!(this instanceof s)) return new s(e);
                    n.call(this, e)
                }

                o.inherits = r("./node_modules/inherits/inherits_browser.js"), o.inherits(s, n), s.prototype._transform = function (e, t, r) {
                    r(null, e)
                }
            }, "./node_modules/readable-stream/lib/_stream_readable.js": function (e, t, r) {
                "use strict";
                (function (t, n) {
                    var o = r("./node_modules/process-nextick-args/index.js");
                    e.exports = _;
                    var s, i = r("./node_modules/isarray/index.js");
                    _.ReadableState = b;
                    r("./node_modules/events/events.js").EventEmitter;
                    var a = function (e, t) {
                            return e.listeners(t).length
                        }, u = r("./node_modules/readable-stream/lib/internal/streams/stream-browser.js"),
                        c = r("./node_modules/safe-buffer/index.js").Buffer, l = t.Uint8Array || function () {
                        };
                    var d = r("./node_modules/core-util-is/lib/util.js");
                    d.inherits = r("./node_modules/inherits/inherits_browser.js");
                    var h = r(0), f = void 0;
                    f = h && h.debuglog ? h.debuglog("stream") : function () {
                    };
                    var p, m = r("./node_modules/readable-stream/lib/internal/streams/BufferList.js"),
                        g = r("./node_modules/readable-stream/lib/internal/streams/destroy.js");
                    d.inherits(_, u);
                    var y = ["error", "close", "destroy", "pause", "resume"];

                    function b(e, t) {
                        e = e || {};
                        var n = t instanceof (s = s || r("./node_modules/readable-stream/lib/_stream_duplex.js"));
                        this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.readableObjectMode);
                        var o = e.highWaterMark, i = e.readableHighWaterMark, a = this.objectMode ? 16 : 16384;
                        this.highWaterMark = o || 0 === o ? o : n && (i || 0 === i) ? i : a, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new m, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (p || (p = r("./node_modules/string_decoder/lib/string_decoder.js").StringDecoder), this.decoder = new p(e.encoding), this.encoding = e.encoding)
                    }

                    function _(e) {
                        if (s = s || r("./node_modules/readable-stream/lib/_stream_duplex.js"), !(this instanceof _)) return new _(e);
                        this._readableState = new b(e, this), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), u.call(this)
                    }

                    function w(e, t, r, n, o) {
                        var s, i = e._readableState;
                        null === t ? (i.reading = !1, function (e, t) {
                            if (t.ended) return;
                            if (t.decoder) {
                                var r = t.decoder.end();
                                r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length)
                            }
                            t.ended = !0, E(e)
                        }(e, i)) : (o || (s = function (e, t) {
                            var r;
                            n = t, c.isBuffer(n) || n instanceof l || "string" == typeof t || void 0 === t || e.objectMode || (r = new TypeError("Invalid non-string/buffer chunk"));
                            var n;
                            return r
                        }(i, t)), s ? e.emit("error", s) : i.objectMode || t && t.length > 0 ? ("string" == typeof t || i.objectMode || Object.getPrototypeOf(t) === c.prototype || (t = function (e) {
                            return c.from(e)
                        }(t)), n ? i.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : v(e, i, t, !0) : i.ended ? e.emit("error", new Error("stream.push() after EOF")) : (i.reading = !1, i.decoder && !r ? (t = i.decoder.write(t), i.objectMode || 0 !== t.length ? v(e, i, t, !1) : T(e, i)) : v(e, i, t, !1))) : n || (i.reading = !1));
                        return function (e) {
                            return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
                        }(i)
                    }

                    function v(e, t, r, n) {
                        t.flowing && 0 === t.length && !t.sync ? (e.emit("data", r), e.read(0)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && E(e)), T(e, t)
                    }

                    Object.defineProperty(_.prototype, "destroyed", {
                        get: function () {
                            return void 0 !== this._readableState && this._readableState.destroyed
                        }, set: function (e) {
                            this._readableState && (this._readableState.destroyed = e)
                        }
                    }), _.prototype.destroy = g.destroy, _.prototype._undestroy = g.undestroy, _.prototype._destroy = function (e, t) {
                        this.push(null), t(e)
                    }, _.prototype.push = function (e, t) {
                        var r, n = this._readableState;
                        return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = c.from(e, t), t = ""), r = !0), w(this, e, t, !1, r)
                    }, _.prototype.unshift = function (e) {
                        return w(this, e, null, !0, !1)
                    }, _.prototype.isPaused = function () {
                        return !1 === this._readableState.flowing
                    }, _.prototype.setEncoding = function (e) {
                        return p || (p = r("./node_modules/string_decoder/lib/string_decoder.js").StringDecoder), this._readableState.decoder = new p(e), this._readableState.encoding = e, this
                    };
                    var j = 8388608;

                    function x(e, t) {
                        return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function (e) {
                            return e >= j ? e = j : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
                        }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
                    }

                    function E(e) {
                        var t = e._readableState;
                        t.needReadable = !1, t.emittedReadable || (f("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? o.nextTick(S, e) : S(e))
                    }

                    function S(e) {
                        f("emit readable"), e.emit("readable"), R(e)
                    }

                    function T(e, t) {
                        t.readingMore || (t.readingMore = !0, o.nextTick(O, e, t))
                    }

                    function O(e, t) {
                        for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (f("maybeReadMore read 0"), e.read(0), r !== t.length);) r = t.length;
                        t.readingMore = !1
                    }

                    function k(e) {
                        f("readable nexttick read 0"), e.read(0)
                    }

                    function A(e, t) {
                        t.reading || (f("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), R(e), t.flowing && !t.reading && e.read(0)
                    }

                    function R(e) {
                        var t = e._readableState;
                        for (f("flow", t.flowing); t.flowing && null !== e.read();) ;
                    }

                    function C(e, t) {
                        return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : r = function (e, t, r) {
                            var n;
                            e < t.head.data.length ? (n = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : n = e === t.head.data.length ? t.shift() : r ? function (e, t) {
                                var r = t.head, n = 1, o = r.data;
                                e -= o.length;
                                for (; r = r.next;) {
                                    var s = r.data, i = e > s.length ? s.length : e;
                                    if (i === s.length ? o += s : o += s.slice(0, e), 0 === (e -= i)) {
                                        i === s.length ? (++n, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r, r.data = s.slice(i));
                                        break
                                    }
                                    ++n
                                }
                                return t.length -= n, o
                            }(e, t) : function (e, t) {
                                var r = c.allocUnsafe(e), n = t.head, o = 1;
                                n.data.copy(r), e -= n.data.length;
                                for (; n = n.next;) {
                                    var s = n.data, i = e > s.length ? s.length : e;
                                    if (s.copy(r, r.length - e, 0, i), 0 === (e -= i)) {
                                        i === s.length ? (++o, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, n.data = s.slice(i));
                                        break
                                    }
                                    ++o
                                }
                                return t.length -= o, r
                            }(e, t);
                            return n
                        }(e, t.buffer, t.decoder), r);
                        var r
                    }

                    function P(e) {
                        var t = e._readableState;
                        if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
                        t.endEmitted || (t.ended = !0, o.nextTick(M, t, e))
                    }

                    function M(e, t) {
                        e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"))
                    }

                    function L(e, t) {
                        for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
                        return -1
                    }

                    _.prototype.read = function (e) {
                        f("read", e), e = parseInt(e, 10);
                        var t = this._readableState, r = e;
                        if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return f("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? P(this) : E(this), null;
                        if (0 === (e = x(e, t)) && t.ended) return 0 === t.length && P(this), null;
                        var n, o = t.needReadable;
                        return f("need readable", o), (0 === t.length || t.length - e < t.highWaterMark) && f("length less than watermark", o = !0), t.ended || t.reading ? f("reading or ended", o = !1) : o && (f("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = x(r, t))), null === (n = e > 0 ? C(e, t) : null) ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && P(this)), null !== n && this.emit("data", n), n
                    }, _.prototype._read = function (e) {
                        this.emit("error", new Error("_read() is not implemented"))
                    }, _.prototype.pipe = function (e, t) {
                        var r = this, s = this._readableState;
                        switch (s.pipesCount) {
                            case 0:
                                s.pipes = e;
                                break;
                            case 1:
                                s.pipes = [s.pipes, e];
                                break;
                            default:
                                s.pipes.push(e)
                        }
                        s.pipesCount += 1, f("pipe count=%d opts=%j", s.pipesCount, t);
                        var u = (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr ? l : _;

                        function c(t, n) {
                            f("onunpipe"), t === r && n && !1 === n.hasUnpiped && (n.hasUnpiped = !0, f("cleanup"), e.removeListener("close", y), e.removeListener("finish", b), e.removeListener("drain", d), e.removeListener("error", g), e.removeListener("unpipe", c), r.removeListener("end", l), r.removeListener("end", _), r.removeListener("data", m), h = !0, !s.awaitDrain || e._writableState && !e._writableState.needDrain || d())
                        }

                        function l() {
                            f("onend"), e.end()
                        }

                        s.endEmitted ? o.nextTick(u) : r.once("end", u), e.on("unpipe", c);
                        var d = function (e) {
                            return function () {
                                var t = e._readableState;
                                f("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && a(e, "data") && (t.flowing = !0, R(e))
                            }
                        }(r);
                        e.on("drain", d);
                        var h = !1;
                        var p = !1;

                        function m(t) {
                            f("ondata"), p = !1, !1 !== e.write(t) || p || ((1 === s.pipesCount && s.pipes === e || s.pipesCount > 1 && -1 !== L(s.pipes, e)) && !h && (f("false write response, pause", r._readableState.awaitDrain), r._readableState.awaitDrain++, p = !0), r.pause())
                        }

                        function g(t) {
                            f("onerror", t), _(), e.removeListener("error", g), 0 === a(e, "error") && e.emit("error", t)
                        }

                        function y() {
                            e.removeListener("finish", b), _()
                        }

                        function b() {
                            f("onfinish"), e.removeListener("close", y), _()
                        }

                        function _() {
                            f("unpipe"), r.unpipe(e)
                        }

                        return r.on("data", m), function (e, t, r) {
                            if ("function" == typeof e.prependListener) return e.prependListener(t, r);
                            e._events && e._events[t] ? i(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
                        }(e, "error", g), e.once("close", y), e.once("finish", b), e.emit("pipe", r), s.flowing || (f("pipe resume"), r.resume()), e
                    }, _.prototype.unpipe = function (e) {
                        var t = this._readableState, r = {hasUnpiped: !1};
                        if (0 === t.pipesCount) return this;
                        if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r), this);
                        if (!e) {
                            var n = t.pipes, o = t.pipesCount;
                            t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                            for (var s = 0; s < o; s++) n[s].emit("unpipe", this, r);
                            return this
                        }
                        var i = L(t.pipes, e);
                        return -1 === i ? this : (t.pipes.splice(i, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r), this)
                    }, _.prototype.on = function (e, t) {
                        var r = u.prototype.on.call(this, e, t);
                        if ("data" === e) !1 !== this._readableState.flowing && this.resume(); else if ("readable" === e) {
                            var n = this._readableState;
                            n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.emittedReadable = !1, n.reading ? n.length && E(this) : o.nextTick(k, this))
                        }
                        return r
                    }, _.prototype.addListener = _.prototype.on, _.prototype.resume = function () {
                        var e = this._readableState;
                        return e.flowing || (f("resume"), e.flowing = !0, function (e, t) {
                            t.resumeScheduled || (t.resumeScheduled = !0, o.nextTick(A, e, t))
                        }(this, e)), this
                    }, _.prototype.pause = function () {
                        return f("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (f("pause"), this._readableState.flowing = !1, this.emit("pause")), this
                    }, _.prototype.wrap = function (e) {
                        var t = this, r = this._readableState, n = !1;
                        for (var o in e.on("end", (function () {
                            if (f("wrapped end"), r.decoder && !r.ended) {
                                var e = r.decoder.end();
                                e && e.length && t.push(e)
                            }
                            t.push(null)
                        })), e.on("data", (function (o) {
                            (f("wrapped data"), r.decoder && (o = r.decoder.write(o)), r.objectMode && null == o) || (r.objectMode || o && o.length) && (t.push(o) || (n = !0, e.pause()))
                        })), e) void 0 === this[o] && "function" == typeof e[o] && (this[o] = function (t) {
                            return function () {
                                return e[t].apply(e, arguments)
                            }
                        }(o));
                        for (var s = 0; s < y.length; s++) e.on(y[s], this.emit.bind(this, y[s]));
                        return this._read = function (t) {
                            f("wrapped _read", t), n && (n = !1, e.resume())
                        }, this
                    }, Object.defineProperty(_.prototype, "readableHighWaterMark", {
                        enumerable: !1, get: function () {
                            return this._readableState.highWaterMark
                        }
                    }), _._fromList = C
                }).call(this, r("./node_modules/webpack/buildin/global.js"), r("./node_modules/process/browser.js"))
            }, "./node_modules/readable-stream/lib/_stream_transform.js": function (e, t, r) {
                "use strict";
                e.exports = i;
                var n = r("./node_modules/readable-stream/lib/_stream_duplex.js"),
                    o = r("./node_modules/core-util-is/lib/util.js");

                function s(e, t) {
                    var r = this._transformState;
                    r.transforming = !1;
                    var n = r.writecb;
                    if (!n) return this.emit("error", new Error("write callback called multiple times"));
                    r.writechunk = null, r.writecb = null, null != t && this.push(t), n(e);
                    var o = this._readableState;
                    o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark)
                }

                function i(e) {
                    if (!(this instanceof i)) return new i(e);
                    n.call(this, e), this._transformState = {
                        afterTransform: s.bind(this),
                        needTransform: !1,
                        transforming: !1,
                        writecb: null,
                        writechunk: null,
                        writeencoding: null
                    }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", a)
                }

                function a() {
                    var e = this;
                    "function" == typeof this._flush ? this._flush((function (t, r) {
                        u(e, t, r)
                    })) : u(this, null, null)
                }

                function u(e, t, r) {
                    if (t) return e.emit("error", t);
                    if (null != r && e.push(r), e._writableState.length) throw new Error("Calling transform done when ws.length != 0");
                    if (e._transformState.transforming) throw new Error("Calling transform done when still transforming");
                    return e.push(null)
                }

                o.inherits = r("./node_modules/inherits/inherits_browser.js"), o.inherits(i, n), i.prototype.push = function (e, t) {
                    return this._transformState.needTransform = !1, n.prototype.push.call(this, e, t)
                }, i.prototype._transform = function (e, t, r) {
                    throw new Error("_transform() is not implemented")
                }, i.prototype._write = function (e, t, r) {
                    var n = this._transformState;
                    if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
                        var o = this._readableState;
                        (n.needTransform || o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark)
                    }
                }, i.prototype._read = function (e) {
                    var t = this._transformState;
                    null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
                }, i.prototype._destroy = function (e, t) {
                    var r = this;
                    n.prototype._destroy.call(this, e, (function (e) {
                        t(e), r.emit("close")
                    }))
                }
            }, "./node_modules/readable-stream/lib/_stream_writable.js": function (e, t, r) {
                "use strict";
                (function (t, n, o) {
                    var s = r("./node_modules/process-nextick-args/index.js");

                    function i(e) {
                        var t = this;
                        this.next = null, this.entry = null, this.finish = function () {
                            !function (e, t, r) {
                                var n = e.entry;
                                e.entry = null;
                                for (; n;) {
                                    var o = n.callback;
                                    t.pendingcb--, o(r), n = n.next
                                }
                                t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
                            }(t, e)
                        }
                    }

                    e.exports = b;
                    var a, u = !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1 ? n : s.nextTick;
                    b.WritableState = y;
                    var c = r("./node_modules/core-util-is/lib/util.js");
                    c.inherits = r("./node_modules/inherits/inherits_browser.js");
                    var l = {deprecate: r("./node_modules/util-deprecate/browser.js")},
                        d = r("./node_modules/readable-stream/lib/internal/streams/stream-browser.js"),
                        h = r("./node_modules/safe-buffer/index.js").Buffer, f = o.Uint8Array || function () {
                        };
                    var p, m = r("./node_modules/readable-stream/lib/internal/streams/destroy.js");

                    function g() {
                    }

                    function y(e, t) {
                        a = a || r("./node_modules/readable-stream/lib/_stream_duplex.js"), e = e || {};
                        var n = t instanceof a;
                        this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.writableObjectMode);
                        var o = e.highWaterMark, c = e.writableHighWaterMark, l = this.objectMode ? 16 : 16384;
                        this.highWaterMark = o || 0 === o ? o : n && (c || 0 === c) ? c : l, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                        var d = !1 === e.decodeStrings;
                        this.decodeStrings = !d, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (e) {
                            !function (e, t) {
                                var r = e._writableState, n = r.sync, o = r.writecb;
                                if (function (e) {
                                    e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
                                }(r), t) !function (e, t, r, n, o) {
                                    --t.pendingcb, r ? (s.nextTick(o, n), s.nextTick(E, e, t), e._writableState.errorEmitted = !0, e.emit("error", n)) : (o(n), e._writableState.errorEmitted = !0, e.emit("error", n), E(e, t))
                                }(e, r, n, t, o); else {
                                    var i = j(r);
                                    i || r.corked || r.bufferProcessing || !r.bufferedRequest || v(e, r), n ? u(w, e, r, i, o) : w(e, r, i, o)
                                }
                            }(t, e)
                        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new i(this)
                    }

                    function b(e) {
                        if (a = a || r("./node_modules/readable-stream/lib/_stream_duplex.js"), !(p.call(b, this) || this instanceof a)) return new b(e);
                        this._writableState = new y(e, this), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), d.call(this)
                    }

                    function _(e, t, r, n, o, s, i) {
                        t.writelen = n, t.writecb = i, t.writing = !0, t.sync = !0, r ? e._writev(o, t.onwrite) : e._write(o, s, t.onwrite), t.sync = !1
                    }

                    function w(e, t, r, n) {
                        r || function (e, t) {
                            0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
                        }(e, t), t.pendingcb--, n(), E(e, t)
                    }

                    function v(e, t) {
                        t.bufferProcessing = !0;
                        var r = t.bufferedRequest;
                        if (e._writev && r && r.next) {
                            var n = t.bufferedRequestCount, o = new Array(n), s = t.corkedRequestsFree;
                            s.entry = r;
                            for (var a = 0, u = !0; r;) o[a] = r, r.isBuf || (u = !1), r = r.next, a += 1;
                            o.allBuffers = u, _(e, t, !0, t.length, o, "", s.finish), t.pendingcb++, t.lastBufferedRequest = null, s.next ? (t.corkedRequestsFree = s.next, s.next = null) : t.corkedRequestsFree = new i(t), t.bufferedRequestCount = 0
                        } else {
                            for (; r;) {
                                var c = r.chunk, l = r.encoding, d = r.callback;
                                if (_(e, t, !1, t.objectMode ? 1 : c.length, c, l, d), r = r.next, t.bufferedRequestCount--, t.writing) break
                            }
                            null === r && (t.lastBufferedRequest = null)
                        }
                        t.bufferedRequest = r, t.bufferProcessing = !1
                    }

                    function j(e) {
                        return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
                    }

                    function x(e, t) {
                        e._final((function (r) {
                            t.pendingcb--, r && e.emit("error", r), t.prefinished = !0, e.emit("prefinish"), E(e, t)
                        }))
                    }

                    function E(e, t) {
                        var r = j(t);
                        return r && (!function (e, t) {
                            t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++, t.finalCalled = !0, s.nextTick(x, e, t)) : (t.prefinished = !0, e.emit("prefinish")))
                        }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"))), r
                    }

                    c.inherits(b, d), y.prototype.getBuffer = function () {
                        for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                        return t
                    }, function () {
                        try {
                            Object.defineProperty(y.prototype, "buffer", {
                                get: l.deprecate((function () {
                                    return this.getBuffer()
                                }), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                            })
                        } catch (e) {
                        }
                    }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (p = Function.prototype[Symbol.hasInstance], Object.defineProperty(b, Symbol.hasInstance, {
                        value: function (e) {
                            return !!p.call(this, e) || this === b && (e && e._writableState instanceof y)
                        }
                    })) : p = function (e) {
                        return e instanceof this
                    }, b.prototype.pipe = function () {
                        this.emit("error", new Error("Cannot pipe, not readable"))
                    }, b.prototype.write = function (e, t, r) {
                        var n, o = this._writableState, i = !1,
                            a = !o.objectMode && (n = e, h.isBuffer(n) || n instanceof f);
                        return a && !h.isBuffer(e) && (e = function (e) {
                            return h.from(e)
                        }(e)), "function" == typeof t && (r = t, t = null), a ? t = "buffer" : t || (t = o.defaultEncoding), "function" != typeof r && (r = g), o.ended ? function (e, t) {
                            var r = new Error("write after end");
                            e.emit("error", r), s.nextTick(t, r)
                        }(this, r) : (a || function (e, t, r, n) {
                            var o = !0, i = !1;
                            return null === r ? i = new TypeError("May not write null values to stream") : "string" == typeof r || void 0 === r || t.objectMode || (i = new TypeError("Invalid non-string/buffer chunk")), i && (e.emit("error", i), s.nextTick(n, i), o = !1), o
                        }(this, o, e, r)) && (o.pendingcb++, i = function (e, t, r, n, o, s) {
                            if (!r) {
                                var i = function (e, t, r) {
                                    e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = h.from(t, r));
                                    return t
                                }(t, n, o);
                                n !== i && (r = !0, o = "buffer", n = i)
                            }
                            var a = t.objectMode ? 1 : n.length;
                            t.length += a;
                            var u = t.length < t.highWaterMark;
                            u || (t.needDrain = !0);
                            if (t.writing || t.corked) {
                                var c = t.lastBufferedRequest;
                                t.lastBufferedRequest = {
                                    chunk: n,
                                    encoding: o,
                                    isBuf: r,
                                    callback: s,
                                    next: null
                                }, c ? c.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                            } else _(e, t, !1, a, n, o, s);
                            return u
                        }(this, o, a, e, t, r)), i
                    }, b.prototype.cork = function () {
                        this._writableState.corked++
                    }, b.prototype.uncork = function () {
                        var e = this._writableState;
                        e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || v(this, e))
                    }, b.prototype.setDefaultEncoding = function (e) {
                        if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + e);
                        return this._writableState.defaultEncoding = e, this
                    }, Object.defineProperty(b.prototype, "writableHighWaterMark", {
                        enumerable: !1, get: function () {
                            return this._writableState.highWaterMark
                        }
                    }), b.prototype._write = function (e, t, r) {
                        r(new Error("_write() is not implemented"))
                    }, b.prototype._writev = null, b.prototype.end = function (e, t, r) {
                        var n = this._writableState;
                        "function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t, t = null), null != e && this.write(e, t), n.corked && (n.corked = 1, this.uncork()), n.ending || n.finished || function (e, t, r) {
                            t.ending = !0, E(e, t), r && (t.finished ? s.nextTick(r) : e.once("finish", r));
                            t.ended = !0, e.writable = !1
                        }(this, n, r)
                    }, Object.defineProperty(b.prototype, "destroyed", {
                        get: function () {
                            return void 0 !== this._writableState && this._writableState.destroyed
                        }, set: function (e) {
                            this._writableState && (this._writableState.destroyed = e)
                        }
                    }), b.prototype.destroy = m.destroy, b.prototype._undestroy = m.undestroy, b.prototype._destroy = function (e, t) {
                        this.end(), t(e)
                    }
                }).call(this, r("./node_modules/process/browser.js"), r("./node_modules/timers-browserify/main.js").setImmediate, r("./node_modules/webpack/buildin/global.js"))
            }, "./node_modules/readable-stream/lib/internal/streams/BufferList.js": function (e, t, r) {
                "use strict";
                var n = r("./node_modules/safe-buffer/index.js").Buffer, o = r(1);
                e.exports = function () {
                    function e() {
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.head = null, this.tail = null, this.length = 0
                    }

                    return e.prototype.push = function (e) {
                        var t = {data: e, next: null};
                        this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
                    }, e.prototype.unshift = function (e) {
                        var t = {data: e, next: this.head};
                        0 === this.length && (this.tail = t), this.head = t, ++this.length
                    }, e.prototype.shift = function () {
                        if (0 !== this.length) {
                            var e = this.head.data;
                            return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                        }
                    }, e.prototype.clear = function () {
                        this.head = this.tail = null, this.length = 0
                    }, e.prototype.join = function (e) {
                        if (0 === this.length) return "";
                        for (var t = this.head, r = "" + t.data; t = t.next;) r += e + t.data;
                        return r
                    }, e.prototype.concat = function (e) {
                        if (0 === this.length) return n.alloc(0);
                        if (1 === this.length) return this.head.data;
                        for (var t, r, o, s = n.allocUnsafe(e >>> 0), i = this.head, a = 0; i;) t = i.data, r = s, o = a, t.copy(r, o), a += i.data.length, i = i.next;
                        return s
                    }, e
                }(), o && o.inspect && o.inspect.custom && (e.exports.prototype[o.inspect.custom] = function () {
                    var e = o.inspect({length: this.length});
                    return this.constructor.name + " " + e
                })
            }, "./node_modules/readable-stream/lib/internal/streams/destroy.js": function (e, t, r) {
                "use strict";
                var n = r("./node_modules/process-nextick-args/index.js");

                function o(e, t) {
                    e.emit("error", t)
                }

                e.exports = {
                    destroy: function (e, t) {
                        var r = this, s = this._readableState && this._readableState.destroyed,
                            i = this._writableState && this._writableState.destroyed;
                        return s || i ? (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || n.nextTick(o, this, e), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, (function (e) {
                            !t && e ? (n.nextTick(o, r, e), r._writableState && (r._writableState.errorEmitted = !0)) : t && t(e)
                        })), this)
                    }, undestroy: function () {
                        this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                    }
                }
            }, "./node_modules/readable-stream/lib/internal/streams/stream-browser.js": function (e, t, r) {
                e.exports = r("./node_modules/events/events.js").EventEmitter
            }, "./node_modules/readable-stream/passthrough.js": function (e, t, r) {
                e.exports = r("./node_modules/readable-stream/readable-browser.js").PassThrough
            }, "./node_modules/readable-stream/readable-browser.js": function (e, t, r) {
                (t = e.exports = r("./node_modules/readable-stream/lib/_stream_readable.js")).Stream = t, t.Readable = t, t.Writable = r("./node_modules/readable-stream/lib/_stream_writable.js"), t.Duplex = r("./node_modules/readable-stream/lib/_stream_duplex.js"), t.Transform = r("./node_modules/readable-stream/lib/_stream_transform.js"), t.PassThrough = r("./node_modules/readable-stream/lib/_stream_passthrough.js")
            }, "./node_modules/readable-stream/transform.js": function (e, t, r) {
                e.exports = r("./node_modules/readable-stream/readable-browser.js").Transform
            }, "./node_modules/readable-stream/writable-browser.js": function (e, t, r) {
                e.exports = r("./node_modules/readable-stream/lib/_stream_writable.js")
            }, "./node_modules/responselike/src/index.js": function (e, t, r) {
                "use strict";
                (function (t) {
                    const n = r("./node_modules/stream-browserify/index.js").Readable,
                        o = r("./node_modules/lowercase-keys/index.js");
                    e.exports = class extends n {
                        constructor(e, r, n, s) {
                            if ("number" != typeof e) throw new TypeError("Argument `statusCode` should be a number");
                            if ("object" != typeof r) throw new TypeError("Argument `headers` should be an object");
                            if (!(n instanceof t)) throw new TypeError("Argument `body` should be a buffer");
                            if ("string" != typeof s) throw new TypeError("Argument `url` should be a string");
                            super(), this.statusCode = e, this.headers = o(r), this.body = n, this.url = s
                        }

                        _read() {
                            this.push(this.body), this.push(null)
                        }
                    }
                }).call(this, r("./node_modules/buffer/index.js").Buffer)
            }, "./node_modules/safe-buffer/index.js": function (e, t, r) {
                var n = r("./node_modules/buffer/index.js"), o = n.Buffer;

                function s(e, t) {
                    for (var r in e) t[r] = e[r]
                }

                function i(e, t, r) {
                    return o(e, t, r)
                }

                o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? e.exports = n : (s(n, t), t.Buffer = i), s(o, i), i.from = function (e, t, r) {
                    if ("number" == typeof e) throw new TypeError("Argument must not be a number");
                    return o(e, t, r)
                }, i.alloc = function (e, t, r) {
                    if ("number" != typeof e) throw new TypeError("Argument must be a number");
                    var n = o(e);
                    return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n
                }, i.allocUnsafe = function (e) {
                    if ("number" != typeof e) throw new TypeError("Argument must be a number");
                    return o(e)
                }, i.allocUnsafeSlow = function (e) {
                    if ("number" != typeof e) throw new TypeError("Argument must be a number");
                    return n.SlowBuffer(e)
                }
            }, "./node_modules/setimmediate/setImmediate.js": function (e, t, r) {
                (function (e, t) {
                    !function (e, r) {
                        "use strict";
                        if (!e.setImmediate) {
                            var n, o = 1, s = {}, i = !1, a = e.document,
                                u = Object.getPrototypeOf && Object.getPrototypeOf(e);
                            u = u && u.setTimeout ? u : e, "[object process]" === {}.toString.call(e.process) ? n = function (e) {
                                t.nextTick((function () {
                                    l(e)
                                }))
                            } : function () {
                                if (e.postMessage && !e.importScripts) {
                                    var t = !0, r = e.onmessage;
                                    return e.onmessage = function () {
                                        t = !1
                                    }, e.postMessage("", "*"), e.onmessage = r, t
                                }
                            }() ? function () {
                                var t = "setImmediate$" + Math.random() + "$", r = function (r) {
                                    r.source === e && "string" == typeof r.data && 0 === r.data.indexOf(t) && l(+r.data.slice(t.length))
                                };
                                e.addEventListener ? e.addEventListener("message", r, !1) : e.attachEvent("onmessage", r), n = function (r) {
                                    e.postMessage(t + r, "*")
                                }
                            }() : e.MessageChannel ? function () {
                                var e = new MessageChannel;
                                e.port1.onmessage = function (e) {
                                    l(e.data)
                                }, n = function (t) {
                                    e.port2.postMessage(t)
                                }
                            }() : a && "onreadystatechange" in a.createElement("script") ? function () {
                                var e = a.documentElement;
                                n = function (t) {
                                    var r = a.createElement("script");
                                    r.onreadystatechange = function () {
                                        l(t), r.onreadystatechange = null, e.removeChild(r), r = null
                                    }, e.appendChild(r)
                                }
                            }() : n = function (e) {
                                setTimeout(l, 0, e)
                            }, u.setImmediate = function (e) {
                                "function" != typeof e && (e = new Function("" + e));
                                for (var t = new Array(arguments.length - 1), r = 0; r < t.length; r++) t[r] = arguments[r + 1];
                                var i = {callback: e, args: t};
                                return s[o] = i, n(o), o++
                            }, u.clearImmediate = c
                        }

                        function c(e) {
                            delete s[e]
                        }

                        function l(e) {
                            if (i) setTimeout(l, 0, e); else {
                                var t = s[e];
                                if (t) {
                                    i = !0;
                                    try {
                                        !function (e) {
                                            var t = e.callback, n = e.args;
                                            switch (n.length) {
                                                case 0:
                                                    t();
                                                    break;
                                                case 1:
                                                    t(n[0]);
                                                    break;
                                                case 2:
                                                    t(n[0], n[1]);
                                                    break;
                                                case 3:
                                                    t(n[0], n[1], n[2]);
                                                    break;
                                                default:
                                                    t.apply(r, n)
                                            }
                                        }(t)
                                    } finally {
                                        c(e), i = !1
                                    }
                                }
                            }
                        }
                    }("undefined" == typeof self ? void 0 === e ? this : e : self)
                }).call(this, r("./node_modules/webpack/buildin/global.js"), r("./node_modules/process/browser.js"))
            }, "./node_modules/stream-browserify/index.js": function (e, t, r) {
                e.exports = o;
                var n = r("./node_modules/events/events.js").EventEmitter;

                function o() {
                    n.call(this)
                }

                r("./node_modules/inherits/inherits_browser.js")(o, n), o.Readable = r("./node_modules/readable-stream/readable-browser.js"), o.Writable = r("./node_modules/readable-stream/writable-browser.js"), o.Duplex = r("./node_modules/readable-stream/duplex-browser.js"), o.Transform = r("./node_modules/readable-stream/transform.js"), o.PassThrough = r("./node_modules/readable-stream/passthrough.js"), o.Stream = o, o.prototype.pipe = function (e, t) {
                    var r = this;

                    function o(t) {
                        e.writable && !1 === e.write(t) && r.pause && r.pause()
                    }

                    function s() {
                        r.readable && r.resume && r.resume()
                    }

                    r.on("data", o), e.on("drain", s), e._isStdio || t && !1 === t.end || (r.on("end", a), r.on("close", u));
                    var i = !1;

                    function a() {
                        i || (i = !0, e.end())
                    }

                    function u() {
                        i || (i = !0, "function" == typeof e.destroy && e.destroy())
                    }

                    function c(e) {
                        if (l(), 0 === n.listenerCount(this, "error")) throw e
                    }

                    function l() {
                        r.removeListener("data", o), e.removeListener("drain", s), r.removeListener("end", a), r.removeListener("close", u), r.removeListener("error", c), e.removeListener("error", c), r.removeListener("end", l), r.removeListener("close", l), e.removeListener("close", l)
                    }

                    return r.on("error", c), e.on("error", c), r.on("end", l), r.on("close", l), e.on("close", l), e.emit("pipe", r), e
                }
            }, "./node_modules/stream-http/index.js": function (e, t, r) {
                (function (e) {
                    var n = r("./node_modules/stream-http/lib/request.js"),
                        o = r("./node_modules/stream-http/lib/response.js"), s = r("./node_modules/xtend/immutable.js"),
                        i = r("./node_modules/builtin-status-codes/browser.js"), a = r("./node_modules/url/url.js"),
                        u = t;
                    u.request = function (t, r) {
                        t = "string" == typeof t ? a.parse(t) : s(t);
                        var o = -1 === e.location.protocol.search(/^https?:$/) ? "http:" : "", i = t.protocol || o,
                            u = t.hostname || t.host, c = t.port, l = t.path || "/";
                        u && -1 !== u.indexOf(":") && (u = "[" + u + "]"), t.url = (u ? i + "//" + u : "") + (c ? ":" + c : "") + l, t.method = (t.method || "GET").toUpperCase(), t.headers = t.headers || {};
                        var d = new n(t);
                        return r && d.on("response", r), d
                    }, u.get = function (e, t) {
                        var r = u.request(e, t);
                        return r.end(), r
                    }, u.ClientRequest = n, u.IncomingMessage = o.IncomingMessage, u.Agent = function () {
                    }, u.Agent.defaultMaxSockets = 4, u.globalAgent = new u.Agent, u.STATUS_CODES = i, u.METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"]
                }).call(this, r("./node_modules/webpack/buildin/global.js"))
            }, "./node_modules/stream-http/lib/capability.js": function (e, t, r) {
                (function (e) {
                    t.fetch = a(e.fetch) && a(e.ReadableStream), t.writableStream = a(e.WritableStream), t.abortController = a(e.AbortController), t.blobConstructor = !1;
                    try {
                        new Blob([new ArrayBuffer(1)]), t.blobConstructor = !0
                    } catch (e) {
                    }
                    var r;

                    function n() {
                        if (void 0 !== r) return r;
                        if (e.XMLHttpRequest) {
                            r = new e.XMLHttpRequest;
                            try {
                                r.open("GET", e.XDomainRequest ? "/" : "https://example.com")
                            } catch (e) {
                                r = null
                            }
                        } else r = null;
                        return r
                    }

                    function o(e) {
                        var t = n();
                        if (!t) return !1;
                        try {
                            return t.responseType = e, t.responseType === e
                        } catch (e) {
                        }
                        return !1
                    }

                    var s = void 0 !== e.ArrayBuffer, i = s && a(e.ArrayBuffer.prototype.slice);

                    function a(e) {
                        return "function" == typeof e
                    }

                    t.arraybuffer = t.fetch || s && o("arraybuffer"), t.msstream = !t.fetch && i && o("ms-stream"), t.mozchunkedarraybuffer = !t.fetch && s && o("moz-chunked-arraybuffer"), t.overrideMimeType = t.fetch || !!n() && a(n().overrideMimeType), t.vbArray = a(e.VBArray), r = null
                }).call(this, r("./node_modules/webpack/buildin/global.js"))
            }, "./node_modules/stream-http/lib/request.js": function (e, t, r) {
                (function (t, n, o) {
                    var s = r("./node_modules/stream-http/lib/capability.js"),
                        i = r("./node_modules/inherits/inherits_browser.js"),
                        a = r("./node_modules/stream-http/lib/response.js"),
                        u = r("./node_modules/readable-stream/readable-browser.js"),
                        c = r("./node_modules/to-arraybuffer/index.js"), l = a.IncomingMessage, d = a.readyStates;
                    var h = e.exports = function (e) {
                        var r, n = this;
                        u.Writable.call(n), n._opts = e, n._body = [], n._headers = {}, e.auth && n.setHeader("Authorization", "Basic " + new t(e.auth).toString("base64")), Object.keys(e.headers).forEach((function (t) {
                            n.setHeader(t, e.headers[t])
                        }));
                        var o = !0;
                        if ("disable-fetch" === e.mode || "requestTimeout" in e && !s.abortController) o = !1, r = !0; else if ("prefer-streaming" === e.mode) r = !1; else if ("allow-wrong-content-type" === e.mode) r = !s.overrideMimeType; else {
                            if (e.mode && "default" !== e.mode && "prefer-fast" !== e.mode) throw new Error("Invalid value for opts.mode");
                            r = !0
                        }
                        n._mode = function (e, t) {
                            return s.fetch && t ? "fetch" : s.mozchunkedarraybuffer ? "moz-chunked-arraybuffer" : s.msstream ? "ms-stream" : s.arraybuffer && e ? "arraybuffer" : s.vbArray && e ? "text:vbarray" : "text"
                        }(r, o), n._fetchTimer = null, n.on("finish", (function () {
                            n._onFinish()
                        }))
                    };
                    i(h, u.Writable), h.prototype.setHeader = function (e, t) {
                        var r = e.toLowerCase();
                        -1 === f.indexOf(r) && (this._headers[r] = {name: e, value: t})
                    }, h.prototype.getHeader = function (e) {
                        var t = this._headers[e.toLowerCase()];
                        return t ? t.value : null
                    }, h.prototype.removeHeader = function (e) {
                        delete this._headers[e.toLowerCase()]
                    }, h.prototype._onFinish = function () {
                        var e = this;
                        if (!e._destroyed) {
                            var r = e._opts, i = e._headers, a = null;
                            "GET" !== r.method && "HEAD" !== r.method && (a = s.arraybuffer ? c(t.concat(e._body)) : s.blobConstructor ? new n.Blob(e._body.map((function (e) {
                                return c(e)
                            })), {type: (i["content-type"] || {}).value || ""}) : t.concat(e._body).toString());
                            var u = [];
                            if (Object.keys(i).forEach((function (e) {
                                var t = i[e].name, r = i[e].value;
                                Array.isArray(r) ? r.forEach((function (e) {
                                    u.push([t, e])
                                })) : u.push([t, r])
                            })), "fetch" === e._mode) {
                                var l = null;
                                if (s.abortController) {
                                    var h = new AbortController;
                                    l = h.signal, e._fetchAbortController = h, "requestTimeout" in r && 0 !== r.requestTimeout && (e._fetchTimer = n.setTimeout((function () {
                                        e.emit("requestTimeout"), e._fetchAbortController && e._fetchAbortController.abort()
                                    }), r.requestTimeout))
                                }
                                n.fetch(e._opts.url, {
                                    method: e._opts.method,
                                    headers: u,
                                    body: a || void 0,
                                    mode: "cors",
                                    credentials: r.withCredentials ? "include" : "same-origin",
                                    signal: l
                                }).then((function (t) {
                                    e._fetchResponse = t, e._connect()
                                }), (function (t) {
                                    n.clearTimeout(e._fetchTimer), e._destroyed || e.emit("error", t)
                                }))
                            } else {
                                var f = e._xhr = new n.XMLHttpRequest;
                                try {
                                    f.open(e._opts.method, e._opts.url, !0)
                                } catch (t) {
                                    return void o.nextTick((function () {
                                        e.emit("error", t)
                                    }))
                                }
                                "responseType" in f && (f.responseType = e._mode.split(":")[0]), "withCredentials" in f && (f.withCredentials = !!r.withCredentials), "text" === e._mode && "overrideMimeType" in f && f.overrideMimeType("text/plain; charset=x-user-defined"), "requestTimeout" in r && (f.timeout = r.requestTimeout, f.ontimeout = function () {
                                    e.emit("requestTimeout")
                                }), u.forEach((function (e) {
                                    f.setRequestHeader(e[0], e[1])
                                })), e._response = null, f.onreadystatechange = function () {
                                    switch (f.readyState) {
                                        case d.LOADING:
                                        case d.DONE:
                                            e._onXHRProgress()
                                    }
                                }, "moz-chunked-arraybuffer" === e._mode && (f.onprogress = function () {
                                    e._onXHRProgress()
                                }), f.onerror = function () {
                                    e._destroyed || e.emit("error", new Error("XHR error"))
                                };
                                try {
                                    f.send(a)
                                } catch (t) {
                                    return void o.nextTick((function () {
                                        e.emit("error", t)
                                    }))
                                }
                            }
                        }
                    }, h.prototype._onXHRProgress = function () {
                        (function (e) {
                            try {
                                var t = e.status;
                                return null !== t && 0 !== t
                            } catch (e) {
                                return !1
                            }
                        })(this._xhr) && !this._destroyed && (this._response || this._connect(), this._response._onXHRProgress())
                    }, h.prototype._connect = function () {
                        var e = this;
                        e._destroyed || (e._response = new l(e._xhr, e._fetchResponse, e._mode, e._fetchTimer), e._response.on("error", (function (t) {
                            e.emit("error", t)
                        })), e.emit("response", e._response))
                    }, h.prototype._write = function (e, t, r) {
                        this._body.push(e), r()
                    }, h.prototype.abort = h.prototype.destroy = function () {
                        this._destroyed = !0, n.clearTimeout(this._fetchTimer), this._response && (this._response._destroyed = !0), this._xhr ? this._xhr.abort() : this._fetchAbortController && this._fetchAbortController.abort()
                    }, h.prototype.end = function (e, t, r) {
                        "function" == typeof e && (r = e, e = void 0), u.Writable.prototype.end.call(this, e, t, r)
                    }, h.prototype.flushHeaders = function () {
                    }, h.prototype.setTimeout = function () {
                    }, h.prototype.setNoDelay = function () {
                    }, h.prototype.setSocketKeepAlive = function () {
                    };
                    var f = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "via"]
                }).call(this, r("./node_modules/buffer/index.js").Buffer, r("./node_modules/webpack/buildin/global.js"), r("./node_modules/process/browser.js"))
            }, "./node_modules/stream-http/lib/response.js": function (e, t, r) {
                (function (e, n, o) {
                    var s = r("./node_modules/stream-http/lib/capability.js"),
                        i = r("./node_modules/inherits/inherits_browser.js"),
                        a = r("./node_modules/readable-stream/readable-browser.js"),
                        u = t.readyStates = {UNSENT: 0, OPENED: 1, HEADERS_RECEIVED: 2, LOADING: 3, DONE: 4},
                        c = t.IncomingMessage = function (t, r, i, u) {
                            var c = this;
                            if (a.Readable.call(c), c._mode = i, c.headers = {}, c.rawHeaders = [], c.trailers = {}, c.rawTrailers = [], c.on("end", (function () {
                                e.nextTick((function () {
                                    c.emit("close")
                                }))
                            })), "fetch" === i) {
                                if (c._fetchResponse = r, c.url = r.url, c.statusCode = r.status, c.statusMessage = r.statusText, r.headers.forEach((function (e, t) {
                                    c.headers[t.toLowerCase()] = e, c.rawHeaders.push(t, e)
                                })), s.writableStream) {
                                    var l = new WritableStream({
                                        write: function (e) {
                                            return new Promise((function (t, r) {
                                                c._destroyed ? r() : c.push(new n(e)) ? t() : c._resumeFetch = t
                                            }))
                                        }, close: function () {
                                            o.clearTimeout(u), c._destroyed || c.push(null)
                                        }, abort: function (e) {
                                            c._destroyed || c.emit("error", e)
                                        }
                                    });
                                    try {
                                        return void r.body.pipeTo(l).catch((function (e) {
                                            o.clearTimeout(u), c._destroyed || c.emit("error", e)
                                        }))
                                    } catch (e) {
                                    }
                                }
                                var d = r.body.getReader();
                                !function e() {
                                    d.read().then((function (t) {
                                        if (!c._destroyed) {
                                            if (t.done) return o.clearTimeout(u), void c.push(null);
                                            c.push(new n(t.value)), e()
                                        }
                                    })).catch((function (e) {
                                        o.clearTimeout(u), c._destroyed || c.emit("error", e)
                                    }))
                                }()
                            } else {
                                if (c._xhr = t, c._pos = 0, c.url = t.responseURL, c.statusCode = t.status, c.statusMessage = t.statusText, t.getAllResponseHeaders().split(/\r?\n/).forEach((function (e) {
                                    var t = e.match(/^([^:]+):\s*(.*)/);
                                    if (t) {
                                        var r = t[1].toLowerCase();
                                        "set-cookie" === r ? (void 0 === c.headers[r] && (c.headers[r] = []), c.headers[r].push(t[2])) : void 0 !== c.headers[r] ? c.headers[r] += ", " + t[2] : c.headers[r] = t[2], c.rawHeaders.push(t[1], t[2])
                                    }
                                })), c._charset = "x-user-defined", !s.overrideMimeType) {
                                    var h = c.rawHeaders["mime-type"];
                                    if (h) {
                                        var f = h.match(/;\s*charset=([^;])(;|$)/);
                                        f && (c._charset = f[1].toLowerCase())
                                    }
                                    c._charset || (c._charset = "utf-8")
                                }
                            }
                        };
                    i(c, a.Readable), c.prototype._read = function () {
                        var e = this._resumeFetch;
                        e && (this._resumeFetch = null, e())
                    }, c.prototype._onXHRProgress = function () {
                        var e = this, t = e._xhr, r = null;
                        switch (e._mode) {
                            case"text:vbarray":
                                if (t.readyState !== u.DONE) break;
                                try {
                                    r = new o.VBArray(t.responseBody).toArray()
                                } catch (e) {
                                }
                                if (null !== r) {
                                    e.push(new n(r));
                                    break
                                }
                            case"text":
                                try {
                                    r = t.responseText
                                } catch (t) {
                                    e._mode = "text:vbarray";
                                    break
                                }
                                if (r.length > e._pos) {
                                    var s = r.substr(e._pos);
                                    if ("x-user-defined" === e._charset) {
                                        for (var i = new n(s.length), a = 0; a < s.length; a++) i[a] = 255 & s.charCodeAt(a);
                                        e.push(i)
                                    } else e.push(s, e._charset);
                                    e._pos = r.length
                                }
                                break;
                            case"arraybuffer":
                                if (t.readyState !== u.DONE || !t.response) break;
                                r = t.response, e.push(new n(new Uint8Array(r)));
                                break;
                            case"moz-chunked-arraybuffer":
                                if (r = t.response, t.readyState !== u.LOADING || !r) break;
                                e.push(new n(new Uint8Array(r)));
                                break;
                            case"ms-stream":
                                if (r = t.response, t.readyState !== u.LOADING) break;
                                var c = new o.MSStreamReader;
                                c.onprogress = function () {
                                    c.result.byteLength > e._pos && (e.push(new n(new Uint8Array(c.result.slice(e._pos)))), e._pos = c.result.byteLength)
                                }, c.onload = function () {
                                    e.push(null)
                                }, c.readAsArrayBuffer(r)
                        }
                        e._xhr.readyState === u.DONE && "ms-stream" !== e._mode && e.push(null)
                    }
                }).call(this, r("./node_modules/process/browser.js"), r("./node_modules/buffer/index.js").Buffer, r("./node_modules/webpack/buildin/global.js"))
            }, "./node_modules/string_decoder/lib/string_decoder.js": function (e, t, r) {
                "use strict";
                var n = r("./node_modules/safe-buffer/index.js").Buffer, o = n.isEncoding || function (e) {
                    switch ((e = "" + e) && e.toLowerCase()) {
                        case"hex":
                        case"utf8":
                        case"utf-8":
                        case"ascii":
                        case"binary":
                        case"base64":
                        case"ucs2":
                        case"ucs-2":
                        case"utf16le":
                        case"utf-16le":
                        case"raw":
                            return !0;
                        default:
                            return !1
                    }
                };

                function s(e) {
                    var t;
                    switch (this.encoding = function (e) {
                        var t = function (e) {
                            if (!e) return "utf8";
                            for (var t; ;) switch (e) {
                                case"utf8":
                                case"utf-8":
                                    return "utf8";
                                case"ucs2":
                                case"ucs-2":
                                case"utf16le":
                                case"utf-16le":
                                    return "utf16le";
                                case"latin1":
                                case"binary":
                                    return "latin1";
                                case"base64":
                                case"ascii":
                                case"hex":
                                    return e;
                                default:
                                    if (t) return;
                                    e = ("" + e).toLowerCase(), t = !0
                            }
                        }(e);
                        if ("string" != typeof t && (n.isEncoding === o || !o(e))) throw new Error("Unknown encoding: " + e);
                        return t || e
                    }(e), this.encoding) {
                        case"utf16le":
                            this.text = u, this.end = c, t = 4;
                            break;
                        case"utf8":
                            this.fillLast = a, t = 4;
                            break;
                        case"base64":
                            this.text = l, this.end = d, t = 3;
                            break;
                        default:
                            return this.write = h, void(this.end = f)
                    }
                    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(t)
                }

                function i(e) {
                    return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
                }

                function a(e) {
                    var t = this.lastTotal - this.lastNeed, r = function (e, t, r) {
                        if (128 != (192 & t[0])) return e.lastNeed = 0, "�";
                        if (e.lastNeed > 1 && t.length > 1) {
                            if (128 != (192 & t[1])) return e.lastNeed = 1, "�";
                            if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�"
                        }
                    }(this, e);
                    return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length))
                }

                function u(e, t) {
                    if ((e.length - t) % 2 == 0) {
                        var r = e.toString("utf16le", t);
                        if (r) {
                            var n = r.charCodeAt(r.length - 1);
                            if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1)
                        }
                        return r
                    }
                    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
                }

                function c(e) {
                    var t = e && e.length ? this.write(e) : "";
                    if (this.lastNeed) {
                        var r = this.lastTotal - this.lastNeed;
                        return t + this.lastChar.toString("utf16le", 0, r)
                    }
                    return t
                }

                function l(e, t) {
                    var r = (e.length - t) % 3;
                    return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r))
                }

                function d(e) {
                    var t = e && e.length ? this.write(e) : "";
                    return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
                }

                function h(e) {
                    return e.toString(this.encoding)
                }

                function f(e) {
                    return e && e.length ? this.write(e) : ""
                }

                t.StringDecoder = s, s.prototype.write = function (e) {
                    if (0 === e.length) return "";
                    var t, r;
                    if (this.lastNeed) {
                        if (void 0 === (t = this.fillLast(e))) return "";
                        r = this.lastNeed, this.lastNeed = 0
                    } else r = 0;
                    return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
                }, s.prototype.end = function (e) {
                    var t = e && e.length ? this.write(e) : "";
                    return this.lastNeed ? t + "�" : t
                }, s.prototype.text = function (e, t) {
                    var r = function (e, t, r) {
                        var n = t.length - 1;
                        if (n < r) return 0;
                        var o = i(t[n]);
                        if (o >= 0) return o > 0 && (e.lastNeed = o - 1), o;
                        if (--n < r || -2 === o) return 0;
                        if ((o = i(t[n])) >= 0) return o > 0 && (e.lastNeed = o - 2), o;
                        if (--n < r || -2 === o) return 0;
                        if ((o = i(t[n])) >= 0) return o > 0 && (2 === o ? o = 0 : e.lastNeed = o - 3), o;
                        return 0
                    }(this, e, t);
                    if (!this.lastNeed) return e.toString("utf8", t);
                    this.lastTotal = r;
                    var n = e.length - (r - this.lastNeed);
                    return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n)
                }, s.prototype.fillLast = function (e) {
                    if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                    e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
                }
            }, "./node_modules/timers-browserify/main.js": function (e, t, r) {
                (function (e) {
                    var n = void 0 !== e && e || "undefined" != typeof self && self || window,
                        o = Function.prototype.apply;

                    function s(e, t) {
                        this._id = e, this._clearFn = t
                    }

                    t.setTimeout = function () {
                        return new s(o.call(setTimeout, n, arguments), clearTimeout)
                    }, t.setInterval = function () {
                        return new s(o.call(setInterval, n, arguments), clearInterval)
                    }, t.clearTimeout = t.clearInterval = function (e) {
                        e && e.close()
                    }, s.prototype.unref = s.prototype.ref = function () {
                    }, s.prototype.close = function () {
                        this._clearFn.call(n, this._id)
                    }, t.enroll = function (e, t) {
                        clearTimeout(e._idleTimeoutId), e._idleTimeout = t
                    }, t.unenroll = function (e) {
                        clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
                    }, t._unrefActive = t.active = function (e) {
                        clearTimeout(e._idleTimeoutId);
                        var t = e._idleTimeout;
                        t >= 0 && (e._idleTimeoutId = setTimeout((function () {
                            e._onTimeout && e._onTimeout()
                        }), t))
                    }, r("./node_modules/setimmediate/setImmediate.js"), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
                }).call(this, r("./node_modules/webpack/buildin/global.js"))
            }, "./node_modules/tls/index.js": function (e, t) {
                var r = Function.prototype.bind, n = Array.prototype.slice, o = Object.prototype.toString;

                function s(e) {
                    return e = "[object " + e + "]", function (t) {
                        return o.call(t) === e
                    }
                }

                t.bind = function (e, t) {
                    var o = n.call(arguments, 2);
                    return r ? (o.unshift(t), r.apply(e, o)) : function () {
                        return e.apply(t, o.concat(n.call(arguments)))
                    }
                }, t.slice = function (e, t, r) {
                    return n.call(e, t, r)
                }, t.toString = function (e) {
                    return o.call(e)
                }, t.isNull = s("Null"), t.isDate = s("Date"), t.isMath = s("Math"), t.isJSON = s("JSON"), t.isError = s("Error"), t.isArray = Array.isArray || s("Array"), t.isObject = s("Object"), t.isRegExp = s("RegExp"), t.isNumber = s("Number"), t.isString = s("String"), t.isBoolean = s("Boolean"), t.isFunction = s("Function"), t.isArguments = s("Arguments"), t.isUndefined = s("Undefined"), t.isValid = function (e) {
                    return !t.isInvalid(e)
                }, t.isInvalid = function (e) {
                    return t.isNull(e) || t.isUndefined(e)
                }, t.isImmutable = function (e) {
                    return !t.isMutable(e)
                }, t.isMutable = function (e) {
                    return e && !t.isNumber(e) && !t.isString(e) && !t.isBoolean(e)
                }, t.isEnumerable = function (e) {
                    return !!e && (t.isNumber(e) ? t.isInteger(e) : t.isInteger(e.length) ? e.length >= 0 : t.isEnumerableObject(e))
                }, t.isEnumerableObject = function (e) {
                    for (var t in e) return !0;
                    return !1
                }, t.isEmpty = function (e) {
                    return t.isObject(e) ? !t.isEnumerableObject(e) : !t.isEnumerable(e)
                }, t.isFiniteNumber = function (e) {
                    return t.isNumber(e) && isFinite(e)
                }, t.isInteger = function (e) {
                    return t.isFiniteNumber(e) && Math.floor(e) === e
                }, t.isVague = function (e) {
                    return e && "object" == typeof e
                }, t.isList = function (e) {
                    return t.isVague(e) && t.isInteger(e.length) && e.length >= 0
                }, t.isNaN = isNaN, t.nativeTypeOf = function (e) {
                    var t = e.toString(e);
                    return t.substring(8, t.length - 1)
                }, t.typeOf = function (e) {
                    return t.isObject(e) ? e.constructor.name || "Object" : t.nativeTypeOf(e)
                }, t.safeApply = function (e, r, n) {
                    return t.isFunction(e) ? e.apply(n || this, r) : void 0
                }, t.enumerate = function (e, r, n, o) {
                    if (!e) return e;
                    if (n = n || this, !o && t.isFunction(e.forEach)) return e.forEach(r, n);
                    var s = 0, i = e.length;
                    if (t.isString(e)) for (; s < i; s += 1) r.call(n, e.charAt(s), s, e);
                    if (t.isList(e)) for (; s < i; s += 1) r.call(n, e[s], s, e); else if (t.isInteger(e)) for (e < 0 ? (i = 0, s = e) : i = e; s < i; s += 1) r.call(n, s, Math.abs(s), e); else t.enumerateObject(e, r, n);
                    return e
                }, t.enumerateObject = function (e, t, r) {
                    var n;
                    for (n in e) t.call(r, e[n], n, e);
                    return e
                }, t.assignAll = function (e, r, n, o, s) {
                    return t.isMutable(e) ? (t[s = "enumerate" === s ? s : "enumerateObject"](r, (function (r, s) {
                        t.safeApply(n, arguments, o || e) || (e[s] = r)
                    })), e) : e
                }, t.assignList = function (e, r, n, o) {
                    return t.assignAll(e, r, n, o, "enumerate")
                }, t.assign = function (e, r, n, o) {
                    return t.assignAll(e, r, (function (e, s) {
                        return !r.hasOwnProperty(s) || t.safeApply(n, arguments, o || this)
                    }), o)
                }, t.toArray = function (e, r, n) {
                    return t.isArray() ? t.isInteger(r) ? t.slice(e, r, n) : e : t.isArguments(e) || t.isString(e) ? t.slice(e, r, n) : t.isList(e) ? (t.isInteger(n) || (n = e.length), r = r || 0, t.assignList([], e, (function (e, t) {
                        return r > t || t >= n
                    }))) : void 0
                }
            }, "./node_modules/to-arraybuffer/index.js": function (e, t, r) {
                var n = r("./node_modules/buffer/index.js").Buffer;
                e.exports = function (e) {
                    if (e instanceof Uint8Array) {
                        if (0 === e.byteOffset && e.byteLength === e.buffer.byteLength) return e.buffer;
                        if ("function" == typeof e.buffer.slice) return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
                    }
                    if (n.isBuffer(e)) {
                        for (var t = new Uint8Array(e.length), r = e.length, o = 0; o < r; o++) t[o] = e[o];
                        return t.buffer
                    }
                    throw new Error("Argument must be a Buffer")
                }
            }, "./node_modules/to-readable-stream/index.js": function (e, t, r) {
                "use strict";
                const {Readable: n} = r("./node_modules/stream-browserify/index.js");
                e.exports = e => new n({
                    read() {
                        this.push(e), this.push(null)
                    }
                })
            }, "./node_modules/url-parse-lax/index.js": function (e, t, r) {
                "use strict";
                const n = r("./node_modules/url/url.js"), o = r("./node_modules/prepend-http/index.js");
                e.exports = (e, t) => {
                    if ("string" != typeof e) throw new TypeError(`Expected \`url\` to be of type \`string\`, got \`${typeof e}\` instead.`);
                    const r = o(e, Object.assign({https: !0}, t));
                    return n.parse(r)
                }
            }, "./node_modules/url/url.js": function (e, t, r) {
                "use strict";
                var n = r("./node_modules/node-libs-browser/node_modules/punycode/punycode.js"),
                    o = r("./node_modules/url/util.js");

                function s() {
                    this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
                }

                t.parse = _, t.resolve = function (e, t) {
                    return _(e, !1, !0).resolve(t)
                }, t.resolveObject = function (e, t) {
                    return e ? _(e, !1, !0).resolveObject(t) : t
                }, t.format = function (e) {
                    o.isString(e) && (e = _(e));
                    return e instanceof s ? e.format() : s.prototype.format.call(e)
                }, t.Url = s;
                var i = /^([a-z0-9.+-]+:)/i, a = /:[0-9]*$/, u = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                    c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                    l = ["'"].concat(c), d = ["%", "/", "?", ";", "#"].concat(l), h = ["/", "?", "#"],
                    f = /^[+a-z0-9A-Z_-]{0,63}$/, p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                    m = {javascript: !0, "javascript:": !0}, g = {javascript: !0, "javascript:": !0}, y = {
                        http: !0,
                        https: !0,
                        ftp: !0,
                        gopher: !0,
                        file: !0,
                        "http:": !0,
                        "https:": !0,
                        "ftp:": !0,
                        "gopher:": !0,
                        "file:": !0
                    }, b = r("./node_modules/querystring-es3/index.js");

                function _(e, t, r) {
                    if (e && o.isObject(e) && e instanceof s) return e;
                    var n = new s;
                    return n.parse(e, t, r), n
                }

                s.prototype.parse = function (e, t, r) {
                    if (!o.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
                    var s = e.indexOf("?"), a = -1 !== s && s < e.indexOf("#") ? "?" : "#", c = e.split(a);
                    c[0] = c[0].replace(/\\/g, "/");
                    var _ = e = c.join(a);
                    if (_ = _.trim(), !r && 1 === e.split("#").length) {
                        var w = u.exec(_);
                        if (w) return this.path = _, this.href = _, this.pathname = w[1], w[2] ? (this.search = w[2], this.query = t ? b.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
                    }
                    var v = i.exec(_);
                    if (v) {
                        var j = (v = v[0]).toLowerCase();
                        this.protocol = j, _ = _.substr(v.length)
                    }
                    if (r || v || _.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                        var x = "//" === _.substr(0, 2);
                        !x || v && g[v] || (_ = _.substr(2), this.slashes = !0)
                    }
                    if (!g[v] && (x || v && !y[v])) {
                        for (var E, S, T = -1, O = 0; O < h.length; O++) {
                            -1 !== (k = _.indexOf(h[O])) && (-1 === T || k < T) && (T = k)
                        }
                        -1 !== (S = -1 === T ? _.lastIndexOf("@") : _.lastIndexOf("@", T)) && (E = _.slice(0, S), _ = _.slice(S + 1), this.auth = decodeURIComponent(E)), T = -1;
                        for (O = 0; O < d.length; O++) {
                            var k;
                            -1 !== (k = _.indexOf(d[O])) && (-1 === T || k < T) && (T = k)
                        }
                        -1 === T && (T = _.length), this.host = _.slice(0, T), _ = _.slice(T), this.parseHost(), this.hostname = this.hostname || "";
                        var A = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                        if (!A) for (var R = this.hostname.split(/\./), C = (O = 0, R.length); O < C; O++) {
                            var P = R[O];
                            if (P && !P.match(f)) {
                                for (var M = "", L = 0, U = P.length; L < U; L++) P.charCodeAt(L) > 127 ? M += "x" : M += P[L];
                                if (!M.match(f)) {
                                    var I = R.slice(0, O), q = R.slice(O + 1), B = P.match(p);
                                    B && (I.push(B[1]), q.unshift(B[2])), q.length && (_ = "/" + q.join(".") + _), this.hostname = I.join(".");
                                    break
                                }
                            }
                        }
                        this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), A || (this.hostname = n.toASCII(this.hostname));
                        var N = this.port ? ":" + this.port : "", H = this.hostname || "";
                        this.host = H + N, this.href += this.host, A && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== _[0] && (_ = "/" + _))
                    }
                    if (!m[j]) for (O = 0, C = l.length; O < C; O++) {
                        var D = l[O];
                        if (-1 !== _.indexOf(D)) {
                            var z = encodeURIComponent(D);
                            z === D && (z = escape(D)), _ = _.split(D).join(z)
                        }
                    }
                    var F = _.indexOf("#");
                    -1 !== F && (this.hash = _.substr(F), _ = _.slice(0, F));
                    var W = _.indexOf("?");
                    if (-1 !== W ? (this.search = _.substr(W), this.query = _.substr(W + 1), t && (this.query = b.parse(this.query)), _ = _.slice(0, W)) : t && (this.search = "", this.query = {}), _ && (this.pathname = _), y[j] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                        N = this.pathname || "";
                        var $ = this.search || "";
                        this.path = N + $
                    }
                    return this.href = this.format(), this
                }, s.prototype.format = function () {
                    var e = this.auth || "";
                    e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
                    var t = this.protocol || "", r = this.pathname || "", n = this.hash || "", s = !1, i = "";
                    this.host ? s = e + this.host : this.hostname && (s = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (s += ":" + this.port)), this.query && o.isObject(this.query) && Object.keys(this.query).length && (i = b.stringify(this.query));
                    var a = this.search || i && "?" + i || "";
                    return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || y[t]) && !1 !== s ? (s = "//" + (s || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : s || (s = ""), n && "#" !== n.charAt(0) && (n = "#" + n), a && "?" !== a.charAt(0) && (a = "?" + a), t + s + (r = r.replace(/[?#]/g, (function (e) {
                        return encodeURIComponent(e)
                    }))) + (a = a.replace("#", "%23")) + n
                }, s.prototype.resolve = function (e) {
                    return this.resolveObject(_(e, !1, !0)).format()
                }, s.prototype.resolveObject = function (e) {
                    if (o.isString(e)) {
                        var t = new s;
                        t.parse(e, !1, !0), e = t
                    }
                    for (var r = new s, n = Object.keys(this), i = 0; i < n.length; i++) {
                        var a = n[i];
                        r[a] = this[a]
                    }
                    if (r.hash = e.hash, "" === e.href) return r.href = r.format(), r;
                    if (e.slashes && !e.protocol) {
                        for (var u = Object.keys(e), c = 0; c < u.length; c++) {
                            var l = u[c];
                            "protocol" !== l && (r[l] = e[l])
                        }
                        return y[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r
                    }
                    if (e.protocol && e.protocol !== r.protocol) {
                        if (!y[e.protocol]) {
                            for (var d = Object.keys(e), h = 0; h < d.length; h++) {
                                var f = d[h];
                                r[f] = e[f]
                            }
                            return r.href = r.format(), r
                        }
                        if (r.protocol = e.protocol, e.host || g[e.protocol]) r.pathname = e.pathname; else {
                            for (var p = (e.pathname || "").split("/"); p.length && !(e.host = p.shift());) ;
                            e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), r.pathname = p.join("/")
                        }
                        if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
                            var m = r.pathname || "", b = r.search || "";
                            r.path = m + b
                        }
                        return r.slashes = r.slashes || e.slashes, r.href = r.format(), r
                    }
                    var _ = r.pathname && "/" === r.pathname.charAt(0),
                        w = e.host || e.pathname && "/" === e.pathname.charAt(0), v = w || _ || r.host && e.pathname,
                        j = v, x = r.pathname && r.pathname.split("/") || [],
                        E = (p = e.pathname && e.pathname.split("/") || [], r.protocol && !y[r.protocol]);
                    if (E && (r.hostname = "", r.port = null, r.host && ("" === x[0] ? x[0] = r.host : x.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === p[0] ? p[0] = e.host : p.unshift(e.host)), e.host = null), v = v && ("" === p[0] || "" === x[0])), w) r.host = e.host || "" === e.host ? e.host : r.host, r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, x = p; else if (p.length) x || (x = []), x.pop(), x = x.concat(p), r.search = e.search, r.query = e.query; else if (!o.isNullOrUndefined(e.search)) {
                        if (E) r.hostname = r.host = x.shift(), (A = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = A.shift(), r.host = r.hostname = A.shift());
                        return r.search = e.search, r.query = e.query, o.isNull(r.pathname) && o.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r
                    }
                    if (!x.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
                    for (var S = x.slice(-1)[0], T = (r.host || e.host || x.length > 1) && ("." === S || ".." === S) || "" === S, O = 0, k = x.length; k >= 0; k--) "." === (S = x[k]) ? x.splice(k, 1) : ".." === S ? (x.splice(k, 1), O++) : O && (x.splice(k, 1), O--);
                    if (!v && !j) for (; O--; O) x.unshift("..");
                    !v || "" === x[0] || x[0] && "/" === x[0].charAt(0) || x.unshift(""), T && "/" !== x.join("/").substr(-1) && x.push("");
                    var A, R = "" === x[0] || x[0] && "/" === x[0].charAt(0);
                    E && (r.hostname = r.host = R ? "" : x.length ? x.shift() : "", (A = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = A.shift(), r.host = r.hostname = A.shift()));
                    return (v = v || r.host && x.length) && !R && x.unshift(""), x.length ? r.pathname = x.join("/") : (r.pathname = null, r.path = null), o.isNull(r.pathname) && o.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r
                }, s.prototype.parseHost = function () {
                    var e = this.host, t = a.exec(e);
                    t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
                }
            }, "./node_modules/url/util.js": function (e, t, r) {
                "use strict";
                e.exports = {
                    isString: function (e) {
                        return "string" == typeof e
                    }, isObject: function (e) {
                        return "object" == typeof e && null !== e
                    }, isNull: function (e) {
                        return null === e
                    }, isNullOrUndefined: function (e) {
                        return null == e
                    }
                }
            }, "./node_modules/util-deprecate/browser.js": function (e, t, r) {
                (function (t) {
                    function r(e) {
                        try {
                            if (!t.localStorage) return !1
                        } catch (e) {
                            return !1
                        }
                        var r = t.localStorage[e];
                        return null != r && "true" === String(r).toLowerCase()
                    }

                    e.exports = function (e, t) {
                        if (r("noDeprecation")) return e;
                        var n = !1;
                        return function () {
                            if (!n) {
                                if (r("throwDeprecation")) throw new Error(t);
                                r("traceDeprecation") ? console.trace(t) : console.warn(t), n = !0
                            }
                            return e.apply(this, arguments)
                        }
                    }
                }).call(this, r("./node_modules/webpack/buildin/global.js"))
            }, "./node_modules/util/node_modules/inherits/inherits_browser.js": function (e, t) {
                "function" == typeof Object.create ? e.exports = function (e, t) {
                    e.super_ = t, e.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    })
                } : e.exports = function (e, t) {
                    e.super_ = t;
                    var r = function () {
                    };
                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                }
            }, "./node_modules/util/support/isBufferBrowser.js": function (e, t) {
                e.exports = function (e) {
                    return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
                }
            }, "./node_modules/util/util.js": function (e, t, r) {
                (function (e) {
                    var n = Object.getOwnPropertyDescriptors || function (e) {
                        for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
                        return r
                    }, o = /%[sdj%]/g;
                    t.format = function (e) {
                        if (!y(e)) {
                            for (var t = [], r = 0; r < arguments.length; r++) t.push(a(arguments[r]));
                            return t.join(" ")
                        }
                        r = 1;
                        for (var n = arguments, s = n.length, i = String(e).replace(o, (function (e) {
                            if ("%%" === e) return "%";
                            if (r >= s) return e;
                            switch (e) {
                                case"%s":
                                    return String(n[r++]);
                                case"%d":
                                    return Number(n[r++]);
                                case"%j":
                                    try {
                                        return JSON.stringify(n[r++])
                                    } catch (e) {
                                        return "[Circular]"
                                    }
                                default:
                                    return e
                            }
                        })), u = n[r]; r < s; u = n[++r]) m(u) || !w(u) ? i += " " + u : i += " " + a(u);
                        return i
                    }, t.deprecate = function (r, n) {
                        if (void 0 !== e && !0 === e.noDeprecation) return r;
                        if (void 0 === e) return function () {
                            return t.deprecate(r, n).apply(this, arguments)
                        };
                        var o = !1;
                        return function () {
                            if (!o) {
                                if (e.throwDeprecation) throw new Error(n);
                                e.traceDeprecation ? console.trace(n) : console.error(n), o = !0
                            }
                            return r.apply(this, arguments)
                        }
                    };
                    var s, i = {};

                    function a(e, r) {
                        var n = {seen: [], stylize: c};
                        return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), p(r) ? n.showHidden = r : r && t._extend(n, r), b(n.showHidden) && (n.showHidden = !1), b(n.depth) && (n.depth = 2), b(n.colors) && (n.colors = !1), b(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = u), l(n, e, n.depth)
                    }

                    function u(e, t) {
                        var r = a.styles[t];
                        return r ? "[" + a.colors[r][0] + "m" + e + "[" + a.colors[r][1] + "m" : e
                    }

                    function c(e, t) {
                        return e
                    }

                    function l(e, r, n) {
                        if (e.customInspect && r && x(r.inspect) && r.inspect !== t.inspect && (!r.constructor || r.constructor.prototype !== r)) {
                            var o = r.inspect(n, e);
                            return y(o) || (o = l(e, o, n)), o
                        }
                        var s = function (e, t) {
                            if (b(t)) return e.stylize("undefined", "undefined");
                            if (y(t)) {
                                var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                                return e.stylize(r, "string")
                            }
                            if (g(t)) return e.stylize("" + t, "number");
                            if (p(t)) return e.stylize("" + t, "boolean");
                            if (m(t)) return e.stylize("null", "null")
                        }(e, r);
                        if (s) return s;
                        var i = Object.keys(r), a = function (e) {
                            var t = {};
                            return e.forEach((function (e, r) {
                                t[e] = !0
                            })), t
                        }(i);
                        if (e.showHidden && (i = Object.getOwnPropertyNames(r)), j(r) && (i.indexOf("message") >= 0 || i.indexOf("description") >= 0)) return d(r);
                        if (0 === i.length) {
                            if (x(r)) {
                                var u = r.name ? ": " + r.name : "";
                                return e.stylize("[Function" + u + "]", "special")
                            }
                            if (_(r)) return e.stylize(RegExp.prototype.toString.call(r), "regexp");
                            if (v(r)) return e.stylize(Date.prototype.toString.call(r), "date");
                            if (j(r)) return d(r)
                        }
                        var c, w = "", E = !1, S = ["{", "}"];
                        (f(r) && (E = !0, S = ["[", "]"]), x(r)) && (w = " [Function" + (r.name ? ": " + r.name : "") + "]");
                        return _(r) && (w = " " + RegExp.prototype.toString.call(r)), v(r) && (w = " " + Date.prototype.toUTCString.call(r)), j(r) && (w = " " + d(r)), 0 !== i.length || E && 0 != r.length ? n < 0 ? _(r) ? e.stylize(RegExp.prototype.toString.call(r), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(r), c = E ? function (e, t, r, n, o) {
                            for (var s = [], i = 0, a = t.length; i < a; ++i) k(t, String(i)) ? s.push(h(e, t, r, n, String(i), !0)) : s.push("");
                            return o.forEach((function (o) {
                                o.match(/^\d+$/) || s.push(h(e, t, r, n, o, !0))
                            })), s
                        }(e, r, n, a, i) : i.map((function (t) {
                            return h(e, r, n, a, t, E)
                        })), e.seen.pop(), function (e, t, r) {
                            if (e.reduce((function (e, t) {
                                return t.indexOf("\n") >= 0 && 0, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                            }), 0) > 60) return r[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + r[1];
                            return r[0] + t + " " + e.join(", ") + " " + r[1]
                        }(c, w, S)) : S[0] + w + S[1]
                    }

                    function d(e) {
                        return "[" + Error.prototype.toString.call(e) + "]"
                    }

                    function h(e, t, r, n, o, s) {
                        var i, a, u;
                        if ((u = Object.getOwnPropertyDescriptor(t, o) || {value: t[o]}).get ? a = u.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : u.set && (a = e.stylize("[Setter]", "special")), k(n, o) || (i = "[" + o + "]"), a || (e.seen.indexOf(u.value) < 0 ? (a = m(r) ? l(e, u.value, null) : l(e, u.value, r - 1)).indexOf("\n") > -1 && (a = s ? a.split("\n").map((function (e) {
                            return "  " + e
                        })).join("\n").substr(2) : "\n" + a.split("\n").map((function (e) {
                            return "   " + e
                        })).join("\n")) : a = e.stylize("[Circular]", "special")), b(i)) {
                            if (s && o.match(/^\d+$/)) return a;
                            (i = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (i = i.substr(1, i.length - 2), i = e.stylize(i, "name")) : (i = i.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), i = e.stylize(i, "string"))
                        }
                        return i + ": " + a
                    }

                    function f(e) {
                        return Array.isArray(e)
                    }

                    function p(e) {
                        return "boolean" == typeof e
                    }

                    function m(e) {
                        return null === e
                    }

                    function g(e) {
                        return "number" == typeof e
                    }

                    function y(e) {
                        return "string" == typeof e
                    }

                    function b(e) {
                        return void 0 === e
                    }

                    function _(e) {
                        return w(e) && "[object RegExp]" === E(e)
                    }

                    function w(e) {
                        return "object" == typeof e && null !== e
                    }

                    function v(e) {
                        return w(e) && "[object Date]" === E(e)
                    }

                    function j(e) {
                        return w(e) && ("[object Error]" === E(e) || e instanceof Error)
                    }

                    function x(e) {
                        return "function" == typeof e
                    }

                    function E(e) {
                        return Object.prototype.toString.call(e)
                    }

                    function S(e) {
                        return e < 10 ? "0" + e.toString(10) : e.toString(10)
                    }

                    t.debuglog = function (r) {
                        if (b(s) && (s = e.env.NODE_DEBUG || ""), r = r.toUpperCase(), !i[r]) if (new RegExp("\\b" + r + "\\b", "i").test(s)) {
                            var n = e.pid;
                            i[r] = function () {
                                var e = t.format.apply(t, arguments);
                                console.error("%s %d: %s", r, n, e)
                            }
                        } else i[r] = function () {
                        };
                        return i[r]
                    }, t.inspect = a, a.colors = {
                        bold: [1, 22],
                        italic: [3, 23],
                        underline: [4, 24],
                        inverse: [7, 27],
                        white: [37, 39],
                        grey: [90, 39],
                        black: [30, 39],
                        blue: [34, 39],
                        cyan: [36, 39],
                        green: [32, 39],
                        magenta: [35, 39],
                        red: [31, 39],
                        yellow: [33, 39]
                    }, a.styles = {
                        special: "cyan",
                        number: "yellow",
                        boolean: "yellow",
                        undefined: "grey",
                        null: "bold",
                        string: "green",
                        date: "magenta",
                        regexp: "red"
                    }, t.isArray = f, t.isBoolean = p, t.isNull = m, t.isNullOrUndefined = function (e) {
                        return null == e
                    }, t.isNumber = g, t.isString = y, t.isSymbol = function (e) {
                        return "symbol" == typeof e
                    }, t.isUndefined = b, t.isRegExp = _, t.isObject = w, t.isDate = v, t.isError = j, t.isFunction = x, t.isPrimitive = function (e) {
                        return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
                    }, t.isBuffer = r("./node_modules/util/support/isBufferBrowser.js");
                    var T = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

                    function O() {
                        var e = new Date, t = [S(e.getHours()), S(e.getMinutes()), S(e.getSeconds())].join(":");
                        return [e.getDate(), T[e.getMonth()], t].join(" ")
                    }

                    function k(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }

                    t.log = function () {
                        console.log("%s - %s", O(), t.format.apply(t, arguments))
                    }, t.inherits = r("./node_modules/util/node_modules/inherits/inherits_browser.js"), t._extend = function (e, t) {
                        if (!t || !w(t)) return e;
                        for (var r = Object.keys(t), n = r.length; n--;) e[r[n]] = t[r[n]];
                        return e
                    };
                    var A = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

                    function R(e, t) {
                        if (!e) {
                            var r = new Error("Promise was rejected with a falsy value");
                            r.reason = e, e = r
                        }
                        return t(e)
                    }

                    t.promisify = function (e) {
                        if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
                        if (A && e[A]) {
                            var t;
                            if ("function" != typeof(t = e[A])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                            return Object.defineProperty(t, A, {
                                value: t,
                                enumerable: !1,
                                writable: !1,
                                configurable: !0
                            }), t
                        }

                        function t() {
                            for (var t, r, n = new Promise((function (e, n) {
                                t = e, r = n
                            })), o = [], s = 0; s < arguments.length; s++) o.push(arguments[s]);
                            o.push((function (e, n) {
                                e ? r(e) : t(n)
                            }));
                            try {
                                e.apply(this, o)
                            } catch (e) {
                                r(e)
                            }
                            return n
                        }

                        return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), A && Object.defineProperty(t, A, {
                            value: t,
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        }), Object.defineProperties(t, n(e))
                    }, t.promisify.custom = A, t.callbackify = function (t) {
                        if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');

                        function r() {
                            for (var r = [], n = 0; n < arguments.length; n++) r.push(arguments[n]);
                            var o = r.pop();
                            if ("function" != typeof o) throw new TypeError("The last argument must be of type Function");
                            var s = this, i = function () {
                                return o.apply(s, arguments)
                            };
                            t.apply(this, r).then((function (t) {
                                e.nextTick(i, null, t)
                            }), (function (t) {
                                e.nextTick(R, t, i)
                            }))
                        }

                        return Object.setPrototypeOf(r, Object.getPrototypeOf(t)), Object.defineProperties(r, n(t)), r
                    }
                }).call(this, r("./node_modules/process/browser.js"))
            }, "./node_modules/webpack/buildin/global.js": function (e, t) {
                var r;
                r = function () {
                    return this
                }();
                try {
                    r = r || new Function("return this")()
                } catch (e) {
                    "object" == typeof window && (r = window)
                }
                e.exports = r
            }, "./node_modules/webpack/buildin/module.js": function (e, t) {
                e.exports = function (e) {
                    return e.webpackPolyfill || (e.deprecate = function () {
                    }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return e.l
                        }
                    }), Object.defineProperty(e, "id", {
                        enumerable: !0, get: function () {
                            return e.i
                        }
                    }), e.webpackPolyfill = 1), e
                }
            }, "./node_modules/wrappy/wrappy.js": function (e, t) {
                e.exports = function e(t, r) {
                    if (t && r) return e(t)(r);
                    if ("function" != typeof t) throw new TypeError("need wrapper function");
                    return Object.keys(t).forEach((function (e) {
                        n[e] = t[e]
                    })), n;

                    function n() {
                        for (var e = new Array(arguments.length), r = 0; r < e.length; r++) e[r] = arguments[r];
                        var n = t.apply(this, e), o = e[e.length - 1];
                        return "function" == typeof n && n !== o && Object.keys(o).forEach((function (e) {
                            n[e] = o[e]
                        })), n
                    }
                }
            }, "./node_modules/xtend/immutable.js": function (e, t) {
                e.exports = function () {
                    for (var e = {}, t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) r.call(n, o) && (e[o] = n[o])
                    }
                    return e
                };
                var r = Object.prototype.hasOwnProperty
            }, "./src/index.js": function (e, t, r) {
                const n = r("./src/languages.js"), o = r("./src/tokenGenerator.js"),
                    s = r("./node_modules/querystring-es3/index.js"), i = r("./node_modules/got/source/index.js");
                e.exports = async function (e, t) {
                    try {
                        let r;
                        if ("object" != typeof t && (t = {}), e = String(e), [t.from, t.to].forEach(e => {
                            e && !n.isSupported(e) && (r = new Error, r.code = 400, r.message = `The language '${e}' is not supported.`)
                        }), r) throw r;
                        t.hasOwnProperty("from") || (t.from = "auto"), t.hasOwnProperty("to") || (t.to = "en"), t.raw = Boolean(t.raw), t.from = n.getISOCode(t.from), t.to = n.getISOCode(t.to);
                        let a, u = await o.generate(e), c = "https://translate.google.com/translate_a/single", l = {
                            client: "gtx",
                            sl: t.from,
                            tl: t.to,
                            hl: t.to,
                            dt: ["at", "bd", "ex", "ld", "md", "qca", "rw", "rm", "ss", "t"],
                            ie: "UTF-8",
                            oe: "UTF-8",
                            otf: 1,
                            ssel: 0,
                            tsel: 0,
                            kc: 7,
                            q: e,
                            [u.name]: u.value
                        }, d = `${c}?${s.stringify(l)}`;
                        d.length > 2048 ? (delete l.q, a = [`${c}?${s.stringify(l)}`, {
                            method: "POST",
                            form: !0,
                            body: {q: e}
                        }]) : a = [d];
                        let h = await i(...a), f = {
                            text: "",
                            from: {
                                language: {didYouMean: !1, iso: ""},
                                text: {autoCorrected: !1, value: "", didYouMean: !1}
                            },
                            raw: ""
                        };
                        t.raw && (f.raw = h.body);
                        let p = JSON.parse(h.body);
                        if (p[0].forEach(e => {
                            e[0] && (f.text += e[0])
                        }), p[2] === p[8][0][0] ? f.from.language.iso = p[2] : (f.from.language.didYouMean = !0, f.from.language.iso = p[8][0][0]), p[7] && p[7][0]) {
                            let e = p[7][0];
                            e = e.replace(/<b><i>/g, "["), e = e.replace(/<\/i><\/b>/g, "]"), f.from.text.value = e, !0 === p[7][5] ? f.from.text.autoCorrected = !0 : f.from.text.didYouMean = !0
                        }
                        return f
                    } catch (e) {
                        if ("HTTPError" === e.name) {
                            let t = new Error;
                            throw t.name = e.name, t.statusCode = e.statusCode, t.statusMessage = e.statusMessage, t
                        }
                        throw e
                    }
                }, e.exports.languages = n
            }, "./src/languages.js": function (e, t) {
                let r = {
                    auto: "Automatic",
                    af: "Afrikaans",
                    sq: "Albanian",
                    am: "Amharic",
                    ar: "Arabic",
                    hy: "Armenian",
                    az: "Azerbaijani",
                    eu: "Basque",
                    be: "Belarusian",
                    bn: "Bengali",
                    bs: "Bosnian",
                    bg: "Bulgarian",
                    ca: "Catalan",
                    ceb: "Cebuano",
                    ny: "Chichewa",
                    "zh-cn": "Chinese Simplified",
                    "zh-tw": "Chinese Traditional",
                    co: "Corsican",
                    hr: "Croatian",
                    cs: "Czech",
                    da: "Danish",
                    nl: "Dutch",
                    en: "English",
                    eo: "Esperanto",
                    et: "Estonian",
                    tl: "Filipino",
                    fi: "Finnish",
                    fr: "French",
                    fy: "Frisian",
                    gl: "Galician",
                    ka: "Georgian",
                    de: "German",
                    el: "Greek",
                    gu: "Gujarati",
                    ht: "Haitian Creole",
                    ha: "Hausa",
                    haw: "Hawaiian",
                    iw: "Hebrew",
                    hi: "Hindi",
                    hmn: "Hmong",
                    hu: "Hungarian",
                    is: "Icelandic",
                    ig: "Igbo",
                    id: "Indonesian",
                    ga: "Irish",
                    it: "Italian",
                    ja: "Japanese",
                    jw: "Javanese",
                    kn: "Kannada",
                    kk: "Kazakh",
                    km: "Khmer",
                    ko: "Korean",
                    ku: "Kurdish (Kurmanji)",
                    ky: "Kyrgyz",
                    lo: "Lao",
                    la: "Latin",
                    lv: "Latvian",
                    lt: "Lithuanian",
                    lb: "Luxembourgish",
                    mk: "Macedonian",
                    mg: "Malagasy",
                    ms: "Malay",
                    ml: "Malayalam",
                    mt: "Maltese",
                    mi: "Maori",
                    mr: "Marathi",
                    mn: "Mongolian",
                    my: "Myanmar (Burmese)",
                    ne: "Nepali",
                    no: "Norwegian",
                    ps: "Pashto",
                    fa: "Persian",
                    pl: "Polish",
                    pt: "Portuguese",
                    pa: "Punjabi",
                    ro: "Romanian",
                    ru: "Russian",
                    sm: "Samoan",
                    gd: "Scots Gaelic",
                    sr: "Serbian",
                    st: "Sesotho",
                    sn: "Shona",
                    sd: "Sindhi",
                    si: "Sinhala",
                    sk: "Slovak",
                    sl: "Slovenian",
                    so: "Somali",
                    es: "Spanish",
                    su: "Sundanese",
                    sw: "Swahili",
                    sv: "Swedish",
                    tg: "Tajik",
                    ta: "Tamil",
                    te: "Telugu",
                    th: "Thai",
                    tr: "Turkish",
                    uk: "Ukrainian",
                    ur: "Urdu",
                    uz: "Uzbek",
                    vi: "Vietnamese",
                    cy: "Welsh",
                    xh: "Xhosa",
                    yi: "Yiddish",
                    yo: "Yoruba",
                    zu: "Zulu"
                };

                function n(e) {
                    if (!e) return !1;
                    if ((e = e.toLowerCase()) in r) return e;
                    return Object.keys(r).filter(t => "string" == typeof r[t] && r[t].toLowerCase() === e)[0] || null
                }

                e.exports = r, e.exports.isSupported = function (e) {
                    return Boolean(n(e))
                }, e.exports.getISOCode = n
            }, "./src/tokenGenerator.js": function (e, t, r) {
                const n = r("./node_modules/got/source/index.js");
                let o = null, s = function (e) {
                    return function () {
                        return e
                    }
                }, i = function (e, t) {
                    for (let r = 0; r < t.length - 2; r += 3) {
                        let n = t.charAt(r + 2);
                        n = n >= "a" ? n.charCodeAt(0) - 87 : Number(n), n = "+" == t.charAt(r + 1) ? e >>> n : e << n, e = "+" == t.charAt(r) ? e + n & 4294967295 : e ^ n
                    }
                    return e
                };
                const a = new Map, u = {TKK: a.get("TKK") || "0"};
                e.exports.generate = async function (e) {
                    try {
                        await new Promise(async (e, t) => {
                            try {
                                let t = Math.floor(Date.now() / 36e5);
                                if (Number(u.TKK.split(".")[0]) === t) e(); else {
                                    const t = (await n("https://translate.google.com")).body.match(/tkk:'\d+.\d+'/g);
                                    if (t.length > 0) {
                                        const e = t[0].split(":")[1].replace(/'/g, "");
                                        u.TKK = e, a.set("TKK", e)
                                    }
                                    e()
                                }
                            } catch (e) {
                                if ("HTTPError" === e.name) {
                                    let r = new Error;
                                    r.name = e.name, r.statusCode = e.statusCode, r.statusMessage = e.statusMessage, t(r)
                                }
                                t(e)
                            }
                        });
                        let t = function (e) {
                            let t;
                            if (null !== o) t = o; else {
                                t = s(String.fromCharCode(84));
                                let e = s(String.fromCharCode(75));
                                t = [t(), t()], t[1] = e(), t = (o = u[t.join(e())] || "") || ""
                            }
                            let r = s(String.fromCharCode(116)), n = s(String.fromCharCode(107));
                            r = [r(), r()], r[1] = n(), n = "&" + r.join("") + "=", r = t.split("."), t = Number(r[0]) || 0;
                            for (var a = [], c = 0, l = 0; l < e.length; l++) {
                                let t = e.charCodeAt(l);
                                128 > t ? a[c++] = t : (2048 > t ? a[c++] = t >> 6 | 192 : (55296 == (64512 & t) && l + 1 < e.length && 56320 == (64512 & e.charCodeAt(l + 1)) ? (t = 65536 + ((1023 & t) << 10) + (1023 & e.charCodeAt(++l)), a[c++] = t >> 18 | 240, a[c++] = t >> 12 & 63 | 128) : a[c++] = t >> 12 | 224, a[c++] = t >> 6 & 63 | 128), a[c++] = 63 & t | 128)
                            }
                            e = t;
                            for (let t = 0; t < a.length; t++) e += a[t], e = i(e, "+-a^+6");
                            return e = i(e, "+-3^+b+-f"), 0 > (e ^= Number(r[1]) || 0) && (e = 2147483648 + (2147483647 & e)), n + ((e %= 1e6).toString() + ".") + (e ^ t)
                        }(e);
                        return t = t.replace("&tk=", ""), {name: "tk", value: t}
                    } catch (e) {
                        return e
                    }
                }
            }, 0: function (e, t) {
            }, 1: function (e, t) {
            }, 2: function (e, t) {
            }, 3: function (e, t) {
            }
        });
    }

    //warm it up, so it served hot
    bot.translate = translate();
    //const languages = __webpack_require__(/*! ./languages */ "./src/languages.js");
};