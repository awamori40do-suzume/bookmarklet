javascript:(function(){
  const currentURL = window.location.href;
  const currentProtocol = window.location.protocol;
  const currentDomain = window.location.hostname;
  
  // 入れ替えたいドメイン
  const domain1 = 'example.com';
  const domain2 = 'anotherdomain.com';

  // 入れ替え後のドメインとプロトコルを設定
  let newProtocol, newDomain;
  if (currentDomain === domain1) {
    newDomain = domain2;
    newProtocol = 'https:'; // domain1からdomain2に変更時はhttps
  } else if (currentDomain === domain2) {
    newDomain = domain1;
    newProtocol = 'http:'; // domain2からdomain1に変更時はhttp
  } else {
    alert('このドメインは対象外です。');
    return;
  }

  // プロトコルを変更
  if (currentProtocol === 'http:') {
    newProtocol = 'https:';
  } else if (currentProtocol === 'https:') {
    newProtocol = 'http:';
  }

  // 新しいURLを作成
  const newURL = currentURL.replace(currentProtocol + '//' + currentDomain, newProtocol + '//' + newDomain);
  window.location.href = newURL;
})();
