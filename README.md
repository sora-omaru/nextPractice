# nextPractice
学習ログ兼、開発フロー練習リポジトリ。

## 目的
- Next.js を題材に、**学習ログ**と**開発フロー（ブランチ→PR）練習**を両立する。

## ブランチ運用
- `main`: 安定ブランチ（レビュー済みのみ）
- `feature/*`: 機能追加
- `fix/*`: 不具合修正
- `chore/*`: 設定・依存更新
- `docs/*`: ドキュメント・学習ログ

## コミット規約（Conventional Commits）
- `feat(scope): …` 機能追加
- `fix(scope): …` バグ修正
- `docs(scope): …` ドキュメント
- `style(scope): …` スタイルのみ変更
- `refactor(scope): …` リファクタ
- `test(scope): …` テスト
- `chore(scope): …` 依存・設定

## PRの流れ
1. Issue作成（目的/受け入れ条件）
2. `feature/*` ブランチを切る
3. こまめにコミット（学びは docs/LEARNINGS.md に追記）
4. PR作成（テンプレに沿って「学び」を必ず記載）
5. セルフレビュー→mainへマージ

## 学習ログ
- `docs/LEARNINGS.md` に日付ごとに記録
- 週末に振り返り＆次週TODOを追記
