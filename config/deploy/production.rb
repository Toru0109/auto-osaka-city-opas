# デプロイ時にSidekiqのデーモンを起動
# set :pty, false
# conohaのサーバーのIP、ログインするユーザー名、サーバーの役割
# xxxの部分はサーバーのIPアドレス
# 10022はポートを変更している場合。通常は22
server '118.27.16.55', user: 'yoshikawatr', roles: %w{app db web}, port: 10022

#デプロイするサーバーにsshログインする鍵の情報。サーバー編で作成した鍵のパス
set :ssh_options, keys: '~/.ssh/conoha_vps_server/id_rsa'
