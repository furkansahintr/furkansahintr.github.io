import { Resend } from 'resend'
import type { H3Event } from 'h3'

const resend = new Resend(process.env.NUXT_PRIVATE_RESEND_API_KEY)

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = (await readBody(event))
    const { email, subject, message, phone, fullname } = body
    return await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['egosem98@gmail.com'],
      subject: 'Yeni Mesaj - İletişim Formu',
      html: `
      <p>İletişim formu üzerinden yeni bir mesaj gönderildi.</p>
      <p>Mesaj detayları aşağıdadır:</p>
      <ul>
        <li>Ad Soyad: ${fullname}</li>
        <li>E-posta: ${email}</li>
        <li>Telefon: ${phone}</li>
        <li>Konu: ${subject}</li>
        <li>Mesaj: ${message}</li>
      </ul>
      `,
    })
  }
  catch (error) {
    return { error }
  }
})
