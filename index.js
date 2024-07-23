const mongoose=require('mongoose')
const express= require ('express')
const cors=require('cors')
const app=express()
const port=5000;
// const mongoDB=require('./db')
// mongoDB();// didnt used this because mongoose.connect() didn't accepts the callback function (updated version)//
mongoose.connect( "mongodb+srv://Chandra:Chandra2020@cluster0.titzik6.mongodb.net/food_app?retryWrites=true&w=majority").then(async()=>{console.log("DB connection Established")
const FoodItem = mongoose.model('food_Items', new mongoose.Schema({
    name: String
  }));
  console.log(FoodItem)
  // const FoodCateg=[];
  const FoodCateg = mongoose.model('foodCategories', new mongoose.Schema({
    Categoryname: String
  }));
  console.log(FoodCateg)

  try {
    const fetchedData = await FoodItem.find({});
    const foodCategory=await FoodCateg.find({})
    //  console.log(foodCategory);
    // console.log(fetchedData);
    global.food_items=fetchedData;
     global.foodCategory=foodCategory;
    // fetchedData.toArray(function(err,data){
    //   if(err){
    //     console.log(err);
    //   }
    //   else{
    //     global.food_items=data;
    //   }
    // });
    // foodCategory.toArray(function(err,data){
    //   if(err){
    //     console.log(err);
    //   }
    //   else{
    //     global.foodCategory=data;
    //   }
    // });

  //   console.log(global.food_items);
  //  console.log(global.foodCategory);
  } catch (err) {
    console.error('Error fetching data:', err);
  }
// fetched_data.find({}).toArray(function(err,data){if(err) console.log(err)
// else console.log(data)})
// }).catch(err=>console.log(err))
})
// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//   req.header(
//     "Access-Control-Allow-Headers",
//     "Origin,X-Requested-Width,Content-Type,Accept"
//   );
//   next();
// })    // or u can use
 app.use(cors({origin:"*"}))//know more about it
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.use('/api',require("./Routes/CreateUser"))
app.use('/api',require("./Routes/DisplayData"))
app.use('/api',require("./Routes/OrderData"))

app.listen(port,()=>{
    console.log("running on port 5000")
})
