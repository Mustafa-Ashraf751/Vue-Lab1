const app = Vue.createApp({
  data(){
    return {
      books:books,
      wishList:[],
      wishListClicked:false
    }
  },
  methods:{
    isOverFifty(book){
      return book.pages > 400;
    },
    addToWishList(book){
      if(!this.isInWishList(book)){
        this.wishList.push(book);
      }
      console.log(this.wishList);
    },
    getWishList(){
      return this.wishList;
    },
    isInWishList(book){
      return this.wishList.some(item => item.isbn === book.isbn);
    },
    toggleWish(){
      this.wishListClicked = !this.wishListClicked;
    },
    deleteBook(deletedBook){
      this.wishList = this.wishList.filter(book=>book.isbn!==deletedBook.isbn);
      console.log(this.wishList);
    },formatPrice(price){
      return new Intl.NumberFormat('ar-sa',{
        style:"currency",
        currency:'sar',
        minimumFractionDigits:2,
        maximumFractionDigits:2
      }).format(price);
    }
  }
});

app.mount('#main-con');