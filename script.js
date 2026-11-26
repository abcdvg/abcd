'use strict';
const patterns = [['アタッカー','積極的に攻めてチームを勝利に導くタイプ。'],['サポーター','仲間を支え、チーム全体の力を引き出すタイプ。'],['ストラテジスト','状況を分析し、作戦を立てて戦うタイプ。'],['オールラウンダー','状況に合わせて柔軟に立ち回るタイプ。']];
function diagnose(name) { let hash = 0; for (const char of name) hash = (Math.imul(hash,31)+char.codePointAt(0)) >>> 0; return patterns[hash % patterns.length]; }
document.querySelector('#form').addEventListener('submit', event => { event.preventDefault(); const name = document.querySelector('#name').value.trim(); if (!name) {document.querySelector('#result').hidden=true;return;} const [type, detail] = diagnose(name); const title = `${name}さんは${type}タイプ！`; document.querySelector('#type').textContent=title; document.querySelector('#detail').textContent=detail; document.querySelector('#share').href='https://twitter.com/intent/tweet?text='+encodeURIComponent(title+' #ゲーム適性診断'); document.querySelector('#result').hidden=false; });
console.assert(diagnose('テスト') === diagnose('テスト'));
