const mongoose=require('mongoose');
 mongoose
   .connect(
     "mongodb+srv://ritika:soman@cluster0.huw5huh.mongodb.net/NirBlogApp?retryWrites=true&w=majority&appName=Cluster0"
   )
   .then(() => {
     console.log("db connected");
   })
   .catch((error) => {
     console.log(error);
   });