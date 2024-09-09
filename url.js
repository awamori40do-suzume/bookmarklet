javascript:(function(){
  var f = 'example.com';  // ドメイン1
  var s = 'anotherdomain.com';  // ドメイン2
  var l = location.href;  // 現在のURL
  
  if (l.indexOf(f) !== -1) {
    // ドメインがfの場合、プロトコルをhttpsにし、ドメインをsに変更
    location.href = l.replace(f, s).replace(/^http:/, 'https:');
  } else if (l.indexOf(s) !== -1) {
    // ドメインがsの場合、プロトコルをhttpにし、ドメインをfに変更
    location.href = l.replace(s, f).replace(/^https:/, 'http:');
  }
})();
