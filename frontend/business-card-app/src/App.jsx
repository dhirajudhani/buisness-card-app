
import './App.css'
import Card from './Card'
function App() {
    const cardData = {
      name: "Dhiraj Udhani",
      description: "A passionate developer and tech enthusiast",
      socialMedia: [
        { platform: 'LinkedIn', link: 'https://www.linkedin.com/in/dhiraj-udhani-13061969bharti/' },
        { platform: 'Twitter', link: 'https://twitter.com/udhani_dhiraj' },
        { platform: 'GitHub', link: 'https://www.github.com/dhirajudhani' }
      ],
      interests: ["Coding", "Travelling"]
    }
  return (
    <>
     <Card {...cardData}/>
    </>
  )
}

export default App
