import * as Apis from "./Apis";
import axios from "axios";

const Breed = {

  getBreedsWithImage(callback) {
    console.log("getOrders");
    axios
      .get(Apis.getBreedImageUrl())
      .then(result => {
        console.log(result);
        setTimeout(() => {
          callback(result.data);
        }, 1);
      })
      .catch(error => {
        console.log(error.response);
        setTimeout(() => {
          callback(null);
        }, 1);
      });
  },

  searchBreed(searchQuery, callback){
    console.log ("searchBreed::",searchQuery);
    axios
    .get(Apis.searchBreedImageUrl(searchQuery))
    .then(result => {
      console.log(result);
      setTimeout(() => {
        callback(result.data);
      }, 1);
    })
    .catch(error => {
      console.log(error.response);
      setTimeout(() => {
        callback(null);
      }, 1);
    });
 }

};

export default Breed;