//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hey!!! I am Soumen Swayanshu Parida, currently Pursuing my Btech in VIT-AP UNIVERSITY.I have opted for Computer Science with Business System. This Website is made by me as one of my Minor Project. I have taken reference from websites while making this website. Thanks for visiting my blog website."
const contactContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts=[];




app.get("/",function(req,res){
  // res.render("home");
  res.render("home",{
    homecontent:homeStartingContent,
    posts:posts
  });
  
});



app.get("/about",function(req,res){
  // res.render("about");
  res.render("about",{aboutcontent:aboutContent});
});

app.get("/contact",function(req,res){
  // res.render("contact");
  res.render("contact",{contactcontent:contactContent});
});

app.get("/compose",function(req,res){
  res.render("compose");
  
});



app.post("/compose",function(req,res){
  const post={
    pb:req.body.postbody,
    pt:req.body.posttitle
    
  };

  posts.push(post);
  res.redirect("/");
});

app.get("/posts/:postName",function(req,res){
  const x=_.lowerCase(req.params.postName);

  posts.forEach(function(post){
    const s= _.lowerCase(post.pt);

    if(s===x)
    {
      res.render("post",{
        title:post.pt,
        content: post.pb
      })
    }
  })

  
});


app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
