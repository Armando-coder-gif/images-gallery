import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import Welcome from './components/Welcome';
import { Container, Row, Col } from 'react-bootstrap';

const UNPLASH_KEY = process.env.REACT_APP_UNPLASH_KEY;

const App = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // console.log(word); // get the value written

    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]); // new array of images {...}, {}, {} // console.log(images); // spread data
      })
      .catch((err) => {
        console.log(err);
      });

    setWord('');
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />

      <Container className="mt-4">
        {images.length ? ( <Row xs={1} ms={2} lg={3}>
          {images.map((image, i) => (
            <Col key={i} className="pb-3">
              <ImageCard image={image} deleteImage={handleDeleteImage} />
            </Col>
          ))}
        </Row>

        ):(
        <Welcome/>
        )}
        
      </Container>
    </div> // image = value, i = index // implicit return
  );
};

export default App;

/*
e = parameter
Question to my brother:
always I have to search the values with .values?
e.target[0].value

target elemento del dom
como p, h1, div


Note: Anytime when state of component changes, 
component is re-rendered.

fetch is a promise

if images.length is less 1 don't display photo, else display photo
{!!images.length && <ImageCard image={images[0]} />}

*/
