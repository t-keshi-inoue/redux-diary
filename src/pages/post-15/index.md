---
path: "/post15/"
category: "other"
tags: ["test"]
title: "TDDが面白い件"
date: "2019-11-15T00:00:00.000Z"
summary: "テスト駆動開発とは"
images: [images/1.png]
---

## なんでテストをするの?

A.品質の確保のため  
だって稼働中のサービスが思わぬ理由で止まったりしたら、怖くないですか？
駆け出しの頃に「本番環境でやらかした件」みたいなエピソードを聞いたことありますが、
聞いてるだけで冷や汗が出るような怖い話でした。

## テストコードを書くと何がいいの？

メリット：

- 1.テストを自動化できる
- 2.リファクタリングがしやすい
- 3.他人から見たときに機能がわかりやすい

ちょっと書き直す度に、いろんなところをクリックしてみるなど、アナログな方法でテストを繰り返すのは結構手間だったりします。
一回テストコードを書いておけば後々、楽ちんだね！って話。
加えて、3 番目が意外にデカくて、リーダブルなコードという観点でもテストコードは重要だ。
先にテストコードを覗いておけば、どんなプログラムなのかざっくり概要がわかるというメリット is ある。

## んで、結局テスト駆動開発って?

**Test Driven Development そいつを略して TDD-**
ざっくり言うと、テストコードから先に書くっていうプログラミングの手法。

- RED
- GREEN
- REFACTOR

の 3 つの STEP で構成される。
（REFACTOR については、BLUE じゃねぇのかよっとツッコミを入れたくもなる。）
まず、先にテストコードを書くと、必ずエラーが出る。これがレッドの段階。
「こうなるはず」っていう結果だけを書いて、過程がないのでエラーになるみたいな感じ。
そして GREEN の段階でエラーを潰していくように、実際のコードを書いていく。
最後に REFACTOR でコードをさらに明快かつ簡潔なものに直していく。

<br/>

こう書くと思いの外、シンプルで理解しやすい手法ではないだろうか。
良いエンジニアになるためにはテストコードを必ず書くようにしろ、
という遥か古より引き継がれし箴言もあるので、これを機会にテストコードを初めてみようかな。
今日は以上！
