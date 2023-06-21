const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp")
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // maxlength:20
  },

  price: {
    type: Number,
    required: true,
    min: [0, "price must be positive"],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["S", "M", "L"],
  },
});


productSchema.methods.toggleOnSale= function(){
    this.onSale = !this.onSale;
     return this.save();
}

productSchema.methods.addCategory = function(newCat){
    this.categories.push(newCat)
    return this.save()

}

productSchema.statics.fireSale =  function(){
  return   this.updateMany({},{onSale: true, price:0})
}


// productSchema.methods.greet = function () {
//   console.log("hello there how r yu ");
//   console.log(`-from${this.name}`);
// };


const Product = mongoose.model("Product", productSchema);



const findProduct = async () => {
  const found = await Product.findOne({ name: "bike@45" });
  console.log(found);
  await found.toggleOnSale();
  console.log(found);
  await found.addCategory('outdoors')
  console.log(found);

};
// findProduct();

Product.fireSale().then(res=>console.log(res))





//   const bike  = new Product({name: 'cycle',price :9.45 , categories:['cycling'] , size:'S'})
//   bike.save()
//     .then((data) => {
//       console.log("saved ");
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log("error occured ");
//       console.log(err);
//     })

// Product.findOneAndUpdate({name:'bike@45'},{price:15.99},{new:true , runValidators:true})
//     .then((data) => {
//       console.log("saved ");
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log("error occured ");
//       console.log(err);
//     });
