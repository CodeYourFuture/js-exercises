var _scq = _scq || [];
_scq.push(['setMerchantId', '1A50DCF569DA7DE5']);
var _scwebpersonalization = _scwebpersonalization || {"wp_merchant_id":"15747FC657C39E6A","default_config":{"customer_id":"785441143","sentry_enabled":false,"eu_only":true,"rank_based_sorting_on_ui":true,"dcache_enabled_for_all_visitors":true}};
var ScarabArrays = function() {
  var forEach = function(array, fn, scope) {
    if (Array.prototype.forEach) {
      return array.forEach(fn, scope);
    }
    for (var i = 0, len = array.length;i < len;++i) {
      fn.call(scope, array[i], i, this);
    }
  };
  var map = function(array, projectionFunction) {
    if (Array.prototype.map) {
      return array.map(projectionFunction);
    }
    var results = [];
    forEach(array, function(itemInArray, i) {
      results.push(projectionFunction(itemInArray, i));
    });
    return results;
  };
  var findIndex = function(array, predicateFunction) {
    if (Array.prototype.findIndex) {
      return array.findIndex(predicateFunction);
    }
    for (var i = 0, l = array.length;i < l;i++) {
      if (predicateFunction(array[i])) {
        return i;
      }
    }
    return -1;
  };
  var flatmap = function(array, projectionFunction) {
    return [].concat.apply([], map(array, projectionFunction));
  };
  var filter = function(array, predicateFunction) {
    if (Array.prototype.filter) {
      return array.filter(predicateFunction);
    }
    var results = [];
    forEach(array, function(itemInArray) {
      if (predicateFunction(itemInArray)) {
        results.push(itemInArray);
      }
    });
    return results;
  };
  return {forEach:forEach, map:map, flatmap:flatmap, filter:filter, findIndex:findIndex};
}();
var ScarabUtil = function() {
  var JSONParser = function(str) {
    if (!str || typeof str !== "string") {
      return;
    }
    if (str[0] === "[") {
      var objects = str === "[]" ? [] : str.substring(2, str.length - 2).split("},{");
      return ScarabArrays.map(objects, function(item) {
        var obj = {};
        ScarabArrays.forEach(item.substring(1, item.length - 1).split('","'), function(element) {
          var keyValue = element.split('":"');
          if (keyValue.length !== 2) {
            throw "invalid json";
          }
          obj[keyValue[0]] = keyValue[1];
        });
        return obj;
      });
    } else {
      if (str[0] === '"') {
        return str.substring(1, str.length - 1);
      }
    }
  };
  var makeDisableFunction = function(moduleConfig, w) {
    w = w || window;
    var disabledDefs = moduleConfig && (moduleConfig.disabledDefs || moduleConfig.config && moduleConfig.config.disabledDefs) || {};
    var disabledType = disabledDefs.type;
    var disabledPatterns = disabledDefs.patterns || [];
    var alwaysEnabled = function() {
      return false;
    };
    if (disabledType === "customFunction") {
      return function() {
        var fn = moduleConfig && moduleConfig.customDisabled || alwaysEnabled;
        return fn.apply(w, arguments);
      };
    }
    if (disabledType === "urlDoesNotContain") {
      return function() {
        return ScarabArrays.filter(disabledPatterns, function(blockPath) {
          return w.location.href.indexOf(blockPath) !== -1;
        }).length > 0;
      };
    }
    return alwaysEnabled;
  };
  var prettyPrice = function(nStr) {
    nStr += "";
    var x = nStr.split(".");
    var x1 = x[0];
    var x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1" + " " + "$2");
    }
    return x1 + x2;
  };
  var redirect = function(link, merchant, item, feature, cohort) {
    return "http://recommender.scarabresearch.com/merchants/" + merchant + "/?v=" + encodeURIComponent("i:" + item + ",t:" + feature + ",c:" + cohort) + "&redirect_to=" + encodeURIComponent(link);
  };
  var sc_params = function(link, feature, cohort) {
    return appendParams(link, {sc_feature:feature, sc_cohort:cohort});
  };
  var addTrackingParams = function(SC, params) {
    return merge(params, {sc_feature:SC.recommender.f, sc_cohort:SC.cohort});
  };
  var appendParams = function(uri, params) {
    var paramsArray = [];
    for (var name in params) {
      if (params.hasOwnProperty(name) && typeof params[name] !== "undefined") {
        paramsArray.push({n:name, v:params[name]});
      }
    }
    if (paramsArray.length === 0) {
      return uri;
    }
    var paramsString = ScarabArrays.map(paramsArray.sort(function(a, b) {
      return a.n.localeCompare(b.n);
    }), function(p) {
      return p.n + "=" + encodeURIComponent(p.v);
    }).join("&");
    var fragmentIndex = uri.indexOf("#");
    var fragment = "";
    if (fragmentIndex >= 0) {
      fragment = uri.substring(fragmentIndex);
      uri = uri.substring(0, fragmentIndex);
    }
    var sep = uri.indexOf("?") >= 0 ? "&" : "?";
    return uri + sep + paramsString + fragment;
  };
  var parseQuery = function(query) {
    query = query.substring(1);
    var queryString = {};
    var vars = query.split("&");
    for (var i = 0;i < vars.length;i++) {
      if (vars[i] === "") {
        continue;
      }
      var pair = vars[i].split("=");
      var key = pair[0];
      var value = pair.length > 1 ? pair[1] : "";
      try {
        var paramValue = decodeURIComponent(value.replace(/\+/g, "%20"));
        if (typeof queryString[key] === "undefined") {
          queryString[key] = paramValue;
        } else {
          if (typeof queryString[key] === "string") {
            var arr = [queryString[key], paramValue];
            queryString[key] = arr;
          } else {
            queryString[key].push(paramValue);
          }
        }
      } catch (err) {
      }
    }
    return queryString;
  };
  var parseQueryString = function(w) {
    w = w || window;
    if (!w || !w.location || !w.location.search || w.location.search === "") {
      return {};
    }
    return parseQuery(w.location.search);
  };
  var parseHashString = function(w) {
    w = w || window;
    if (!w || !w.location || !w.location.hash || w.location.hash === "") {
      return {};
    }
    return parseQuery(w.location.hash);
  };
  var getCookie = function(name) {
    var value = getCookieWithoutCrazyness(name);
    if (value === null) {
      return [];
    }
    try {
      return JSON.parse(value);
    } catch (e) {
      return JSONParser(value);
    }
  };
  var hasCookie = function(name) {
    return getCookieWithoutCrazyness(name) !== null;
  };
  var getCookieWithoutCrazyness = function(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        var value = decodeURIComponent(c.substring(nameEQ.length, c.length));
        return value;
      } else {
        if (name === c) {
          return "";
        }
      }
    }
    return null;
  };
  var topDomainToCookie = function(domain) {
    if (domain === "localhost") {
      return "";
    }
    var td = getTopDomain(domain);
    return "domain=" + td;
  };
  var getTopDomain = function(domain) {
    var ipPattern = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
    if (ipPattern.test(domain)) {
      return domain;
    }
    var dparts = domain.split(".");
    var l = dparts.length;
    var partsToKeep = Math.min(l, 2);
    if (l > 2 && ("co" === dparts[l - 2] || "com" === dparts[l - 2] || "azurewebsites" === dparts[l - 2] && "net" === dparts[l - 1]) || "cloudfront" === dparts[l - 2] && "net" === dparts[l - 1]) {
      partsToKeep = 3;
    }
    return "." + dparts.slice(l - partsToKeep).join(".");
  };
  var merge = function() {
    var i, l = arguments.length, result = {}, o, k;
    for (i = 0;i < l;i++) {
      o = arguments[i];
      if (o) {
        for (k in o) {
          if (o.hasOwnProperty(k)) {
            result[k] = o[k];
          }
        }
      }
    }
    return result;
  };
  var indexOf = function(array, searchElement, fromIndex) {
    if (Array.prototype.indexOf) {
      return array.indexOf(searchElement, fromIndex);
    }
    var k;
    if (array == null) {
      throw new TypeError('"this" is null or not defined');
    }
    var O = Object(array);
    var len = O.length >>> 0;
    if (len === 0) {
      return -1;
    }
    var n = +fromIndex || 0;
    if (Math.abs(n) === Infinity) {
      n = 0;
    }
    if (n >= len) {
      return -1;
    }
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
    while (k < len) {
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
  var isNaN;
  if (!Number.isNaN) {
    isNaN = function(n) {
      return n !== n;
    };
  } else {
    isNaN = Number.isNaN;
  }
  var indexOfItem = function(array, needle, id) {
    var i, l;
    if (!array || array && !array.length) {
      return -1;
    }
    l = array.length;
    for (i = 0;i < l;i++) {
      if (typeof needle === "string") {
        if (typeof array[i] !== "undefined" && array[i][id] === needle) {
          return i;
        }
      } else {
        if (typeof array[i] !== "undefined" && needle.equal(array[i])) {
          return i;
        }
      }
    }
    return -1;
  };
  var deepCopy = function(source, target) {
    target = target || {};
    for (var i in source) {
      if (!source.hasOwnProperty(i)) {
        continue;
      }
      if (source[i] !== null && typeof source[i] === "object") {
        target[i] = source[i].constructor === Array ? [] : {};
        deepCopy(source[i], target[i]);
      } else {
        target[i] = source[i];
      }
    }
    return target;
  };
  var augment = function() {
    var i, l = arguments.length, f, cf = arguments[0];
    for (i = 1;i < l;i++) {
      f = arguments[i];
      f.call(cf.prototype);
    }
  };
  var bind = function(fn, context) {
    return function() {
      var f = fn, c = context;
      f.apply(c, arguments);
    };
  };
  var trim = function(str) {
    return !!String.prototype.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  };
  var playQueue = function(publicAPI, queue) {
    var Queue = function(queue) {
      if (!(queue instanceof Array)) {
        if (queue instanceof Queue) {
          return;
        }
        throw new SyntaxError("Scarab Queue is not an array");
      }
      for (var i = 0;i < queue.length;++i) {
        this.push(queue[i]);
      }
    };
    Queue.prototype.push = function() {
      for (var i = 0;i < arguments.length;++i) {
        var commandArray = arguments[i];
        if (!(commandArray instanceof Array) && commandArray.length > 0) {
          throw new SyntaxError("command should be a non-empty array: " + commandArray);
        }
        var command = commandArray[0];
        var params = [];
        for (var j = 1;j < commandArray.length;++j) {
          params.push(commandArray[j]);
        }
        if (publicAPI.hasOwnProperty(command)) {
          publicAPI[command].apply(null, params);
        } else {
          throw new SyntaxError("unknown command: " + command);
        }
      }
    };
    return new Queue(queue);
  };
  var getProductCategory = function(product, lang) {
    if (!product || !product.category) {
      return null;
    }
    return product["category_" + lang] || product["c_category_" + lang];
  };
  var findLocalizedTopic = function(product, topic, language) {
    if (!language) {
      return topic;
    }
    var productCat = getProductCategory(product, language);
    if (!productCat || !topic) {
      return "";
    }
    var indx = ScarabArrays.findIndex(product.category.split("|"), function(category) {
      return category.indexOf(topic) === 0;
    });
    if (indx === -1) {
      return "";
    }
    var locCategories = productCat.split("|");
    var locCategory = locCategories[Math.min(indx, locCategories.length - 1)];
    var topicSpec = topic.split(">").length;
    var locCategoryLevels = locCategory.split(">");
    return locCategoryLevels.length === topicSpec ? locCategory : locCategoryLevels.slice(0, topicSpec).join(">");
  };
  var keys = function(obj) {
    var object = Object(obj);
    if (!Object.keys) {
      var keys = [];
      if (typeof obj === "string") {
        for (var i = 0;i < object.length;i++) {
          keys.push("" + i);
        }
      } else {
        for (var key in object) {
          if (Object.prototype.hasOwnProperty.call(object, key)) {
            keys.push(key);
          }
        }
      }
      return keys;
    }
    return Object.keys(object);
  };
  var isArray = Array.isArray || function(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };
  var isObject = function(obj) {
    return Object(obj) === obj && !isArray(obj);
  };
  var containsPrimitivesOnly = function(obj) {
    var isPrimitive = function(value) {
      var type = typeof value;
      return type === "string" || type === "number" || type === "boolean" || value === null;
    };
    var hasOnlyPrimitiveProperties = function(obj) {
      var props = keys(obj);
      for (var i = 0, length = props.length;i < length;i++) {
        var property = props[i];
        if (Object.prototype.hasOwnProperty.call(obj, property) && !isPrimitive(obj[property])) {
          return false;
        }
      }
      return true;
    };
    return isObject(obj) && hasOnlyPrimitiveProperties(obj);
  };
  var isEmpty = function(obj) {
    return keys(obj).length === 0;
  };
  var createCORSRequest = function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest;
    if ("withCredentials" in xhr) {
      xhr.open(method, url, true);
      return xhr;
    } else {
      return null;
    }
  };
  var createJSONPRequest = function createJSONPRequest(url, callbackName, jsonpStem) {
    if (window.ScarabTrustIssues) {
      return;
    }
    url = url + "&callback=" + callbackName;
    if (callbackName === "") {
      var i = new Image;
      i.src = url;
    } else {
      var s = document.createElement("script");
      s.src = url;
      s.id = (jsonpStem || "scarab-jsonp") + "-" + callbackName;
      s.type = "text/javascript";
      s.charset = "UTF-8";
      document.getElementsByTagName("head")[0].appendChild(s);
    }
  };
  var CryptoJS = CryptoJS || function(e, m) {
    var p = {}, j = p.lib = {}, l = function() {
    }, f = j.Base = {extend:function(a) {
      l.prototype = this;
      var c = new l;
      a && c.mixIn(a);
      c.hasOwnProperty("init") || (c.init = function() {
        c.$super.init.apply(this, arguments);
      });
      c.init.prototype = c;
      c.$super = this;
      return c;
    }, create:function() {
      var a = this.extend();
      a.init.apply(a, arguments);
      return a;
    }, init:function() {
    }, mixIn:function(a) {
      for (var c in a) {
        a.hasOwnProperty(c) && (this[c] = a[c]);
      }
      a.hasOwnProperty("toString") && (this.toString = a.toString);
    }, clone:function() {
      return this.init.prototype.extend(this);
    }}, n = j.WordArray = f.extend({init:function(a, c) {
      a = this.words = a || [];
      this.sigBytes = c != m ? c : 4 * a.length;
    }, toString:function(a) {
      return (a || h).stringify(this);
    }, concat:function(a) {
      var c = this.words, q = a.words, d = this.sigBytes;
      a = a.sigBytes;
      this.clamp();
      if (d % 4) {
        for (var b = 0;b < a;b++) {
          c[d + b >>> 2] |= (q[b >>> 2] >>> 24 - 8 * (b % 4) & 255) << 24 - 8 * ((d + b) % 4);
        }
      } else {
        if (65535 < q.length) {
          for (b = 0;b < a;b += 4) {
            c[d + b >>> 2] = q[b >>> 2];
          }
        } else {
          c.push.apply(c, q);
        }
      }
      this.sigBytes += a;
      return this;
    }, clamp:function() {
      var a = this.words, c = this.sigBytes;
      a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
      a.length = e.ceil(c / 4);
    }, clone:function() {
      var a = f.clone.call(this);
      a.words = this.words.slice(0);
      return a;
    }, random:function(a) {
      for (var c = [], b = 0;b < a;b += 4) {
        c.push(4294967296 * e.random() | 0);
      }
      return new n.init(c, a);
    }}), b = p.enc = {}, h = b.Hex = {stringify:function(a) {
      var c = a.words;
      a = a.sigBytes;
      for (var b = [], d = 0;d < a;d++) {
        var f = c[d >>> 2] >>> 24 - 8 * (d % 4) & 255;
        b.push((f >>> 4).toString(16));
        b.push((f & 15).toString(16));
      }
      return b.join("");
    }, parse:function(a) {
      for (var c = a.length, b = [], d = 0;d < c;d += 2) {
        b[d >>> 3] |= parseInt(a.substr(d, 2), 16) << 24 - 4 * (d % 8);
      }
      return new n.init(b, c / 2);
    }}, g = b.Latin1 = {stringify:function(a) {
      var c = a.words;
      a = a.sigBytes;
      for (var b = [], d = 0;d < a;d++) {
        b.push(String.fromCharCode(c[d >>> 2] >>> 24 - 8 * (d % 4) & 255));
      }
      return b.join("");
    }, parse:function(a) {
      for (var c = a.length, b = [], d = 0;d < c;d++) {
        b[d >>> 2] |= (a.charCodeAt(d) & 255) << 24 - 8 * (d % 4);
      }
      return new n.init(b, c);
    }}, r = b.Utf8 = {stringify:function(a) {
      try {
        return decodeURIComponent(escape(g.stringify(a)));
      } catch (c) {
        throw Error("Malformed UTF-8 data");
      }
    }, parse:function(a) {
      return g.parse(unescape(encodeURIComponent(a)));
    }}, k = j.BufferedBlockAlgorithm = f.extend({reset:function() {
      this._data = new n.init;
      this._nDataBytes = 0;
    }, _append:function(a) {
      "string" == typeof a && (a = r.parse(a));
      this._data.concat(a);
      this._nDataBytes += a.sigBytes;
    }, _process:function(a) {
      var c = this._data, b = c.words, d = c.sigBytes, f = this.blockSize, h = d / (4 * f), h = a ? e.ceil(h) : e.max((h | 0) - this._minBufferSize, 0);
      a = h * f;
      d = e.min(4 * a, d);
      if (a) {
        for (var g = 0;g < a;g += f) {
          this._doProcessBlock(b, g);
        }
        g = b.splice(0, a);
        c.sigBytes -= d;
      }
      return new n.init(g, d);
    }, clone:function() {
      var a = f.clone.call(this);
      a._data = this._data.clone();
      return a;
    }, _minBufferSize:0});
    j.Hasher = k.extend({cfg:f.extend(), init:function(a) {
      this.cfg = this.cfg.extend(a);
      this.reset();
    }, reset:function() {
      k.reset.call(this);
      this._doReset();
    }, update:function(a) {
      this._append(a);
      this._process();
      return this;
    }, finalize:function(a) {
      a && this._append(a);
      return this._doFinalize();
    }, blockSize:16, _createHelper:function(a) {
      return function(c, b) {
        return (new a.init(b)).finalize(c);
      };
    }, _createHmacHelper:function(a) {
      return function(b, f) {
        return (new s.HMAC.init(a, f)).finalize(b);
      };
    }});
    var s = p.algo = {};
    return p;
  }(Math);
  (function() {
    var e = CryptoJS, m = e.lib, p = m.WordArray, j = m.Hasher, l = [], m = e.algo.SHA1 = j.extend({_doReset:function() {
      this._hash = new p.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
    }, _doProcessBlock:function(f, n) {
      for (var b = this._hash.words, h = b[0], g = b[1], e = b[2], k = b[3], j = b[4], a = 0;80 > a;a++) {
        if (16 > a) {
          l[a] = f[n + a] | 0;
        } else {
          var c = l[a - 3] ^ l[a - 8] ^ l[a - 14] ^ l[a - 16];
          l[a] = c << 1 | c >>> 31;
        }
        c = (h << 5 | h >>> 27) + j + l[a];
        c = 20 > a ? c + ((g & e | ~g & k) + 1518500249) : 40 > a ? c + ((g ^ e ^ k) + 1859775393) : 60 > a ? c + ((g & e | g & k | e & k) - 1894007588) : c + ((g ^ e ^ k) - 899497514);
        j = k;
        k = e;
        e = g << 30 | g >>> 2;
        g = h;
        h = c;
      }
      b[0] = b[0] + h | 0;
      b[1] = b[1] + g | 0;
      b[2] = b[2] + e | 0;
      b[3] = b[3] + k | 0;
      b[4] = b[4] + j | 0;
    }, _doFinalize:function() {
      var f = this._data, e = f.words, b = 8 * this._nDataBytes, h = 8 * f.sigBytes;
      e[h >>> 5] |= 128 << 24 - h % 32;
      e[(h + 64 >>> 9 << 4) + 14] = Math.floor(b / 4294967296);
      e[(h + 64 >>> 9 << 4) + 15] = b;
      f.sigBytes = 4 * e.length;
      this._process();
      return this._hash;
    }, clone:function() {
      var e = j.clone.call(this);
      e._hash = this._hash.clone();
      return e;
    }});
    e.SHA1 = j._createHelper(m);
    e.HmacSHA1 = j._createHmacHelper(m);
  })();
  var sha1 = function(s) {
    return CryptoJS.SHA1(s).toString(CryptoJS.enc.Hex);
  };
  var staticResource = function(path) {
    return "//cdn.scarabresearch.com/static" + path;
  };
  var s3Resource = function(path) {
    return "//static.scarabresearch.com" + path;
  };
  var localResource = function(path) {
    return "http://local.scarabresearch.com:3000" + path;
  };
  var localHttpsResource = function(path) {
    return "https://local.scarabresearch.com" + path;
  };
  var cacheBuster = function(url) {
    var glue = url.indexOf("?") === -1 ? "?" : "&";
    var thirtyMinutesInMilliseconds = 30 * 60 * 1E3;
    var cacheBuster = Math.floor((new Date).getTime() / thirtyMinutesInMilliseconds);
    return url + glue + "ts=" + cacheBuster;
  };
  var emarsysModules = {sc_inspector:{path:staticResource("/inspector/scarab-inspector.min.js"), devPath:localResource("/build/scarab-inspector.js"), durationSeconds:24 * 60 * 60}, emarsys_hooked:{path:staticResource("/hooked/scarab-hooked.js"), devPath:localResource("/hooked/build/scarab-hooked.js"), durationSeconds:7 * 24 * 60 * 60}, emarsys_discovery:{aliases:["sc_assistant", "sc_discodrag", "sc_mobildisco", "sc_discovery"], desktop:{path:staticResource("/assistant/scarab-assistant.js"), devPath:localResource("/build/scarab-assistant.js")}, 
  mobile:{path:s3Resource("/discodrag/build.js"), devPath:localResource("/dist/build.js"), stagingPath:s3Resource("/discodragstaging/build.js")}, legacyMobile:{path:staticResource("/mobildisco/build.js"), devPath:localResource("/build/build.js")}, moduleConfig:"_scdiscovery", durationSeconds:24 * 60 * 60}, emarsys_webpersonalization:{aliases:["sc_webpersonalization"], es6:{path:cacheBuster(s3Resource("/wpjs/wpes6.js")), devPath:localResource("/dist/wpes6.js"), stagingPath:cacheBuster(s3Resource("/webchannel-staging/wpjs/wpes6.js")), 
  devSslPath:localHttpsResource("/dist/wpes6.js")}, es5:{path:cacheBuster(s3Resource("/wpjs/wpes5.js")), devPath:localResource("/dist/wpes5.js"), stagingPath:cacheBuster(s3Resource("/webchannel-staging/wpjs/wpes5.js")), devSslPath:localHttpsResource("/dist/wpes5.js")}, loader:{path:cacheBuster(s3Resource("/wpjs/wploader.js")), devPath:localResource("/dist/wploader.js"), stagingPath:cacheBuster(s3Resource("/webchannel-staging/wpjs/wploader.js")), devSslPath:localHttpsResource("/dist/wploader.js")}, 
  durationSeconds:24 * 60 * 60}, emarsys_instantsearch:{aliases:["sc_instantsearch"], path:s3Resource("/instantsearch/build.js"), devPath:localResource("/dist/build.js"), moduleConfig:"_scinstant", durationSeconds:24 * 60 * 60}, emarsys_webpush:{path:s3Resource("/web-push-client/emarsys-web-push.js"), devPath:localResource("/emarsys-web-push.js"), durationSeconds:24 * 60 * 60}};
  var modules = {inspector:{path:staticResource("/inspector/scarab-inspector.min.js"), devPath:localResource("/build/scarab-inspector.js")}, discovery:{path:staticResource("/discovery/scarab-discovery.js")}, assistant:{path:staticResource("/assistant/scarab-assistant.js"), devPath:localResource("/build/scarab-assistant.js"), durationSeconds:24 * 60 * 60}, mobildisco:{path:staticResource("/mobildisco/build.js"), devPath:localResource("/build/build.js"), durationSeconds:24 * 60 * 60}, discodrag:{path:s3Resource("/discodrag/build.js"), 
  devPath:localResource("/dist/build.js"), stagingPath:s3Resource("/discodragstaging/build.js"), durationSeconds:24 * 60 * 60}, instantsearch:{path:s3Resource("/instantsearch/build.js"), devPath:localResource("/dist/build.js"), durationSeconds:24 * 60 * 60}, horus:{path:staticResource("/horus/horus.js"), devPath:localResource("/build/horus.js"), durationSeconds:7 * 24 * 60 * 60}, hooked:{path:staticResource("/hooked/scarab-hooked.js"), devPath:localResource("/hooked/build/scarab-hooked.js")}, develop:{}};
  var loader = function(module, cb, hashConfig) {
    if (window.ScarabTrustIssues || module === "develop") {
      return;
    }
    var id = "scarab-" + module;
    if (document.getElementById(id)) {
      return;
    }
    var src = modules[module].path;
    if (hashConfig && hashConfig.staging && modules[module].stagingPath) {
      src = modules[module].stagingPath;
    }
    if (hashConfig && hashConfig.dev) {
      src = modules[module].devPath;
    }
    if (hashConfig && hashConfig.devSsl) {
      src = modules[module].devPath.replace(/http:\/\/local.scarabresearch.com:3000/g, "https://dafay6v9gkf6n.cloudfront.net");
    }
    if (hashConfig && hashConfig.devPort) {
      var port = parseInt(hashConfig.devPort || "3000", 10);
      if (port !== port || port < 0 || port > 65535) {
        return;
      }
      src = modules[module].devPath.replace(/local.scarabresearch.com:3000/g, "build.dev.scarabresearch.com:" + port);
    }
    ScarabUtil.script = ScarabUtil.script || {};
    var callback = function(module) {
      if (!cb || !module) {
        return;
      }
      var cbTemp = cb;
      cb = null;
      cbTemp(module, hashConfig);
    };
    ScarabUtil.scriptCb = ScarabUtil.scriptCb || {};
    ScarabUtil.scriptCb[id] = callback;
    var js = document.createElement("script");
    js.id = id;
    js.src = src;
    js.charset = "utf-8";
    var fs = document.getElementsByTagName("script")[0];
    var ieLoadBugFix = function(scriptElement, callback) {
      if (ScarabUtil.script[id]) {
        return;
      }
      if (scriptElement.readyState === "loaded" || scriptElement.readyState === "completed") {
        callback();
      } else {
        setTimeout(function() {
          ieLoadBugFix(scriptElement, callback);
        }, 100);
      }
    };
    js.onload = function() {
      callback(ScarabUtil.script[id]);
    };
    ieLoadBugFix(js, function() {
      callback(ScarabUtil.script[id]);
    });
    fs.parentNode.insertBefore(js, fs);
  };
  var saveHashConfigsToCookies = function(w) {
    var hash = parseHashString(w);
    if (!w.JSON) {
      return;
    }
    for (var moduleName in emarsysModules) {
      if (emarsysModules.hasOwnProperty(moduleName)) {
        ScarabArrays.forEach([moduleName].concat(emarsysModules[moduleName].aliases || []), function(module) {
          if (hash[module] || hash[module] === "") {
            try {
              if (hash[module] !== "") {
                var parsed = w.JSON.parse(hash[module]);
                if (parsed.serverUrl) {
                  delete parsed.serverUrl;
                }
                hash[module] = w.JSON.stringify(parsed);
              }
            } catch (e) {
              if (w.console && w.console.error) {
                w.console.error("Hash config for", module, "is not a valid JSON: ", hash[module]);
              }
              return;
            }
            var later = new Date;
            later.setSeconds(later.getSeconds() + emarsysModules[moduleName].durationSeconds);
            document.cookie = module + "=" + encodeURIComponent(hash[module]) + ";expires=" + later.toUTCString() + ";path=/";
          }
        });
      }
    }
  };
  var checkModules = function(w, callback) {
    w = w || window;
    saveHashConfigsToCookies(w);
    if (!w.JSON) {
      return;
    }
    for (var module in emarsysModules) {
      if (emarsysModules.hasOwnProperty(module)) {
        try {
          var cookieStr = getCookieWithoutCrazyness(module);
          var cookieConfig = cookieStr ? w.JSON.parse(cookieStr) : {};
          var moduleConfig = w[emarsysModules[module].moduleConfig] || {config:{}};
          var config = ScarabUtil.merge(moduleConfig.config || moduleConfig, cookieConfig);
          config.disabled = makeDisableFunction(config);
          config.cookieMode = hasCookie(module);
          if (moduleConfig.visible || config.cookieMode) {
            callback(module, config);
          } else {
            if (emarsysModules[module].aliases) {
              for (var i = 0;i < emarsysModules[module].aliases.length;i++) {
                var alias = emarsysModules[module].aliases[i];
                cookieStr = getCookieWithoutCrazyness(alias);
                cookieConfig = cookieStr ? w.JSON.parse(cookieStr) : {};
                config = ScarabUtil.merge(moduleConfig.config, cookieConfig);
                config.disabled = makeDisableFunction(config);
                config.cookieMode = hasCookie(alias);
                if (moduleConfig.visible || config.cookieMode) {
                  callback(module, config);
                  continue;
                }
              }
            }
          }
        } catch (e) {
          if (w.console && w.console.error) {
            w.console.error('error preparing "' + module + '" config', e);
          }
          continue;
        }
      }
    }
  };
  var loadModule = function(w, module, config, subModule, cb) {
    w = w || window;
    if (w.ScarabTrustIssues || !emarsysModules[module] || emarsysModules[module].status) {
      return;
    }
    emarsysModules[module].status = "loading";
    var paths = subModule && emarsysModules[module][subModule] ? emarsysModules[module][subModule] : emarsysModules[module];
    var src = paths.path;
    if (config && config.staging && paths.stagingPath) {
      src = paths.stagingPath;
    }
    if (config && config.dev) {
      src = paths.devPath;
    }
    if (config && config.devSsl) {
      src = paths.devSslPath || paths.devPath.replace(/http:\/\/local.scarabresearch.com:3000/g, "https://dafay6v9gkf6n.cloudfront.net");
    }
    if (config && config.devPort) {
      var port = parseInt(config.devPort || "3000", 10);
      if (port !== port || port < 0 || port > 65535) {
        delete emarsysModules[module].status;
        return;
      }
      src = paths.devPath.replace(/local.scarabresearch.com:3000/g, "build.dev.scarabresearch.com:" + port);
    }
    ScarabUtil.loadedModules[module] = {config:config, callback:function(instance) {
      if (emarsysModules[module].status === "loaded") {
        if (w.console && w.console.error) {
          w.console.error("module already loaded", module, config);
        }
        return;
      }
      ScarabUtil.loadedModules[module].instance = instance;
      emarsysModules[module].status = "loaded";
      try {
        if (!instance) {
          if (w.console && w.console.error) {
            w.console.error("no module instance passed in callback", module, config);
          }
          return;
        }
        if (instance.go) {
          instance.go(config);
        }
        if (cb) {
          cb();
        }
      } catch (e) {
        if (w.console && w.console.error) {
          w.console.error('error launching "' + module + '" with config', config, e);
        }
      }
    }};
    var js = document.createElement("script");
    js.module = module;
    js.id = module + (subModule ? "_" + subModule : "");
    js.src = src;
    js.charset = "utf-8";
    var fs = document.getElementsByTagName("script")[0];
    fs.parentNode.insertBefore(js, fs);
  };
  var loadModules = function(actions, w) {
    w = w || window;
    var hash = parseHashString(w);
    if (!window.JSON) {
      return;
    }
    var callGo = function(m) {
      m.go();
    };
    for (var m in modules) {
      if (modules.hasOwnProperty(m)) {
        var moduleName = "sc_" + m;
        if (hash[moduleName] !== undefined) {
          var val = hash[moduleName] || "{}";
          try {
            JSON.parse(val);
          } catch (e) {
            if (w.console && w.console.error) {
              console.error("Hash config for", moduleName, "is not a valid JSON: ", e);
            }
            continue;
          }
          var later = new Date;
          later.setSeconds(later.getSeconds() + (modules[m].durationSeconds || 30 * 60));
          document.cookie = moduleName + "=" + encodeURIComponent(val) + ";expires=" + later.toUTCString() + ";path=/";
        }
        var hashConfig = getCookieWithoutCrazyness(moduleName);
        if (hashConfig !== null) {
          try {
            hashConfig = JSON.parse(hashConfig);
            if (hashConfig.serverUrl) {
              hashConfig.serverUrl = null;
            }
            modules[m].config = hashConfig;
          } catch (e$0) {
            if (w.console && w.console.error) {
              console.error("Bad hash config found in cookie", moduleName, ":", e$0);
            }
            continue;
          }
          if (actions[m]) {
            actions[m](hashConfig);
          } else {
            loader(m, callGo, hashConfig);
          }
        }
      }
    }
  };
  var isIpad = function isIpad(w) {
    w = w || window;
    return /iPad/.test(w.navigator.userAgent) && !w.MSStream;
  };
  var isIPhone = function isIPhone(w) {
    w = w || window;
    return /iPhone|iPod/.test(w.navigator.userAgent) && !w.MSStream;
  };
  var isSafari = function isSafari(w) {
    w = w || window;
    return /WebKit/i.test(w.navigator.userAgent) && !/(CriOS|FxiOS|OPiOS|mercury)/i.test(w.navigator.userAgent);
  };
  var isChromeForIPhone = function(w) {
    w = w || window;
    return isIPhone(w) && w.navigator.userAgent.match("CriOS");
  };
  var isChromeForAndroid = function(w) {
    w = w || window;
    return !!w.navigator.userAgent.match(/Android.*Chrome\/[0-9].*Mobile/i) && !w.navigator.userAgent.match(/Version\/[0-9]/i);
  };
  var isMobile = function isMobile(w) {
    w = w || window;
    var width = w.innerWidth, height = w.innerHeight, n = w.navigator;
    return w.matchMedia ? w.matchMedia("only screen and (max-device-width : 480px)").matches && n.userAgent && n.userAgent.search("Mobi") > -1 : width && height && n && n.userAgent && Math.min(width, height) <= 480 && n.userAgent.search("Mobi") > -1;
  };
  var encodeGlobalTimings = function(scriptTimings) {
    return ScarabArrays.map(["initStart", "domContentLoaded", "domInteractive", "loadStart", "loadEnd"], function pluckAndFormat(name) {
      return scriptTimings[name] ? scriptTimings[name].toFixed(0) : "";
    }).join(",");
  };
  var encodeTimings = function encodeTimings(perfTimings, scriptTimings) {
    return ScarabArrays.map(["redirectStart", "fetchStart", "domainLookupStart", "connectStart", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "renderEnd", "goStart"], function pluckAndFormat(name) {
      return perfTimings[name] ? perfTimings[name].toFixed(0) : scriptTimings[name] ? scriptTimings[name].toFixed(0) : "";
    }).join(",");
  };
  var clientTimings = function clientTimings(w, scriptTimings, host, hasRecommendation) {
    w = w || window;
    if (!(w.performance && w.performance.timing && w.performance.getEntriesByType)) {
      return;
    }
    scriptTimings.domContentLoaded = Math.max(0, w.performance.timing.domContentLoadedEventEnd - w.performance.timing.navigationStart);
    scriptTimings.domInteractive = Math.max(0, w.performance.timing.domInteractive - w.performance.timing.navigationStart);
    scriptTimings.loadStart = Math.max(0, w.performance.timing.loadEventStart - w.performance.timing.navigationStart);
    scriptTimings.loadEnd = Math.max(0, w.performance.timing.loadEventEnd - w.performance.timing.navigationStart);
    var resources = w.performance.getEntriesByType("resource");
    var lib = ScarabArrays.filter(resources, function scarabLib(resource) {
      return resource.name.indexOf("scarab-v2.js") >= 0;
    });
    var requests = ScarabArrays.filter(resources, function scarabRequest(resource) {
      return resource.name.indexOf(host) >= 0 && resource.name.indexOf("DISCO") === -1;
    });
    if (requests.length !== 1 || lib.length !== 1) {
      return;
    }
    return ["2," + encodeGlobalTimings(scriptTimings), "l," + encodeTimings(lib[0], {}), (hasRecommendation ? "r," : "d,") + encodeTimings(requests[0], scriptTimings)].join("|");
  };
  var hashEmail = function(email) {
    return sha1(trim(email).toLowerCase()).substring(0, 16) + "1";
  };
  var getCohort = function(w, serverUrl, merchantId, callback) {
    w = w || window;
    if (w.JSON && w.JSON.parse) {
      var url = (serverUrl ? serverUrl + "/merchants/" : (document.location.protocol === "file:" ? "http:" : document.location.protocol) + "//recommender.scarabresearch.com/merchants/") + merchantId;
      var xhr = ScarabUtil.createCORSRequest("GET", url);
      if (xhr) {
        xhr.onload = function() {
          var data = JSON.parse(xhr.responseText);
          callback(data.cohort);
        };
        xhr.onerror = function() {
          if (w.console && w.console.error) {
            w.console.error("Error determining cohort from url:", url);
          }
          callback();
        };
        xhr.withCredentials = true;
        xhr.send();
      }
    }
  };
  var isLocalStorageSupported = function(w) {
    try {
      var testKey = "scarabTestKey", storage = w.localStorage;
      storage.setItem(testKey, "1234567890abcdefghijklmnopq");
      storage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  };
  return {makeDisableFunction:makeDisableFunction, prettyPrice:prettyPrice, redirect:redirect, sc_params:sc_params, addTrackingParams:addTrackingParams, appendParams:appendParams, getCookie:getCookie, getCookieWithoutCrazyness:getCookieWithoutCrazyness, hasCookie:hasCookie, topDomainToCookie:topDomainToCookie, getTopDomain:getTopDomain, redirectWithScParams:function(link, merchant, item, feature, cohort) {
    return redirect(sc_params(link, feature, cohort), merchant, item, feature, cohort);
  }, parseQueryString:parseQueryString, parseHashString:parseHashString, merge:merge, isNaN:isNaN, indexOf:indexOf, indexOfItem:indexOfItem, deepCopy:deepCopy, augment:augment, bind:bind, sha1:sha1, trim:trim, keys:keys, isArray:isArray, isObject:isObject, containsPrimitivesOnly:containsPrimitivesOnly, isEmpty:isEmpty, findLocalizedTopic:findLocalizedTopic, playQueue:playQueue, script:{}, modules:modules, loader:loader, loadModules:loadModules, isMobile:isMobile, isIPhone:isIPhone, isIpad:isIpad, 
  isSafari:isSafari, isChromeForIPhone:isChromeForIPhone, isChromeForAndroid:isChromeForAndroid, JSONParser:JSONParser, clientTimings:clientTimings, createCORSRequest:createCORSRequest, createJSONPRequest:createJSONPRequest, hashEmail:hashEmail, emarsysModules:emarsysModules, loadedModules:{}, checkModules:checkModules, loadModule:loadModule, getCohort:getCohort, isLocalStorageSupported:isLocalStorageSupported};
}();
if (typeof window !== "undefined") {
  window.ScarabArrays = ScarabArrays;
}
if (typeof window !== "undefined") {
  window.ScarabUtil = ScarabUtil;
}
;var ScarabModule = function(win, config) {
  config = config || {};
  var w = win || window;
  var localStorageSupported = ScarabUtil.isLocalStorageSupported(w);
  var developMode = ScarabUtil.hasCookie("sc_develop");
  var scriptTimings = {initStart:w.performance && w.performance.now ? w.performance.now() : null, goStart:null, renderEnd:null};
  var TIMINGS_EXPIRE_MILLIS = 30 * 60 * 1E3;
  var CLICK_EXPIRE_MILLIS = 30 * 1E3;
  var ITEMID_MAX_LENGTH = 256;
  var STRINGS = {VIEWCOOKIE:"scarab.mayViewed", ADDCOOKIE:"scarab.mayAdd", VISITORCOOKIE:"scarab.visitor", PROFILECOOKIE:"scarab.profile", TIMINGSSTORE:"sc_timings", NOCONTAINER:"__no_container__"}, SERIALIZE = {"v":"views", "ai":"addedItems", "ca":"cart", "wl":"wishlist", "co":"checkouts", "k":"keywords", "q":"searchTerm", "vc":"category", "cp":"compactProducts", "lang":"language", "currency":"currency", "az":"availabilityZone"}, EVENT = {"pageview":1, "addView":2, "checkAddedItem":3, "addAddedItem":4, 
  "addCartItem":5, "setCart":6, "setWishlist":7, "addCheckoutItem":8, "setPurchase":9, "commit":10}, FEATURETRIGGERS = {"RELATED":{trigger:"view", validate:function(tr) {
    return tr.views && tr.views.length > 0;
  }}, "ALSO_BOUGHT":{trigger:"view", validate:function(tr) {
    return tr.views && tr.views.length > 0;
  }}, "CART":{trigger:"cart", validate:function(tr) {
    return tr.cart && tr.cart.length > 0 || tr.cart && tr.cart.v > 0;
  }}};
  var sessionId, visitorId, customerId, profile, emailHash, emailSign, trafficSource, emsUid, emsLid, emsLlid, fields, merchantId, testMode, debugMode, serverUrl, trackedFeature, trackedCohort, forcedCohort, transactions = {}, transactionCounter = 0, transactionListeners = [], products = {}, features = [], beforeRendering = null, afterRendering = null, skipRendering = false, pageViewId = 0, noTopDomain = false, assistantCalled = false, onModuleAvailableListeners = {};
  if (ScarabUtil.inspector && !config.doNotInspect) {
    ScarabUtil.inspector.FEATURETRIGGERS = FEATURETRIGGERS;
  }
  var doT = function() {
    var doT = {version:"0.1.0"};
    doT.templateSettings = {begin:"{{", end:"}}", varname:"it"};
    doT.template = function(tmpl, conf) {
      conf = conf || doT.templateSettings;
      var str = "", tb = conf.begin, te = conf.end, m, l, arr = tmpl.replace(/\s*<!\[CDATA\[\s*|\s*\]\]>\s*|[\r\n\t]|(\/\*[\s\S]*?\*\/)/g, "").split(tb).join(te + "\u001b").split(te);
      l = arr.length;
      for (m = 0;m < l;m++) {
        str += arr[m].charAt(0) !== "\u001b" ? "out+='" + arr[m].replace(/(\\|["'])/g, "\\$1") + "'" : arr[m].charAt(1) === "=" ? ";out+=(" + arr[m].substr(2) + ");" : arr[m].charAt(1) === "!" ? ";out+=(" + arr[m].substr(2) + ").toString().replace(/&(?!\\w+;)/g, '&#38;').split('<').join('&#60;').split('>').join('&#62;').split('" + '"' + "').join('&#34;').split(" + '"' + "'" + '"' + ").join('&#39;');" : ";" + arr[m].substr(1);
      }
      str = "try{" + ('var out="";' + str + ";return out;").split("out+='';").join("").split('var out="";out+=').join("var out=") + '} catch(e){e.type="TemplateExecutionError";e.args=arguments;e.template=arguments.callee.toString();' + 'throw new SyntaxError("Error in Scarab template.");}';
      try {
        return new Function(conf.varname, str);
      } catch (e) {
        if (window.console && console.warn) {
          console.warn("Could not create a template function: " + str, e);
        }
        throw new SyntaxError("Error in Scarab template.");
      }
    };
    return doT;
  }();
  doT.templateSettings = {begin:"{{", end:"}}", varname:"SC"};
  var addEvent = function(o, name, fn, ctx) {
    if (!o) {
      return;
    }
    var evl;
    if (o.addEventListener) {
      evl = ScarabUtil.bind(fn, ctx);
      o.addEventListener(name, evl, false);
    } else {
      if (o.attachEvent) {
        evl = ScarabUtil.bind(fn, ctx);
        o.attachEvent("on" + name, evl);
      }
    }
    return evl;
  };
  var ISerializable = function() {
    var serialize = function() {
      var s = [], i, sp = this.serializableProperties, l = sp.length, cp;
      for (i = 0;i < l;i++) {
        cp = sp[i];
        if (this.hasOwnProperty(cp) && (this[cp] || this[cp] === 0)) {
          s.push(cp + ":" + this[cp]);
        }
      }
      return s.join(",");
    };
    return function() {
      this.serialize = serialize;
    };
  }();
  var IComparable = function() {
    var equal = function(other) {
      return this.compare(other);
    };
    return function() {
      this.equal = equal;
    };
  }();
  var IMergable = function() {
    var merge = function() {
      var i, l = arguments.length, co, prop;
      for (i = 0;i < l;i++) {
        co = arguments[i];
        for (prop in co) {
          if (co.hasOwnProperty(prop)) {
            this[prop] = co[prop];
          }
        }
      }
    };
    return function() {
      this.merge = merge;
    };
  }();
  var Item = function(config) {
    this.i = encodeURIComponent(config.i + "") || null;
    this.t = config.t || null;
    this.p = config.p === 0 ? 0 : config.p || null;
    this.q = config.q || null;
    this.c = config.c || null;
    this.ct = config.ct || null;
  };
  ScarabUtil.augment(Item, ISerializable, IComparable, IMergable);
  Item.prototype.serializableProperties = ["i", "t", "p", "q", "c"];
  Item.prototype.compare = function(otherItem) {
    return this.i === otherItem.i;
  };
  var Feature = function(config) {
    this.f = config.f || null;
    this.l = config.l || null;
    this.o = typeof config.o === "undefined" ? null : config.o;
    this.t = config.t ? encodeURIComponent(config.t) : null;
    this.hasMore = false;
    this.cohort = "";
    this.merchants = [];
    this.containerId = config.containerId || null;
    this.parent = this.containerId ? document.getElementById(this.containerId) : null;
    this.template = config.template || null;
    this.pages = config.pages || [];
    this.currentPage = null;
    this.attachedListeners = config.attachedListeners || false;
    this.transaction = null;
    this.pi = null;
    this.cust = config.cust || null;
    this.requestSent = false;
  };
  ScarabUtil.augment(Feature, ISerializable, IComparable);
  Feature.prototype.serializableProperties = ["f", "l", "o", "t", "cust"];
  Feature.prototype.compare = function(otherItem) {
    return this.f === otherItem.f;
  };
  Feature.prototype.getProducts = function() {
    var i, l = this.pages.length, result = [], page;
    for (i = 0;i < l;i++) {
      page = this.pages[i];
      result = result.concat(page.products);
    }
    return result;
  };
  Feature.prototype.purgePagesCache = function() {
    this.pages = [];
    this.currentPage = null;
  };
  var findProductsMSIE = function(root) {
    var productIds = [];
    if (typeof root.getAttribute !== "undefined") {
      var dataitem = root.getAttribute("data-scarabitem");
      if (dataitem) {
        productIds.push(dataitem);
      }
    }
    if (root.childNodes.length === 0) {
      return productIds;
    }
    for (var i = 0;i < root.childNodes.length;++i) {
      var subresult = findProductsMSIE(root.childNodes[i]);
      productIds = productIds.concat(subresult);
    }
    return productIds;
  };
  Feature.prototype.findProducts = function() {
    if (typeof NodeFilter === "undefined") {
      return findProductsMSIE(this.parent);
    }
    var walker = document.createTreeWalker(this.parent, NodeFilter.SHOW_ELEMENT, null, false), productIds = [], el, dataitem;
    do {
      el = walker.currentNode;
      dataitem = el.getAttribute("data-scarabitem");
      if (dataitem) {
        productIds.push(dataitem);
      }
    } while (walker.nextNode());
    return productIds;
  };
  Feature.prototype.setProducts = function(pi) {
    this.pi = pi;
  };
  Feature.prototype.setPage = function(page) {
    var that = this;
    this.parent = document.getElementById(this.containerId);
    if (this.containerId !== STRINGS.NOCONTAINER && !this.parent && window.console && console.error) {
      console.error('container not found: "' + this.containerId + '"');
    }
    var renderCallback = function(SC, skipScarabRendering) {
      return that.render(SC, skipScarabRendering);
    };
    var SC;
    this.currentPage = page;
    SC = this.getDataForRendering();
    if (beforeRendering) {
      beforeRendering(SC);
    }
    if (this.successCallback) {
      try {
        this.successCallback(SC, renderCallback);
      } catch (e) {
        if (window.console && console.warn) {
          console.warn("Error in successCallback.", e);
        }
      }
    } else {
      if (!skipRendering) {
        publicInterface.invokeRendering(SC, renderCallback);
      }
    }
    this.attachListeners();
    if (afterRendering) {
      afterRendering(SC);
    }
  };
  Feature.prototype.addPage = function(page) {
    this.pages.push(page);
    this.setPage(page);
  };
  Feature.prototype.previousPage = function() {
    var index = ScarabUtil.indexOfItem(this.pages, this.currentPage);
    if (index > 0) {
      this.setPage(this.pages[index - 1]);
    }
  };
  Feature.prototype.nextPage = function() {
    var index = ScarabUtil.indexOfItem(this.pages, this.currentPage);
    if (index !== -1) {
      if (index < this.pages.length - 1) {
        this.setPage(this.pages[index + 1]);
      } else {
        if (this.hasMore) {
          this.o += this.l;
          publicInterface.setCohortId(this.cohort);
          this.requestSent = false;
          this.transaction.sendRequest();
        }
      }
    }
  };
  Feature.prototype.getDataForRendering = function() {
    var SC = {};
    SC.page = ScarabUtil.deepCopy(this.currentPage);
    SC.topic = this.topicLabel;
    SC.topicLocalized = this.transaction.language && this.transaction.language[0] ? ScarabUtil.findLocalizedTopic(SC.page.products[0], this.topicLabel, this.transaction.language[0]) : this.topicLabel;
    SC.recommender = {};
    SC.recommender.f = this.f;
    SC.recommender.limit = this.l;
    SC.recommender.container = this.parent;
    SC.cohort = this.cohort;
    SC.merchants = this.merchants;
    return SC;
  };
  var getElementsByClassName = function(container, button) {
    if (container.getElementsByClassName) {
      return container.getElementsByClassName(button);
    }
    var all = container.getElementsByTagName("*");
    var ret = [];
    for (var i = 0;i < all.length;i++) {
      if (all[i].className === button) {
        ret.push(all[i]);
      }
    }
    return ret;
  };
  var disableButton = function(container, button) {
    var buttons = getElementsByClassName(container, button);
    for (var i = 0;i < buttons.length;++i) {
      var className = buttons[i].className;
      buttons[i].className = className + " scarab-disabled-button";
    }
  };
  Feature.prototype.render = function(SC, skipScarabRendering) {
    var el = this.parent;
    if (typeof this.template === "function" && !skipScarabRendering) {
      if (!el) {
        throw 'DOM element "' + this.containerId + '" not found "';
      }
      if (el !== document.getElementById(el.id)) {
        el = document.getElementById(el.id);
        this.parent = el;
        this.attachedListeners = false;
      }
      el.innerHTML = this.template(SC);
      var index = ScarabUtil.indexOfItem(this.pages, this.currentPage);
      if (index === 0) {
        disableButton(el, "scarab-prev");
      }
      if (index === this.pages.length - 1 && !this.hasMore) {
        disableButton(el, "scarab-next");
      }
    }
  };
  Feature.prototype.attachListeners = function() {
    if (this.attachedListeners) {
      return;
    }
    this.attachedListeners = true;
    clearOldFeatureListeners(this);
    var el = this.parent;
    this.elistener = addEvent(el, "click", this.eventListener, this);
  };
  Feature.prototype.eventListener = function(e) {
    var element = e.srcElement || e.target, cssClass, classes = [], i, l, dataitem;
    do {
      dataitem = element.getAttribute ? element.getAttribute("data-scarabitem") : null;
      if (dataitem) {
        return Feature.eventsHandlers["scarab-item"].call(this, dataitem, this.f, this.cohort);
      }
      cssClass = element.className || "";
      classes = cssClass.split ? cssClass.split(" ") : "";
      l = classes.length;
      for (i = 0;i < l;i++) {
        if (classes[i] in Feature.eventsHandlers) {
          return Feature.eventsHandlers[classes[i]].call(this, element);
        }
      }
      element = element.parentNode;
    } while (element && element !== this.parent);
    return true;
  };
  Feature.eventsHandlers = {"scarab-item":function(productId, feature, cohort) {
    publicInterface.itemClick(productId, feature, cohort);
  }, "scarab-prev":function() {
    this.previousPage();
  }, "scarab-next":function() {
    this.nextPage();
  }};
  if (ScarabUtil.inspector && !config.doNotInspect) {
    ScarabUtil.inspector.trackObjectFunctions("Feature", Feature.prototype);
  }
  var Page = function() {
    this.products = [];
  };
  ScarabUtil.augment(Page, IComparable);
  Page.prototype.compare = function(otherItem) {
    return otherItem === this;
  };
  Page.prototype.addProduct = function(product) {
    this.products.push(product);
  };
  Page.prototype.removeProduct = function() {
  };
  var OrderedItemEventQueue = function(transaction) {
    this.isPlaying = false;
    this.tick = null;
    this.events = [];
    this.transaction = transaction;
    this.playcounter = 0;
  };
  OrderedItemEventQueue.prototype.add = function(event) {
    this.events.push(event);
    this.events.sort(this.compareEvent);
  };
  OrderedItemEventQueue.prototype.compareEvent = function(a, b) {
    if (a.item && b.item && a.item.i && b.item.i && a.item.i !== b.item.i) {
      return a.item.i < b.item.i ? -1 : 1;
    } else {
      if (EVENT[a.event] === EVENT[b.event]) {
        return 0;
      }
      return EVENT[a.event] < EVENT[b.event] ? -1 : 1;
    }
  };
  OrderedItemEventQueue.prototype.hasNonTrivialEvents = function() {
    for (var i = 0;i < this.events.length;i++) {
      if (this.events[i].event !== "commit" || this.events[i].forceSend) {
        return true;
      }
    }
    return false;
  };
  OrderedItemEventQueue.prototype.shouldSend = function() {
    return this.hasNonTrivialEvents() || customerId || emailHash || trafficSource || emsLid || emsLlid || emsUid || this.transaction.features.length > 0 || this.transaction.keywords && this.transaction.keywords.length > 0 || this.transaction.searchTerm && this.transaction.searchTerm.length > 0 || this.transaction.category && this.transaction.category.length > 0 || this.transaction.tags && this.transaction.tags.length > 0 || this.transaction.tagsWithAttributes && this.transaction.tagsWithAttributes.length > 
    0 || this.transaction.errors && this.transaction.errors.length > 0;
  };
  OrderedItemEventQueue.prototype._play = function() {
    var transaction = this.transaction, e;
    this.isPlaying = true;
    if (!this.shouldSend()) {
      this.clear();
    }
    while (this.events.length) {
      e = this.events.shift();
      transaction.eventHandlers[e.event].call(transaction, e.item);
    }
    this.isPlaying = false;
  };
  OrderedItemEventQueue.prototype.play = function(immediate) {
    if (this.isPlaying) {
      return true;
    }
    if (this.tick) {
      w.clearTimeout(this.tick);
    }
    if (immediate) {
      this._play();
    } else {
      this.tick = w.setTimeout(ScarabUtil.bind(this._play, this), 100);
    }
  };
  OrderedItemEventQueue.prototype.clear = function() {
    this.events = [];
  };
  var setCookie = function(name, cookieValue, expires) {
    if (noTopDomain) {
      w.document.cookie = name + "=; path=/;" + ScarabUtil.topDomainToCookie(w.document.domain) + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      w.document.cookie = name + "=" + encodeURIComponent(cookieValue) + "; path=/; domain=" + w.document.domain + (expires ? " ; expires=" + expires + ";" : "");
    } else {
      w.document.cookie = name + "=" + encodeURIComponent(cookieValue) + "; path=/;" + ScarabUtil.topDomainToCookie(w.document.domain) + (expires ? " ; expires=" + expires + ";" : "");
    }
  };
  var serializeCookie = function(name, collection) {
    var key, serializedPairs, serializedObjects, i, cookieValue = "[";
    serializedObjects = [];
    for (i = 0;i < collection.length;i++) {
      serializedPairs = [];
      for (key in collection[i]) {
        if (collection[i].hasOwnProperty(key) && (collection[i][key] || collection[i][key] === 0)) {
          serializedPairs.push('"' + key + '":"' + collection[i][key] + '"');
        }
      }
      if (serializedPairs.length) {
        serializedObjects.push("{" + serializedPairs.join(",") + "}");
      }
    }
    if (serializedObjects.length) {
      cookieValue += serializedObjects.join(",");
    }
    cookieValue += "]";
    setCookie(name, cookieValue);
  };
  var findInCookie = function(cname, item) {
    var cookie = ScarabUtil.getCookie(cname);
    var i;
    var cookieLength = cookie.length;
    for (i = 0;i < cookieLength;i++) {
      if (i in cookie && item.equal(cookie[i])) {
        return cookie[i];
      }
    }
    return null;
  };
  var getClickedItemCookie = function(cookieName) {
    var cookie = ScarabUtil.getCookie(cookieName);
    var i;
    var cookieLength = cookie.length;
    var firstValidClickItem = {ct:Number.MAX_VALUE};
    for (i = 0;i < cookieLength;i++) {
      if (i in cookie && cookie[i].ct && cookie[i].ct < firstValidClickItem.ct && isValidClickTimestamp(cookie[i].ct)) {
        firstValidClickItem = cookie[i];
      }
    }
    if (firstValidClickItem.ct !== Number.MAX_VALUE) {
      var result = new Item({i:firstValidClickItem.i});
      result.merge(firstValidClickItem);
      return result;
    }
    return null;
  };
  var removeOldClickedItemCookie = function(cookieName, transaction) {
    var cookie = ScarabUtil.getCookie(cookieName);
    var i;
    var cookieLength = cookie.length;
    var hasInvalidClickedItem = false;
    for (i = 0;i < cookieLength;i++) {
      if (i in cookie && cookie[i].ct && !isValidClickTimestamp(cookie[i].ct)) {
        hasInvalidClickedItem = true;
        var invalidClickedItem = new Item({i:cookie[i].i});
        invalidClickedItem.merge(cookie[i]);
        removeFromCookie(STRINGS.VIEWCOOKIE, invalidClickedItem);
      }
    }
    if (hasInvalidClickedItem) {
      transaction.error({t:"MISSING_ARG", c:"view", m:"There was no view command after widget clicked"});
    }
  };
  var isValidClickTimestamp = function(timestamp) {
    var currentTimestamp = (new Date).getTime();
    return currentTimestamp - timestamp < CLICK_EXPIRE_MILLIS;
  };
  var removeFromCookie = function(cookieName, item) {
    var cookie = ScarabUtil.getCookie(cookieName);
    var i = ScarabUtil.indexOfItem(cookie, item);
    if (i > -1) {
      cookie.splice(i, 1);
    }
    serializeCookie(cookieName, cookie);
  };
  var addCookie = function(cname, item) {
    var c = ScarabUtil.getCookie(cname), i = ScarabUtil.indexOfItem(c, item);
    if (c.length > 9) {
      c.shift();
    }
    if (i === -1) {
      c.push(item);
      serializeCookie(cname, c);
    }
  };
  var Transaction = function(id) {
    this.name = getTrnName(id);
    this.views = null;
    this.addedItems = null;
    this.cart = null;
    this.features = [];
    this.productIds = [];
    this.checkouts = null;
    this.orderId = "";
    this.callbackName = "";
    this.events = new OrderedItemEventQueue(this);
    this.keywords = null;
    this.searchTerm = null;
    this.category = null;
    this.tags = null;
    this.tagsWithAttributes = null;
    this.exclude = [];
    this.compactProducts = ["1"];
    this.id = id;
    this.errors = null;
    this.language = null;
    this.currency = null;
    this.availabilityZone = null;
    this.isNewPageView = false;
    this.wishlist = null;
  };
  Transaction.prototype = {eventHandlers:{addView:function(viewedItem) {
    this.views = this.views || [];
    if (this.views && this.views.length > 0) {
      this.error({t:"MULTIPLE_CALL", c:"view", m:"Multiple calls of view command"});
    }
    var clickedItem = getClickedItemCookie(STRINGS.VIEWCOOKIE);
    if (clickedItem) {
      viewedItem.t = clickedItem.t;
      viewedItem.c = clickedItem.c;
      removeFromCookie(STRINGS.VIEWCOOKIE, clickedItem);
    }
    removeOldClickedItemCookie(STRINGS.VIEWCOOKIE, getCurrentTransaction());
    if (trackedFeature) {
      viewedItem.t = trackedFeature;
    }
    if (trackedCohort) {
      viewedItem.c = trackedCohort;
    }
    this.views.push(viewedItem);
    addCookie(STRINGS.ADDCOOKIE, viewedItem);
  }, pageview:function(pageViewId) {
    if (pageViewId === undefined || pageViewId === null) {
      this.isNewPageView = true;
      pageViewId = generatePageViewId();
    } else {
      this.isNewPageView = false;
    }
    setPageViewId(pageViewId);
  }, checkAddedItem:function(addedItem) {
    var v = findInCookie(STRINGS.VIEWCOOKIE, addedItem);
    if (v) {
      this.addView(addedItem);
    }
  }, addAddedItem:function(addedItem) {
    this.addedItems = this.addedItems || [];
    var a = findInCookie(STRINGS.ADDCOOKIE, addedItem);
    if (a) {
      addedItem.merge(a);
      removeFromCookie(STRINGS.ADDCOOKIE, addedItem);
    }
    this.addedItems.push(addedItem);
  }, addCartItem:function(cartItem) {
    this.cart = this.cart || [];
    if (this.cart.v > 0) {
      if (window.console && console.warn) {
        console.warn('Do not mix the deprecated "cartItem" and the prefered "cart" calls.');
      }
      return;
    }
    this.cart.push(cartItem);
  }, setCart:function(cart) {
    if (this.cart) {
      this.error({t:"MULTIPLE_CALL", c:"cart", m:"Multiple calls of cart command"});
    }
    this.cart = cart;
    this.cart.v = 1;
  }, setWishlist:function(wishlist) {
    if (this.wishlist) {
      this.error({t:"MULTIPLE_CALL", c:"wishlist", m:"Multiple calls of wishlist command"});
    }
    this.wishlist = wishlist;
  }, addCheckoutItem:function(checkoutItem) {
    this.checkouts = this.checkouts || [];
    this.checkouts.push(checkoutItem);
  }, setPurchase:function(conf) {
    if (this.checkouts) {
      this.error({t:"MULTIPLE_CALL", c:"purchase", m:"Multiple calls of purchase command"});
    }
    this.checkouts = conf.items;
    if (conf.orderId) {
      this.orderId = conf.orderId;
    }
  }, commit:function() {
    var that = this;
    that.merchantId = getMerchantId();
    that.pageViewId = getPageViewId();
    that.emailHash = emailHash;
    that.customerId = customerId;
    ScarabArrays.forEach(transactionListeners, function(listener) {
      try {
        listener(that);
      } catch (e) {
        that.error({t:"INVALID_ARG", c:"addTransactionListener", m:"transaction listener threw an exception: " + e});
      }
    });
    this.sendRequest();
    start();
  }}, highlightFeatures:function() {
    if (!debugMode) {
      return;
    }
    for (var i = 0;i < features.length;++i) {
      var label = document.createElement("span");
      label.textContent = features[i].f;
      label.style.background = "red";
      features[i].parent.appendChild(label);
      features[i].parent.style.border = "5px solid red";
    }
  }, setOrderId:function(orderId) {
    this.orderId = orderId;
  }, addView:function(viewedItem) {
    this.events.add({item:viewedItem, event:"addView"});
  }, pageview:function(pageViewId) {
    this.events.add({item:pageViewId, event:"pageview"});
  }, addAddedItem:function(addedItem) {
    this.events.add({item:addedItem, event:"checkAddedItem"});
    this.events.add({item:addedItem, event:"addAddedItem"});
  }, addCartItem:function(cartItem) {
    this.events.add({item:cartItem, event:"addCartItem"});
  }, setCart:function(cart) {
    for (var i = 0, l = cart.length;i < l;i++) {
      this.events.add({item:cart[i], event:"checkAddedItem"});
    }
    this.events.add({item:cart, event:"setCart"});
  }, setWishlist:function(wishlist) {
    this.events.add({item:wishlist, event:"setWishlist"});
  }, addCheckoutItem:function(checkoutItem) {
    this.events.add({item:checkoutItem, event:"addCheckoutItem"});
  }, setPurchase:function(conf) {
    this.events.add({item:conf, event:"setPurchase"});
  }, addKeyword:function(keyword) {
    this.keywords = this.keywords || [];
    this.keywords.push(keyword);
  }, addSearchTerm:function(searchTerm) {
    this.searchTerm = this.searchTerm || [];
    this.searchTerm.push(searchTerm);
  }, addCategory:function(category) {
    this.category = this.category || [];
    this.category.push(category);
  }, addTag:function(tagStr, attributes) {
    var error = ScarabUtil.bind(function(errorMessage) {
      this.error({t:"INVALID_ARG", c:"tag", m:'Invalid attribute for tag "' + tagStr + '". ' + errorMessage});
    }, this);
    if (attributes === undefined) {
      this.tags = this.tags || [];
      this.tags.push(tagStr);
    } else {
      if (!ScarabUtil.isObject(attributes)) {
        error("Attributes must be specified as an object.");
      } else {
        if (!ScarabUtil.containsPrimitivesOnly(attributes)) {
          error("Individual attributes can only be values of type string, number or boolean.");
        } else {
          if (ScarabUtil.isEmpty(attributes)) {
            error("Attributes can not be empty (or should be omitted entirely).");
          } else {
            this.tagsWithAttributes = this.tagsWithAttributes || [];
            this.tagsWithAttributes.push({name:tagStr, attributes:attributes});
          }
        }
      }
    }
  }, addExcludeRule:function(e) {
    this.exclude.push(e);
  }, setAvailabilityZone:function(az) {
    this.availabilityZone = [az];
  }, setLanguage:function(lang) {
    this.language = [lang];
  }, setCurrency:function(currency) {
    this.currency = [currency];
  }, error:function(err, hideFromConsole) {
    this.errors = this.errors || [];
    this.errors.push(err);
    if (window.console && console.error && !hideFromConsole) {
      console.error(err);
    }
  }, go:function(immediate, forceSend) {
    this.time = (new Date).getTime();
    if (!testMode && !config.disableMultiGoCheck && this.id > 1 && Math.abs(transactions[getTrnName(this.id)].time - transactions[getTrnName(this.id - 1)].time) < 500) {
      this.error({t:"MULTIPLE_CALL", c:"go", m:"Multiple calls of go command"});
    }
    var hasEventType = function(eventType, events) {
      for (var i = 0;i < events.length;++i) {
        if (events[i].event === eventType) {
          return true;
        }
      }
      return false;
    };
    if (trackedFeature && trackedCohort && !hasEventType("addView", this.events.events)) {
      publicInterface.view("scarab/click", 0, 0, trackedFeature, trackedCohort);
    }
    if (this.id === 1 && !hasEventType("pageview", this.events.events)) {
      this.events.add({item:null, event:"pageview"});
    }
    this.events.add({item:null, event:"commit", forceSend:forceSend});
    this.events.play(immediate);
  }, registerFeature:function(feature) {
    feature.transaction = this;
    this.features.push(feature);
  }, serializeList:function(list) {
    var i, l = list.length, o = [];
    for (i = 0;i < l;i++) {
      if (list[i].serialize) {
        o.push(list[i].serialize());
      } else {
        o.push(list[i]);
      }
    }
    return o.join("|");
  }, serializeContext:function() {
    var i, list, slist = [];
    slist.push("pv=" + getPageViewId());
    if (!config.isNotNewPageView && this.isNewPageView) {
      slist.push("xp=1");
    }
    var unsentFeatures = ScarabArrays.filter(this.features, function(feature) {
      return !feature.requestSent;
    });
    if (unsentFeatures.length > 0) {
      slist.push("f=" + encodeURIComponent(this.serializeList(unsentFeatures)));
    }
    var tr = this;
    ScarabArrays.forEach(unsentFeatures, function(feature) {
      feature.requestSent = true;
      for (var key in FEATURETRIGGERS) {
        if (!feature.t && feature.f && feature.f.indexOf(key) === 0) {
          var ft = FEATURETRIGGERS[key];
          if (ft && typeof ft.validate === "function" && !ft.validate(tr)) {
          }
        }
      }
    });
    for (i in SERIALIZE) {
      if (SERIALIZE.hasOwnProperty(i)) {
        list = this[SERIALIZE[i]];
        if (SERIALIZE[i] === "cart" && list && list.v && list.v > 0) {
          slist.push("cv=" + list.v);
        }
        if (list === null || list === undefined) {
        } else {
          if (list.length === 0) {
            slist.push(i + "=");
          } else {
            if (list.length > 0) {
              slist.push(i + "=" + encodeURIComponent(this.serializeList(list)));
            }
          }
        }
      }
    }
    for (i = 0;i < this.features.length;i++) {
      if (this.features[i].pi && this.features[i].pi.length > 0) {
        list = Array.prototype.concat([this.features[i].f], this.features[i].pi);
        slist.push("pi=" + encodeURIComponent(this.serializeList(list)));
      }
    }
    if (sessionId) {
      slist.push("s=" + encodeURIComponent(sessionId));
    }
    if (visitorId) {
      slist.push("vi=" + encodeURIComponent(visitorId));
    }
    if (profile) {
      slist.push("p=" + encodeURIComponent(profile));
    }
    if (customerId) {
      slist.push("ci=" + encodeURIComponent(customerId));
    }
    if (emailHash) {
      slist.push("eh=" + encodeURIComponent(emailHash));
    }
    if (emailSign) {
      slist.push("es=" + encodeURIComponent(emailSign));
    }
    if (trafficSource && /^email_/.test(trafficSource)) {
      var campaignId = trafficSource.replace(/^email_/, "");
      if (campaignId) {
        if (!isNaN(campaignId)) {
          slist.push("ecid=" + encodeURIComponent(campaignId));
        } else {
          this.error({t:"INVALID_ARG", c:"sc_src", m:"Invalid argument in email campaign id"});
        }
      }
    }
    if (emsLid) {
      if (!isNaN(emsLid)) {
        slist.push("elid=" + encodeURIComponent(emsLid));
      } else {
        this.error({t:"INVALID_ARG", c:"sc_lid", m:"Invalid argument in sc_lid"});
      }
    }
    if (emsLlid) {
      if (!isNaN(emsLlid)) {
        slist.push("ellid=" + encodeURIComponent(emsLlid));
      } else {
        this.error({t:"INVALID_ARG", c:"sc_llid", m:"Invalid argument in sc_llid"});
      }
    }
    if (emsUid) {
      slist.push("euid=" + encodeURIComponent(emsUid));
    }
    if (fields) {
      slist.push("fields=" + encodeURIComponent(this.serializeList(fields)));
    }
    if (this.exclude.length > 0) {
      try {
        slist.push("ex=" + encodeURIComponent(JSON.stringify(this.exclude)));
      } catch (e) {
      }
    }
    if (tr.tags) {
      ScarabArrays.forEach(tr.tags, function(t) {
        slist.push("t=" + encodeURIComponent(t));
      });
    }
    if (tr.tagsWithAttributes) {
      ScarabArrays.forEach(tr.tagsWithAttributes, function(ta) {
        slist.push("ta=" + encodeURIComponent(JSON.stringify(ta)));
      });
    }
    if (forcedCohort) {
      slist.push("fc=" + encodeURIComponent(forcedCohort));
    }
    if (this.orderId) {
      slist.push("oi=" + encodeURIComponent(this.orderId));
    }
    if (getTestMode()) {
      slist.push("test=true");
    }
    if (debugMode) {
      slist.push("debug=" + debugMode);
    }
    if (document.referrer) {
      slist.push("prev_url=" + encodeURIComponent(document.referrer));
    }
    if (this.errors) {
      var errorParam = "";
      try {
        errorParam = JSON.stringify(this.errors);
      } catch (e$1) {
        var a = [];
        for (var i = 0, l = this.errors.length;i < l;i++) {
          a.push('{"t":"' + this.errors[i].t + '","c":"' + this.errors[i].c + '","m":"' + this.errors[i].m + '"}');
        }
        errorParam = "[" + a.join(",") + "]";
      }
      slist.push("error=" + encodeURIComponent(errorParam));
    }
    if (config.timingsEnabled && localStorageSupported && w.JSON && w.JSON.parse) {
      var timings = w.localStorage.getItem(STRINGS.TIMINGSSTORE);
      if (timings) {
        w.localStorage.removeItem(STRINGS.TIMINGSSTORE);
        try {
          timings = JSON.parse(timings);
          if ((new Date).getTime() - timings.ts < TIMINGS_EXPIRE_MILLIS) {
            slist.push("ti=" + encodeURIComponent(timings.t));
          }
        } catch (e$2) {
        }
      }
    }
    if (this.findFeature("WEBPERSONALIZATION")) {
      slist.push("url=" + encodeURIComponent(window.location.href));
    }
    return slist.join("&");
  }, checkRequest:function() {
    return true;
  }, getHost:function() {
    if (getServerUrl()) {
      return getServerUrl() + "/merchants/";
    }
    return "https://recommender.scarabresearch.com/merchants/";
  }, generateUrl:function() {
    if (!this.checkRequest()) {
      return false;
    }
    var context = this.serializeContext();
    var url = this.getHost() + getMerchantId() + "/?" + context;
    return url;
  }, sendRequest:function() {
    var url = this.generateUrl();
    var that = this;
    if (window.JSON && window.JSON.parse) {
      var xhr = ScarabUtil.createCORSRequest("GET", url);
      if (xhr) {
        xhr.onload = function() {
          that.callback(JSON.parse(xhr.responseText));
        };
        xhr.onerror = function(e) {
          if (window.console && console.error) {
            console.error("XHR ERROR: Scarab request failed", url, e);
          }
        };
        xhr.withCredentials = true;
        xhr.send();
        return;
      }
    }
    ScarabUtil.createJSONPRequest(url, that.callbackName, config.jsonpStem);
  }, findFeature:function(feature) {
    if (!this.features || this.features.length === 0) {
      return null;
    }
    for (var i = 0, l = this.features.length;i < l;i++) {
      if (this.features[i].f === feature) {
        return this.features[i];
      }
    }
    return null;
  }, callback:function(data) {
    if (data.trace) {
      if (window.console && console.log) {
        console.log("SCARAB SERVER: " + data.trace);
      }
    }
    if (data.schema && data.products) {
      for (var productId in data.products) {
        var newProd = {};
        for (var j = 0;j < data.schema.length;j++) {
          newProd[data.schema[j]] = data.products[productId][j];
        }
        data.products[productId] = newProd;
      }
    }
    if (data.products) {
      products = ScarabUtil.merge(products, data.products);
    }
    var hasFeature = false;
    if (data.features) {
      for (var feature in data.features) {
        if (data.features.hasOwnProperty(feature)) {
          var currentFeature = this.findFeature(feature);
          if (currentFeature) {
            hasFeature = true;
            var items = data.features[feature].items;
            var newPage = new Page;
            for (var i = 0;i < items.length;i++) {
              var product = ScarabUtil.merge(items[i], products[items[i].id]);
              product.trackingCode = feature;
              newPage.addProduct(product);
            }
            currentFeature.hasMore = data.features[feature].hasMore;
            currentFeature.topicLabel = data.features[feature].topicLabel;
            currentFeature.cohort = data.cohort;
            currentFeature.merchants = data.features[feature].merchants;
            currentFeature.addPage(newPage);
          }
        }
      }
    }
    this.highlightFeatures();
    if (localStorageSupported && w.performance && w.performance.getEntriesByType && w.JSON && w.JSON.stringify && transactionCounter === 2 && config.timingsEnabled) {
      scriptTimings.renderEnd = w.performance.now ? w.performance.now() : null;
      var timings = ScarabUtil.clientTimings(w, scriptTimings, this.getHost(), hasFeature);
      if (timings) {
        try {
          w.localStorage.setItem(STRINGS.TIMINGSSTORE, w.JSON.stringify({ts:(new Date).getTime(), t:timings}));
        } catch (err) {
        }
      }
    }
    var expiration = new Date;
    expiration.setFullYear(expiration.getFullYear() + 1);
    var vis = data.visitor;
    if (vis) {
      setVisitorId(vis);
      setCookie(STRINGS.VISITORCOOKIE, '"' + vis + '"', expiration.toUTCString());
    }
    var prof = data.profile;
    if (prof) {
      setProfile(prof);
      setCookie(STRINGS.PROFILECOOKIE, '"' + prof + '"', expiration.toUTCString());
    }
  }};
  if (ScarabUtil.inspector && !config.doNotInspect) {
    ScarabUtil.inspector.trackObjectFunctions("Transaction", Transaction.prototype);
    ScarabUtil.inspector.trackObjectFunctions("EventHandlers", Transaction.prototype.eventHandlers);
  }
  var addFeature = function(featureObject) {
    features.push(featureObject);
    return featureObject;
  };
  var getTrnName = function(id) {
    return "tx" + (typeof id === "undefined" ? transactionCounter : id);
  };
  var getPageViewId = function() {
    return pageViewId;
  };
  var setPageViewId = function(pvId) {
    pageViewId = pvId;
    return pvId;
  };
  var generatePageViewId = function() {
    return Math.floor(Math.random() * Math.pow(2, 31));
  };
  var setMerchantId = function(mid) {
    merchantId = mid;
  };
  var getMerchantId = function() {
    if (merchantId) {
      return merchantId;
    }
    var apiTag = document.getElementById("scarab-js-api");
    if (apiTag && apiTag.src) {
      merchantId = apiTag.src.substring(apiTag.src.indexOf("/js/") + "/js/".length);
      if (merchantId.indexOf("/") !== -1) {
        merchantId = merchantId.substr(0, merchantId.indexOf("/"));
      }
    }
    return merchantId;
  };
  var setSessionId = function(sid) {
    sessionId = sid;
  };
  var setVisitorId = function(vid) {
    visitorId = vid;
  };
  var setCustomerId = function(cid) {
    var tr = getCurrentTransaction();
    if (!isValid(tr, "setCustomerId", cid, "customer ID", "string")) {
      return;
    }
    if (cid === "undefined" || cid === "null" || cid === "_") {
      tr.error({t:"INVALID_ARG", c:"setCustomerId", m:cid + " is not a valid customer ID"});
      return;
    }
    customerId = cid;
  };
  var setProfile = function(prof) {
    profile = prof;
  };
  var setEmail = function(email) {
    var tr = getCurrentTransaction();
    if (!isValid(tr, "setEmail", email, "email", "string")) {
      return;
    }
    if (email.indexOf("@") < 0) {
      tr.error({t:"INVALID_ARG", c:"setEmail", m:email + " is not a valid email address"});
      return;
    }
    setEmailHash(ScarabUtil.hashEmail(email));
  };
  var setEmailHash = function(eh) {
    emailHash = eh;
  };
  var setEmailSign = function(es) {
    emailSign = es;
  };
  var setFields = function(fs) {
    fields = fs;
  };
  var setTestMode = function(tm) {
    testMode = tm;
  };
  var getTestMode = function() {
    return testMode;
  };
  var setServerUrl = function(url) {
    serverUrl = url;
  };
  var getServerUrl = function() {
    return serverUrl;
  };
  var setForcedCohort = function(cohortId) {
    forcedCohort = cohortId;
  };
  var getCurrentTransaction = function() {
    var trn = getTrnName();
    if (trn in transactions) {
      return transactions[trn];
    }
    return null;
  };
  var clearOldFeatureListeners = function(feat) {
    for (var trkey in transactions) {
      var tr = transactions[trkey];
      for (var fkey in tr.features) {
        var f = tr.features[fkey];
        if (f !== feat && f.attachedListeners && f.containerId === feat.containerId) {
          if (f.parent && f.parent.addEventListener && f.elistener) {
            f.parent.removeEventListener("click", f.elistener);
            f.elistener = null;
          } else {
            if (f.parent && f.parent.attachEvent && f.elistener) {
              f.parent.detachEvent("click", f.elistener);
              f.elistener = null;
            }
          }
        }
      }
    }
  };
  var start = function() {
    transactionCounter++;
    transactions[getTrnName()] = new Transaction(transactionCounter);
  };
  var go = function(delayed, forceSend) {
    scriptTimings.goStart = w.performance && w.performance.now ? w.performance.now() : null;
    var trn = getTrnName(), ctr = transactions[trn], callbackName = "cb_" + (config.jsonpStem || "") + trn;
    Scarab[callbackName] = function(data) {
      transactions[trn].callback(data);
    };
    ctr.callbackName = "Scarab." + callbackName;
    ctr.go(!delayed, forceSend);
    return ctr;
  };
  var myFeature = function(featureName, elementId) {
    if (!document.getElementById(elementId)) {
      throw new ReferenceError('Error in Scarab.myFeature() call: element "' + elementId + '" does not exist.');
    }
    var tr = getCurrentTransaction(), feature = addFeature(new Feature({f:featureName, containerId:elementId, attachedListeners:true, cust:1}));
    feature.attachListeners();
    feature.setProducts(feature.findProducts());
    tr.registerFeature(feature);
  };
  var takeLastElementIfArray = function(param) {
    return ScarabUtil.isArray(param) ? param[param.length - 1] : param;
  };
  var init = function() {
    var qs = ScarabUtil.parseQueryString(w);
    trackedFeature = qs.sc_feature;
    trackedCohort = qs.sc_cohort;
    customerId = takeLastElementIfArray(qs.sc_customer);
    debugMode = qs.sc_debug;
    trafficSource = takeLastElementIfArray(qs.sc_src);
    emailHash = takeLastElementIfArray(qs.sc_eh);
    emsUid = takeLastElementIfArray(qs.sc_uid);
    emsLlid = takeLastElementIfArray(qs.sc_llid);
    emsLid = takeLastElementIfArray(qs.sc_lid);
    var vis = ScarabUtil.getCookie(STRINGS.VISITORCOOKIE);
    if (vis && vis.length > 0) {
      setVisitorId(vis);
    }
    var prof = ScarabUtil.getCookie(STRINGS.PROFILECOOKIE);
    if (prof && prof.length > 0) {
      setProfile(prof);
    }
  };
  init();
  start();
  var isValid = function(transaction, command, value, valueName, shouldBe, canBe, maxLength) {
    var valueType = ScarabUtil.isArray(value) ? "array" : value === null ? "null" : typeof value;
    valueName = valueName || "";
    if (typeof shouldBe === "string") {
      shouldBe = [shouldBe];
    } else {
      shouldBe = shouldBe || [];
    }
    if (typeof canBe === "string") {
      canBe = [canBe];
    } else {
      canBe = canBe || [];
    }
    if (maxLength && value) {
      if (value.length > maxLength) {
        if (transaction) {
          transaction.error({t:"INVALID_ARG", c:command, m:"Invalid argument in " + command + ": " + valueName + " length must be less than " + maxLength});
        }
      }
    }
    if (ScarabUtil.indexOf(shouldBe, valueType) !== -1) {
      if (valueType === "string" && ScarabUtil.trim(value) === "") {
        if (transaction) {
          transaction.error({t:"INVALID_ARG", c:command, m:"Invalid argument in " + command + ": " + valueName + " should not be an empty string"});
        }
        return false;
      }
      if (valueType === "number" && ScarabUtil.isNaN(value)) {
        if (transaction) {
          transaction.error({t:"INVALID_ARG", c:command, m:"Invalid argument in " + command + ": " + valueName + " should not be a NaN"});
        }
        return false;
      }
      return true;
    }
    if (ScarabUtil.indexOf(canBe, valueType) !== -1) {
      if (transaction) {
        transaction.error({t:"INVALID_ARG", c:command, m:"Invalid argument in " + command + ": " + valueName + " should be a " + shouldBe.join(" or ") + ", not a " + valueType});
      }
      return true;
    }
    if (valueType === "undefined") {
      if (transaction) {
        transaction.error({t:"MISSING_ARG", c:command, m:"Missing argument in " + command + ": " + valueName});
      }
    } else {
      if (transaction) {
        transaction.error({t:"INVALID_ARG", c:command, m:"Invalid argument in " + command + ": " + valueName + " should be a " + shouldBe.join(" or ")});
      }
    }
    return false;
  };
  var runOnModuleAvailableListeners = function(moduleName) {
    if (onModuleAvailableListeners[moduleName] && ScarabUtil.loadedModules[moduleName] && ScarabUtil.loadedModules[moduleName].instance) {
      ScarabArrays.forEach(onModuleAvailableListeners[moduleName], function(listener) {
        listener(ScarabUtil.loadedModules[moduleName].instance);
      });
    }
  };
  var loadHelper = function(win, moduleName, explicitConfig, subModule) {
    var hash = ScarabUtil.parseHashString(win);
    var hashConfig = {};
    if (hash[moduleName] !== undefined) {
      var val = hash[moduleName] || "{}";
      try {
        hashConfig = win.JSON.parse(val);
        if (win.sessionStorage) {
          win.sessionStorage.setItem(moduleName, val);
        }
      } catch (e) {
        if (win.console && win.console.error) {
          win.console.error("Hash config for", moduleName, "is not a valid JSON: ", e);
        }
      }
    }
    var sessionConfig = null;
    if (win.sessionStorage && win.sessionStorage.getItem(moduleName)) {
      sessionConfig = win.JSON.parse(win.sessionStorage.getItem(moduleName));
    }
    var baseConfig = {merchantId:getMerchantId(), cb:function() {
      runOnModuleAvailableListeners(moduleName);
    }};
    ScarabUtil.loadModule(win, moduleName, ScarabUtil.merge(baseConfig, explicitConfig || {}, sessionConfig || hashConfig), subModule, baseConfig.cb);
  };
  var publicInterface = {defaultTemplate:'<![CDATA[ {{ if(SC.page.products.length) { }}<div class="scarab-itemlist"><div class="scarab-prev">\u25c0</div>{{ for(var i=0;i<SC.page.products.length;i++) { }}<span data-scarabitem="{{= SC.page.products[i].id }}" class="scarab-item"><a href="{{= SC.page.products[i].link }}"><img src="{{= SC.page.products[i].image }}">{{= SC.page.products[i].title }}</a></span>{{ } }}<div class="scarab-next">\u25b6</div></div>{{ } }} ]]\x3e', testMode:function() {
    setTestMode(true);
  }, setMerchantId:setMerchantId, setSessionId:setSessionId, setVisitorId:setVisitorId, setCustomerId:setCustomerId, setEmail:setEmail, setEmailHash:setEmailHash, email:setEmail, setEmailSign:setEmailSign, setFields:setFields, setCohortId:setForcedCohort, availabilityZone:function(az) {
    var tr = getCurrentTransaction();
    tr.setAvailabilityZone(az);
  }, language:function(lang) {
    var tr = getCurrentTransaction();
    tr.setLanguage(lang);
  }, currency:function(currency) {
    var tr = getCurrentTransaction();
    tr.setCurrency(currency);
  }, displayCurrency:function(currency) {
    publicInterface.currency(currency);
  }, setOrderId:function(orderId) {
    var tr = getCurrentTransaction();
    tr.setOrderId(orderId);
  }, addKeyword:function(keyword) {
    var tr = getCurrentTransaction();
    tr.addKeyword(keyword);
  }, searchTerm:function(searchTerm) {
    var tr = getCurrentTransaction();
    tr.addSearchTerm(searchTerm);
  }, category:function(category) {
    var tr = getCurrentTransaction();
    tr.addCategory(category);
  }, tag:function(tagStr, attributes) {
    var tr = getCurrentTransaction();
    tr.addTag(tagStr, attributes);
  }, pageview:function(pageViewId) {
    var tr = getCurrentTransaction();
    tr.pageview(pageViewId);
  }, view:function(itemId, quantity, price, feature, cohort) {
    var tr = getCurrentTransaction();
    if (isValid(tr, "view", itemId, "itemId", ["string", "number"], null, ITEMID_MAX_LENGTH)) {
      tr.addView(new Item({i:itemId, p:price, q:quantity, t:feature, c:cohort}));
    }
  }, addToCart:function(itemId, quantity, price) {
    var tr = getCurrentTransaction();
    tr.addAddedItem(new Item({i:itemId, p:price, q:quantity}));
  }, cartItem:function(itemId, quantity, price) {
    var tr = getCurrentTransaction();
    tr.addCartItem(new Item({i:itemId, p:price, q:quantity}));
  }, cart:function(cartItems) {
    var tr = getCurrentTransaction();
    if (!isValid(tr, "cart", cartItems, "cartItems", "array")) {
      return;
    }
    var c = [];
    for (var i = 0, l = cartItems.length;i < l;i++) {
      if (!isValid(tr, "cart", cartItems[i].item, "item", ["string", "number"], null, ITEMID_MAX_LENGTH)) {
        return;
      }
      isValid(tr, "cart", cartItems[i].price, "price", "number", "string");
      isValid(tr, "cart", cartItems[i].quantity, "quantity", "number", "string");
      c.push(new Item({i:cartItems[i].item, p:cartItems[i].price, q:cartItems[i].quantity}));
    }
    tr.setCart(c);
  }, wishlist:function(wishlistItems) {
    var tr = getCurrentTransaction();
    if (!isValid(tr, "wishlist", wishlistItems, "wishlistItems", "array")) {
      return;
    }
    var w = [];
    for (var i = 0, l = wishlistItems.length;i < l;i++) {
      if (!isValid(tr, "wishlist", wishlistItems[i].item, "item", ["string", "number"], null, ITEMID_MAX_LENGTH)) {
        return;
      }
      var newItem = {i:wishlistItems[i].item};
      if (wishlistItems[i].price) {
        isValid(tr, "wishlist", wishlistItems[i].price, "price", "number", "string");
        newItem.p = wishlistItems[i].price;
      }
      if (wishlistItems[i].quantity) {
        isValid(tr, "wishlist", wishlistItems[i].quantity, "quantity", "number", "string");
        newItem.q = wishlistItems[i].quantity;
      }
      if (wishlistItems[i].feature) {
        isValid(tr, "wishlist", wishlistItems[i].feature, "feature", "string", "number");
        newItem.t = wishlistItems[i].feature;
      }
      w.push(new Item(newItem));
    }
    tr.setWishlist(w);
  }, checkOut:function(itemId, quantity, price) {
    var tr = getCurrentTransaction();
    tr.addCheckoutItem(new Item({i:itemId, p:price, q:quantity}));
  }, purchase:function(conf) {
    var tr = getCurrentTransaction();
    if (!isValid(tr, "purchase", conf, "decriptor", "object") || !isValid(tr, "purchase", conf.items, "items", "array")) {
      return;
    }
    var config = {};
    for (var key in conf) {
      if (key === "orderId") {
        if (isValid(tr, "purchase", conf.orderId, "orderId", ["string", "number"], null, ITEMID_MAX_LENGTH)) {
          config.orderId = conf.orderId;
        }
      } else {
        if (key === "items") {
          if (conf.items.length === 0) {
            tr.error({t:"MISSING_ARG", c:"purchase", m:"Missing argument in purchase: items is an empty array"});
            return;
          }
          config.items = [];
          for (var i = 0, l = conf.items.length;i < l;i++) {
            if (!isValid(tr, "purchase", conf.items[i].item, "item", ["string", "number"], null, ITEMID_MAX_LENGTH) || !isValid(tr, "purchase", conf.items[i].price, "price", "number", ["string", "undefined", "null"]) || !isValid(tr, "purchase", conf.items[i].quantity, "quantity", "number", ["string", "undefined", "null"])) {
              return;
            }
            config.items.push(new Item({i:conf.items[i].item, p:conf.items[i].price, q:conf.items[i].quantity}));
          }
        } else {
          if (window.console && console.warn) {
            console.warn("unknown property in purchase", key);
          }
        }
      }
    }
    tr.setPurchase(config);
  }, include:function(field, rule, value) {
    publicInterface.exclude(field, rule, value, true);
  }, exclude:function(field, rule, value, negate) {
    if (typeof value === "undefined") {
      value = rule;
      rule = "is";
    }
    var RULES = {"is":"IS", "has":"HAS", "in":"IN", "overlaps":"OVERLAPS", "is not":"IS", "has not":"HAS", "not in":"IN"};
    if (typeof RULES[rule] === "undefined") {
      throw new Error("unknown exclude rule: " + rule);
    }
    if (rule.indexOf("not") !== -1) {
      negate = true;
    }
    if (typeof value !== "string") {
      value = value.join("|");
    }
    var tr = getCurrentTransaction();
    negate = negate || false;
    tr.addExcludeRule({f:field, r:RULES[rule], v:value, n:negate});
  }, updateTemplate:function(feature, newTemplate) {
    var tr = getCurrentTransaction();
    var f = tr.findFeature(feature);
    if (f) {
      f.template = doT.template(newTemplate);
    }
  }, recommend:function(conf, element, limit, template, baselineRecs, successCallback, trigger) {
    var feature = conf;
    if (typeof conf === "object" && conf !== null) {
      feature = conf.logic;
      element = conf.containerId;
      limit = conf.limit;
      if (conf.templateStr) {
        template = conf.templateStr;
      } else {
        if (conf.templateId) {
          var te = document.getElementById(conf.templateId);
          if (te === null) {
            throw new ReferenceError("Template element does not exist: " + conf.templateId);
          }
          template = te.innerHTML;
        } else {
          template = publicInterface.defaultTemplate;
        }
      }
      baselineRecs = conf.baseline;
      successCallback = conf.success;
      trigger = conf.trigger;
    }
    var tr = getCurrentTransaction();
    if (!isValid(tr, "recommend", feature, "logic", "string")) {
      return;
    }
    isValid(tr, "recommend", element, "containerId", "string");
    var f = tr.findFeature(feature);
    if (!f) {
      f = new Feature({f:feature, o:conf.offset || 0, l:parseInt(limit, 10) || 5, t:trigger, containerId:element, template:doT.template(template || publicInterface.defaultTemplate), pages:[]});
      if (baselineRecs) {
        f.setProducts(baselineRecs);
      }
      addFeature(f);
      f.successCallback = successCallback;
    }
    f.requestSent = false;
    f.purgePagesCache();
    tr.registerFeature(f);
    return f;
  }, invokeRendering:function(SC, renderCallback) {
    renderCallback(SC);
  }, beforeRenderingAsync:function(callback) {
    publicInterface.invokeRendering = callback;
  }, beforeRendering:function(callback) {
    if (callback && typeof callback === "function") {
      beforeRendering = callback;
    }
  }, afterRendering:function(callback) {
    if (callback && typeof callback === "function") {
      afterRendering = callback;
    }
  }, skipRendering:function() {
    skipRendering = true;
  }, itemClick:function(itemId, feature, cohort) {
    var clickTimestamp = (new Date).getTime();
    addCookie(STRINGS.VIEWCOOKIE, new Item({i:itemId, t:feature, c:cohort, ct:clickTimestamp}));
  }, myFeature:myFeature, go:function(forceSend) {
    go(false, forceSend);
  }, goAsync:function(forceSend) {
    go(true, forceSend);
  }, setServerUrl:function(serverUrl) {
    setServerUrl(serverUrl);
  }, addTransactionListener:function(callback) {
    if (callback && typeof callback === "function") {
      transactionListeners.push(callback);
      for (var i = 1;i < transactionCounter;i++) {
        try {
          callback(transactions[getTrnName(i)]);
        } catch (e) {
          getCurrentTransaction().error({t:"INVALID_ARG", c:"addTransactionListener", m:"transaction listener threw an exception: " + e});
        }
      }
    }
  }, removeTransactionListener:function(callback) {
    if (callback && typeof callback === "function") {
      var index = ScarabUtil.indexOf(transactionListeners, callback);
      if (index > -1) {
        transactionListeners.splice(index, 1);
      }
    }
  }, discovery:function(config) {
    ScarabUtil.loader("discovery", function(discovery) {
      discovery.go(config);
    });
  }, blockDiscovery:function() {
    publicInterface.__discoveryBlocked = true;
    if (publicInterface.__discoveryModule) {
      publicInterface.__discoveryModule.block();
    }
    if (ScarabUtil.loadModules.emarsys_discovery && ScarabUtil.loadModules.emarsys_discovery.instance) {
      ScarabUtil.loadModules.emarsys_discovery.instance.block();
    }
  }, assistant:function(config) {
    if (assistantCalled) {
      return;
    }
    assistantCalled = true;
    if (typeof config !== "object") {
      config = {};
    }
    config = ScarabUtil.merge(config, ScarabUtil.modules.assistant.config);
    config.merchantId = getMerchantId();
    config.serverUrl = getServerUrl();
    var mobileEnabled = !config.mobileDisabled || ScarabUtil.hasCookie("sc_assistant");
    var isIphoneSafari = ScarabUtil.isIPhone(w) && ScarabUtil.isSafari(w);
    var isChromeForAndroid = ScarabUtil.isChromeForAndroid(w);
    var discoDragEnabled = config.forceDiscoDrag && ScarabUtil.isMobile(w) || config.forceDebugDiscoDrag;
    if (discoDragEnabled && (isIphoneSafari || isChromeForAndroid || ScarabUtil.hasCookie("sc_assistant") || ScarabUtil.hasCookie("sc_discodrag"))) {
      if (config.enableMobileABtest) {
        var host;
        if (getServerUrl()) {
          host = getServerUrl() + "/merchants/";
        } else {
          var proto = document.location.protocol;
          if (proto === "file:") {
            proto = "http:";
          }
          host = proto + "//recommender.scarabresearch.com/merchants/";
        }
        var url = host + getMerchantId();
        if (window.JSON && window.JSON.parse) {
          var xhr = ScarabUtil.createCORSRequest("GET", url);
          if (xhr) {
            xhr.onload = function() {
              var data = JSON.parse(xhr.responseText);
              console.log("Cohort: ", data.cohort);
              if (data.cohort === "NEWDISCO") {
                ScarabUtil.loader("discodrag", function(discodrag) {
                  discodrag.go(config);
                }, config);
              } else {
                if (data.cohort === "OLDDISCO") {
                  ScarabUtil.loader("mobildisco", function(mobildisco) {
                    mobildisco.go(config);
                  }, config);
                }
              }
            };
            xhr.onerror = function() {
              console.error("Cohort error");
            };
            xhr.withCredentials = true;
            xhr.send();
          }
        }
      } else {
        ScarabUtil.loader("discodrag", function(discodrag) {
          discodrag.go(config);
        }, config);
      }
    } else {
      if (config.forceMobile || ScarabUtil.isMobile(w) && mobileEnabled) {
        ScarabUtil.loader("mobildisco", function(mobildisco) {
          mobildisco.go(config);
        }, config);
      } else {
        ScarabUtil.loader("assistant", function(assistant) {
          assistant.go(config);
          publicInterface.__discoveryModule = assistant;
        }, config);
      }
    }
  }, instantSearch:function(config) {
    config.merchantId = getMerchantId();
    config = ScarabUtil.merge(config, ScarabUtil.modules.instantsearch.config);
    ScarabUtil.loader("instantsearch", function(instantSearch) {
      instantSearch.go(config);
    }, config);
  }, emarsys_instantsearch:function(config) {
    config.merchantId = getMerchantId();
    ScarabUtil.loadModule(w, "emarsys_instantsearch", config);
  }, emarsys_webpush:function(config) {
    loadHelper(w, "emarsys_webpush", config);
  }, webpersonalization:function(config) {
    if (!ScarabUtil.loadedModules.emarsys_webpersonalization) {
      loadHelper(w, "emarsys_webpersonalization", config, "loader");
    }
  }, noTopDomain:function() {
    noTopDomain = true;
  }, developMode:function() {
    developMode = true;
  }, enableCORS:function() {
  }, onModuleAvailable:function(moduleName, listener) {
    if (w.ScarabUtil.loadedModules[moduleName] && w.ScarabUtil.loadedModules[moduleName].instance) {
      listener(w.ScarabUtil.loadedModules[moduleName].instance);
      return;
    }
    onModuleAvailableListeners[moduleName] = onModuleAvailableListeners[moduleName] || [];
    var alreadyHasListener = ScarabArrays.findIndex(onModuleAvailableListeners[moduleName], function(l) {
      return l === listener;
    }) !== -1;
    if (!alreadyHasListener) {
      onModuleAvailableListeners[moduleName].push(listener);
    }
  }, errorMessage:function(message, hideFromConsole) {
    var tr = getCurrentTransaction();
    tr.error({t:"USER", c:"errorMessage", m:message}, hideFromConsole);
  }, emarsys_discovery:function(config) {
    if (typeof config !== "object") {
      config = {};
    }
    config.merchantId = getMerchantId();
    config.serverUrl = getServerUrl();
    var hasCookie = ScarabUtil.hasCookie("emarsys_discovery");
    config.forceDiscoDrag = hasCookie && !config.forceLegacyMobile ? true : config.forceDiscoDrag;
    var mobileEnabled = !config.mobileDisabled || hasCookie;
    var isIphoneSafari = ScarabUtil.isIPhone(w) && ScarabUtil.isSafari(w);
    var isChromeForAndroid = ScarabUtil.isChromeForAndroid(w);
    var subModule = "";
    if ((config.forceDiscoDrag && ScarabUtil.isMobile(w) || config.forceDebugDiscoDrag) && (isIphoneSafari || isChromeForAndroid || hasCookie)) {
      if (config.enableMobileABtest) {
        ScarabUtil.getCohort(w, config.serverUrl, config.merchantId, function(cohort) {
          if (cohort === "NEWDISCO") {
            ScarabUtil.loadModule(w, "emarsys_discovery", config, "mobile");
          } else {
            if (cohort === "OLDDISCO") {
              ScarabUtil.loadModule(w, "emarsys_discovery", config, "legacyMobile");
            }
          }
        });
        return;
      }
      subModule = "mobile";
    } else {
      if (config.forceMobile || ScarabUtil.isMobile(w) && mobileEnabled) {
        subModule = "legacyMobile";
      } else {
        subModule = "desktop";
      }
    }
    ScarabUtil.loadModule(w, "emarsys_discovery", config, subModule);
  }};
  if (ScarabUtil.inspector && !config.doNotInspect) {
    ScarabUtil.inspector.trackObjectFunctions("ScarabModule", publicInterface);
  }
  return publicInterface;
};
var _scq = _scq || [];
var ScarabQueue = ScarabQueue || [];
var Scarab = Scarab || null;
(function() {
  var initScarab = function() {
    Scarab = Scarab || ScarabModule(window, {timingsEnabled:true});
    if (typeof window !== "undefined") {
      window.Scarab = Scarab;
    }
    _scq = ScarabUtil.playQueue(Scarab, _scq);
    ScarabQueue = ScarabUtil.playQueue(Scarab, ScarabQueue);
  };
  try {
    if (window.ScarabUtil.hasCookie("emarsys_newloader")) {
      ScarabUtil.checkModules(window, function(module, config) {
        if (module === "sc_inspector") {
          ScarabUtil.loadModule(window, "sc_inspector", config, undefined, initScarab);
        } else {
          ScarabQueue.push([module, config]);
        }
      });
      if (!ScarabUtil.hasCookie("sc_inspector")) {
        initScarab();
      }
    } else {
      var config;
      ScarabUtil.loadModules({assistant:function(config) {
        setTimeout(function() {
          ScarabQueue.push(["assistant", config]);
        }, 100);
      }, mobildisco:function(config) {
        config.forceMobile = true;
        ScarabUtil.modules.assistant.config = config;
        setTimeout(function() {
          ScarabQueue.push(["assistant", config]);
        }, 100);
      }, discodrag:function(config) {
        config.forceDiscoDrag = true;
        ScarabUtil.modules.assistant.config = config;
        setTimeout(function() {
          ScarabQueue.push(["assistant", config]);
        }, 100);
      }, instantsearch:function(config) {
        setTimeout(function() {
          ScarabQueue.push(["instantSearch", config]);
        }, 100);
      }, inspector:function(config) {
        ScarabUtil.loader("inspector", function() {
          initScarab();
        }, config);
      }});
      if (window._scdiscovery && window.ScarabUtil && (window._scdiscovery.visible || window.ScarabUtil.hasCookie("sc_assistant") || window.ScarabUtil.hasCookie("sc_discodrag"))) {
        config = window._scdiscovery.config || {};
        config.disabled = ScarabUtil.makeDisableFunction(window._scdiscovery);
        ScarabQueue.push(["assistant", config]);
      }
      if (window._scinstant && window.ScarabUtil && (window._scinstant.visible || window.ScarabUtil.hasCookie("sc_instantsearch"))) {
        config = window._scinstant || {};
        if (config.disabledDefs) {
          config.disabled = ScarabUtil.makeDisableFunction(config);
        }
        ScarabQueue.push(["instantSearch", config]);
      }
      if (window._scwebpersonalization && window.ScarabUtil) {
        ScarabQueue.push(["webpersonalization", window._scwebpersonalization]);
      }
      if (!ScarabUtil.hasCookie("sc_inspector")) {
        initScarab();
      }
    }
  } catch (e) {
    if (window.console && console.error) {
      console.error("error during scarab initialization: ", e);
    }
    initScarab();
  }
})();

