import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import ContactForm from '../ContactForm'

export default function ContactPage() {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors`}>
      {/* Navigation */}
      <nav className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-md p-4 border-b transition-colors`}>
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} transition-colors`}>🐾 Gardani</h1>
          <Link
            to="/"
            className={`${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} font-medium transition-colors`}
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </nav>

      {/* Contenu */}
      <div className="max-w-2xl mx-auto py-8 px-4">
        <h1 className={`text-4xl font-bold text-center mb-8 ${isDark ? 'text-white' : 'text-gray-800'} transition-colors`}>Contactez-nous</h1>
        <ContactForm />
      </div>
    </div>
  )
}
