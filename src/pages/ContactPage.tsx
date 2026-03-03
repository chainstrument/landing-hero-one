import { Link } from 'react-router-dom'
import ContactForm from '../ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Mon Site</h1>
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </nav>

      {/* Contenu */}
      <div className="max-w-2xl mx-auto py-8">
        <ContactForm />
      </div>
    </div>
  )
}
