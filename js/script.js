try {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then((res) => res.json())
    .then(data => categoriesItem(data.data.news_category
        ))
} catch (error) {
    alert(error)
}
const categoryList = document.getElementById('category-list');

const categoriesItem =(categories) => {
 
for (const category of categories) {
    // console.log(category)
    const li = document.createElement('li');
    li.classList.add("nav-item");
    li.innerHTML=`
    <button type="button" onclick="newsItemId('${category.category_id}')" class="btn border border-0" > ${category.category_name}</button>
    `;

    categoryList.appendChild(li);

}

}

// news 
// const newsItemId = async (id) =>{
//   toggleLoader(true)
//     try {
    
//         const url = `https://openapi.programming-hero.com/api/news/category/${id}`
//        const res= await fetch(url)
//         const newsData = await res.json()
//         // console.log(newsData)
//         newsDisplay(newsData.data);
    
//     } catch (err) {
//         console.log(err)
//     }
    
// }
// const newsItem = document.getElementById('news-item');

// const newsDisplay= news =>{
//     newsItem.textContent='';
//        if (news.length !='0') {
      
//            news.forEach(value => {
//               //  console.log(value);
               
//                const div = document.createElement('div');
               
//                div.classList.add("row", "g-0", "border", "border-info", "rounded", "m-2");
//               div.innerHTML =`
//               <div class="col-md-4">
//               <img src="${value.thumbnail_url}" class="img-fluid rounded-start mx-auto" alt="...">
//             </div>
//             <div class="col-md-8">
//               <div class="card-body">
//                 <h5 class="card-title">${value.title ? value.title: "Title not found"}</h5>
//                 <p class="card-text" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${value.details.slice(0,200)}</p>
//                 <div class="d-flex float-start mt-2">
//                 <img src="${value.author.img ? value.author.img: "Image not found"}" class="img rounded-5 mx-2" alt="author" style="width:80px; height:80px">
//                 <div>
//                 <p class="card-text mb-0 mt-3"><small>${value.author.name? value.author.name : 'Name not found' }</small></p>
//                 <p class="card-text"><small class="text-muted">${value.author.published_date ? value.author.published_date : 'Date not found' }</small></p>
//                 </div>
//                 <div>
//                 <p class="card-text text-end mt-4 px-3"><img src="image/icons8-eye-30.png"><small class="text-muted">${value.total_view ? value.total_view : 'Total view not found'}</small></p>
//                 <!-- Button trigger modal -->
//                 <button onclick="newsDetailsId('${value._id}')"type="button" class="btn btn-primary mt-5 mx-5" data-bs-toggle="modal" data-bs-target="#exampleModal"> News Details
//                 </button>
                
               
//              </div>
//             </div>
//             </div>
//               `
//               newsItem.appendChild(div);

//           })
          
//        } else{
//         alert('Data not found')
//     }
//     toggleLoader(false)
// };

// const newsDetailsId = async id =>{
//     try {
//         const url = ` https://openapi.programming-hero.com/api/news/${id}`
//        const res= await fetch(url)
//         const newsData = await res.json()
//         // const newsData.data = data
//         newsData.data.forEach(data=>{
//           console.log(data)
//           newsDetails(data)
//         })

//     } catch (err) {
//         console.log(err)
//     }
    
// }
// // newsDetailsId(id);
// const newsModal = document.getElementById('exampleModal')

// const newsDetails = news=>{
//         console.log(news);
        
//         const titleDiv = document.getElementById('exampleModalLabel');
        
//     titleDiv.innerText= news.title;
//     const description=document.getElementById('description');
//     description.innerText= news.details;
//     const authorName = document.getElementById('author-name');
//     authorName.innerText= news.author.name;
//     const publish =document.getElementById('publish');
//     publish.innerText= news.author.published_date;
// }
    
// const toggleLoader= isLoading=>{
//   const loader = document.getElementById('loader');
//   if (isLoading) {
//     loader.classList.remove('d-none')
//   }else(
//     loader.classList.add('d-none')
//   )
// }
// newsItemId('08');
