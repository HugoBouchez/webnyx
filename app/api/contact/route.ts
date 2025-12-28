import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    // Validation email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      )
    }

    // Envoi de l'email avec Resend
    if (resend) {
      try {
        const { data, error } = await resend.emails.send({
        from: 'Contact Portfolio <onboarding@resend.dev>', // Vous pouvez changer le domaine après vérification
        to: ['Hugo.bouchez88@gmail.com'],
        replyTo: email,
        subject: subject ? `[${subject}] Nouveau message de ${name}` : `Nouveau message de contact de ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
              Nouveau message de contact
            </h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Nom:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              ${subject ? `<p style="margin: 10px 0;"><strong>Sujet:</strong> ${subject}</p>` : ''}
              <p style="margin: 10px 0;"><strong>Date:</strong> ${new Date().toLocaleString('fr-FR')}</p>
            </div>
            <div style="background-color: #fff; padding: 20px; border-left: 4px solid #3b82f6; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Message:</h3>
              <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px;">
              <p>Ce message a été envoyé depuis le formulaire de contact de votre portfolio.</p>
            </div>
          </div>
        `,
        text: `
Nouveau message de contact

Nom: ${name}
Email: ${email}
${subject ? `Sujet: ${subject}\n` : ''}Date: ${new Date().toLocaleString('fr-FR')}

Message:
${message}
        `,
      })

      if (error) {
        console.error('Erreur Resend:', error)
        return NextResponse.json(
          { error: 'Erreur lors de l\'envoi de l\'email' },
          { status: 500 }
        )
      }

        console.log('Email envoyé avec succès:', data)
      } catch (emailError) {
        console.error('Erreur lors de l\'envoi de l\'email:', emailError)
        // On log quand même le message même en cas d'erreur
        console.log('Nouveau message de contact (erreur envoi email):')
        console.log('Nom:', name)
        console.log('Email:', email)
        console.log('Message:', message)
      }
    } else {
      // Si Resend n'est pas configuré, on log quand même le message
      console.log('Nouveau message de contact (Resend non configuré):')
      console.log('Nom:', name)
      console.log('Email:', email)
      console.log('Message:', message)
      console.log('⚠️ Pour activer l\'envoi d\'emails, configurez RESEND_API_KEY dans .env.local')
    }

    return NextResponse.json(
      { message: 'Message envoyé avec succès' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error)
    return NextResponse.json(
      { error: 'Erreur serveur lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}

