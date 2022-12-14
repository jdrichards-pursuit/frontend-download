//npm install file-saver and destructure saveAs from the npm module
import { saveAs } from 'file-saver';

//import the assets that you've placed in your assets folder inside src
import purpleFlower from './assets/purple-flower.jpg';
import mixerPdf from './assets/mixer-invite.pdf';
import mixerImage from './assets/mixer-image.png';
import './App.css';

//onClick function that downloads the file
const handleDownload = (flower, file) => {
  saveAs(flower, file);
};

function App() {
  return (
    <div className="App">
      <h1>Frontend Download</h1>
      <img src={purpleFlower} alt="purple-flower" />
      <button onClick={() => handleDownload(purpleFlower, 'purple-flower.jpg')}>
        Download Image
      </button>
      <hr />
      <img src={mixerImage} alt="mixer" />
      <button onClick={() => handleDownload(mixerPdf, 'mixer.pdf')}>
        Download PDF
      </button>
    </div>
  );
}

export default App;
