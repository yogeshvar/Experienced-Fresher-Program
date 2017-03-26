var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');


var products = [
  new Product({
    imagePath: 'https://hackingwidsri.files.wordpress.com/2015/08/127-0-0-1-local-host-photos1.jpg',
    title:'Not place like this',
    description:'This is the world exists for hackers',
    price:112
  }),
    new Product({
        imagePath:'https://hackingwidsri.files.wordpress.com/2015/08/127-0-0-1-local-host-photos1.jpg',
        title:'Not place like this',
        description:'This is the world exists for hackers',
        price:30
      }),

        new Product({
            imagePath:'https://hackingwidsri.files.wordpress.com/2015/08/127-0-0-1-local-host-photos1.jpg',
            title:'Not place like this',
            description:'This is the world exists for hackers',
            price:34
          }),
          new Product({
              imagePath:'https://hackingwidsri.files.wordpress.com/2015/08/127-0-0-1-local-host-photos1.jpg',
              title:'Not place like this',
              description:'This is the world exists for hackers',
              price:76
            }),
            new Product({
                imagePath:'https://hackingwidsri.files.wordpress.com/2015/08/127-0-0-1-local-host-photos1.jpg',
                title:'Not place like this',
                description:'This is the world exists for hackers',
                price:90
              })

];

var done=0;
for(var i=0;i<products.length;i++)
{
  products[i].save(function(err,result)
{
  done++;
  if(products.length == done)
  {
    exit();
  }

});
}

function exit()
{
  mongoose.disconnect();
}


mongoose.disconnect();
