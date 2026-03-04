import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Home() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className={`min-h-screen transition-colors ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-md sticky top-0 z-50 border-b transition-colors`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">🐾 Gardani</h1>
          <div className="flex items-center space-x-6">
            <a href="#services" className={`${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>Services</a>
            <a href="#about" className={`${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>À propos</a>
            <a href="#pricing" className={`${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>Tarifs</a>
            <a href="#testimonials" className={`${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>Avis</a>
            <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Contact</Link>
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
              title={isDark ? 'Mode clair' : 'Mode sombre'}
            >
              {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-700" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Image */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src="https://picsum.photos/1200/600?random=1" 
          alt="Chiens heureux" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-purple-600/80 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="hero-title text-6xl font-black mb-4 tracking-tight">Bienvenue chez Gardani</h2>
            <p className="text-xl mb-8">Votre partenaire de confiance pour la garde de vos animaux de compagnie</p>
            <Link to="/contact" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-16 px-4 transition-colors ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${isDark ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-md hover:shadow-lg transition overflow-hidden`}>
              <img 
                src="https://picsum.photos/500/300?random=2" 
                alt="Garde à domicile" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">🏠 Garde à domicile</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Nous prenons soin de vos animaux dans le confort de leur environnement habituel.
                </p>
              </div>
            </div>
            <div className={`${isDark ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-md hover:shadow-lg transition overflow-hidden`}>
              <img 
                src="https://picsum.photos/500/300?random=3" 
                alt="Promenades" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">🚶 Promenades</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Des promenades régulières et stimulantes pour la santé et le bien-être de vos animaux.
                </p>
              </div>
            </div>
            <div className={`${isDark ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-md hover:shadow-lg transition overflow-hidden`}>
              <img 
                src="https://picsum.photos/500/300?random=4" 
                alt="Jeux et activités" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">🐾 Jeux et activités</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Des moments ludiques et enrichissants pour stimuler vos compagnons à quatre pattes.
                </p>
              </div>
            </div>
            <div className={`${isDark ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-md hover:shadow-lg transition overflow-hidden`}>
              <img 
                src="https://picsum.photos/500/300?random=5" 
                alt="Soins spécialisés" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">💊 Soins spécialisés</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Administration de médicaments et soins spécifiques selon les besoins de votre animal.
                </p>
              </div>
            </div>
            <div className={`${isDark ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-md hover:shadow-lg transition overflow-hidden`}>
              <img 
                src="https://picsum.photos/500/300?random=6" 
                alt="Suivi en temps réel" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">📱 Suivi en temps réel</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Photos et mises à jour régulières pour vous rassurer pendant votre absence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 px-4 transition-colors ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>À propos de nous</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://picsum.photos/500/400?random=7" 
                alt="Notre équipe" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className={`${isDark ? 'bg-gray-800' : 'bg-blue-50'} p-8 rounded-lg transition-colors`}>
              <p className={`text-lg mb-6 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Gardani est une entreprise spécialisée dans la garde d'animaux de compagnie avec plus de 10 ans d'expérience. 
                Notre équipe de soigneurs qualifiés et passionnés s'engage à offrir les meilleurs soins à vos compagnons.
              </p>
              <p className={`text-lg transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Nous comprenons l'importance de vos animaux pour vous et nous les traitons comme les nôtres. 
                Sécurité, bien-être et affection sont au cœur de nos services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={`py-16 px-4 transition-colors ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>Nos Tarifs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'} p-8 rounded-lg shadow-md border-2 hover:border-blue-600 transition`}>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Garde quotidienne</h3>
              <p className={`text-4xl font-bold mb-6 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>25€ <span className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>/jour</span></p>
              <ul className={`space-y-2 mb-6 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>✓ Garde pendant 4 heures</li>
                <li>✓ Repas et jeux</li>
                <li>✓ Photos quotidiennes</li>
              </ul>
              <Link to="/contact" className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Commander</Link>
            </div>
            <div className={`${isDark ? 'bg-gray-700 border-blue-500' : 'bg-white border-blue-600'} p-8 rounded-lg shadow-lg border-2 transform scale-105 transition`}>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Garde complète ⭐ Populaire</h3>
              <p className={`text-4xl font-bold mb-6 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>45€ <span className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>/jour</span></p>
              <ul className={`space-y-2 mb-6 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>✓ Garde toute la journée</li>
                <li>✓ Promenades incluses</li>
                <li>✓ Suivi en temps réel</li>
              </ul>
              <Link to="/contact" className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Commander</Link>
            </div>
            <div className={`${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'} p-8 rounded-lg shadow-md border-2 hover:border-blue-600 transition`}>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Formule premium</h3>
              <p className={`text-4xl font-bold mb-6 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>60€ <span className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>/jour</span></p>
              <ul className={`space-y-2 mb-6 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>✓ Garde 24h/24</li>
                <li>✓ Tous les services</li>
                <li>✓ Vidéos quotidiennes</li>
              </ul>
              <Link to="/contact" className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Commander</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`py-16 px-4 transition-colors ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>Avis de nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${isDark ? 'bg-gray-800' : 'bg-yellow-50'} p-8 rounded-lg shadow-md transition-colors`}>
              <img 
                src="https://picsum.photos/100/100?random=8" 
                alt="Marie" 
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <p className="text-yellow-500 mb-3">⭐⭐⭐⭐⭐</p>
              <p className={`mb-4 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                "Gardani s'est occupé de notre chien pendant nos vacances. Nous avons été rassurés par les photos quotidiennes et notre Milo était toujours heureux à notre retour!"
              </p>
              <p className={`font-bold transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>Marie & Jean</p>
            </div>
            <div className={`${isDark ? 'bg-gray-800' : 'bg-yellow-50'} p-8 rounded-lg shadow-md transition-colors`}>
              <img 
                src="https://picsum.photos/100/100?random=9" 
                alt="Sophie" 
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <p className="text-yellow-500 mb-3">⭐⭐⭐⭐⭐</p>
              <p className={`mb-4 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                "Service impeccable et équipe très professionnelle. Nos chats se sentent en confiance et nous aussi! Fortement recommandé."
              </p>
              <p className={`font-bold transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>Sophie</p>
            </div>
            <div className={`${isDark ? 'bg-gray-800' : 'bg-yellow-50'} p-8 rounded-lg shadow-md transition-colors`}>
              <img 
                src="https://picsum.photos/100/100?random=10" 
                alt="Thomas" 
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <p className="text-yellow-500 mb-3">⭐⭐⭐⭐⭐</p>
              <p className={`mb-4 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                "Gardani s'occupe de notre lapin depuis 2 ans. Qualité de service exceptionnelle et prix honnête. On adore!"
              </p>
              <p className={`font-bold transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>Thomas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDark ? 'bg-gray-950 border-gray-800' : 'bg-gray-800'} text-white py-12 px-4 border-t transition-colors`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Colonne 1: Infos */}
            <div>
              <h3 className="text-2xl font-bold mb-4">🐾 Gardani</h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-400'}`}>
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
          <hr className={`${isDark ? 'border-gray-800' : 'border-gray-700'} my-8`} />

          {/* Copyright */}
          <div className="text-center text-gray-400">
            <p>&copy; 2026 Gardani. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
