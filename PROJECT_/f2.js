let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results"
let request1 = require("request");
let cheerio1 = require("cheerio");
const request = require("request");

function check(err, req, html) {

    if (err) {
        console.log("Someting went Wrong");
    } else {
        getdata(html)
            //console.log("" + html);
    }
}
//SIvCob
request1(url, check)

let arr=[1]
function getdata(html) {
    let sel = cheerio1.load(html);
    let ans = sel(".col-md-8.col-16");
   
    for(let i=0;i<ans.length;i++)
    {
           let link=sel(ans[i]).find(".btn.btn-sm.btn-outline-dark.match-cta");
           let ind_link=sel(link[2]).attr("href")
           let rr="https://www.espncricinfo.com"+ind_link
           gePlayeofMatch(rr)
       
    }
 

}
function gePlayeofMatch(link)
{
    request1(link,check1)
    
function check1(err, req, link) {

    if (err) {
        console.log("Someting went Wrong");
    } else {
        
        //console.log(" ---- " + html);
        getdata1(link)
    }
}

}
function getdata1(html)
{
   let load1=cheerio1.load(html);
   
  let ans1=load1(".best-player-content").text();
    console.log(ans1.length+" "+ans1);

   
}