
const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));


const sortList = [{name:"bouble", value:"バブルソート"},
                  {name:"select", value:"選択法"},
                {name:"Insert", value:"挿入法"},
              {name:"merge", value:"マージソート"},
            {name:"quick", value:"クイックソート"}];

app.get('/', (req, res) => {
    var sortNumber =[];
    var randoms = [];
    for(let i=0; i<5; i++){
    var random = Math.floor(Math.random()*100);
    randoms.push(random);
    }
    console.log(randoms);
    module.exports = randoms;
    res.render('top.ejs', {rans:randoms,sortList:sortList,sortNumber:sortNumber});
});

app.get('/sort', (req, res)=>{
  var randoms = [];
  randoms = require('./app.js');
  var sortNumber = randoms;
  console.log(randoms);
//選択されたソートの種類によって場合分け
  switch (req.query.sort){
    case "bouble":
      for(let i=0; i<sortNumber.length; i++){
        for(let j=sortNumber.length; j>=0; j--){
          if(sortNumber[j] < sortNumber[j-1]){
            var temp = sortNumber[j];
            sortNumber[j] = sortNumber[j-1];
            sortNumber[j-1] = temp; 
          }
        }
      }

    break;

    case "select":
      for(let i=0; i<sortNumber.length; i++){
        for(let j=0; j<sortNumber.length; j++){
          if(sortNumber[i] > sortNumber[j]){
            const min = sortNumber[j];
            sortNumber[i] = min;
          }
        }
      }
    break;

    case "insert":
      for(let i=1; i<sortNumber.length; i++){
        const temp = sortNumbers[i];
        for(let j=i-1; j>=0; j--){
          if(sortNumber[j] > temp){
            sortNumber[j+1] = sortNumber[j];
            sortNumber[j] = temp;
          }
        }
      }
      break;
    }

  res.render('top.ejs', {rans:randoms,sortList:sortList,sortNumber:sortNumber});
});

app.listen(3000);