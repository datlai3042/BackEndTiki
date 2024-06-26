import bcrypt from 'bcrypt'
import { AuthFailedError } from '~/Core/response.error'

export default class ProviderBcrypt {
      static async comparePass({ password, hashPassword }: { password: string | Buffer; hashPassword: string }) {
            console.log('params::', password, hashPassword)

            try {
                  const compare = await bcrypt.compare(password, hashPassword.trim())
                  console.log(compare)
                  return compare
            } catch (e) {
                  return new AuthFailedError({ detail: 'Password wrong' })
            }
      }
}
