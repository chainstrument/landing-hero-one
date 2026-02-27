 

function App() {
 
  return (
    <>
    <h1 className="text-4xl text-blue-600 font-bold underline text-center mt-10">
  Hello Tailwind !
</h1>

     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          🎉 Tailwind CSS fonctionne !
        </h1>
        <p className="text-gray-600">
          Si tu vois ce message stylé, c’est que Tailwind est bien configuré.
        </p>
      </div>
    </div>
      
    </>
  )
}

export default App
