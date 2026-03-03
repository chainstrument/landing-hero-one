import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">🐾 Gardani</h1>
          <div className="space-x-6">
            <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">À propos</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600">Tarifs</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Avis</a>
            <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4">Bienvenue chez Gardani</h2>
          <p className="text-xl mb-8">Votre partenaire de confiance pour la garde de vos animaux de compagnie</p>
          <Link to="/contact" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
            Demander un devis
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">🏠 Garde à domicile</h3>
              <p className="text-gray-600">
                Nous prenons soin de vos animaux dans le confort de leur environnement habituel.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">🚶 Promenades</h3>
              <p className="text-gray-600">
                Des promenades régulières et stimulantes pour la santé et le bien-être de vos animaux.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">🐾 Jeux et activités</h3>
              <p className="text-gray-600">
                Des moments ludiques et enrichissants pour stimuler vos compagnons à quatre pattes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">💊 Soins spécialisés</h3>
              <p className="text-gray-600">
                Administration de médicaments et soins spécifiques selon les besoins de votre animal.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">📱 Suivi en temps réel</h3>
              <p className="text-gray-600">
                Photos et mises à jour régulières pour vous rassurer pendant votre absence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">À propos de nous</h2>
          <div className="bg-blue-50 p-12 rounded-lg">
            <p className="text-lg text-gray-700 mb-6">
              Gardani est une entreprise spécialisée dans la garde d'animaux de compagnie avec plus de 10 ans d'expérience. 
              Notre équipe de soigneurs qualifiés et passionnés s'engage à offrir les meilleurs soins à vos compagnons.
            </p>
            <p className="text-lg text-gray-700">
              Nous comprenons l'importance de vos animaux pour vous et nous les traitons comme les nôtres. 
              Sécurité, bien-être et affection sont au cœur de nos services.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Nos Tarifs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Garde quotidienne</h3>
              <p className="text-4xl font-bold text-gray-800 mb-6">25€ <span className="text-lg text-gray-600">/jour</span></p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ Garde pendant 4 heures</li>
                <li>✓ Repas et jeux</li>
                <li>✓ Photos quotidiennes</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-blue-600">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Garde complète</h3>
              <p className="text-4xl font-bold text-gray-800 mb-6">45€ <span className="text-lg text-gray-600">/jour</span></p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ Garde toute la journée</li>
                <li>✓ Promenades incluses</li>
                <li>✓ Suivi en temps réel</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Formule premium</h3>
              <p className="text-4xl font-bold text-gray-800 mb-6">60€ <span className="text-lg text-gray-600">/jour</span></p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ Garde 24h/24</li>
                <li>✓ Tous les services</li>
                <li>✓ Vidéos quotidiennes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Avis de nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-yellow-50 p-8 rounded-lg shadow-md">
              <p className="text-yellow-500 mb-4">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-700 mb-4">
                "Gardani s'est occupé de notre chien pendant nos vacances. Nous avons été rassurés par les photos quotidiennes et notre Milo était toujours heureux à notre retour!"
              </p>
              <p className="font-bold text-gray-800">- Marie & Jean</p>
            </div>
            <div className="bg-yellow-50 p-8 rounded-lg shadow-md">
              <p className="text-yellow-500 mb-4">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-700 mb-4">
                "Service impeccable et équipe très professionnelle. Nos chats se sentent en confiance et nous aussi! Fortement recommandé."
              </p>
              <p className="font-bold text-gray-800">- Sophie</p>
            </div>
            <div className="bg-yellow-50 p-8 rounded-lg shadow-md">
              <p className="text-yellow-500 mb-4">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-700 mb-4">
                "Gardani s'occupe de notre lapin depuis 2 ans. Qualité de service exceptionnelle et prix honnête. On adore!"
              </p>
              <p className="font-bold text-gray-800">- Thomas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Colonne 1: Infos */}
            <div>
              <h3 className="text-2xl font-bold mb-4">🐾 Gardani</h3>
              <p className="text-gray-400">
                Votre service de garde d'animaux de confiance, disponible 7 jours sur 7.
              </p>
            </div>

            {/* Colonne 2: Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone size={20} />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={20} />
                  <span>contact@gardani.fr</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={20} />
                  <span>Paris, France</span>
                </div>
              </div>
            </div>

            {/* Colonne 3: Réseaux sociaux */}
            <div>
              <h3 className="text-xl font-bold mb-4">Nous suivre</h3>
              <div className="flex space-x-6">
                <a href="https://facebook.com/gardani" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                  <Facebook size={28} />
                </a>
                <a href="https://instagram.com/gardani" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
                  <Instagram size={28} />
                </a>
                <a href="https://twitter.com/gardani" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  <Twitter size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-700 my-8" />

          {/* Copyright */}
          <div className="text-center text-gray-400">
            <p>&copy; 2026 Gardani. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
