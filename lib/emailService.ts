/**
 * Service d'envoi d'emails via EmailJS
 * Compatible avec les sites statiques (GitHub Pages, Netlify, Vercel, etc.)
 */

import emailjs from '@emailjs/browser'

// Initialisation d'EmailJS (à faire une seule fois)
if (typeof window !== 'undefined') {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
  if (publicKey) {
    emailjs.init(publicKey)
  }
}

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

/**
 * Envoie un email via EmailJS
 * @param formData - Les données du formulaire
 * @returns Promise avec le résultat de l'envoi
 */
export async function sendContactEmail(formData: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    // Vérification des variables d'environnement
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS non configuré. Vérifiez vos variables d\'environnement.')
      return {
        success: false,
        error: 'Service d\'envoi d\'emails non configuré. Veuillez contacter l\'administrateur.',
      }
    }

    // Protection anti-spam basique : vérification de la longueur du message
    if (formData.message.length < 10) {
      return {
        success: false,
        error: 'Le message doit contenir au moins 10 caractères.',
      }
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        error: 'Adresse email invalide.',
      }
    }

    // Préparation des paramètres pour le template EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email, // Pour le Reply-To
      subject: formData.subject || 'Message depuis le formulaire de contact',
      message: formData.message,
      to_email: 'Hugo.bouchez88@gmail.com', // Votre email de réception
      date: new Date().toLocaleString('fr-FR', {
        dateStyle: 'full',
        timeStyle: 'short',
      }),
    }

    // Envoi de l'email via EmailJS
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    )

    if (response.status === 200) {
      return { success: true }
    } else {
      return {
        success: false,
        error: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer.',
      }
    }
  } catch (error: any) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    
    // Gestion des erreurs spécifiques
    if (error.text) {
      return {
        success: false,
        error: `Erreur: ${error.text}`,
      }
    }

    return {
      success: false,
      error: 'Une erreur est survenue. Veuillez réessayer plus tard ou me contacter directement.',
    }
  }
}

