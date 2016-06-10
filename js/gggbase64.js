    function i(e, t) {
      var r = n.indexOf(e.charAt(t));
      if (r === -1) throw "Cannot decode base64";
      return r
    }

    function base64Deocde(e) {
      var n = 0,
        r, s, o = e.length,
        u = [];
      e = String(e);
      if (o === 0) return e;
      if (o % 4 !== 0) throw "Cannot decode base64";
      e.charAt(o - 1) === t && (n = 1, e.charAt(o - 2) === t && (n = 2), o -= 4);
      for (r = 0; r < o; r += 4) s = i(e, r) << 18 | i(e, r + 1) << 12 | i(e, r + 2) << 6 | i(e, r + 3), u.push(String.fromCharCode(s >> 16, s >> 8 & 255, s & 255));
      switch (n) {
        case 1:
          s = i(e, r) << 18 | i(e, r + 1) << 12 | i(e, r + 2) << 6, u.push(String.fromCharCode(s >> 16, s >> 8 & 255));
          break;
        case 2:
          s = i(e, r) << 18 | i(e, r + 1) << 12, u.push(String.fromCharCode(s >> 16))
      }
      return u.join("")
    }

    function o(e, t) {
      var n = e.charCodeAt(t);
      if (n > 255) throw "INVALID_CHARACTER_ERR: DOM Exception 5";
      return n
    }

    function u(e) {
      if (arguments.length !== 1) throw "SyntaxError: exactly one argument required";
      e = String(e);
      var r, i, s = [],
        u = e.length - e.length % 3;
      if (e.length === 0) return e;
      for (r = 0; r < u; r += 3) i = o(e, r) << 16 | o(e, r + 1) << 8 | o(e, r + 2), s.push(n.charAt(i >> 18)), s.push(n.charAt(i >> 12 & 63)), s.push(n.charAt(i >> 6 & 63)), s.push(n.charAt(i & 63));
      switch (e.length - u) {
        case 1:
          i = o(e, r) << 16, s.push(n.charAt(i >> 18) + n.charAt(i >> 12 & 63) + t + t);
          break;
        case 2:
          i = o(e, r) << 16 | o(e, r + 1) << 8, s.push(n.charAt(i >> 18) + n.charAt(i >> 12 & 63) + n.charAt(i >> 6 & 63) + t)
      }
      return s.join("")
    }
    var t = "=",
      n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      r = "1.0";

    function v() {
      this.dataString = "";
      this.position = 0;

      this.bytesToInt16 = function(e) {
        return this.bytesToInt(e, 2)
      },
      this.bytesToInt = function(e, t) {
        t = t || 4;
        var n = 0;
        for (var r = 0; r < t; ++r) n += e[r], r < t - 1 && (n <<= 8);
        return n
      },
      this.hasData = function() {
        return this.position < this.dataString.length
      },
      this.getDataString = function() {
        return this.dataString
      },
      this.setDataString = function(e) {
        this.dataString = e, this.position = 0
      },
      this.readInt8 = function() {
        return this.readInt(1)
      },
      this.readInt16 = function() {
        return this.readInt(2)
      },
      this.readInt = function(e) {
        e = e || 4;
        var t = this.position + e;
        if (t > this.dataString.length) throw "Integer read exceeds bounds";
        var n = [];
        for (; this.position < t; ++this.position) n.push(this.dataString.charAt(this.position).charCodeAt(0));
        return this.bytesToInt(n, e)
      };
    }


    function loadHistoryUrl(t) {
      t = base64Deocde(t.replace(/.+\//g, "").replace(/-/g, "+").replace(/_/g, "/"));
      let s = new v;
      s.setDataString(t);
      var o = s.readInt(),
        u = s.readInt8(),
        a = s.readInt8(),
        f = 0;
      o > 0 && (f = s.readInt8());
      var l = [];
      while (s.hasData()) l.push(s.readInt16());
      return l;
    }