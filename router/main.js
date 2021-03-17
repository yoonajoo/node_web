const bodyParser = require('body-parser');

module.exports = function(app) {
     app.use(bodyParser.json());       // to support JSON-encoded bodies
     app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
         extended: true
      }));
     
     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/about',function(req,res){
        res.render('about.html');
      });
      app.get('/blog-detail',function(req,res){
         res.render('blog-detail.html');
      });
      app.get('/blog',function(req,res){
         res.render('blog.html');
      });
      app.get('/contact',function(req,res){
            res.render('contact.html');
      });
      app.get('/project-detail',function(req,res){
         res.render('project-detail.html');
      });
     
      // 여기까지 views 에 있는것들 app.get 불러오기 만들기 




    app.get('/listall', function (req, res) {
      //res.render('about.html');
      console.log('listall...');
      const getNumber = req.body.getNumber;
      let response = {
            'result': 'true',
            'getLists': getNumber 
      }
      
      console.log('response : ' + response);
      res.status(200).json(response);
   });  // end of get
     
}
