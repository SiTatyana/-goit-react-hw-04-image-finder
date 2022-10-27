import { useState, useEffect } from "react";
import SearchBar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";
import { Loader } from "./Loader/Loader";
import Button from "./Button/Button";
import { FetchApi } from "services/FetchApi";


export default function App() {
  // розділяємо стейт
  const [query, setQuery] = useState("");
  const [largeImage, setLargeImage] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalImages, setTotalImages] = useState(0)

  // робимо з методів функції

  useEffect(() => {
    if(query) {
      setIsLoading(true);
      FetchApi (query, page)
      .then(data => {
      setImages(prev => {
        const newImages = prev.concat (data.hits);
        return newImages;
      });
      setTotalImages(data.totalHits);
      }) 
      .catch (error => {
        console.log(error);
      })
      .finally (data => {
        setIsLoading(false);
      })
    }
  },[query, page])

  const serachQuery = (word) => {
    if(!word){
      return;
    }
    setQuery(word);
    setImages([]);
    setPage(1);
}

  const modalOpen = (source) => {
    setLargeImage(source);
  };
      
  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  
    

  return (
    <div className="App">
      <SearchBar onSubmit={serachQuery}/>
      {images.length !== 0 && <ImageGallery images={images} modalOpen={modalOpen}/>}
      {(images.length !== 0 && images.length < totalImages) && <Button onClick={nextPage}/>}
      {largeImage && <Modal onClick={modalOpen} source={largeImage}/>}
      {isLoading && <Loader/>}
    </div>
  );
}


// export class App extends Component {
//   state = {
//     query: "",
//     largeImage: "",
//     images: [],
//     page: 1,
//     isLoading: false,
//     totalImages: 0
//   }
  // componentDidUpdate(prevProps, prevState){
  //   if(this.state.query && (prevState.query !== this.state.query || prevState.page !== this.state.page)){
  //       this.setState({
  //           isLoading: true
  //       })
  //       FetchApi(this.state.query, this.state.page)
  //       .then(data => {
  //           if(prevState.query !== this.state.query){
  //               this.setState({
  //                   images: data.hits,
  //                   totalImages: data.totalHits
  //               })
  //           }
  //           else{
  //               this.setState(prevState => {
  //                   const newImages = prevState.images.concat(data.hits);
  //                   return {images: newImages};
  //               })
  //           }
  //       })
  //       .catch(err => {
  //           console.log(err);
  //       })
  //       .finally(data => {
  //           this.setState({
  //               isLoading: false
  //           })
  //       })
        
  //   }
  // }
//   serachQuery = word => {
//     this.setState({
//       query: word,
//       page: 1
//     })
//   }
//   modalOpen = (source) => {
//     this.setState({
//       largeImage: source
//     })
//   }

//   nextPage = () => {
//     this.setState(prevState => {
//         return {page: prevState.page + 1}
//     })
//   }

//   render(){
//     const {images, largeImage, totalImages, isLoading} = this.state;
//     const {modalOpen, serachQuery, nextPage} = this;
//     return (
//       <div className="App">
//         <SearchBar onSubmit={serachQuery}/>
//         {images.length !== 0 && <ImageGallery images={images} modalOpen={modalOpen}/>}
//         {(images.length !== 0 && images.length < totalImages) && <Button onClick={nextPage}/>}
//         {largeImage && <Modal onClick={modalOpen} source={largeImage}/>}
//         {isLoading && <Loader/>}
//       </div>
//     );
//   }
// };