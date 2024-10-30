import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { faickApi, searchPhotos } from '../api/unsplash-api';
import SearchBar from './SearchBar/SearchBar';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchSubmit = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await searchPhotos(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (err) {
        setError('Error fetching images');
        toast.error('Error fetching images');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <SearchBar onSubmit={handleSearchSubmit} />

      {error !== null && <ErrorMessage message={error} />}

      <ImageGallery images={images} onImageClick={handleImageClick} />

      {isLoading && <Loader />}

      {images.length > 0 && page < totalPages && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      {selectedImage && (
        <ImageModal isOpen={isModalOpen} onRequestClose={closeModal} image={selectedImage} />
      )}
    </>
  );
};

export default App;
