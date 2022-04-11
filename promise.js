const posts = [
    { title: 'post one',body:'This is post one '},
    {title: 'post two',body:'This is post two'}

];
function getPosts() {
    setTimeout(() => {
     let output = '';
     posts.forEach((post, index) => {
         output += '<li>${post.title}</li>';
     });
     document.body.innerHTML = output;
    },1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
         setTimeout(()=> {
              posts.push(post);

        const error = false;
        
        if(!error) {
            resolve();
        } else {
            reject('Error: Something went wrong ');
           }
        
       },2000);
    });
}

//createPost({title: 'post three',body:'This is post three'})
//.then(getposts);
//.catch(err => console.log(err));
//Async / await
//async function init(){
    // await createPost({title: 'post three',body:'This is post three'});
      //getPosts();
//}

//init();

//async/await/fetch
async function fetchposts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
}

fetchposts();
//promise.all
//const promise1 = promise.reslove('hello world');
//const promise2 = 10;
//const promise3 = new promise((reslove,reject) => setTimeout(reslove,2000, 'Goodbye));
//const promise4 = fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json());
//promise.all([promise1,promise2,promise3,promise4]).then(values=> console.log(values));