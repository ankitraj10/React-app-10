export function getBreedImageUrl() {
 return 'https://dog.ceo/api/breeds/image/random/5';
}

export function searchBreedImageUrl(searchQuery){
 return  `https://dog.ceo/api/breed/${searchQuery}/images/random/1`
}
