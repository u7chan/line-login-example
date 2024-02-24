import { redirect } from 'next/navigation'
import { getUserSession } from '@/auth'
import { SignIn } from '@/components'

export default async function Page() {
  if (await getUserSession()) {
    redirect('/')
  }
  return (
    <>
      <h1>Login Example</h1>
      <hr />
      <div>
        <p>LINEアカウントを利用してログインを行います。</p>
        <br />
        本Webサービスでは、ログイン時の認証画面にて許可を頂いた場合のみ、あなたのLINEアカウントに登録されているメールアドレスを取得します。
        <br />
        取得したメールアドレスは、以下の目的以外では使用いたしません。また、法令に定められた場合を除き、第三者への提供はいたしません。
        <ul>
          <li>ユーザーIDとしてアカウントの管理に利用</li>
          <li>パスワード再発行時の本人確認に利用</li>
        </ul>
      </div>
      <SignIn />
    </>
  )
}
