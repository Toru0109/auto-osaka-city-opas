# 残作業
- [x] ロゴの修正
- [ ] ファビコンの修正  
- [x] 会員登録・ログインの高さ調整
- [x] 会員登録・ログインの「利用者番号」「パスワード」は、大阪市オーパスのものだとわかるようすべき
- [ ] （会員登録）エラー時、対象となるテキストボックスに焦点を当てるべきか
- [ ] （会員登録・ログイン）エラーメッセージ表示に使うダイアログをおしゃれにしたい（JSのデフォルトのものではなく）
- [x] （会員登録・ログイン）部分テンプレートをやめる？
- [x] （会員登録・ログイン）背景色を調整（フラッシュメッセージ表示時の考慮）
- [ ] パスワードの暗号化（DBに登録するなら復号化できるものにすべき）
- [ ] 同一利用者番号、パスワードを持つユーザー登録の防止

# 検討事項
- [ ] オーパスの利用者番号・パスワードの扱いについて
  * 案1. どちらもDBに登録
  * 案2. 処理開始前にユーザーに入力してもらう

# 不明点
* turbolinksの設定
* redirect_toとrenderの違い
* flashとflash.nowの違い
* railsアプリにおけるリダイレクトの動きについて
* ssh通信の公開鍵・暗号鍵の仕組み

# メモ
* トップ画面のデザインは下記サイトを参考にした  
  * https://hatchful.shopify.com/ja/#testimonials
* ロゴは下記サイトで作成  
  * https://www.canva.com/design/DAE4VVXfRdU/mpRvnxvGPg0uik3PkDjUbw/edit

# TODO
## パスワード更新専用の画面作成
* 画面からは下記の入力を必須とする
  * 現在のパスワード
  * 新しいパスワード
  * 新しいパスワード(確認用)
* 全て目のアイコンで入力内容を確認とする
* 「ユーザー情報編集」画面からパスワード更新機能を除外する
* 疑問点
  * 新しいパスワードと新しいパスワード(確認用)はJS側でチェックすべき?コントローラ側でのみチェック?(他サービスはどうなっているか) 
 
 ```
 class UsersController < ApplicationController
   before_action :authenticate_user, :only => [:edit_password, :update_password]
 
 def edit_password
 end
 
 def update_password
   user = User.find(session[:user_id])
   if user.decrypted_password != params[:original_password]
      flash.now[:error] = '現在のパスワードが間違っています。'
     render :edit_password and return
   end
   
   if params[:password] != params[:password_confirmation]
     flash.now[:error] = 'パスワードがパスワード(確認用)と一致しません。'
     render :edit_password and return
   end
   
   user.password = params[:password]
   if user.save
     flash[:success] = 'パスワードを更新しました。'
     redirect_to automation_settings_path
   else
     flash.now[:error] = user.errors.full_messages
     render :edit_password
   end
 end
 ```
