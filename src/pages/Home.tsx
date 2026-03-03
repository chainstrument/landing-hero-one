import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Bienvenue</h1>
        <p className="text-gray-600 mb-8">
          Explorez notre site et n'hésitez pas à nous contacter si vous avez des questions.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
        >
          Aller au formulaire de contact
        </Link>
      </div>
    </div>
  )
}
