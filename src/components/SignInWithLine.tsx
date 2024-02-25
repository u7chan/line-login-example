'use client'
import { signIn } from 'next-auth/react'
import { LineButton } from './line-button'

export function SignInWithLine() {
  const handleClick = () => {
    signIn('line', { callbackUrl: '/', redirect: true })
  }
  return (
    <div
      style={{
        width: '100%',
        display: 'grid',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <h3>LINEアカウントを利用してログインを行います。</h3>
        <div>
          <div>
            本Webサービスでは、ログイン時の認証画面にて許可を頂いた場合のみ、
          </div>
          <div>
            あなたのLINEアカウントに登録されているメールアドレスを取得します。
          </div>
          <div>
            取得したメールアドレスは、以下の目的以外では使用いたしません。
          </div>
          <div>
            また、法令に定められた場合を除き、第三者への提供はいたしません。
          </div>
          <ul>
            <li>ユーザーIDとしてアカウントの管理に利用</li>
            <li>パスワード再発行時の本人確認に利用</li>
          </ul>
        </div>
      </div>
      <div
        style={{
          marginTop: 12,
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <LineButton onClick={handleClick} />
      </div>
    </div>
  )
}
